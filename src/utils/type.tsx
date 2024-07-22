export type productType = {
  id: string;
  title: string;
  slug?: string;
  description?: string;
  images: string;
  prices: string;
};

export interface SignupData {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export type SignInData = {
  email: string
  password: string
}