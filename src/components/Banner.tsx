import React from "react";
import b1 from "@/assets/images/p1.png";
import b2 from "@/assets/images/p2.png";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="z-0 my-2 flex w-full gap-1 max-md:flex-col md:h-[60vh]">
      <div className="relative w-full md:w-[60%]">
        <Image
          src={b1}
          width={500}
          height={500}
          alt="b1"
          className="h-full w-full rounded-md object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 flex w-full flex-col justify-end bg-black/20">
          <div className="mx-auto flex max-w-[600px] flex-col py-4 text-white">
            <h1 className="text-xl font-bold md:text-2xl">
              የካፒታል ገበያው ጅማሬ የህዝቡን ተጠቃሚነት የሚያሳድግ ድንቅ ክዋኔ ነው – ም/ጠ/ሚ ተመስገን ጥሩነህ
            </h1>
            <p className="px-3 text-slate-300">Oct 17,2024</p>
          </div>
        </div>
      </div>
      <div className="grid h-full gap-[1px] sm:grid-cols-2 md:w-[40%] md:grid-cols-1">
        <div className="relative h-64 w-full md:h-[30vh]">
          <Image
            src={b2}
            width={128}
            height={128}
            alt="b2"
            className="animation h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 flex w-full flex-col justify-end bg-black/20">
            <div className="mx-auto flex max-w-[600px] flex-col px-3 py-4 text-white">
              <h1 className="font-bold">
                የካፒታል ገበያው ጅማሬ የህዝቡን ተጠቃሚነት የሚያሳድግ ድንቅ ክዋኔ ነው – ም/ጠ/ሚ ተመስገን ጥሩነህ
              </h1>
              <p className="px-3 text-slate-300">Oct 17,2024</p>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full cursor-pointer md:h-[30vh]">
          <Image
            src={b1}
            width={128}
            height={128}
            alt="b2"
            className="h-full w-full object-cover hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 flex w-full flex-col justify-end bg-black/20">
            <div className="mx-auto flex max-w-[600px] flex-col px-3 py-4 text-white">
              <h1 className="font-bold">
                የካፒታል ገበያው ጅማሬ የህዝቡን ተጠቃሚነት የሚያሳድግ ድንቅ ክዋኔ ነው – ም/ጠ/ሚ ተመስገን ጥሩነህ
              </h1>
              <p className="px-3 text-slate-300">Oct 17,2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
