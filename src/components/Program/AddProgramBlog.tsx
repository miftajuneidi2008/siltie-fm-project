"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Tiptap from "../RichTextEditor/Tiptap";
import { PostCategory } from "@prisma/client";
import { programSchema } from "@/lib/shema";
import Spinner from "../Spinner";
import toast from "react-hot-toast";
import { AddPost } from "@/app/action/action";
import { useRouter } from "next/navigation";

const AddProgramBlog = ({
  programCategory,
}: {
  programCategory: PostCategory[];
}) => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof programSchema>>({
    resolver: zodResolver(programSchema),
    defaultValues: {
      title: "",
      file: undefined,
      description: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof programSchema>) {
    try {
      setLoading(true);
      const news = await AddPost(values);
      console.log(news);
      if (news) {
        toast.success("ተከናዉኗል");
        router.push("/admin/program");
      }
      if (!news) {
        toast.error("እባክዎ እንደገና ይሞክሩ");
      }
    } catch (error) {
      console.log(error);
      toast.error("እባክዎ እንደገና ይሞክሩ");
    } finally {
      setLoading(false);
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>የዜና ዝርዝሮችን ጨምር</CardTitle>
        <CardDescription className="py-3">ሁሉንም የዜና ዝርዝሮች ይጨምሩ</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ርዕስ</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ምስል</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      className="resize-none"
                      onChange={(e) => {
                        field.onChange(e.target.files?.[0]);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>መደብ</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="የዜና ምድብ ይምረጡ" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {programCategory.map((category) => (
                        <SelectItem value={category.title} key={category.id}>
                          {category.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>መግለጫ</FormLabel>
                  <FormControl>
                    <Tiptap onChange={field.onChange} content={field.value} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading ? (
                <div className="flex items-center gap-2">
                  <Spinner />
                  በሂደት ላይ
                </div>
              ) : (
                <div> መዝግብ</div>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddProgramBlog;
