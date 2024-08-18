import axios from 'axios';
import { getCookie } from 'cookies-next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = getCookie('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
