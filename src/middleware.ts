import { NextRequest, NextResponse } from 'next/server';
import { authMiddleware } from './middleware/authMiddleware';
import { roleMiddleware } from './middleware/roleMiddleware';

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  if (url.startsWith('/user')) {
    return authMiddleware(req);
  }
  if (url.startsWith('/admin')) {
    return roleMiddleware(req);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/user', '/admin/:path*'],
};
