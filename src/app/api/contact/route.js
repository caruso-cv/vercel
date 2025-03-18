import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Log request headers to check the Content-Type
    const contentType = request.headers.get('content-type');
    console.log('Content-Type:', contentType);

    // Parse the JSON request body and log it for debugging
    const body = await request.json();
    console.log('Received payload:', body);

    // Extract captcha token and log it
    const captchaToken = body.captchaToken;
    console.log('Captcha token received:', captchaToken);
    if (!captchaToken) {
      console.error('Captcha token missing');
      return NextResponse.json({ error: 'Captcha token missing' }, { status: 400 });
    }

    // Verify reCAPTCHA v3 token with Google
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || '6LckOa0UAAAAAOMMuPXGDlrRg1GgXVgBAZ1Q27Fy';
    const captchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(captchaToken)}`
    });

    const captchaResult = await captchaRes.json();
    console.log('Captcha verification result:', captchaResult);
    // Check if verification passed and the score is acceptable (for v3)
    if (!captchaResult.success || (typeof captchaResult.score === 'number' && captchaResult.score < 0.5)) {
      console.error('Captcha verification failed', captchaResult);
      return NextResponse.json({ error: 'Captcha verification failed' }, { status: 400 });
    }

    // Destructure expected values from the payload
    const { 'first-name': firstName, 'last-name': lastName, email, 'phone-number': phoneNumber, message } = body;

    // Create a Nodemailer transporter using your SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.sendlayer.net',
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: false, // false for port 587
      auth: {
        user: process.env.SMTP_USER || 'B24BF96D8CC04566E1B7199C1277C733',
        pass: process.env.SMTP_PASS || '3397FED8ABF34A629EE77A7F64F072B4'
      }
    });

    // Send the email with the form details
    await transporter.sendMail({
      from: `${process.env.FROM_NAME || 'Contact Form'} <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL || 'testform@neutroncontrols.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        You have a new message from your website contact form:

        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phoneNumber}

        Message:
        ${message}
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}