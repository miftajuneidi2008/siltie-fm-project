import React from "react";
import { Skeleton } from "../ui/skeleton";

const NewscollectionSkeleton = () => {
  return (
    <div className="mx-auto my-8 grid grid-cols-1 gap-4 max-sm:my-4 max-sm:max-w-[90%] md:grid-cols-2 md:gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div className="group flex cursor-pointer gap-6 my-8 sm:my-0" key={i}>
          <Skeleton className="h-[200px] w-[200px] hidden sm:block"/>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-40" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewscollectionSkeleton;
