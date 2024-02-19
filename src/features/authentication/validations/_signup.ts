import * as z from 'zod';

export const signUpSchema = z.object({
  name: z
    .string()
    .min(1)
    .regex(/[\S\s]+[\S]+/g),
  email: z
    .string()
    .email('Wrong e-mail format')
    .regex(/[\S\s]+[\S]+/g),
  password: z
    .string()
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
