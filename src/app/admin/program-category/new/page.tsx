import ProgramCategory from '@/components/Program/ProgramCategory';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const AddNewProgramCategory = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="flex gap-2 items-center"
          asChild
        >
          <Link href={`/admin/program`}>
            <ChevronLeftIcon />
          </Link>
        </Button>
        <h1>አዲስ ፕሮግራም ጨምር</h1>
      </div>
      <ProgramCategory />
    </div>
  );
}

export default AddNewProgramCategory