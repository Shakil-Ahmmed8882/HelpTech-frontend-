import { z } from "zod";

const registerValidationSchema = z.object({
  username: z.string({ required_error: "Please enter your name!" }),
  email: z.string().email("Please enter a valid email address!"),
  mobileNumber: z
    .string()
    .regex(/^\d{11}$/, "Please enter a valid mobile number!"),
  password: z.string().min(6, "Must be at least 6 characters."),
});

export default registerValidationSchema;
