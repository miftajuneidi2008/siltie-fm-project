"use server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import {
  addNewsSchema,
  AddProgramShema,
  categorySchema,
  CommentFormSchema,
  programSchema,
  UpdateNewsSchema,
  UpdatePostSchema,
  UpdateProgramShema,
} from "@/lib/shema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";
import fs from "fs/promises";
import { programForUpdate, valuesForUpdate } from "@/lib/type";
import path from "path";
import { console } from "inspector";

export const AddCategory = async (data: z.infer<typeof categorySchema>) => {
  const session = await auth();
  if (!session?.user.isAdmin) {
    return redirect("/login");
  }
  const validatedData = categorySchema.parse(data);
  console.log(validatedData);
  try {
    await db.newsCategory.create({
      data: {
        title: validatedData.title as string,
        description: validatedData.description as string,
      },
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/admin/news-category");
};

export const UpdateCategories = async (
  id: string,
  data: z.infer<typeof categorySchema>
) => {
  const session = await auth();
  if (!session?.user.isAdmin) {
    return redirect("/login");
  }
  const validatedData = categorySchema.parse(data);
  try {
    await db.newsCategory.update({
      where: {
        id: id,
      },
      data: {
        title: validatedData.title as string,
        description: validatedData.description as string,
      },
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/admin/news-category");
};

export const deleteCategory = async (id: string) => {
  const session = await auth();
  if (!session?.user.isAdmin) {
    return redirect("/login");
  }

  try {
    await db.newsCategory.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/admin/news-category");
};

export const addNews = async (data: z.infer<typeof addNewsSchema>) => {

  const session = await auth();
  if (!session?.user.isAdmin) {
    return redirect("/login");
  }
  const user = await db.user.findUnique({
    where: {
      email: session.user.email as string,
    },
  });

  const validData = addNewsSchema.parse(data);

  const upload_directory = path.join(process.cwd(), "uploads");

  const images = validData.file;
  await fs.mkdir(upload_directory, { recursive: true });
  const filename = `${crypto.randomUUID()}-${images.name}`;
  const filePath = path.join(upload_directory, filename);
  await fs.writeFile(filePath, Buffer.from(await images.arrayBuffer()));

  const url = `uploads/${filename}`;

  try {
    const news = await db.news.create({
      data: {
        title: validData.title as string,
        image: url,
        description: validData.description as string,
        userId: user?.id as string,
        categoryTitle: validData.category,
      },
    });
    revalidatePath(`/admin/news`);
    return news;
  } catch (error) {
    console.log(error);
  }
};

export const UpdateNews = async (
  id: string,
  data: z.infer<typeof UpdateNewsSchema>
) => {
  const session = await auth();
  if (!session?.user.isAdmin) {
    return redirect("/login");
  }

  const validData = UpdateNewsSchema.parse(data);

  let url = "";
  if (validData.file) {
    const image = await db.news.findUnique({
      where: {
        id: id,
      },
    });

    const images = validData.file;
    const oldImageUrl = path.join(process.cwd(), image?.image as string);
    const upload_directory = path.join(process.cwd(), "uploads");

    await fs.mkdir(upload_directory, { recursive: true });
    await fs.unlink(oldImageUrl);
    const filename = `${crypto.randomUUID()}-${images.name}`;
    const filePath = path.join(upload_directory, filename);
    await fs.writeFile(filePath, Buffer.from(await images.arrayBuffer()));

    url = `uploads/${filename}`;
  }

  const updateData: valuesForUpdate = {};

  if (validData.title) {
    updateData.title = validData.title;
  }
  if (validData.description) {
    updateData.description = validData.description;
  }

  if (validData.category) {
    updateData.categoryTitle = validData.category;
  }
  if (url) {
    updateData.image = url;
  }

  try {
    const news = await db.news.update({
      where: {
        id: id,
      },
      data: updateData,
    });
    revalidatePath(`/admin/news`);
    return news;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteNews = async (id: string) => {
  const session = await auth();
  if (!session?.user.isAdmin) {
    return redirect("/login");
  }

  const image = await db.news.findUnique({
    where: {
      id: id,
    },
  });

  const paths = path.join(process.cwd(), image?.image as string);
  await fs.unlink(paths);

  try {
    await db.news.delete({
      where: {
        id: id,
      },
    });
    revalidatePath(`/admin/news`);
  } catch (error) {
    console.log(error);
  }
};

export const NewProgram = async (data: z.infer<typeof AddProgramShema>) => {
  const session = await auth();
  if (!session?.user.isAdmin) {
    return redirect("/login");
  }

  const validData = AddProgramShema.parse(data);

  const images = validData.file;

  const upload_directory = path.join(process.cwd(), "uploads");

  await fs.mkdir(upload_directory, { recursive: true });

  const filename = `${crypto.randomUUID()}-${images.name}`;
  const filePath = path.join(upload_directory, filename);
  await fs.writeFile(filePath, Buffer.from(await images.arrayBuffer()));

  const url = `uploads/${filename}`;

  try {
    const news = await db.postCategory.create({
      data: {
        title: validData.title as string,
        image: url,
        description: validData.description as string,
      },
    });
    revalidatePath(`/admin/program-category`);
    return news;
  } catch (error) {
    console.log(error);
  }
};

export const UpdateProgram = async (
  id: string,
  data: z.infer<typeof UpdateProgramShema>
) => {
  const session = await auth();
  if (!session?.user.isAdmin) {
    return redirect("/login");
  }

  const validData = UpdateProgramShema.parse(data);
  let url = "";
  if (validData.file) {
    const image = await db.news.findUnique({
      where: {
        id: id,
      },
    });

    const images = validData.file;
    const oldImageUrl = path.join(process.cwd(), image?.image as string);
    const upload_directory = path.join(process.cwd(), "uploads");

    await fs.mkdir(upload_directory, { recursive: true });
    await fs.unlink(oldImageUrl);
    const filename = `${crypto.randomUUID()}-${images.name}`;
    const filePath = path.join(upload_directory, filename);
    await fs.writeFile(filePath, Buffer.from(await images.arrayBuffer()));

    url = `uploads/${filename}`;
  }

  const updateData: programForUpdate = {};

  if (validData.title) {
    updateData.title = validData.title;
  }
  if (validData.description) {
    updateData.description = validData.description;
  }

  if (url) {
    updateData.image = url;
  }

  try {
    const news = await db.postCategory.update({
      where: {
        id: id,
      },
      data: updateData,
    });
    revalidatePath(`/admin/program-category`);
    return news;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProgram = async (id: string) => {
  const session = await auth();
  if (!session?.user.isAdmin) {
    return redirect("/login");
  }

  try {
    await db.postCategory.delete({
      where: {
        id: id,
      },
    });
    revalidatePath(`/admin/program-category`);
  } catch (error) {
    console.log(error);
  }
};

export type State = {
  errors?: {
    comment?: string[];
  };
  message?: string | null;
};




export async function AddComment(
  id: string,
  data: z.infer<typeof CommentFormSchema>
) {
  const session = await auth();
  if (!session?.user) {
    return redirect("/login");
  }

  const user = await db.user.findUnique({
    where: {
      email: session.user.email as string,
    },
  });

  const validData = CommentFormSchema.parse(data);

  try {
    await db.comment.create({
      data: {
        content: validData.comment as string,
        newsId: id,
        userId: user?.id as string,
      },
    });
    revalidatePath(`/post/${id}`);
  } catch (error) {
    console.log(error);
  }
}



export async function EditComment(
  id:string,
  commentId:string,
  userEmail:string,
  data: z.infer<typeof CommentFormSchema>
) {
  const session = await auth();
  if (!session?.user || userEmail!==session.user.email) {
    return redirect("/login");
  }

  const validData = CommentFormSchema.parse(data);

  try {
     await db.comment.update({
      where: {
        id: commentId,
      },
      data: {
        content: validData.comment as string,
      },
    });
    revalidatePath(`/post/${id}`);
   
  } catch (error) {
    console.log(error);
  }
}

export async function deleteComment(id: string, newsId:string) {
  const session = await auth();
  if (!session?.user) {
    return redirect("/login");
  }
  try{
  await db.comment.delete({ where: { id: id } });
  revalidatePath(`/post/${newsId}`);
  redirect(`/post/${newsId}`);
  }
  catch(error){
    console.log(error)
  }
}

export const AddPost=async(data: z.infer<typeof programSchema>)=> {
  const session = await auth();
  if (!session?.user.isAdmin) {
    return redirect("/login");
  }
  const user = await db.user.findUnique({
    where: {
      email: session.user.email as string,
    },
  });
  if (!user) {
    return redirect("/login");
  }
  const validData = programSchema.parse(data);

  const upload_directory = path.join(process.cwd(), "uploads");

  const images = validData.file;
  await fs.mkdir(upload_directory, { recursive: true });
  const filename = `${crypto.randomUUID()}-${images.name}`;
  const filePath = path.join(upload_directory, filename);
  await fs.writeFile(filePath, Buffer.from(await images.arrayBuffer()));

  const url = `uploads/${filename}`;

  try {
    const program = await db.post.create({
      data:{
        title:validData.title as string,
        image:url,
        description:validData.description as string,
        userId:user.id as string,
        categoryTitle:validData.category as string
      }
    })
    revalidatePath(`/admin/program`);
    return program;
  } catch (error) {
    console.log(error);
  }
}


export const UpdatePost = async (
  id: string,
  data: z.infer<typeof UpdatePostSchema>
) => {
  const session = await auth();
  if (!session?.user.isAdmin) {
    return redirect("/login");
  }

  const validData = UpdatePostSchema.parse(data);

  let url = "";
  if (validData.file) {
    const image = await db.post.findUnique({
      where: {
        id: id,
      },
    });

    const images = validData.file;
    const oldImageUrl = path.join(process.cwd(), image?.image as string);
    const upload_directory = path.join(process.cwd(), "uploads");

    await fs.mkdir(upload_directory, { recursive: true });
    await fs.unlink(oldImageUrl);
    const filename = `${crypto.randomUUID()}-${images.name}`;
    const filePath = path.join(upload_directory, filename);
    await fs.writeFile(filePath, Buffer.from(await images.arrayBuffer()));

    url = `uploads/${filename}`;
  }

  const updateData: valuesForUpdate = {};

  if (validData.title) {
    updateData.title = validData.title;
  }
  if (validData.description) {
    updateData.description = validData.description;
  }

  if (validData.category) {
    updateData.categoryTitle = validData.category;
  }
  if (url) {
    updateData.image = url;
  }

  try {
    const post = await db.post.update({
      where: {
        id: id,
      },
      data: updateData,
    });
    revalidatePath(`/admin/program`);
    return post;
  } catch (error) {
    console.log(error);
  }
};


export const DeletePost = async (id: string) => {
  const session = await auth();
  if (!session?.user.isAdmin) {
    return redirect("/login");
  }

  const image = await db.post.findUnique({
    where: {
      id: id,
    },
  });

  const paths = path.join(process.cwd(), image?.image as string);
  await fs.unlink(paths);

  try {
    await db.post.delete({
      where: {
        id: id,
      },
    });
    revalidatePath(`/admin/program`);
  } catch (error) {
    console.log(error);
  }
};
