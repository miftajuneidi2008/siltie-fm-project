import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Filters from '../Filters';
import i1 from "@/assets/images/p2.png";
import { getNewsData } from '@/lib/fetchNews';
import formatDate from '@/lib/DateFormater';

const ReadNews = async({type}:{type:string}) => {
const latestNews = await getNewsData({ type: type });

  return !latestNews || latestNews.length === 0 ? (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-xl md:text-2xl font-bold">ምንም ዜና የለም</p>
    </div>
  ) : (
    <div className="relative my-2 flex w-full flex-col gap-2">
      <div className="group relative h-[50vh] w-full cursor-pointer md:h-[55vh]">
        <Image
          src={`/api/image?path=${encodeURIComponent(latestNews[0]?.image)}`}
          width={500}
          height={500}
          alt="Image1"
          className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-95"
        />
        <div className="absolute top-0 flex h-full w-full flex-col items-center justify-end bg-black/40 text-white transition-all duration-300 ease-in-out group-hover:scale-95">
          <h1 className=" font-bold max-sm:text-xl sm:text-2xl">
            {latestNews[0]?.title}
          </h1>
          <p className="mb-4">{formatDate(latestNews[0]?.createdAt)}</p>
        </div>
      </div>

      <div className="my-1 flex items-center gap-2 px-4">
        <h1 className="font-semibold">ዜና አጣራ</h1>

        <Filters />
      </div>
      <div className="flex gap-4 max-md:flex-col">
        <div className="mx-2 my-4 grid w-full gap-2 sm:grid-cols-2 sm:px-8 md:w-[70%]">
          {latestNews.map((news) => (
            <Link
              className="mx-2 flex cursor-pointer flex-col"
              key={news.id}
              href={`/post/${news.id}`}
            >
              <Image
                src={`/api/image?path=${encodeURIComponent(news.image)}`}
                width={200}
                height={200}
                alt={news.title}
                className="h-[300px] w-full object-cover sm:h-64"
              />
              <h1 className="text-[17px] font-bold "> {news.title}</h1>
            </Link>
          ))}
        </div>
        <div className="w-full max-md:px-2 md:w-[30%] ">
          <div className=" flex flex-col gap-2 md:sticky md:top-20">
            <h1 className="text-xl font-bold text-indigo-600">በብዛት የተነበቡ</h1>
            <div className="flex gap-1 ">
              <Image
                src={i1}
                width={50}
                height={50}
                alt="Image1"
                className="h-16 w-20 object-cover"
              />
              <p> ጠቅላይ ሚኒስትር ዐቢይ አሕመድ (ዶ/ር) ለብሪክስ ጉባዔ ሩሲያ ይገኛሉ</p>
            </div>
            <div className="flex gap-1">
              <Image
                src={i1}
                width={50}
                height={50}
                alt="Image1"
                className="h-16 w-20 object-cover"
              />
              <p> ጠቅላይ ሚኒስትር ዐቢይ አሕመድ (ዶ/ር) ለብሪክስ ጉባዔ ሩሲያ ይገኛሉ</p>
            </div>
            <div className="flex gap-1">
              <Image
                src={i1}
                width={50}
                height={50}
                alt="Image1"
                className="h-16 w-20 object-cover"
              />
              <p> ጠቅላይ ሚኒስትር ዐቢይ አሕመድ (ዶ/ር) ለብሪክስ ጉባዔ ሩሲያ ይገኛሉ</p>
            </div>
            <div className="flex gap-1">
              <Image
                src={i1}
                width={50}
                height={50}
                alt="Image1"
                className="h-16 w-20 object-cover"
              />
              <p> ጠቅላይ ሚኒስትር ዐቢይ አሕመድ (ዶ/ር) ለብሪክስ ጉባዔ ሩሲያ ይገኛሉ</p>
            </div>
            <div className="flex gap-1">
              <Image
                src={i1}
                width={50}
                height={50}
                alt="Image1"
                className="h-16 w-20 object-cover"
              />
              <p> ጠቅላይ ሚኒስትር ዐቢይ አሕመድ (ዶ/ር) ለብሪክስ ጉባዔ ሩሲያ ይገኛሉ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadNews