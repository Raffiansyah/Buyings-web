'use client';

import { ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import MaxWitdthWrapper from '~/components/MaxWidthWrapper';
import { cn } from '~/lib/utils';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();

  return (
    <MaxWitdthWrapper className="flex">
      <nav className="h-screen w-1/5 border-r py-10 pr-5">
        <div>
          <Link href={'/user/profile'}>
            <span
              className={cn(
                'flex w-full items-center px-2 py-2 border border-transparent rounded-md',
                segment === 'profile'
                  ? 'bg-green-800 font-medium text-white'
                  : ''
              )}
            >
              <User className="mr-2 h-5 w-5" />
              Profile
            </span>
          </Link>
          <Link href={'/user/orders'} className="flex">
            <span
              className={cn(
                'flex w-full items-center px-2 py-2 border border-transparent rounded-md',
                segment === 'orders'
                  ? 'bg-green-800 font-medium text-white'
                  : ''
              )}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Order
            </span>
          </Link>
        </div>
      </nav>
      <div className="h-screen w-full py-10 px-10">{children}</div>
    </MaxWitdthWrapper>
  );
}
