'use client';

import { useSelector } from 'react-redux';
import CardProfile from '~/components/profile/cardProfile';
import CardInfo from '~/components/profile/cardInfo';
import InfoSetting from '~/components/profile/infoSetting';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { useGetAddress } from '~/service/query';
import { RootState } from '~/store/store';
import CardAddress from '~/components/profile/cardAddress';
import AddressSetting from '~/components/profile/addressSetting';

export default function Profile() {
  const userData = useSelector((state: RootState) => state?.user?.data);
  const { data: addressData, isLoading } = useGetAddress();
  return (
    <div className="p-4 max-w-4xl">
      <CardProfile data={userData} />
      <Tabs defaultValue="info" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="info">Information</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <CardInfo userData={userData} />
          <CardAddress addressData={addressData?.data.data[0]} isLoading={isLoading} />
        </TabsContent>
        <TabsContent value="settings">
          <InfoSetting data={userData} />
          <AddressSetting Address={addressData?.data.data[0]} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
