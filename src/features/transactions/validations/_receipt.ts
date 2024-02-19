import * as z from 'zod';

export const receiptSchema = z.object({
  receipt: z
    .string()
    .min(1)
    .regex(
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
    ),
});

export type ReceiptSchemaType = z.infer<typeof receiptSchema>;
