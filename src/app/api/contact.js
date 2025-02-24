import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const { "first-name": firstName, "last-name": lastName, email, "phone-number": phone, message, recaptchaToken } = req.body

  // Verify reCAPTCHA token
  if (!recaptchaToken) {
    return res.status(400).json({ message: 'Missing reCAPTCHA token' })
  }

  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
  const verificationResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${recaptchaSecret}&response=${recaptchaToken}`
  })
  const verificationResult = await verificationResponse.json()
  if (!verificationResult.success) {
    return res.status(400).json({ message: 'Failed reCAPTCHA verification' })
  }

  // Create a transporter using environment variables
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'New Contact Form Submission',
    text: `
      You have a new contact form submission:

      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
    html: `
      <p>You have a new contact form submission:</p>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br />${message}</p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: 'Message sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ message: 'Error sending email' })
  }
}