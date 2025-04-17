"use client"
import { AddComment } from '@/app/action/action';
import { CommentFormSchema } from '@/lib/shema';
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import toast from 'react-hot-toast';
import Spinner from './Spinner';
const CommentForm = ({id}:{id:string}) => {

  const [loading, setLoading] = React.useState(false);

      const form = useForm<z.infer<typeof CommentFormSchema>>({
        resolver: zodResolver(CommentFormSchema),
        defaultValues: {
          comment: "",
        },
      });

      // 2. Define a submit handler.
     async function onSubmit(values: z.infer<typeof CommentFormSchema>) {
      try{
        setLoading(true)
        await AddComment(id,values)
        toast.success("ስለ አስተያየትዎ እናመሰኛለን");
        form.reset();
      }catch(error){
      console.log(error)
      toast.error("እባክዎ እንደገና ይሞክሩ");
      }
      finally{
        setLoading(false)
      }
    }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex gap-2 items-center h-16">
          <div className="w-[80%]">
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="አስተያየት ጨምር " {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <Button type="submit" className="h-full py-4" disabled={loading}>
              {loading ? <span className='flex items-center gap-2'><Spinner/>"እባክዎ ይጠብቁ"</span> : "አስተያየት ይላኩ"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default CommentForm