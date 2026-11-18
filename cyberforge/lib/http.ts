import { NextRequest, NextResponse } from 'next/server';
export function sameOrigin(req: NextRequest) {
  const origin = req.headers.get('origin');
  if (!origin) return false;
  try { return new URL(origin).host === req.nextUrl.host && new URL(origin).protocol === req.nextUrl.protocol; } catch { return false; }
}
export const unauthorized = () => NextResponse.json({ error: 'Sign in required.' }, { status: 401 });
export const invalid = (message = 'Invalid request.') => NextResponse.json({ error: message }, { status: 400 });
