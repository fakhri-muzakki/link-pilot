import * as v from "valibot";

export const registerSchema = v.pipe(
  v.object({
    name: v.pipe(
      v.string(),
      v.nonEmpty("Name is required"),
      v.minLength(5, "Minimum 5 characters"),
    ),
    email: v.pipe(
      v.string(),
      v.nonEmpty("Email is required"),
      v.email("Invalid email address"),
    ),
    password: v.pipe(
      v.string(),
      v.nonEmpty("Password is required"),
      v.minLength(8, "Minimum 8 characters"),
    ),
    confirmPassword: v.pipe(
      v.string(),
      v.nonEmpty("Confirm password is required"),
    ),
  }),
  v.forward(
    v.partialCheck(
      [["password"], ["confirmPassword"]],
      (input) => input.password === input.confirmPassword,
      "Passwords do not match",
    ),
    ["confirmPassword"],
  ),
);

export type RegisterData = v.InferOutput<typeof registerSchema>;
