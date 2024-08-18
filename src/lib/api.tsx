import { SignInData, SignupData } from '../utils/type';
import { axiosClient } from './axios';

export const SignIn = async ({ email, password }: SignInData) => {
  const user = axiosClient.post('/login', { email, password });
  return user;
};

export const SignUp = async (data: SignupData) => {
  const newUser = axiosClient.post('/register', {
    email: data.email,
    first_name: data.firstName,
    last_name: data.lastName,
    username: data.username,
    password: data.password,
  });
  return newUser;
};

export const SignOut = async () => {
  const user = await axiosClient.post('/logout');
  return user;
};

export const getProducts = async (sortBy = '') => {
  const products = await axiosClient.get(`/products?sort_by=${sortBy}`);
  return products.data.products;
};

export const verifyOTP = async (hashToken: string) => {
  const verify = await axiosClient.post('/user/verifyOTP', { hashToken });
  return verify;
};
