import UpdateProgramCategory from '@/components/Program/UpdateProgramCategory';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/prisma';
import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

const EditProgram =async ({params}:{params:Promise<{id:string}>}) => {
    const id  = (await params).id
    const programCategory = await db.postCategory.findUnique({where:{id:id}})

    if(!programCategory)
    {
        return notFound()
    }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="flex gap-2 items-center"
          asChild
        >
          <Link href={`/admin/program-category`}>
            <ChevronLeftIcon />
          </Link>
        </Button>
        <h1>የማሻሻያ ፕሮግራም ገጽ</h1>
      </div>
      <UpdateProgramCategory programCategory ={programCategory}/>
    </div>
  );
}

export default EditProgram