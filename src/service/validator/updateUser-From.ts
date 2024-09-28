import { z } from 'zod';

export const UpdateUserSchema = z.object({
  email: z.string().min(10, {
    message: 'Email must contain at least 10 character(s)',
  }),
  firstName: z.string().min(3, {
    message: 'First Name must contain at least 3 character(s)',
  }),
  lastName: z.string().min(3, {
    message: 'Last Name must contain at least 3 character(s)',
  }),
  username: z.string().min(3, {
    message: 'Username must contain at least 3 character(s)',
  }),
  phone: z.string().min(12, {
    message: 'Phone must contain at least 12 number(s)',
  }),
});
