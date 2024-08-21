import { NextResponse, NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function roleMiddleware(req: NextRequest) {
  const token = req.cookies.get('accessToken')?.value || '';
  const secretKey = process.env.SUPABASE_SECRET || '';

  try {
    if (token) {
      const { payload } = await jwtVerify(token, new TextEncoder().encode(secretKey));
      if (payload.role !== 'admin') {
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
