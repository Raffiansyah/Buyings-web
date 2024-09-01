import { NextRequest, NextResponse } from 'next/server';
import { authMiddleware } from './middleware/authMiddleware';
import { roleMiddleware } from './middleware/roleMiddleware';

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  if (url.startsWith('/user')) {
    return await authMiddleware(req);
  }
  if (url.startsWith('/admin')) {
    return await roleMiddleware(req);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/user/:path*', '/admin/:path*'],
};
