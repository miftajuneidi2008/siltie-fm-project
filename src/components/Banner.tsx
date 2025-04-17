import React from "react";

import Image from "next/image";
import { db } from "@/lib/prisma";
import Link from "next/link";
import formatDate from "@/lib/DateFormater";
import path from "path";

const Banner = async () => {
  const latestNews = await db.news.findMany({
    where: {
      categoryTitle: {
        notIn: ["ስፖርት", "ቢዝነስ"],
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return (
    <div className="z-0 my-2 flex w-full gap-1 max-md:flex-col md:h-[60vh]">
      {latestNews[0]?.id && (
        <Link
          href={`/post/${latestNews[0]?.id}`}
          className="relative w-full md:w-[60%]"
        >
          <Image
            src={`/api/image?path=${encodeURIComponent(latestNews[0]?.image)}`}
            width={500}
            height={500}
            alt="b1"
            className="h-full w-full rounded-md object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 flex w-full flex-col justify-end bg-black/20 group">
            <div className="mx-auto flex max-w-[600px] flex-col py-4 text-white">
              <h1 className="text-sm font-bold md:text-2xl group-hover:scale-105 transition-all ease-in-out duration-300">
                {latestNews[0]?.title}
              </h1>
              <p className="px-3 text-slate-300">
                {formatDate(latestNews[0]?.createdAt)}
              </p>
            </div>
          </div>
        </Link>
      )}

      <div className="grid h-full gap-[2px] sm:grid-cols-2 md:w-[40%] md:grid-cols-1">
        {latestNews[1]?.id && (
          <Link
            href={`/post/${latestNews[1]?.id}`}
            className="relative h-64 w-full md:h-[30vh]"
          >
            <Image
              src={`/api/image?path=${encodeURIComponent(
                latestNews[1]?.image
              )}`}
              width={128}
              height={128}
              alt="b2"
              className="animation h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 flex w-full flex-col justify-end bg-black/20 group">
              <div className="mx-auto flex max-w-[600px] flex-col px-3 py-4 text-white">
                <h1 className="font-bold text-sm md:text-xl group-hover:scale-105 transition-all ease-in-out duration-300">
                  {latestNews[1]?.title}
                </h1>
                <p className="px-3 text-slate-300">
                  {formatDate(latestNews[1]?.createdAt)}
                </p>
              </div>
            </div>
          </Link>
        )}

        {latestNews[2]?.id && (
          <Link
            href={`/post/${latestNews[2]?.id}`}
            className="relative h-64 w-full cursor-pointer md:h-[30vh]"
          >
            <Image
              src={`/api/image?path=${encodeURIComponent(
                latestNews[2]?.image
              )}`}
              width={128}
              height={128}
              alt="b2"
              className="h-full w-full object-cover hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 flex w-full flex-col justify-end bg-black/20 group">
              <div className="mx-auto flex max-w-[600px] flex-col px-3 py-4 text-white">
                <h1 className="font-bold text-sm md:text-xl group-hover:scale-105 transition-all ease-in-out duration-300">
                  {latestNews[2]?.title}
                </h1>
                <p className="px-3 text-slate-300">
                  {formatDate(latestNews[2]?.createdAt)}
                </p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Banner;
