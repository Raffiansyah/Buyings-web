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
  email: string;
  password: string;
};

export type UpdateUserData = {
  firstname?: string;
  lastname?: string;
  email?: string;
  username?: string;
};

export interface userData {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  user_metadata: {
    avatar_url: string;
    first_name: string;
    last_name: string;
    username: string;
  };
  created_at: string;
  updated_at: string;
}
