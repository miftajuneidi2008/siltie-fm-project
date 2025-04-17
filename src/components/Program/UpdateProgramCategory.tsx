
"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {UpdateProgramShema } from "@/lib/shema";
import {  UpdateProgram } from "@/app/action/action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Spinner from "../Spinner";
import { PostCategory } from "@prisma/client";

const UpdateProgramCategory = ({ programCategory }:{programCategory: PostCategory}) => {
  console.log(programCategory);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof UpdateProgramShema>>({
    resolver: zodResolver(UpdateProgramShema),
    defaultValues: {
      title: programCategory?.title as string,
      file: undefined,
      description: programCategory?.description as string,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof UpdateProgramShema>) {
    try {
      setLoading(true);
      const news = await UpdateProgram(programCategory.id, values);
      if (news) {
        toast.success("ተከናዉኗል");
        router.push("/admin/program-category");
      } else if (!news) {
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
    <Card className="my-2 md:my-4">
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
                    <Input placeholder="Title of category" {...field} />
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>መግለጫ</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter Category Description here"
                      {...field}
                    />
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

export default UpdateProgramCategory;
