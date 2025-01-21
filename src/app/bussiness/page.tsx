import Container from "@/components/Container";
import React from "react";
import bussi from "@/assets/images/pexel.jpg";
import Image from "next/image";
import { programmes } from "@/components/data";
import Link from "next/link";
const BussinessPage = () => {
  return (
    <Container>
      <div className="my-2 flex flex-col gap-2">
        <div className="flex h-[30vh] w-full items-center justify-center bg-slate-200">
          <h1 className="text-xl font-bold md:text-2xl">የቢዝነስ ዘገባዎች </h1>
        </div>
        <div className="mx-4 flex gap-2">
          <div className="w-[60%]">
            {programmes.map((prog) => (
              <Link className="my-4 flex gap-4" key={prog.name} href={`/`}>
                <Image
                  src={prog.image}
                  width={400}
                  height={400}
                  alt="Images"
                  className="h-64 w-[300px] object-cover max-sm:hidden"
                />
                <div className="flex flex-col gap-2">
                  <p className="max-w-sm font-semibold">
                    በ32 ቀናት በኢትዮጵያ ንግድ ባንክ ዲጂታል የክፍያ አማራጮች ከ828 ቢሊየን ብር በላይ ዝውውር
                    ተፈጸመ
                  </p>
                  <p className="text-slate-500">Oct 14, 2024</p>
                  <p>
                    አዲስ አበባ፣ ጥቅምት 5፣ 2017 (ኤፍ ቢ ሲ) ከነሐሴ 30 ቀን 2016 ዓ.ም እስከ መስከረም
                    26 ቀን 2017 ዓ.ም ባሉት ቀናት በኢትዮጵያ ንግድ ባንክ ዲጂታል የክፍያ አማራጮች በተከናወኑ
                    ግብይቶች 828 ቢሊየን 549 ሚሊየን 614 ሺህ 770 ብር ዝውውር መፈጸሙ ተገለፀ፡፡
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-[40%]">
            <div className="top-20 flex flex-col items-center md:sticky">
              <div className="flex w-full items-center justify-center">
                <h1 className="flex w-max justify-center bg-pink-500 px-3 py-1 text-center text-white">
                  Popular News
                </h1>
              </div>
              <div className="relative my-2 h-64 w-full md:w-[70%]">
                <Image
                  src={bussi}
                  width={400}
                  height={400}
                  alt="Images"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-0 flex h-full w-full flex-col items-center justify-end bg-black/50 text-white">
                  <h1 className="text-center text-[14px]">
                    {" "}
                    በ32 ቀናት በኢትዮጵያ ንግድ ባንክ ዲጂታል የክፍያ አማራጮች ከ828 ቢሊየን ብር
                  </h1>
                  <p className="text-[14px] text-slate-300"> Oct 14,2024</p>
                </div>
              </div>

              <div className="relative my-2 h-64 w-full md:w-[70%]">
                <Image
                  src={bussi}
                  width={400}
                  height={400}
                  alt="Images"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-0 flex h-full w-full flex-col items-center justify-end bg-black/50 text-white">
                  <h1 className="text-center text-[14px]">
                    {" "}
                    በ32 ቀናት በኢትዮጵያ ንግድ ባንክ ዲጂታል የክፍያ አማራጮች ከ828 ቢሊየን ብር
                  </h1>
                  <p className="text-[14px] text-slate-300"> Oct 14,2024</p>
                </div>
              </div>

              <div className="relative my-2 h-64 w-full md:w-[70%]">
                <Image
                  src={bussi}
                  width={400}
                  height={400}
                  alt="Images"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-0 flex h-full w-full flex-col items-center justify-end bg-black/50 text-white">
                  <h1 className="text-center text-[14px]">
                    {" "}
                    በ32 ቀናት በኢትዮጵያ ንግድ ባንክ ዲጂታል የክፍያ አማራጮች ከ828 ቢሊየን ብር
                  </h1>
                  <p className="text-[14px] text-slate-300"> Oct 14,2024</p>
                </div>
              </div>

              <div className="relative my-2 h-64 w-full md:w-[70%]">
                <Image
                  src={bussi}
                  width={400}
                  height={400}
                  alt="Images"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-0 flex h-full w-full flex-col items-center justify-end bg-black/50 text-white">
                  <h1 className="text-center text-[14px]">
                    {" "}
                    በ32 ቀናት በኢትዮጵያ ንግድ ባንክ ዲጂታል የክፍያ አማራጮች ከ828 ቢሊየን ብር
                  </h1>
                  <p className="text-[14px] text-slate-300"> Oct 14,2024</p>
                </div>
              </div>
              <div className="relative my-2 h-64 w-full md:w-[70%]">
                <Image
                  src={bussi}
                  width={400}
                  height={400}
                  alt="Images"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-0 flex h-full w-full flex-col items-center justify-end bg-black/50 text-white">
                  <h1 className="text-center text-[14px]">
                    {" "}
                    በ32 ቀናት በኢትዮጵያ ንግድ ባንክ ዲጂታል የክፍያ አማራጮች ከ828 ቢሊየን ብር
                  </h1>
                  <p className="text-[14px] text-slate-300"> Oct 14,2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BussinessPage;
