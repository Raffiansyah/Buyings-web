import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MapPin } from 'lucide-react';
import { addressData } from '~/utils/type';

type propTypes = {
  addressData: addressData | null;
  isLoading: boolean;
};

export default function CardAddress(props: propTypes) {
  const { addressData, isLoading } = props;
  if (isLoading) {
    return (
      <Card className="w-full bg-gradient-to-br from-gray-50 to-white mt-2">
        <CardContent className="p-8">
          <div className="flex items-center justify-center h-32 animate-pulse">
            <div className="text-green-800">Loading address details...</div>
          </div>
        </CardContent>
      </Card>
    );
  }
  if (!addressData) {
    return (
      <Card className="w-full bg-gradient-to-br from-gray-50 to-white mt-2">
        <CardContent className="p-8">
          <div className="flex flex-col items-center justify-center h-32 text-center">
            <MapPin className="w-8 h-8 text-gray-400 mb-2" />
            <div className="text-green-800">
              No address information available
            </div>
            <div className='text-green-800 text-sm'>
              Go to Setting to Add your Shipping Address
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className="w-full mt-2">
      <CardHeader className="flex flex-row items-center space-x-4">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <MapPin className="w-4 h-4 text-primary" />
        </div>
        <CardTitle className="text-lg text-green-800">
          Shipping Address
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <div className="space-y-0.5">
            <p className="text-base font-medium">{addressData?.street}</p>
            <div className="flex flex-wrap gap-x-1 text-sm">
              <span>{addressData?.city},</span>
              <span>{addressData?.province}</span>
              <span>{addressData?.postalCode}</span>
            </div>
            <p className="text-sm font-medium">{addressData?.country}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
