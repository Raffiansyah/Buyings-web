import { getCookie } from 'cookies-next';
import { SignInData, SignupData, UpdateUserData } from './type';
import { axiosClient } from '../lib/axios';

const token = getCookie('accessToken');

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

export const UpdateUser = async (data: UpdateUserData) => {
  const payload = Object.entries(data).reduce((acc, [key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      const apiKey = key === 'firstname' ? 'first_name' : 
                    key === 'lastname' ? 'last_name' : 
                    key;
      return { ...acc, [apiKey]: value };
    }
    return acc;
  }, {});
  const updatedUser = axiosClient.post('/user/update', payload, {
    headers: {
      'Authorization': `bearer ${token}` 
    }
  });
  return updatedUser;
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
