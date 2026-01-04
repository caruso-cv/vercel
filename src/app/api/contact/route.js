import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
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

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.TO_EMAIL || 'testform@neutroncontrols.com',
      reply_to: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        You have a new message from your website contact form:

        Name: ${firstName} ${lastName}
        Email: ${email}

        Message:
        ${message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }
}