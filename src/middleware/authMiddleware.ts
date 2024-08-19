import { NextResponse, NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function authMiddleware(req: NextRequest) {
  const token = req.cookies.get('accessToken')?.value || '';
  const secretKey = process.env.SUPABASE_SECRET || '';

  try {
    if(token) {
      jwt.verify(token, secretKey);
      return NextResponse.next()
    } else {
      console.log('No Token, Access Denied')
      return NextResponse.redirect(new URL('/auth/sign-in', req.url));
    }
  } catch (error) {
    console.log('Invalid Token, Access Denied')
    return NextResponse.redirect(new URL('/auth/sign-in', req.url));
  }
}

export const config = {
  matcher: ['/user'],
};
