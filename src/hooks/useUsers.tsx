import { axiosClient } from '~/lib/axios';

export const userSignin = async (email: string, password: string) => {
  try {
    const user = await axiosClient.post('/login', { email, password });
    return user;
  } catch (error) {
    console.log(error)
  }
};
export const userSignup = async (
  email: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
) => {
  try {
    const user = await axiosClient.post('/register', {
      email,
      first_name: firstName,
      last_name: lastName,
      username,
      password,
    });
  } catch (error) {
    console.log(error)
  }
};

export const userSignout = async () => {
  try {
    const user = await axiosClient.post('/logout');
  } catch (error) {
    console.log(error)
  }
};
