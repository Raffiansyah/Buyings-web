import { useMutation } from '@tanstack/react-query';
import {
  SignInData,
  SignupData,
  UpdateAddressData,
  UpdateUserData,
} from '../utils/type';
import {
  SignIn,
  SignOut,
  SignUp,
  UpdateAddress,
  UpdateUser,
  verifyOTP,
} from '~/utils/api';
import { useDispatch } from 'react-redux';
import {
  registerUser,
  signoutUser,
  updateUser,
} from '~/store/(slice)/userSlice';
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
      const userData = user.data;
      setCookie('accessToken', userData?.accessToken);
      dispatch(registerUser(userData?.data));
      toast({
        title: 'SignIn Success',
        description: `Welcome ${userData?.data.user_metadata.username}`,
      });
      push('/');
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast({
          variant: 'destructive',
          title: `Sign in Failed`,
          description: `${error.response?.data.error}`,
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
      toast({
        title: 'SignUp Success',
        description: 'please check your email for verification',
      });
      push('/auth/sign-in');
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast({
          variant: 'destructive',
          title: `SignUp Failed`,
          description: `${error.response?.data.error}`,
        });
      }
    },
  });
}

export function useUpdateUser() {
  const dispatch = useDispatch();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: UpdateUserData) => {
      return UpdateUser(data);
    },
    onSuccess: (user) => {
      const userData = user.data.data;
      dispatch(updateUser(userData?.user));
      toast({
        title: 'Success to updating',
      });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast({
          variant: 'destructive',
          title: `Update User Failed`,
          description: `${error.response?.data.error}`,
        });
      }
    },
  });
}

export function useSignOut() {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { push } = useRouter();

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
      push('/auth/sign-in');
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast({
          variant: 'destructive',
          title: `SignOut Failed`,
          description: `${error.response?.data.error}`,
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
      toast({
        title: 'Verify Success',
        description: 'Account successfully confirmed! You can log in now',
      });
      push('/auth/sign-in');
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast({
          variant: 'destructive',
          title: `Verify Failed`,
          description: `${error.response?.data.error}`,
        });
        push('/auth/sign-in');
      }
    },
  });
}

export function useUpdateAddress() {
  const { toast } = useToast();
  const { push } = useRouter();

  return useMutation({
    mutationFn: ({ data, id }: { data: UpdateAddressData; id: string }) => {
      console.log(`log from mutation: ${id}`)
      return UpdateAddress(data, id);
    },
    onSuccess: () => {
      toast({
        title: 'Success to updating',
      });
      push('/user/profile');
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast({
          variant: 'destructive',
          title: `Update Failed`,
          description: `${error.response?.data.error}`,
        });
      }
    },
  });
}
