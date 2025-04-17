import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCog, Folder, Newspaper } from "lucide-react";
import React, { Suspense } from "react";

import { db } from "@/lib/prisma";
import ListofPopularNews from "@/components/ListofPopularNews";

const AdminPage = async() => {
  const newsCount  = await db.news.count()
  const newsCategoryCount = await db.newsCategory.count()
  const programCount = await db.post.count()
  const programCategoryCount = await db.postCategory.count()
  const totalComments = await db.comment.count()
  

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3  my-4  ">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>ጠቅላላ ዜናዎች </CardTitle>
            <Newspaper className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent className="flex items-center  gap-3">
            <p className="text-2xl font-bold">{newsCount}</p>
            <p className="text-sm text-muted-foreground">የዜና ርዕሶች</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle> የዜና መደብ</CardTitle>
            <Folder className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent className="flex items-center  gap-3">
            <p className="text-2xl font-bold">{newsCategoryCount}</p>
            <p className="text-sm text-muted-foreground">የዜና መደብ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>ጠቅላላ ፕሮግራም </CardTitle>
            <Folder className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent className="flex items-center  gap-3">
            <p className="text-2xl font-bold">{programCategoryCount}</p>
            <p className="text-sm text-muted-foreground"> ጠቅላላ ፕሮግራም</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle> የፕሮግራም ርዕሶች</CardTitle>
            <BrainCog className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent className="flex items-center  gap-3">
            <p className="text-2xl font-bold">{programCount}</p>
            <p className="text-sm text-muted-foreground">የፕሮግራም ርዕሶች</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle> ጠቅላላ አስተያየቶች</CardTitle>
            <BrainCog className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent className="flex items-center  gap-3">
            <p className="text-2xl font-bold">{totalComments}</p>
            <p className="text-sm text-muted-foreground">ጠቅላላ አስተያየቶች</p>
          </CardContent>
        </Card>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <ListofPopularNews />
      </Suspense>
    </div>
  );
};

export default AdminPage;
