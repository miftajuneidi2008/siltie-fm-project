import { db } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import React from 'react'

export const SinglePost = async({id}:{id:string}) => {
      const news = await db.news.findUnique({where:{id:id}});
      if (!news)
      {
        return notFound()
      }
    
  return (
    <div>SinglePost</div>
  )
}
