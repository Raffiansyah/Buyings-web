import React from 'react';
import { Card, CardContent } from '../ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { userData } from '~/utils/type';
import { useUpdateUser } from '~/service/mutation';
import { UpdateUserSchema } from '~/service/validator/updateUser-From';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

type propTypes = {
  data: userData | null;
};

export default function InfoSetting(props: propTypes) {
  const { data } = props;
  const { mutateAsync: UpdateUserMutation, isPending } = useUpdateUser();

  const form = useForm<z.infer<typeof UpdateUserSchema>>({
    resolver: zodResolver(UpdateUserSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
    },
  });

  async function handleUpdatemeta(values: z.infer<typeof UpdateUserSchema>) {
    UpdateUserMutation({
      firstname: values.firstName,
      lastname: values.lastName,
      username: values.username,
    });
  }

  return (
    <Card>
      <CardContent className="pt-4">
        <h1 className="text-lg text-green-800 mb-3">Profile Setting</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleUpdatemeta)}
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
            </div>
            <Button
              type="submit"
              disabled={isPending}
              className="bg-green-800 text-primary-foreground"
            >
              {isPending ? 'Loading' : 'Save'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
