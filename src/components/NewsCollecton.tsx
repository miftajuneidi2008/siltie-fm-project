import React from "react";

import NewsCard from "./NewsCard";
import { db } from "@/lib/prisma";
import formatDate from "@/lib/DateFormater";
const NewsColor = (category: string) => {
  const color =
    category === "ስልጤ"
      ? "bg-indigo-600"
      : category === "ኢትዮጵያ"
      ? "bg-sky-600"
      : category === "አፍሪካ"
      ? "bg-green-400"
      : category === "ዓለም"
      ? "bg-cyan-400"
      : category === "ቢዝነስ"
      ? "bg-teal-400"
      : category === "bg-orange-600"
      ? "bg-orange-600"
      : "bg-fuchsia-400";
  return color;
};
const NewsCollecton = async () => {
  const categories = ["ስልጤ", "ኢትዮጵያ", "አፍሪካ", "ዓለም", "ቢዝነስ", "ስፖርት"];
  const latestNewsByCategory = await Promise.all(
    categories.map(async (category) => {
      return await db.news.findFirst({
        where: { categoryTitle: category },
        orderBy: { createdAt: "desc" },
      });
    })
  );


  return (
    <div className="my-4 md:py-10">
      <h1 className="text-xl font-bold">የቅርብ ጊዜ ዜናዎች</h1>
      <div className="h-1 w-20 bg-indigo-700 ml-2 sm:ml-0"></div>
      <div className="mx-auto my-8 grid grid-cols-1 gap-4 max-sm:my-4 max-sm:max-w-[95%] md:grid-cols-2 md:gap-8">
        {latestNewsByCategory && latestNewsByCategory.map((news) => {
          const color = NewsColor(news?.categoryTitle as string);

          return (
           news?.id?(
              <NewsCard
              key={news?.id}
                id={news?.id as string}
                area={news?.categoryTitle as string}
                title={news?.title as string}
                image={news?.image as string}
                date={formatDate(news?.createdAt)}
                classname={color}
              />
           ):null
           
          );
        })}
      </div>
    </div>
  );
};

export default NewsCollecton;
