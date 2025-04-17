import UpdateCategory from '@/components/News/UpdateCategory'
import { db } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import React from 'react'

const EditCategory = async({params}:{params:Promise<{id:string}>}) => {
    const id = (await params).id
    const category = await db.newsCategory.findUnique({
        where:{
            id
        }
    })
    if (!category)
    {
        return notFound()
    }
  return (
   <UpdateCategory category={category} />
  )
}

export default EditCategory