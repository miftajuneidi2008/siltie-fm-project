"use client";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { Play } from "lucide-react";
import React from "react";
import ReactPlayer from "react-player";
type videoProps = {
  category: string;
  title: string;
  url: string;
  date: string;
  className: ClassValue;
};
const VideoCategories = ({
  category,
  title,
  url,
  date,
  className,
}: videoProps) => {
  return (
    <div className="group flex cursor-pointer gap-6">
      <ReactPlayer
        url={url}
        width={100}
        height={100}
        controls
        light
        playIcon={
          <div className="bg-white px-2 py-2 text-red-700 hover:text-rose-500">
            <Play />
          </div>
        }
        className="my-4 h-[128px] w-[128px] max-sm:w-full"
      />
      <div className="flex flex-col gap-1">
        <h1 className={cn("w-max px-3 font-bold", className)}>{category}</h1>
        <h2 className="text-[15px] font-semibold group-hover:text-blue-600">
          {title}
        </h2>
        <p className="text-slate-500">{date}</p>
      </div>
    </div>
  );
};

export default VideoCategories;
