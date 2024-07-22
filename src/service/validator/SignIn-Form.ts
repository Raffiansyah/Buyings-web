import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().min(10, {
    message: 'Email must contain at least 10 character(s)',
  }),
  password: z
    .string()
    .min(8, {
      message: 'Password must contain at least 3 character(s)',
    })
    .max(15, {
      message: 'Password must contain at most 15 character(s)',
    }),
});
