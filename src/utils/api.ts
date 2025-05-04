import { UpdateAddressData, SignInData, SignupData, UpdateUserData } from './type';
import { axiosClient } from '../lib/axios';
import { getAccessTokenClient } from './cookie';


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
  const token = getAccessTokenClient()
  const updatedUser = axiosClient.post('/user/update', data, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return updatedUser;
};

export const SignOut = async () => {
  const user = await axiosClient.post('/logout');
  return user;
};

export const verifyOTP = async (hashToken: string) => {
  const verify = await axiosClient.post('/user/verifyOTP', { hashToken });
  return verify;
};

export const getProducts = async (sortBy: string, category: string, pageParam: number) => {
  const products = await axiosClient.get(`/products?sort_by=${sortBy}&Category=${category}&Page=${pageParam}`);
  return products.data.products;
};

export const getAddress = async () => {
  const token = getAccessTokenClient()  
  const address = await axiosClient.get(`/address`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return address;
};

export const UpdateAddress = async (data: UpdateAddressData, id: string) => {
  const token = getAccessTokenClient()  
  const updateAddress = axiosClient.patch(`/address/${id}`, data, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return updateAddress;
};
