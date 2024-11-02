import { z } from "zod";

const usernameRegex = /^[a-zA-Z]+$/; // Ensures only alphabets are allowed in the username
const passwordRegex = /[@#$%]/; // Ensures at least one special character from @#$% is present in the password

export const SignupInputProps = z.object({
  username: z
    .string()
    .min(6)
    .max(20)
    .regex(usernameRegex, "Username must contain only alphabets"),
  password: z
    .string()
    .min(8)
    .max(16)
    .regex(passwordRegex, "Password must contain at least one of @#$%"),
});

export const LoginInputProps = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});
