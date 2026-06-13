import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import { connectDB } from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    let dbSaved = false;

    // ── 1. Save to MongoDB (AV database, contacts collection) ──────────
    try {
      await connectDB();

      // Anonymize IP: keep only first 3 octets (e.g. 192.168.1.xxx)
      const rawIP =
        req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
        req.headers.get('x-real-ip') ||
        'unknown';
      const anonIP = rawIP.split('.').slice(0, 3).join('.') + '.xxx';

      await Contact.create({
        name: String(name || '').trim().slice(0, 100),
        email: String(email || '').trim().toLowerCase().slice(0, 200),
        phone: phone ? String(phone).trim().slice(0, 20) : undefined,
        subject: String(subject || '').trim().slice(0, 200),
        message: String(message || '').trim().slice(0, 5000),
        ipAddress: anonIP,
        read: false,
      });
      dbSaved = true;
    } catch (dbError) {
      // DB failure should NOT block email sending
      console.error('[Contact API] MongoDB save error:', dbError);
    }

    // ── 2. Send email notification ─────────────────────────────────────
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('[Contact API] Email credentials missing (EMAIL_USER / EMAIL_PASS). Skipping email notification.');
      if (dbSaved) {
        return NextResponse.json({ success: true, message: 'Contact request saved successfully (email notification skipped).' }, { status: 200 });
      } else {
        return NextResponse.json({ success: false, message: 'Failed to save contact request to database.' }, { status: 500 });
      }
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS.replace(/\s/g, ''),
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
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

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
    } catch (emailError) {
      console.error('[Contact API] Email notification error:', emailError);
      if (dbSaved) {
        return NextResponse.json({ 
          success: true, 
          message: 'Contact request saved successfully (email notification skipped/failed).' 
        }, { status: 200 });
      } else {
        return NextResponse.json({ 
          success: false, 
          message: 'Failed to send email notification or save to database.' 
        }, { status: 500 });
      }
    }
  } catch (error) {
    console.error('Error in contact form submission route:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
