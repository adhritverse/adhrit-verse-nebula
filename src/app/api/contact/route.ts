import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS?.replace(/\s/g, ''), // Removed spaces just in case
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to self so you can receive the contact form details
      replyTo: email, // Set the replyTo to the submitter's email
      subject: `New Contact Request: ${subject}`,
      text: `
        You have a new contact form submission.
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #f4f7f6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
            .header { background: linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%); padding: 30px; text-align: center; color: white; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px; }
            .header p { margin: 10px 0 0 0; color: #778da9; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; }
            .content { padding: 40px; }
            .field { margin-bottom: 25px; }
            .label { font-size: 12px; text-transform: uppercase; color: #778da9; font-weight: 700; letter-spacing: 1px; margin-bottom: 5px; }
            .value { font-size: 16px; color: #1b263b; font-weight: 500; background: #f8f9fa; padding: 12px 15px; border-radius: 8px; border-left: 4px solid #415a77; }
            .message-box { background: #f8f9fa; padding: 20px; border-radius: 8px; border-top: 4px solid #415a77; font-size: 15px; line-height: 1.6; color: #415a77; white-space: pre-wrap; }
            .footer { background: #e0e1dd; padding: 20px; text-align: center; font-size: 12px; color: #778da9; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Request</h1>
              <p>AV Technologies Platform</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Full Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #1b263b; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value">${phone || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              This email was automatically generated from your website's contact form.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email. Please check server logs.' }, { status: 500 });
  }
}
