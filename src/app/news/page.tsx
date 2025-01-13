import Container from "@/components/Container";
import React from "react";
import i1 from "@/assets/images/p2.png";
import Image from "next/image";
import { programmes } from "@/components/data";
import Link from "next/link";
const NewsPage = () => {
  return (
    <Container>
      <div className="relative my-2 flex w-full flex-col gap-2">
        <div className="group relative h-[50vh] w-full cursor-pointer md:h-[55vh]">
          <Image
            src={i1}
            width={500}
            height={500}
            alt="Image1"
            className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-95"
          />
          <div className="absolute top-0 flex h-full w-full flex-col items-center justify-end bg-black/40 text-white transition-all duration-300 ease-in-out group-hover:scale-95">
            <h1 className="mb-4 font-bold max-sm:text-xl sm:text-2xl">
              ጠቅላይ ሚኒስትር ዐቢይ አሕመድ (ዶ/ር) ለብሪክስ ጉባዔ ሩሲያ ይገኛሉ
            </h1>
          </div>
        </div>
        <div className="my-1 flex gap-2 px-4">
          <h1 className="font-semibold">Filter News</h1>
          <form action="">
            <select name="type" id="type">
              <option value="siltie">Siltie</option>
              <option value="centeral">Centeral Ethiopia</option>
              <option value="ethiopia">Ethiopia</option>
              <option value="africa">Africa</option>
              <option value="world">World</option>
            </select>
          </form>
        </div>
        <div className="flex gap-4 max-md:flex-col">
          <div className="mx-2 my-4 grid w-full gap-2 sm:grid-cols-2 sm:px-8 md:w-[70%]">
            {programmes.map((program) => (
              <Link
                className="mx-2 flex cursor-pointer flex-col"
                key={program.name}
                href={`/post/12345`}
              >
                <Image
                  src={program.image}
                  width={200}
                  height={200}
                  alt={program.name}
                  className="h-[300px] w-full object-cover sm:h-64"
                />
                <h1 className="text-[17px] font-bold sm:max-w-[256px]">
                  {" "}
                  ጠቅላይ ሚኒስትር ዐቢይ አሕመድ (ዶ/ር) ለብሪክስ ጉባዔ ሩሲያ ይገኛሉ
                </h1>
                <p className="w-[90%] text-[14px] sm:max-w-[256px]">
                  OBN Cyber Media Hagayya 30/2016 - Daangaan biyya keenyaa akka
                  hin sarbamne akkuma kaleessaa har’as raayyaa ...
                </p>
              </Link>
            ))}
          </div>
          <div className="w-full max-md:px-2 md:w-[30%]">
            <div className="top-20 flex flex-col gap-2 md:sticky">
              <h1 className="text-xl font-bold text-indigo-600">
                Popular News
              </h1>
              <div className="flex gap-1">
                <Image
                  src={i1}
                  width={50}
                  height={50}
                  alt="Image1"
                  className="h-16 w-20 object-cover"
                />
                <p> ጠቅላይ ሚኒስትር ዐቢይ አሕመድ (ዶ/ር) ለብሪክስ ጉባዔ ሩሲያ ይገኛሉ</p>
              </div>
              <div className="flex gap-1">
                <Image
                  src={i1}
                  width={50}
                  height={50}
                  alt="Image1"
                  className="h-16 w-20 object-cover"
                />
                <p> ጠቅላይ ሚኒስትር ዐቢይ አሕመድ (ዶ/ር) ለብሪክስ ጉባዔ ሩሲያ ይገኛሉ</p>
              </div>
              <div className="flex gap-1">
                <Image
                  src={i1}
                  width={50}
                  height={50}
                  alt="Image1"
                  className="h-16 w-20 object-cover"
                />
                <p> ጠቅላይ ሚኒስትር ዐቢይ አሕመድ (ዶ/ር) ለብሪክስ ጉባዔ ሩሲያ ይገኛሉ</p>
              </div>
              <div className="flex gap-1">
                <Image
                  src={i1}
                  width={50}
                  height={50}
                  alt="Image1"
                  className="h-16 w-20 object-cover"
                />
                <p> ጠቅላይ ሚኒስትር ዐቢይ አሕመድ (ዶ/ር) ለብሪክስ ጉባዔ ሩሲያ ይገኛሉ</p>
              </div>
              <div className="flex gap-1">
                <Image
                  src={i1}
                  width={50}
                  height={50}
                  alt="Image1"
                  className="h-16 w-20 object-cover"
                />
                <p> ጠቅላይ ሚኒስትር ዐቢይ አሕመድ (ዶ/ር) ለብሪክስ ጉባዔ ሩሲያ ይገኛሉ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsPage;
