import Image, { StaticImageData } from "next/image";
import React from "react";
type newsProps = {
  title: string;
  image: string | StaticImageData;
};
const News = ({ title, image }: newsProps) => {
  return (
    <div className="flex flex-col gap-2 shadow-sm">
      <div className="flex items-center gap-1">
        <div className="h-4 w-4 bg-indigo-400"></div>
        <h1 className="px-3 text-xl font-semibold">{title}</h1>
      </div>
      <div className="group cursor-pointer pt-1">
        <Image
          src={image}
          width={400}
          height={400}
          alt="image"
          className="transition-all duration-300 ease-in-out group-hover:scale-105"
        />
        <p className="px-1 py-1 text-[15px] group-hover:text-blue-600">
          የኢትዮጵያ እና የጀርመን ልማት ባንኮችን ትብብር ለማጠናከር ያለመ ምክክር ተካሄደ
        </p>
        <p className="text-[14px]">Oct 18, 2024</p>
      </div>
      <div className="group my-2 flex w-full cursor-pointer gap-1">
        <Image
          src={image}
          width={128}
          height={128}
          alt="image"
          className="h-16 w-20 transition-all duration-300 ease-in-out group-hover:scale-105"
        />
        <div>
          <p className="text-[15px] text-slate-500 group-hover:text-blue-600">
            የኢትዮጵያ እና የጀርመን ልማት ባንኮችን ትብብር ለማጠናከር ያለመ ምክክር ተካሄደ
          </p>

          <p className="text-[12px]">Oct 18, 2024</p>
        </div>
      </div>

      <div className="group my-2 flex w-full cursor-pointer gap-1">
        <Image
          src={image}
          width={128}
          height={128}
          alt="image"
          className="h-16 w-20 transition-all duration-300 ease-in-out group-hover:scale-105"
        />
        <div>
          <p className="text-[15px] text-slate-500 group-hover:text-blue-600">
            የኢትዮጵያ እና የጀርመን ልማት ባንኮችን ትብብር ለማጠናከር ያለመ ምክክር ተካሄደ
          </p>

          <p className="text-[12px]">Oct 18, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default News;
