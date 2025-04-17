import Container from "@/components/Container";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Comment from "@/components/Comment";
import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params;

  // fetch data
  const product = await db.news.findUnique({ where: { id: id } });

  if (!product)
  {
    return {
      title:null
    };
  }
 
   return {
     title: product.title as string,
   };


}

const PostDetail = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ type: string }>;
}) => {
  const { id } = await params;
  const type = (await searchParams).type;

  const news = await db.news.findUnique({ where: { id: id } });

  if (!news) {
    return notFound();
  }
  await db.news.update({
    where: { id: id },
    data: { viewed: news?.viewed + 1 },
  });

  return (
    <Container>
      <div className="mx-auto my-2 flex w-full flex-col md:max-w-[90%]">
        <div className="h-[40vh] md:h-[65vh]">
          <Image
            src={`/api/image?path=${encodeURIComponent(news.image)}`}
            width={1000}
            height={800}
            alt="logo"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div className="my-2 flex gap-2 max-sm:flex-col mx-2 md:mx-0">
          <div className="flex w-full flex-col gap-2 sm:w-[75%]">
            <h1 className="text-xl font-bold">{news.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: news.description }}
              className="max-w-[800px] text-[14px] leading-7 text-slate-600 dark:text-slate-300 max-sm:w-full"
            />

            <div className="flex gap-2 items-center flex-wrap">
              <p className="flex gap-1 py-1 px-1 border border-slate-300 rounded-md">
                share <Share2 strokeWidth={1} />
              </p>
              <Button
                variant="outline"
                className="flex items-center gap-[1px] px-1 py-0"
              >
                <div className="bg-sky-600">
                  <Image
                    src={`/facebook.png`}
                    width={20}
                    height={20}
                    alt="facebook"
                    className="h-full"
                  />
                </div>
                <span className="text-[13px] text-slate-600">Facebook</span>
              </Button>

              <Button
                variant="outline"
                className="flex items-center gap-[1px] px-1 py-0"
              >
                <div className="bg-sky-600">
                  <Image
                    src={`/twitter.png`}
                    width={20}
                    height={20}
                    alt="facebook"
                    className="h-full"
                  />
                </div>
                <span className="text-[13px] text-slate-600">Twitter</span>
              </Button>

              <Button
                variant="outline"
                className="flex items-center gap-[1px] px-1 py-0"
              >
                <div className="bg-sky-600">
                  <Image
                    src={`/telegram.png`}
                    width={20}
                    height={20}
                    alt="facebook"
                    className="h-full"
                  />
                </div>
                <span className="text-[13px] text-slate-600">Telegram</span>
              </Button>
            </div>

            <Comment newsId={id} type={type} />
          </div>
          <div className="w-full sm:w-[25%]">
            <div className="top-20 flex flex-col gap-2 sm:sticky">
              <h1 className="px-1 text-[18px] font-bold sm:px-8">
                Similar News
              </h1>
              <div className="flex flex-col gap-2">
                <Link href={`/`} className="text-blue-600">
                  {" "}
                  ጠቅላይ ሚኒስትር ዐቢይ አሕመድ (ዶ/ር) ለብሪክስ ጉባዔ ሩሲያ ይገኛሉ
                </Link>
                <Link href={`/`} className="text-blue-600">
                  {" "}
                  ጠቅላይ ሚኒስትር ዐቢይ አሕመድ (ዶ/ር) ለብሪክስ ጉባዔ ሩሲያ ይገኛሉ
                </Link>
                <Link href={`/`} className="text-blue-600">
                  {" "}
                  ጠቅላይ ሚኒስትር ዐቢይ አሕመድ (ዶ/ር) ለብሪክስ ጉባዔ ሩሲያ ይገኛሉ
                </Link>
                <Link href={`/`} className="text-blue-600">
                  {" "}
                  ጠቅላይ ሚኒስትር ዐቢይ አሕመድ (ዶ/ር) ለብሪክስ ጉባዔ ሩሲያ ይገኛሉ
                </Link>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PostDetail;
