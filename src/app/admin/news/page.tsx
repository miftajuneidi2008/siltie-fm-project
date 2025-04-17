import { Button } from '@/components/ui/button'
import { PlusCircleIcon } from "lucide-react";
import Link from 'next/link'
import React from 'react'

import { db } from '@/lib/prisma';

import { DataTable } from '@/components/data-table';
import { columns } from './columns';



const NewsPage = async() => {
  const news = await db.news.findMany({
    select:{
      id:true,
      title:true,
      image:true,
      categoryTitle:true,
    }
  })
  return (
    <div className="flex flex-col gap-2">
      <Button asChild className="self-end">
        <Link href={`/admin/news/new`} className="flex gap-2">
          <PlusCircleIcon />
          ዜና ጨምር
        </Link>
      </Button>
      {news && (
        // <Table>
        //   <TableCaption>የዜናዎች ዝርዝር</TableCaption>
        //   <TableHeader>
        //     <TableRow>
        //       <TableHead>Image</TableHead>
        //       <TableHead>ርዕስ</TableHead>
        //       <TableHead>ምድብ</TableHead>
        //       <TableHead className="text-right">ተግባር</TableHead>
        //     </TableRow>
        //   </TableHeader>
        //   <TableBody>
        //     {news.map((news) => {
        //       const deleteNews = DeleteNews.bind(null, news.id);
        //       return (
        //         <TableRow key={news.id}>
        //           <TableCell className="font-medium">
        //             <Image
        //               src={news.image}
        //               width={100}
        //               height={100}
        //               alt={news.title}
        //             />
        //           </TableCell>
        //           <TableCell>{news.title}</TableCell>
        //           <TableCell>{news.categoryTitle}</TableCell>
        //           <TableCell className="text-right">
                    // <DropdownMenu>
                    //   <DropdownMenuTrigger>
                    //     <EllipsisVertical />
                    //   </DropdownMenuTrigger>
                    //   <DropdownMenuContent>
                    //     <DropdownMenuItem>
                    //       <Link
                    //         href={`/admin/news/${news.id}/update`}
                    //         className="cursor-pointer"
                    //       >
                    //         Update
                    //       </Link>
                    //     </DropdownMenuItem>
                    //     <DropdownMenuItem asChild>
                    //       <AlertDialog>
                    //         <AlertDialogTrigger asChild>
                    //           <Button
                    //             variant="outline"
                    //             className="border-none text-red-500"
                    //           >
                    //             Delete
                    //           </Button>
                    //         </AlertDialogTrigger>
                    //         <AlertDialogContent>
                    //           <AlertDialogHeader>
                    //             <AlertDialogTitle>
                    //               ሙሉ በሙሉ እርግጠኛ ነህ?
                    //             </AlertDialogTitle>
                    //             <AlertDialogDescription>
                    //               ይህ ድርጊት ዎደኋላ አይመለስም።
                    //             </AlertDialogDescription>
                    //           </AlertDialogHeader>
                    //           <AlertDialogFooter>
                    //             <AlertDialogCancel>Cancel</AlertDialogCancel>
                    //             <AlertDialogAction asChild>
                    //               <form
                    //                 action={deleteNews}
                    //                 className="flex justify-start"
                    //               >
                    //                 <Button type="submit">Continue</Button>
                    //               </form>
                    //             </AlertDialogAction>
                    //           </AlertDialogFooter>
                    //         </AlertDialogContent>
                    //       </AlertDialog>
                    //     </DropdownMenuItem>
                    //   </DropdownMenuContent>
                    // </DropdownMenu>
        //           </TableCell>
        //         </TableRow>
        //       );})}

        //   </TableBody>
        // </Table>

        <DataTable columns={columns} data={news} />
      )}
    </div>
  );
}

export default NewsPage