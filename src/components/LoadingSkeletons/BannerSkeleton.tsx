import React from "react";
import { Skeleton } from "../ui/skeleton";

const BannerSkeleton = () => {
  return (
    <div className="z-0 my-2 flex w-full gap-1 max-md:flex-col md:h-[60vh]">
      <div className="relative w-full md:w-[60%]">
        <Skeleton className="h-full w-full rounded-xl" />
      </div>

      <div className="grid h-full gap-[1px] sm:grid-cols-2 md:w-[40%] md:grid-cols-1">
        <div className="relative h-64 w-full md:h-[30vh]">
          <Skeleton className="h-full w-full rounded-xl" />
        </div>
        <div className="relative h-64 w-full cursor-pointer md:h-[30vh]">
          <Skeleton className="h-full w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default BannerSkeleton;
