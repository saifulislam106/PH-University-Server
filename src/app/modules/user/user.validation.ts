import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'password con not be more than 20 character' })
    .optional(),
});

export const UserValidation = {
  userValidationSchema,
};
