import { NextResponse, NextRequest } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';

export function roleMiddleware(req: NextRequest) {
  const token = req.cookies.get('accessToken')?.value || '';
  const secretKey = process.env.SUPABASE_SECRET || '';

  try {
    if (token) {
      const decoded = jwt.verify(token, secretKey) as JwtPayload;
      if (decoded.role !== 'admin') {
        console.log('No Access');
        return NextResponse.redirect(new URL('/unauthorized', req.url));
      }
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
  matcher: ['/admin/:path*'],
};
