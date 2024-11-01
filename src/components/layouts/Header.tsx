'use client';

import Image from 'next/image';
import MaxWitdthWrapper from '../MaxWidthWrapper';
import Link from 'next/link';
import { Button } from '../ui/button';
import { LogOut, Search, ShoppingBag, ShoppingCart, User } from 'lucide-react';
import Avatars from './Avatars';
import { useSelector } from 'react-redux';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useSignOut } from '~/service/mutation';
import { RootState } from '~/store/store';

export default function Header() {
  const signOutMutation = useSignOut();
  const data = useSelector((state: RootState) => state.user.data);
  const initialUsername = data?.user_metadata?.username.charAt(0) || "";
  const avatarPath = data?.user_metadata?.avatar_url || "";

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
                <Avatars
                  initialUsername={initialUsername}
                  avatarPath={avatarPath}
                  size=''
                  textSize=''
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="text-sm font-medium">{data?.email}</p>
                      <p className="w-[200px] truncate text-xs text-muted-foreground">
                        {data?.user_metadata?.username}
                      </p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link href={'/user/profile'} className='flex'>
                      <User className="mr-2 h-4 w-4" aria-hidden="true" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={'/user/orders'} className='flex'>
                      <ShoppingBag
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                      Orders
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignout}>
                  <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
                  Sign-Out
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
