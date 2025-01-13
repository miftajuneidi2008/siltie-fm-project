import Container from "@/components/Container";
import React from "react";
import i1 from "@/assets/images/p4.png";
import Image from "next/image";
import Link from "next/link";
import Comment from "@/components/Comment";

const PostDetail =async({ params }: { params: Promise<{id:string}>} ) => {
  const { id } = await params;
  return (
    <Container>
      <div className="mx-auto my-2 flex w-full flex-col md:max-w-[90%]">
        <div className="h-[40vh] md:h-[65vh]">
          <Image
            src={i1}
            width={1000}
            height={800}
            alt="logo"
            className="h-full w-full rounded-md"
          />
        </div>
        <div className="my-2 flex gap-2 max-sm:flex-col">
          <div className="flex w-full flex-col gap-2 sm:w-[75%]">
            <h1 className="text-xl font-bold">
              ሂዝቦላህ በሰሜን እስራኤል የሮኬት ጥቃት መፈጸሙን አስታወቀ {id}
            </h1>
            <p className="max-w-[800px] text-[14px] leading-7 text-slate-600 max-sm:w-full">
              Ummattoonni biyyattii sagantaa dhaabbii biqiltuu Hagayya 17 bara
              2016 guutuu biyyaatti qophaa’u irratti akka hirmaatan waamichi
              dhihaate. OBN Cyber Hagayya 15/2016 – Ministirri Qonnaa Dr. Girmaa
              Amanteefi Ministir deetaan ministeera Tajaajila kominikeeshiinii
              Mootummaa Salaamaawwit Kaasaa dhaabbii biqiltuu guyyaa tokkoo
              ilaalchisuun ibsa kennaniiru. Hagayya 17/2016 biqiltuun miiliyoona
              600 guutuu biyyaatti dhaabama. Itoophiyaanonni yoo tokkummaan
              ka’an, raajii hojjechuu danda’u kan jedhan, Ministir deetaan
              Ministeera Tajaajila Kominikeeshiinii Mootummaa Salaamaawwit
              Kaasaa, dhaabbiin biqiltuu guyyaa tokkoo ganama sa’aatii 12:00
              hanga galgala sa’atii 12:00’tti kan turu ta’uu eeran. Ministirri
              Qonnaa Dr. Girmaa Amantee biqiltuu barana dhaabbattu keessaa harki
              56 biqiltuu bu’aa gam-daneessa qaban ta’uu eeran. Badhaasoo
              Hayileetu gabaase.raajii hojjechuu danda’u kan jedhan, Ministir
              deetaan Ministeera Tajaajila Kominikeeshiinii Mootummaa
              Salaamaawwit Kaasaa, dhaabbiin biqiltuu guyyaa tokkoo ganama
              sa’aatii 12:00 hanga galgala sa’atii 12:00’tti kan turu ta’uu
              eeran. Ministirri Qonnaa Dr. Girmaa Amantee biqiltuu barana
              dhaabbattu keessaa harki 56 biqiltuu bu’aa gam-daneessa qaban
              ta’uu eeran. Badhaasoo Hayileetu gabaase. raajii hojjechuu danda’u
              kan jedhan, Ministir deetaan Ministeera Tajaajila Kominikeeshiinii
              Mootummaa Salaamaawwit Kaasaa, dhaabbiin biqiltuu guyyaa tokkoo
              ganama sa’aatii 12:00 hanga galgala sa’atii 12:00’tti kan turu
              ta’uu eeran. Ministirri Qonnaa Dr. Girmaa Amantee biqiltuu barana
              dhaabbattu keessaa harki 56 biqiltuu bu’aa gam-daneessa qaban
              ta’uu eeran. Badhaasoo Hayileetu gabaase. raajii hojjechuu danda’u
              kan jedhan, Ministir deetaan Ministeera Tajaajila Kominikeeshiinii
              Mootummaa Salaamaawwit Kaasaa, dhaabbiin biqiltuu guyyaa tokkoo
              ganama sa’aatii 12:00 hanga galgala sa’atii 12:00’tti kan turu
              ta’uu eeran. Ministirri Qonnaa Dr. Girmaa Amantee biqiltuu barana
              dhaabbattu keessaa harki 56 biqiltuu bu’aa gam-daneessa qaban
              ta’uu eeran. Badhaasoo Hayileetu gabaase.
            </p>
            <Comment />
          </div>
          <div className="w-full sm:w-[25%]">
            <div className="top-20 flex flex-col gap-2 sm:sticky">
              <h1 className="px-1 text-[18px] font-bold sm:px-8">
                Similar News
              </h1>
              <div className="flex flex-col gap-2">
                <Link href={`/`} className="text-blue-600">
                  {" "}
                  barana dhaabbattu keessaa harki 56 biqiltuu
                </Link>
                <Link href={`/`} className="text-blue-600">
                  {" "}
                  barana dhaabbattu keessaa harki 56 biqiltuu
                </Link>
                <Link href={`/`} className="text-blue-600">
                  {" "}
                  barana dhaabbattu keessaa harki 56 biqiltuu
                </Link>
                <Link href={`/`} className="text-blue-600">
                  {" "}
                  barana dhaabbattu keessaa harki 56 biqiltuu
                </Link>
                <Link href={`/`} className="text-blue-600">
                  {" "}
                  barana dhaabbattu keessaa harki 56 biqiltuu
                </Link>
                <Link href={`/`} className="text-blue-600">
                  {" "}
                  barana dhaabbattu keessaa harki 56 biqiltuu
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
