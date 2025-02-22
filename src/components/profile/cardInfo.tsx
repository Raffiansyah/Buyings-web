import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Calendar, Clock, Mail, MapPin } from 'lucide-react';
import { formatDate } from '~/utils';
import { userData } from '~/utils/type';

type propTypes = {
  userData: userData | null;
};

export default function CardInfo(props: propTypes) {
  const { userData } = props;
  return (
    <Card>
      <CardContent className="pt-6">
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <Mail className="text-primary" />
            <span>{userData?.email}</span>
          </li>
          <li className="flex items-center space-x-2">
            <Calendar className="text-primary" />
            <span>Join At: {formatDate(userData?.confirmed_at || '')}</span>
          </li>
          <li className="flex items-center space-x-2">
            <Clock className="text-primary" />
            <span>
              Last SignIn: {formatDate(userData?.last_sign_in_at || '')}
            </span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
