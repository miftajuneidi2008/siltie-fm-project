import React from "react";
import { Skeleton } from "../ui/skeleton";

const NewsSkeleton = () => {
  return (
    <div className="relative my-2 flex w-full flex-col gap-2">
      <div className="group relative h-[50vh] w-full cursor-pointer md:h-[55vh]">
        <Skeleton className="h-full w-full " />
      </div>
      <div className="flex gap-4 max-md:flex-col">
        <div className="mx-2 my-4 grid w-full gap-2 sm:grid-cols-2 sm:px-8 md:w-[70%]">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="mx-2 flex flex-col" key={index}>
              <Skeleton className="h-[300px] w-full object-cover sm:h-64" />
            </div>
          ))}
        </div>
        <div className="w-full max-md:px-2 md:w-[30%] ">
          <div className=" flex flex-col gap-2 md:sticky md:top-20">
            <h1 className="text-xl font-bold text-indigo-600">በብዛት የተነበቡ</h1>
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="flex gap-1" key={index}>
                <Skeleton className="h-16 w-20" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSkeleton;
