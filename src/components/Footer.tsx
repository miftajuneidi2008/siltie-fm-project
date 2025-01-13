import Image from "next/image";
import React from "react";
import facebook from "@/assets/icons/facebook.png";
import twitter from "@/assets/icons/twitter.png";
import telegram from "@/assets/icons/telegram.png";
import youtube from "@/assets/icons/youtube.png";

const Footer = () => {
  return (
    <footer className="my-4 flex flex-col bg-slate-200 px-8 dark:bg-black dark:text-white sm:px-16 lg:px-32">
      <div className="flex max-sm:flex-col">
        <div className="flex w-[33%] flex-col max-sm:w-full">
          <h1 className="pb-1 pt-4 text-xl font-bold">About Siltie Fm</h1>
          <div className="mb-4 h-1 w-20 bg-stone-500"></div>
          <p className="max-w-sm">
            ፋና ብሮድካስቲንግ ኮርፖሬት ተቋማችን ፋና ብሮድካስቲንግ ኮርፖሬት በ1987 ዓመተ ምህረት ሲቋቋም በኃላ ቀር
            መሳሪያዎችና በጥቂት የሰው ሃይል በሀገራችን የብሮድካስት ሚዲያ አዲስ አቀራረብ ይዞ ወደ ስራ ገባ። በሂደትም
            አደረጃጀቱንና የፕሮግራም ይዘቱን እያሻሻለና ችግሮቹን እየቀረፈ ገስጋሴዉን ቀጠለ።
          </p>
        </div>
        <div className="flex w-[33%] flex-col max-sm:w-full">
          <h1 className="pb-1 pt-4 text-xl font-bold">Social Media</h1>
          <div className="h-1 w-20 bg-purple-500"></div>
          <div className="grid gap-[2px] py-4 max-sm:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4">
            <Image
              src={facebook}
              width={30}
              height={30}
              alt="facebook"
              className="cursor-pointer"
            />
            <Image
              src={twitter}
              width={30}
              height={30}
              alt="twitter"
              className="cursor-pointer"
            />
            <Image
              src={telegram}
              width={30}
              height={30}
              alt="telegram"
              className="cursor-pointer"
            />
            <Image
              src={youtube}
              width={30}
              height={30}
              alt="youtube"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="w-[33%] max-sm:w-full">right</div>
      </div>
      <div>
        <h1>bottom</h1>
      </div>
    </footer>
  );
};

export default Footer;
