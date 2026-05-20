import { NextResponse } from 'next/server';
import { generateAdminSessionToken, ADMIN_COOKIE_NAME } from '@/lib/adminAuth';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export async function POST(request: Request) {
  const body = await request.json();
  const password = body?.password;

  if (!ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: 'Admin authentication is not configured on the server.' },
      { status: 500 }
    );
  }

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
  }

  const token = generateAdminSessionToken();
  if (!token) {
    return NextResponse.json(
      { error: 'Failed to create admin session token.' },
      { status: 500 }
    );
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24,
  });

  return response;
}
