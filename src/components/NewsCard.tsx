import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type NewsCardProps = {
  id:string;
  area: string;
  title: string;
  image: string;
  date: string;
  classname: string;
};
const NewsCard = ({ id,area, title, image, date, classname }: NewsCardProps) => {
  return (
    <Link
      href={`/post/${id}`}
      className="group flex cursor-pointer gap-6"
   
    >
      <Image
        src={`/api/image?path=${encodeURIComponent(image)}`}
        width={200}
        height={200}
        alt="Image"
        className="transform transition-all duration-300 ease-in-out group-hover:scale-105 hidden sm:block"
      />
      <div className="flex flex-col gap-2">
        <h1
          className={cn(
            "w-max bg-indigo-500 px-3 py-[2px] font-bold text-white",
            classname
          )}
        >
          {area}
        </h1>
        <h2 className="text-[15px] font-semibold group-hover:text-blue-600">
          {title}
        </h2>
        <p className="text-slate-500">{date}</p>
      </div>
    </Link>
  );
};

export default NewsCard;
