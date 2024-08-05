import { useMutation } from '@tanstack/react-query';
import { SignInData, SignupData } from '../utils/type';
import { SignIn, SignOut, SignUp } from '~/lib/api';
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
          title: `Something went wrong`,
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
      push('/sign-in');
      toast({
        title: 'SignUp Success',
        description: 'try to signin',
      });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast({
          variant: 'destructive',
          title: `Something went wrong`,
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
          title: `Something went wrong`,
          description: `${error.response?.data.message}`,
        });
      }
    },
  });
}
