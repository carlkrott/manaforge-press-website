import { NextRequest, NextResponse } from 'next/server';
import { sendContactFormEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
    }

    if (message.trim().length < 10) {
      return NextResponse.json({ error: 'Message must be at least 10 characters' }, { status: 400 });
    }

    if (message.length > 5000) {
      return NextResponse.json({ error: 'Message must be less than 5000 characters' }, { status: 400 });
    }

    const sanitize = (str: string) => str.replace(/<[^>]*>/g, '').trim();

    const emailSent = await sendContactFormEmail({
      name: sanitize(name || 'Anonymous'),
      email: sanitize(email),
      subject: sanitize(subject || 'General Inquiry'),
      message: sanitize(message),
    });

    if (!emailSent) {
      return NextResponse.json(
        { error: 'Failed to send message. Please try emailing us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'An error occurred. Please try again.' }, { status: 500 });
  }
}
