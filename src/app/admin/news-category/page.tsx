import { deleteCategory } from "@/app/action/action";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { db } from "@/lib/prisma";
import { EllipsisVerticalIcon, PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const NewsCategory = async() => {
  const category = await db.newsCategory.findMany()
  if (!category)
  {
    return notFound()
  }
  return (
    <div className="flex flex-col gap-2">
      <Button className="w-max self-end" asChild>
        <Link href={`/admin/news-category/new`} className="flex gap-2">
          <PlusCircleIcon /> Add New Category
        </Link>
      </Button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 my-2">
        {category.map((categories) => {
          const deletePosts = deleteCategory.bind(null, categories.id);
          return(
          <Card key={categories.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{categories.title}</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <EllipsisVerticalIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>MAction</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/admin/news-category/${categories.id}/edit`}
                      className="cursor-pointer"
                    >
                      Edit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="border-none text-red-500 px-2"
                        >
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
             
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction asChild>
                            <form action={deletePosts}>
                              <Button type="submit" className="px-0">Delete</Button>
                            </form>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
          </Card>
          )
        })}
      </div>
    </div>
  );
};

export default NewsCategory;
