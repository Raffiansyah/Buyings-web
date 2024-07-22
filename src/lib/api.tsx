import axios from 'axios';
import { SignInData, SignupData } from '../utils/type';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const axiosClient = axios.create({
  baseURL: BASE_URL,
});


export const SignIn = async ({email, password}: SignInData) => {
  try {
    const user = axiosClient.post('/login', {email, password})
    return user
  } catch (error) {
    throw new Error('invalid Credentials')
  }
}

export const SignUp = async (data: SignupData) => {
  try {
    const newUser = axiosClient.post('/register', {
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      username: data.username,
      password: data.password,
    })
    return 'Success To SignUp'
  } catch (error) {
    throw new Error('Something Error')
  }
}

export const SignOut = async () => {
  try {
    const user = await axiosClient.post('/logout');
  } catch (error) {
    throw new Error('Something Error')
  }
};