// app/api/careers/route.js
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    // Parse incoming FormData
    const formData = await request.formData()

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

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Send the email
    await transporter.sendMail({
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: `New Job Application (${position}) from ${name}`,
      text: `
You have received a new job application.

Name: ${name}
Email: ${email}
Phone: ${phone}
Position: ${position}

Attached File(s): ${
        attachments.length
          ? attachments.map((att) => att.filename).join(', ')
          : 'None'
      }
      `,
      attachments,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending careers email:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}