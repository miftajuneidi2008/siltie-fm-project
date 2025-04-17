import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVerticalIcon, PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import { db } from '@/lib/prisma';
import { deleteProgram } from '@/app/action/action';
const ProgramCategory = async() => {
  const category = await db.postCategory.findMany()
  return (
    <div className="flex flex-col gap-2">
      <Button className="w-max self-end" asChild>
        <Link href={`/admin/program-category/new`} className="flex gap-2">
          <PlusCircleIcon /> Add New Program
        </Link>
      </Button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 my-2">
        {category.map((category)=>{
           const deletePosts = deleteProgram.bind(null, category.id);
          return (
            <Card key={category.id}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{category.title}</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <EllipsisVerticalIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/admin/program-category/${category.id}/edit`}
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
                                <Button type="submit" className="px-0">
                                  Delete
                                </Button>
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
          );
        })}
        
      </div>
    </div>
  );
}

export default ProgramCategory