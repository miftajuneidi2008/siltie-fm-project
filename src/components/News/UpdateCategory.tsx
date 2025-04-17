

"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,

} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { categorySchema } from "@/lib/shema";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Spinner from "../Spinner";
import { News_Category } from "@/lib/type";
import { UpdateCategories } from "@/app/action/action";


const UpdateCategory = ({ category }: { category: News_Category}) => {
    console.log(category)
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      title: category.title,
      description: category.description,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof categorySchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoading(true);
    try {
      await UpdateCategories(category.id, values);
      toast.success("ተከናዉኗል");
      router.push("/admin/news-category");
    } catch (error) {
      console.log(error);
      toast.error("እባክዎ እንደገና ይሞክሩ");
    } finally {
      setLoading(false);
    }
  }
  return (
    <Card className="my-2">
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
                    <Input placeholder="የምድብ ርዕስ" {...field} />
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
                    <Textarea placeholder="የምድብ መግለጫ" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading ? (
                <div className="flex items-center gap-2">
                  <Spinner /> Submitting
                </div>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default UpdateCategory;
