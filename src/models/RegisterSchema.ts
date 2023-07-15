import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Too short").max(50, "Too long"),
  date: z.string().min(1, "Date is required"),
  agreed: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export type Inputs = z.infer<typeof registerSchema>;
