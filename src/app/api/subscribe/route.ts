import { NextRequest, NextResponse } from 'next/server';
import { subscribe } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
    }

    const result = await subscribe(email.trim().toLowerCase());

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Subscribed successfully!' });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
