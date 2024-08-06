import { useMutation } from '@tanstack/react-query';
import { SignInData, SignupData } from '../utils/type';
import { SignIn, SignOut, SignUp, verifyOTP } from '~/lib/api';
import { useDispatch } from 'react-redux';
import { registerUser, signoutUser } from '~/store/(slice)/userSlice';
import { useToast } from '~/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { setCookie, deleteCookie } from 'cookies-next';
import axios from 'axios';

export function useSignIn() {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { push } = useRouter();

  return useMutation({
    mutationFn: (data: SignInData) => {
      return SignIn(data);
    },
    onSuccess: (user) => {
      const { data } = user;
      setCookie('accessToken', data.accessToken);
      dispatch(registerUser(data.data));
      push('/');
      toast({
        title: 'SignIn Success',
        description: `Welcome ${data.data.user_metadata.username}`,
      });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast({
          variant: 'destructive',
          title: `Sign in Failed`,
          description: `${error.response?.data.message}`,
        });
      }
    },
  });
}

export function useSignUp() {
  const { toast } = useToast();
  const { push } = useRouter();

  return useMutation({
    mutationFn: (data: SignupData) => {
      return SignUp(data);
    },
    onSuccess: () => {
      push('/auth/sign-in');
      toast({
        title: 'SignUp Success',
        description: 'please check your email for verification',
      });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast({
          variant: 'destructive',
          title: `SignUp Failed`,
          description: `${error.response?.data.message}`,
        });
      }
    },
  });
}

export function useSignOut() {
  const dispatch = useDispatch();
  const { toast } = useToast();

  return useMutation({
    mutationFn: () => {
      return SignOut();
    },
    onSuccess: () => {
      dispatch(signoutUser());
      deleteCookie('accessToken');
      toast({
        title: 'Goodbye!!',
      });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast({
          variant: 'destructive',
          title: `SignOut Failed`,
          description: `${error.response?.data.message}`,
        });
      }
    },
  });
}

export function useVerify() {
  const { toast } = useToast();
  const { push } = useRouter();

  return useMutation({
    mutationFn: (hashToken: string) => {
      return verifyOTP(hashToken);
    },
    onSuccess: () => {
      push('/auth/sign-in');
      toast({
        title: 'Verify Success',
        description: 'Account successfully confirmed! You can log in now',
      });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast({
          variant: 'destructive',
          title: `Verify Failed`,
          description: `${error.response?.data.message}`,
        });
      }
    },
  })
}