import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().min(10, {
    message: 'Email must contain at least 10 character(s)',
  }),
  firstName: z.string().min(3, {
    message: 'First Name must contain at least 10 character(s)',
  }),
  lastName: z.string().min(3, {
    message: 'Last Name must contain at least 10 character(s)',
  }),
  username: z.string().min(3, {
    message: 'Username must contain at least 10 character(s)',
  }),
  password: z
    .string()
    .min(3, {
      message: 'Password must contain at least 10 character(s)',
    })
    .max(15, {
      message: 'Password must contain at most 15 character(s)',
    }),
});
