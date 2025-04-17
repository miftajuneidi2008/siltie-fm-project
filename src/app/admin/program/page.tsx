import { Button } from "@/components/ui/button";
import { PlusCircleIcon, EllipsisVertical } from "lucide-react";
import Link from "next/link";
import React from "react";

import { db } from "@/lib/prisma";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

const page =async () => {
    const post = await db.post.findMany({
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
        <Link href={`/admin/program/new`} className="flex gap-2">
          <PlusCircleIcon />
          የፕሮግራም ይዘት ጨምር
        </Link>
      </Button>
      {post &&   <DataTable columns={columns} data={post} />}
    </div>
  );
};

export default page;
