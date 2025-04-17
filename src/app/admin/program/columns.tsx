"use client";

import {  DeletePost } from "@/app/action/action";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type Program = {
  id: string;
  title: string;
  image: string;
  categoryTitle: string;
};

export const columns: ColumnDef<Program>[] = [
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => {
      const id = row.getValue("id") as string;

      return <div className="sr-only">{id}</div>;
    },
  },
  {
    accessorKey: "image",
    header: "ምስል",
    cell: ({ row }) => {
      const image = row.getValue("image") as string;

      return (
        <Image
          src={`/api/image?path=${encodeURIComponent(image)}`}
          width={80}
          height={80}
          alt="Uploaded"
          className="w-10 h-10"
        />
      );
    },
  },

  {
    accessorKey: "title",
    header: "ርዕስ",
  },
  {
    accessorKey: "categoryTitle",
    header: "ምድብ",
  },
  {
    header: "ተግባር",
    id: "actions",
    cell: ({ row }) => {
      const id = row.getValue("id") as string;
      const deleteNews = DeletePost.bind(null, id);

      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link
                href={`/admin/program/${id}/update`}
                className="cursor-pointer"
              >
                Update
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-none text-red-500"
                  >
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>ሙሉ በሙሉ እርግጠኛ ነህ?</AlertDialogTitle>
                    <AlertDialogDescription>
                      ይህ ድርጊት ዎደኋላ አይመለስም።
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <form className="flex justify-start">
                        <Button type="submit" onClick={deleteNews}>
                          Continue
                        </Button>
                      </form>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
