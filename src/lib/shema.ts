import z from "zod"
export const categorySchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must contain at least 4 character" })
    .max(80),

  description: z
    .string()
    .min(2, { message: "Description atleast contain at least 50 character" }),
  category: z.string({
    required_error: "Please select news category to display.",
  }).optional()
});


export const addNewsSchema = z.object({
  title: z
    .string()
    .min(4, { message: "Title must contain at least 4 character" })
    .max(80),
  file: z
    .instanceof(File)
    .refine(
      (file) => file.size >= 1 * 400 * 400 && file.size <= 2 * 1024 * 1024,
      {
        message: "Image must be between 0.5MB and 2MB",
      }
    )
    .refine(
      (file) =>
        file.type === "image/jpg" ||
        file.type === "image/jpeg" ||
        file.type === "image/png",
      {
        message: "Image must be in JPG format.",
      }
    ),

  description: z
    .string()
    .min(2, { message: "Description atleast contain at least 50 character" }),
  category: z.string({
    required_error: "Please select news category to display.",
  }),
});


export const UpdateNewsSchema = z.object({
  title: z
    .string()
    .min(4, { message: "Title must contain at least 4 character" })
    .max(80),
  file: z
    .instanceof(File)
    .refine(
      (file) => file.size >= 1 * 400 * 400 && file.size <= 2 * 1024 * 1024,
      {
        message: "Image must be between 0.5MB and 2MB",
      }
    )
    .refine(
      (file) =>
        file.type === "image/jpg" ||
        file.type === "image/jpeg" ||
        file.type === "image/png",
      {
        message: "Image must be in JPG format.",
      }
    ).optional(),


  description: z
    .string()
    .min(2, { message: "Description atleast contain at least 50 character" }),
  category: z.string({
    required_error: "Please select news category to display.",
  }),
});



export const AddProgramShema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must contain at least 4 character" })
    .max(80),

  description: z
    .string()
    .min(2, { message: "Description atleast contain at least 50 character" }),
  file: z.instanceof(File).refine(
    (file) => file.size >= 1 * 512 * 512 && file.size <= 2 * 1024 * 1024,{
      message: "Image must be between 0.5MB and 2MB",
    }).refine((file)=>file.type === "image/jpg" || file.type === "image/jpeg",{
      message: "Image must be in JPG/PNG format.",
    })
});



export const UpdateProgramShema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must contain at least 4 character" })
    .max(80),

  description: z
    .string()
    .min(2, { message: "Description atleast contain at least 50 character" }),
  file: z
    .instanceof(File)
    .refine(
      (file) => file.size >= 1 * 512 * 512 && file.size <= 2 * 1024 * 1024,
      {
        message: "Image must be between 0.5MB and 2MB",
      }
    )
    .refine((file) => file.type === "image/jpg" || file.type === "image/jpeg", {
      message: "Image must be in JPG/JPEG format.",
    }).optional()
});


export const CommentFormSchema = z.object({
  comment: z.string().min(2, { message: "Comment must contain at least 2 character" }),

});


export const programSchema = z.object({
  title: z
    .string()
    .min(4, { message: "Title must contain at least 4 character" })
    .max(80),
  file: z
    .instanceof(File)
    .refine(
      (file) => file.size >= 1 * 400 * 400 && file.size <= 2 * 1024 * 1024,
      {
        message: "Image must be between 0.5MB and 2MB",
      }
    )
    .refine(
      (file) =>
        file.type === "image/jpg" ||
        file.type === "image/jpeg" ||
        file.type === "image/png",
      {
        message: "Image must be in JPG format.",
      }
    ),
  description: z
    .string()
    .min(2, { message: "Description atleast contain at least 50 character" }),
  category: z.string({
    required_error: "Please select news category to display.",
  }),
});


export const UpdatePostSchema = z.object({
  title: z
    .string()
    .min(4, { message: "Title must contain at least 4 character" })
    .max(80),
  file: z
    .instanceof(File)
    .refine(
      (file) => file.size >= 1 * 400 * 400 && file.size <= 2 * 1024 * 1024,
      {
        message: "Image must be between 0.5MB and 2MB",
      }
    )
    .refine(
      (file) =>
        file.type === "image/jpg" ||
        file.type === "image/jpeg" ||
        file.type === "image/png",
      {
        message: "Image must be in JPG format.",
      }
    )
    .optional(),

  description: z
    .string()
    .min(2, { message: "Description atleast contain at least 50 character" }),
  category: z.string({
    required_error: "Please select news category to display.",
  }),
});
