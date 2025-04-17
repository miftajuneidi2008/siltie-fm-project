import Container from "@/components/Container";
import { db } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const ProgramDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const decodedId = decodeURIComponent(id);
  const program = await db.postCategory.findMany({
    where: {
      title: decodedId,
    },
    include: {
      posts: true,
    },
  });
 
  if (!program) {
    return notFound();
  }
  return (
    <Container className="my-2">
      <div className="relative w-full h-32 md:h-64">
        <Image
          src={`/api/image?path=${encodeURIComponent(program[0].image)}`}
          layout="fill"
          objectFit="cover"
          alt={program[0].title}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full flex flex-col items-center justify-center bg-black/70">
          <div className="flex flex-col items-center justify-center text-white">
            <h1 className="text-center font-bold">{program[0].title}</h1>
            <p className="max-w-2xl text-center">{program[0].description}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProgramDetail;
