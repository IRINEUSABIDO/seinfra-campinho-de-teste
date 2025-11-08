import z from "zod";

export const loginSchema = z.object({
  password: z.string().min(8),
  CPF: z.string().min(16),
})
