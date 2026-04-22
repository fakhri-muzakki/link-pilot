import * as v from "valibot";

export const LinkFormSchema = v.object({
  title: v.pipe(
    v.string(),
    v.nonEmpty("Title is required"),
    v.minLength(2, "Minimum 2 characters"),
  ),
  originalUrl: v.pipe(
    v.string(),
    v.nonEmpty("Destination URL is required"),
    v.url("Invalid URL"),
  ),
  customAlias: v.optional(v.string()),
});

export type LinkFormData = v.InferOutput<typeof LinkFormSchema>;
