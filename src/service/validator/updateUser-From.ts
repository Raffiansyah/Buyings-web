import { z } from 'zod';

export const UpdateUserSchema = z.object({
  email: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  username: z.string().optional(),
  phone: z.string().optional(),
});
