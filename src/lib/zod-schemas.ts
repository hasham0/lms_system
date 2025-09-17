import { z } from "zod";

export const courseLevels = ["Beginner", "Intermediate", "Advance"] as const;
export const courseStatus = ["Draft", "Archie", "Published"] as const;
export const courseCategories = [
  "Develpoment",
  "Bussiness",
  "Finance",
  "IT & Software",
  "Office Productivity",
  "Persoanl Development",
  "Design",
  "Marketing",
  "Health & Fitness",
  "Music",
  "Teaching & Academics",
] as const;

export const courseSchema = z.object({
  title: z
    .string()
    .min(3, { error: "Title must be at least 3 characters long" })
    .max(100, { error: "Title must be at most 100 characters long" }),
  description: z
    .string()
    .min(3, { error: "description must be at least 3 characters long" })
    .max(100, { error: "description must be at most 100 characters long" }),
  fileKey: z.string().min(3, { error: "File is required" }),
  price: z.number().min(1, { error: "price must be a positve number" }),
  duration: z
    .number()
    .min(1, { error: "duration must be at least 1 hour" })
    .max(500, { error: "duration must be at least 500 hour" }),
  level: z.enum(courseLevels, { error: "Level is required" }),
  category: z.enum(courseCategories, { error: "category is required" }),
  smallDescription: z
    .string()
    .min(3, { error: "small Description must be at least 3 characters long" })
    .max(200, {
      error: "small Description must be at most 200 characters long",
    }),
  slug: z.string().min(3, {
    error: "slug must be at least 3 characters long",
  }),
  status: z.enum(courseStatus, { error: "status is required" }),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;
