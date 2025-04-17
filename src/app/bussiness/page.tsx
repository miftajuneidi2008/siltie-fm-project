import Container from "@/components/Container";
import React from "react";
import bussi from "@/assets/images/pexel.jpg";
import Image from "next/image";
import { programmes } from "@/components/data";
import Link from "next/link";
import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import formatDate from "@/lib/DateFormater";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ቢዝነስ",
};
const BussinessPage = async () => {
  const bussiness = await db.news.findMany({
    where: { categoryTitle: "ቢዝነስ" },
  });
  if (!bussiness) {
    return (
      <div className="flex w-full h-screen flex-col items-center justify-center">
        <h1>No Data</h1>
      </div>
    );
  }
  console.log(bussiness.length);
  return (
    <Container>
      {bussiness.length > 0 ? (
        <div className="my-2 flex flex-col gap-2">
          <div className="flex h-[30vh] w-full items-center justify-center bg-slate-200 relative">
            <Image
              src={`/api/image?path=${encodeURIComponent(bussiness[0].image)}`}
              fill
              alt={bussiness[0].title}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black/50">
              <h1 className="text-xl font-bold md:text-2xl text-white">
                የቢዝነስ ዘገባዎች{" "}
              </h1>
            </div>
          </div>
          <div className="mx-4 flex gap-2">
            <div className="w-[60%]">
              {bussiness.map((bussiness) => (
                <Link
                  className="my-4 flex gap-4 group"
                  key={bussiness.id}
                  href={`/post/${bussiness.id}`}
                >
                  <Image
                    src={`/api/image?path=${encodeURIComponent(
                      bussiness.image
                    )}`}
                    width={400}
                    height={400}
                    alt="Images"
                    className="h-64 w-[300px] object-cover max-sm:hidden"
                  />
                  <div className="flex flex-col gap-2 ">
                    <p className="max-w-sm font-semibold group-hover:text-blue-600 transition-all ease-in-out duration-300">
                      {bussiness.title}
                    </p>
                    <p className="text-slate-500">
                      {formatDate(bussiness.createdAt)}
                    </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: bussiness.description.substring(0, 100),
                      }}
                    />
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
                {Array.from({ length: 4 }).map((_, index) => (
                  <div className="relative my-2 h-64 w-full md:w-[70%]" key={index}>
                    <Image
                      src={bussi}
                      width={200}
                      height={200}
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
                ))}

              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-full flex justify-center items-center px-8 py-8">
          <p className="text-xl font-bold">ምንም ዳታ የለም</p>
        </div>
      )}
    </Container>
  );
};

export default BussinessPage;
