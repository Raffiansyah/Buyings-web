import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

type props = {
  initialUsername: string;
  avatarPath: string;
};

export default function Avatars({ initialUsername, avatarPath }: props) {
  const imgUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  return avatarPath ? (
    <Avatar>
      <AvatarImage src={`${imgUrl}/Avatars/${avatarPath}`} />
      <AvatarFallback>{initialUsername}</AvatarFallback>
    </Avatar>
  ) : (
    <div className="w-10 h-10 flex rounded-full bg-zinc-900 text-white text-center p-2 items-center justify-center">
      {initialUsername}
    </div>
  );
}
