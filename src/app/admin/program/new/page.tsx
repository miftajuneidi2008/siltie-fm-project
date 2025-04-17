import AddProgramBlog from '@/components/Program/AddProgramBlog';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/prisma';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

const AddProgram = async() => {
  const programCategory= await db.postCategory.findMany({})
  if (!programCategory) {
    return notFound();
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href={`/admin/program`}>
            <ChevronLeft />
          </Link>
        </Button>
        <h1>ፕሮግራም ጨምር</h1>
      </div>
      <AddProgramBlog programCategory={programCategory} />
    </div>
  );
}

export default AddProgram