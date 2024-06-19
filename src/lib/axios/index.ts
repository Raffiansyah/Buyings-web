import axios from 'axios';
import cookie from 'js-cookie'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const token = cookie.get('token')


export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
});



