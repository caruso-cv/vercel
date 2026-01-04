// app/api/careers/route.js
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    // Parse incoming FormData
    const formData = await request.formData()

    // Debug: log all incoming form fields
    for (const [key, value] of formData.entries()) {
      console.log('📥 server got:', key, value);
    }

    // Extract and verify the captcha token
    const captchaToken = formData.get('captchaToken')
    console.log('Captcha token received:', captchaToken)
    if (!captchaToken) {
      console.error('Captcha token missing')
      return NextResponse.json({ error: 'Captcha token missing' }, { status: 400 })
    }

    // Verify reCAPTCHA v3 token with Google
    const secretKey = process.env.RECAPTCHA_SECRET_KEY
    const captchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(captchaToken)}`
    })
    const captchaResult = await captchaRes.json()

    // Debug: log captcha verification result
    console.log('🛡️ captchaResult:', captchaResult)

    if (
      !captchaResult.success ||
      (typeof captchaResult.score === 'number' && captchaResult.score < 0.5)
    ) {
      console.error('Captcha verification failed', captchaResult)
      return NextResponse.json({ error: 'Captcha verification failed' }, { status: 400 })
    }

    // Gather text fields
    const name = formData.get('name') || 'Unknown'
    const email = formData.get('email') || 'No email'
    const phone = formData.get('phone') || 'No phone'
    const position = formData.get('position') || 'Unspecified'

    // Collect attachments (coverLetter, resume)
    const attachments = []

    const coverLetterFile = formData.get('coverLetter')
    if (coverLetterFile && coverLetterFile.size > 0) {
      const coverBuffer = Buffer.from(await coverLetterFile.arrayBuffer())
      attachments.push({
        filename: coverLetterFile.name,
        content: coverBuffer,
      })
    }

    const resumeFile = formData.get('resume')
    if (resumeFile && resumeFile.size > 0) {
      const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer())
      attachments.push({
        filename: resumeFile.name,
        content: resumeBuffer,
      })
    }

    // Send the email using Resend
    try {
      const { data, error } = await resend.emails.send({
        from: `Neutron Controls <${process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'}>`,
        to: process.env.TO_EMAIL,
        subject: `New Job Application (${position}) from ${name}`,
        reply_to: email, // Set reply-to so they can reply directly to the applicant
        text: `
          You have received a new job application.

          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Position: ${position}

          Attached File(s): ${
            attachments.length ? attachments.map((att) => att.filename).join(', ') : 'None'
          }
        `,
        attachments,
      })
      
      if (error) {
        console.error('❌ Resend API error:', error)
        throw new Error(error.message)
      }

      console.log('✅ Mail sent:', data)
    } catch (err) {
      console.error('❌ Email sending error:', err)
      throw err
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending careers email:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}