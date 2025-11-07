import z from "zod";

export const loginSchema = z.object({
  // CPF: z.string().min(14),
  password: z.string().min(2),
  // name: z.string().min(1),
  // telephone: z.number().min(1),
});
