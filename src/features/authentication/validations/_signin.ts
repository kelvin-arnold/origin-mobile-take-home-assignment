import * as z from 'zod';

export const signInSchema = z.object({
  email: z.string().email('Wrong e-mail format'),
  password: z.string().min(8),
});

export type SignInSchemaType = z.infer<typeof signInSchema>;
