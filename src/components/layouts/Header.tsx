'use client'

import Image from 'next/image';
import MaxWitdthWrapper from '../MaxWidthWrapper';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Search, ShoppingCart } from 'lucide-react';
import DefaultAvatars from './DefaultAvatars';
import { useSelector } from 'react-redux';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useSignOut } from '~/service/mutation';

export default function Header() {
  const signOutMutation = useSignOut();
  const { data } = useSelector((state: any) => state.user);
  const initialUsername = data?.user_metadata?.username?.charAt(0);

  function handleSignout() {
    signOutMutation.mutate();
  }

  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <MaxWitdthWrapper className="py-1.5 flex justify-between text-center items-center">
        <div>
          <Link href={'/'} className="flex gap-x-1">
            <Image
              src={'/logo.svg'}
              alt="Buyings Logo"
              width={30}
              height={20}
            />
            <h1 className="text-3xl font-semibold">Buyings.</h1>
          </Link>
        </div>
        <div className="flex gap-x-5 justify-center text-lg">
          <Link href={'/sneakers'}>Sneakers</Link>
          <Link href={'/apparel'}>Apparel</Link>
          <Link href={'/accessories'}>Accessories</Link>
        </div>
        <div className="flex justify-between gap-x-4  items-center text-lg">
          <Button variant={'ghost'}>
            <Search className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Type Any Products Here</span>
          </Button>
          <Button variant={'ghost'} size={'sm'} className="gap-x-1">
            <ShoppingCart className="w-4 h-4" aria-hidden="true" />0
          </Button>
          {data ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <DefaultAvatars initialUsername={initialUsername} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={'/user'}>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button
                    type="button"
                    variant={'destructive'}
                    onClick={handleSignout}
                  >
                    Sign Out
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/auth/sign-in">Sign-In</Link>
          )}
        </div>
      </MaxWitdthWrapper>
    </nav>
  );
}
