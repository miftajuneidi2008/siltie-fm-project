import Container from '@/components/Container'
import { Card, CardContent,} from '@/components/ui/card';
import { db } from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'
import type { Metadata } from "next";

export const metadata:Metadata={
title:"ፕሮግራም"
}

const ProgramPage = async() => {
  const programs = await db.postCategory.findMany()
  if (!programs)
  {
    return notFound()
  }
  return <Container className='my-2 md:my-6'>
   <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8'>
    {programs.map((program)=>{
      return (
        <Link
          href={`/program/${program.title}`}
          key={program.id}
          className="hover:scale-105 transition-all ease-in-out duration-300"
        >
          <Card>
            <CardContent className="flex flex-row items-center gap-4">
              <div className="py-2 flex items-center ">
                <Image
                  src={`/api/image?path=${encodeURIComponent(program.image)}`}
                  alt={program.title}
                  width={100}
                  height={100}
                  className="h-[128px] rounded-md w-full hidden md:block"
                />
              </div>
              <div className="flex flex-col flex-1">
                <h1 className="font-bold">{program.title}</h1>
                <p className="text-muted-foreground text-sm">
                  {program.description.substring(0, 70)}...
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      );
    })
  }

   </div>
  </Container>;
}

export default ProgramPage