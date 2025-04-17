import { News } from "@prisma/client";
import { db } from "./prisma";

export async function getNewsData({ type }: { type?: string }):Promise<News[]>
{
  
  const latestNews = await db.news.findMany({
    where: {
      categoryTitle: {
        notIn: ["ስፖርት", "ቢዝነስ"],
      },
    },
    include: {
      comments: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  if (!latestNews) {
    return []
  }
  else if (type ==="ሁሉም" || type === undefined) {
    return latestNews
  }
 else  if (type) {
   const filteredNews = latestNews.filter(
      (news) => news.categoryTitle === type
    );
    return filteredNews
  }
 

  return latestNews

}
