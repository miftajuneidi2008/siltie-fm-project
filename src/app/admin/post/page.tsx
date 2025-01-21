import NewsArticles from '@/components/NewsArticles'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
 
  return (
    <div className='flex flex-col gap-2 mx-4'>
      <Button className='self-end my-2'>Add New Post</Button>
      <NewsArticles />
     
    </div>
  )
}

export default page