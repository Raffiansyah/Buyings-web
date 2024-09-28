import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

type props = {
  initialUsername: string;
  avatarPath: string;
  size: string;
  textSize: string;
};

export default function Avatars({
  initialUsername,
  avatarPath,
  size,
  textSize
}: props) {
  const imgUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  return (
    <Avatar className={size}>
      <AvatarImage
        src={`${imgUrl}/Avatars/${avatarPath}`}
        className='object-cover'
      />
      <AvatarFallback className={textSize}>{initialUsername}</AvatarFallback>
    </Avatar>
  );
}
