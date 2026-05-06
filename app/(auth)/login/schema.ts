import * as v from "valibot";

export const loginSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty("Email is required"),
    v.email("Invalid email address"),
  ),
  password: v.pipe(
    v.string(),
    v.nonEmpty("Password is required"),
    v.minLength(6, "Minimum 6 characters"),
  ),
});

export type LoginData = v.InferOutput<typeof loginSchema>;
