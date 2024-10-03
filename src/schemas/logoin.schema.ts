import { z } from "zod";

const loginValidationSchema = z.object({
  username: z.string({required_error:"Please enter your name"}).trim(),
  email: z.string().trim().email("Please enter a valid email"),
  password: z
    .string()
    .trim()
    .min(6, "Password needs to be at lest 6 character"),
});

export default loginValidationSchema;
