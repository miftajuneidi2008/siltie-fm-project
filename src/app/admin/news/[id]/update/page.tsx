import UpdateNewsForm from '@/components/News/UpdateNews'
import { db } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import React from 'react'

const UpdateNews = async({params}:{params:Promise<{id:string}>}) => {
    const id = (await params).id
    const news = await db.newsCategory.findMany()
    const newsData = await db.news.findUnique({where:
        {
            id
        }
    })
if (!news)
{
    return notFound()
}
  return (
    <UpdateNewsForm  news = {news}  newsData = {newsData}/>
  )
}

export default UpdateNews