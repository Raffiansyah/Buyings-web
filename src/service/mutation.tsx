import { useMutation } from '@tanstack/react-query';
import { SignInData, SignupData } from '../utils/type';
import { SignIn, SignOut, SignUp } from '~/lib/api';
import { useDispatch } from 'react-redux';
import { registerUser, signoutUser } from '~/store/(slice)/userSlice';
import { useToast } from '~/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export function useSignIn() {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { push } = useRouter();

  return useMutation({
    mutationFn: (data: SignInData) => {
      return SignIn(data);
    },
    onSuccess: (user) => {
      const userData = JSON.parse(JSON.stringify(user.data.data)); // Ensure plain object

      if (userData && typeof userData === 'object') {
        dispatch(registerUser(userData));
        push('/');
        toast({
          title: 'SignIn Success',
          description: `Welcome ${userData.user_metadata.username}`,
        });
      } else {
        console.error('Invalid userData format:', userData);
      }
    },
    onError: (error) => {
      console.error('SignIn Error:', error); // Logging error
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: `Invalid Credentials`,
      });
    },
  });
}

export function useSignUp() {
  const { toast } = useToast();
  const { push } = useRouter()

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
      console.error('SignUp Error:', error); // Logging error
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: 'try again later',
      });
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
      toast({
        title: 'Goodbye!!',
      });
    },
    onError: (error) => {
      console.error('SignOut Error:', error); // Logging error
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: 'try again later',
      });
    },
  });
}
