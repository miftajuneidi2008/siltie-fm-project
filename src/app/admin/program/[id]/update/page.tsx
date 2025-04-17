import UpdateProgram from '@/components/Program/UpdateProgram';
import { db } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import React from 'react'

const EditPostPage = async({params}:{params:Promise<{id:string}>}) => {
    const {id} = await params

     const category = await db.postCategory.findMany();
     const post = await db.post.findUnique({
       where: {
         id,
       },
     });
     if (!post) {
       return notFound();
     }
      
     return <UpdateProgram category={category} post={post} />;

}

export default EditPostPage