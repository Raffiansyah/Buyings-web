import React from 'react';
import { Card, CardContent } from '../ui/card';
import Avatars from '../layouts/Avatars';
import { Button } from '../ui/button';
import { Camera } from 'lucide-react';
import { userData } from '~/utils/type';

type propTypes = {
  data: userData | null;
};

export default function CardProfile(props: propTypes) {
  const { data } = props;
  const initialUsername = data?.user_metadata?.username.charAt(0) || '';
  const avatarPath = data?.user_metadata?.avatar_url || '';
  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-col items-center space-y-4">
          <div className="relative">
            <Avatars
              avatarPath={avatarPath}
              initialUsername={initialUsername}
              size="h-32 w-32"
              textSize="text-8xl"
            />
            <Button
              size={'icon'}
              className="absolute bottom-0 right-0 rounded-full bg-green-800 text-white"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold">{`${data?.user_metadata?.first_name} ${data?.user_metadata?.last_name}`}</h1>
            <p className="text-muted-foreground">
              {data?.user_metadata?.username}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Role: {data?.role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
