'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { signInSchema } from '~/lib/validator/SignIn-Form';
import { userSignin } from '~/hooks/useUsers';
import { registerUser } from '~/store/(slice)/userSlice';

export default function Signin() {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  async function onSubmit(values: z.infer<typeof signInSchema>) {
    try {
      const user: any = await userSignin(values.email, values.password);
      dispatch(registerUser(user.data.data));
      push('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="py-10 px-5 space-y-3 mt-12">
      <div>
        <h1 className="text-xl font-medium">Sign-In</h1>
        <p className="text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="text-black">
            Sign-Up Here
          </Link>
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email Address" {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

