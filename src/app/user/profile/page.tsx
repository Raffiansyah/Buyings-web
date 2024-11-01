'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar, Camera, Clock, Mail, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { z } from 'zod';
import Avatars from '~/components/layouts/Avatars';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { useUpdateUser } from '~/service/mutation';
import { UpdateUserSchema } from '~/service/validator/updateUser-From';
import { RootState } from '~/store/store';
import { formatDate } from '~/utils';

export default function Profile() {
  const data = useSelector((state: RootState) => state.user.data);
  const { mutateAsync: UpdateUserMutation, isPending } = useUpdateUser();
  const initialUsername = data?.user_metadata?.username.charAt(0) || "";
  const avatarPath = data?.user_metadata?.avatar_url || "";

  const form = useForm<z.infer<typeof UpdateUserSchema>>({
    resolver: zodResolver(UpdateUserSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phone: '',
    },
  });

  async function onSubmit(values: z.infer<typeof UpdateUserSchema>) {
    UpdateUserMutation({
      firstname: values.firstName || '',
      lastname: values.lastName || '',
      username: values.username || '',
      email: values.email || '',
      phone: values.phone || '',
    });
  }

  return (
    <div className="p-4 max-w-4xl">
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

      <Tabs defaultValue="info" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="info">Information</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <Mail className="text-primary" />
                  <span>{data?.email}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="text-primary" />
                  <span>{data?.phone || 'Belum diatur'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Calendar className="text-primary" />
                  <span>Bergabung sejak: {formatDate(data?.confirmed_at || '')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="text-primary" />
                  <span>
                    Login terakhir: {formatDate(data?.last_sign_in_at || '')}
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardContent className="pt-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>FirstName</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder={data?.user_metadata?.first_name}
                              type="text"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>LastName</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder={data?.user_metadata?.last_name}
                              type="text"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder={data?.email}
                              type="email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder={data?.user_metadata?.username}
                              type="text"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder={data?.phone || '+62...'}
                              type="text"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="bg-primary text-primary-foreground"
                  >
                    {isPending ? 'Loading' : 'Save'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
