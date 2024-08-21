import { NextResponse, NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function authMiddleware(req: NextRequest) {
  const token = req.cookies.get('accessToken')?.value || '';
  const secretKey = process.env.SUPABASE_SECRET || '';

  try {
    if (token) {
      await jwtVerify(token, new TextEncoder().encode(secretKey));
      return NextResponse.next();
    } else {
      console.log('No Token, Access Denied');
      return NextResponse.redirect(new URL('/auth/sign-in', req.url));
    }
  } catch (error) {
    console.log('Invalid Token, Access Denied');
    return NextResponse.redirect(new URL('/auth/sign-in', req.url));
  }
}

export const config = {
  matcher: ['/user'],
};
