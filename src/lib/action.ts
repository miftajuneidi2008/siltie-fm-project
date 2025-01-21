"use server"

import { redirect } from "next/navigation";
import z from "zod";
const FormSchema = z.object({
  username: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
});

export type State = {
  errors?: {
    username?: string[];
    password?: string[];
  };
  message?: string | null;
};
export async function LoginFunction(prevState: State, formData: FormData)  {
  const validateFields = FormSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

   redirect("/login");
  
};
