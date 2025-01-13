import Image, { StaticImageData } from "next/image";
import React from "react";
type GridProp = {
  title: string;
  image: string | StaticImageData;
};
const Grid = ({ title, image }: GridProp) => {
  return (
    <div className="group mb-4 flex cursor-pointer flex-col gap-1">
      <Image
        src={image}
        width={200}
        height={200}
        alt="Logo"
        className="h-30 w-38 object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
      />
      <div>
        <p className="text-[15px] text-slate-600 group-hover:text-blue-600">
          {title}
        </p>
        <p className="text-[13px]">Oct 14, 2024</p>
      </div>
    </div>
  );
};

export default Grid;
