import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse the JSON request body
    const body = await request.json();
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
      // Use environment variables for a display name + email address
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