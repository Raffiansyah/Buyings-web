import { z } from 'zod';

export const UpdateAddressSchema = z.object({
  street: z.string().optional(),
  province: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  postalCode: z.string().optional(),
});
