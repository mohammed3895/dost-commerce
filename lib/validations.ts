import { z } from "zod";

export const formSchema = z.object({
  firstname: z.string().min(6).max(32).optional(),
  lastname: z.string().min(6).max(32).optional(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32),
  confirmpassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32),
});

export const singinformSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32),
});

export type formSchemaType = z.infer<typeof formSchema>;
export type signformSchemaType = z.infer<typeof singinformSchema>;
