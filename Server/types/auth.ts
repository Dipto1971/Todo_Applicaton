import { z } from "zod";

export const SignupInputProps = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

export const LoginInputProps = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});
