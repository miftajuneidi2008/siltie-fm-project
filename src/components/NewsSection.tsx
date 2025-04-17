import React from "react";
import b1 from "@/assets/images/p3.png";
import b2 from "@/assets/images/p4.png";
import News from "./News";
import Grid from "./Grid";
const NewsSection = () => {
  return (
    <div className="flex flex-col">
      <div className="my-6 flex w-full gap-3 max-md:flex-col">
        <div className="grid w-[100%] grid-cols-2 gap-2 md:w-[66%]">
          <News title="ቴክኖሎጂ" image={b1} />
          <News title="ሳይንስ" image={b2} />
          <News title="ጤና" image={b2} />
          <News title="ባህል እና ስነ-ጥበብ" image={b2} />
        </div>

        <div className="w-[100%] md:w-[33%]">
          <h1 className="px-10 py-2 text-xl font-bold">በብዛት የተነበቡ</h1>
          <div className="mx-auto grid w-full grid-cols-2 gap-2 md:w-[80%]">
            <Grid
              title="እስራኤል በሶማሌላንድ የጦር ሰፈር መገንባት እንደምትፈልግ ተገለፀ"
              image={b2}
            />
            <Grid
              title="እስራኤል በሶማሌላንድ የጦር ሰፈር መገንባት እንደምትፈልግ ተገለፀ"
              image={b1}
            />
            <Grid
              title="እስራኤል በሶማሌላንድ የጦር ሰፈር መገንባት እንደምትፈልግ ተገለፀ"
              image={b1}
            />
            <Grid
              title="እስራኤል በሶማሌላንድ የጦር ሰፈር መገንባት እንደምትፈልግ ተገለፀ"
              image={b2}
            />
            <Grid
              title="እስራኤል በሶማሌላንድ የጦር ሰፈር መገንባት እንደምትፈልግ ተገለፀ"
              image={b1}
            />
            <Grid
              title="እስራኤል በሶማሌላንድ የጦር ሰፈር መገንባት እንደምትፈልግ ተገለፀ"
              image={b2}
            />
          </div>
          <div className="h-64 w-full rounded-md border-slate-200 bg-slate-100 dark:border-[1px] dark:bg-black dark:text-white">
            <h1 className="text-center font-bold">Advertisement Area</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
