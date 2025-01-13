import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Image, { StaticImageData } from "next/image";
import React from "react";
type NewsCardProps = {
  area: string;
  title: string;
  image: string | StaticImageData;
  date: string;
  classname: ClassValue;
};
const NewsCard = ({ area, title, image, date, classname }: NewsCardProps) => {
  return (
    <div className="group flex cursor-pointer gap-6">
      <Image
        src={image}
        width={200}
        height={200}
        alt="Image"
        className="transform transition-all duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="flex flex-col gap-2">
        <h1
          className={cn(
            "w-max bg-indigo-500 px-3 py-[2px] font-bold text-white",
            classname,
          )}
        >
          {area}
        </h1>
        <h2 className="text-[15px] font-semibold group-hover:text-blue-600">
          {title}
        </h2>
        <p className="text-slate-500">{date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
