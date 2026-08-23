import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const website = typeof body?.website === 'string' ? body.website.trim() : '';

    if (website) {
      return NextResponse.json(
        { success: false, error: 'Invalid submission.' },
        { status: 400 }
      );
    }

    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please complete all fields.' },
        { status: 400 }
      );
    }

    if (name.length > MAX_NAME_LENGTH || email.length > MAX_EMAIL_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { success: false, error: 'Your message is too long.' },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey || !contactEmail) {
      console.error('Missing RESEND_API_KEY or CONTACT_EMAIL environment variables.');
      return NextResponse.json(
        { success: false, error: 'Unable to send message.' },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

    const emailResponse = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [contactEmail],
      replyTo: email,
      subject: `New Portfolio Message — ${name}`,
      text: `New message from your portfolio\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1c2020; line-height: 1.6;">
          <h2 style="margin: 0 0 12px;">New message from your portfolio</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin: 16px 0 8px;"><strong>Message:</strong></p>
          <div style="white-space: pre-wrap; background: #f2f1eb; padding: 12px; border-radius: 6px;">${safeMessage}</div>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error('Resend email error:', emailResponse.error);
      return NextResponse.json(
        { success: false, error: 'Unable to send message.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    return NextResponse.json(
      { success: false, error: 'Unable to send message.' },
      { status: 500 }
    );
  }
}
