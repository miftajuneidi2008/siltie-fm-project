import Image from "next/image";
import React from "react";
import i1 from "@/assets/images/p4.png";

const Comment = () => {
  return (
    <div className="my-2 flex flex-col gap-2">
      <form action="" className="flex gap-2 px-2">
        <textarea
          name="comment"
          placeholder="Your Comments.."
          className="w-[80%] rounded-md border-[1px] border-slate-400 px-2 py-1 focus:outline-none"
        />
        <button className="rounded-md bg-blue-600 px-4 py-1 text-white">
          Send
        </button>
      </form>
      <div className="my-2 flex flex-col gap-2">
        <div className="flex gap-2">
          <Image
            src={i1}
            width={50}
            height={50}
            alt="logo"
            className="h-12 w-12 rounded-full"
          />
          <p className="w-[80%] text-[14px] text-slate-600">
            Girmaa Amantee biqiltuu barana dhaabbattu keessaa harki 56 biqiltuu
            bu’aa gam-daneessa qaban ta’uu eeran. Badhaasoo Hayileetu gabaase.
          </p>
        </div>
        <div className="flex gap-2">
          <Image
            src={i1}
            width={50}
            height={50}
            alt="logo"
            className="h-12 w-12 rounded-full"
          />
          <p className="w-[80%] text-[14px] text-slate-600">
            Girmaa Amantee biqiltuu barana dhaabbattu keessaa harki 56 biqiltuu
            bu’aa gam-daneessa qaban ta’uu eeran. Badhaasoo Hayileetu gabaase.
          </p>
        </div>
        <div className="flex gap-2">
          <Image
            src={i1}
            width={50}
            height={50}
            alt="logo"
            className="h-12 w-12 rounded-full"
          />
          <p className="w-[80%] text-[14px] text-slate-600">
            Girmaa Amantee biqiltuu barana dhaabbattu keessaa harki 56 biqiltuu
            bu’aa gam-daneessa qaban ta’uu eeran. Badhaasoo Hayileetu gabaase.
          </p>
        </div>
        <div className="flex gap-2">
          <Image
            src={i1}
            width={50}
            height={50}
            alt="logo"
            className="h-12 w-12 rounded-full"
          />
          <p className="w-[80%] text-[14px] text-slate-600">
            Girmaa Amantee biqiltuu barana dhaabbattu keessaa harki 56 biqiltuu
            bu’aa gam-daneessa qaban ta’uu eeran. Badhaasoo Hayileetu gabaase.
          </p>
        </div>
        <div className="flex gap-2">
          <Image
            src={i1}
            width={50}
            height={50}
            alt="logo"
            className="h-12 w-12 rounded-full"
          />
          <p className="w-[80%] text-[14px] text-slate-600">
            Girmaa Amantee biqiltuu barana dhaabbattu keessaa harki 56 biqiltuu
            bu’aa gam-daneessa qaban ta’uu eeran. Badhaasoo Hayileetu gabaase.
          </p>
        </div>
        <div className="flex gap-2">
          <Image
            src={i1}
            width={50}
            height={50}
            alt="logo"
            className="h-12 w-12 rounded-full"
          />
          <p className="w-[80%] text-[14px] text-slate-600">
            Girmaa Amantee biqiltuu barana dhaabbattu keessaa harki 56 biqiltuu
            bu’aa gam-daneessa qaban ta’uu eeran. Badhaasoo Hayileetu gabaase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
