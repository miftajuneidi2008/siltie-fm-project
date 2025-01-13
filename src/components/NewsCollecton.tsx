import React from "react";
import b1 from "@/assets/images/p3.png";
import b2 from "@/assets/images/p4.png";
import NewsCard from "./NewsCard";
const NewsCollecton = () => {
  return (
    <div className="my-4 md:py-10">
      <h1 className="text-xl font-bold">Recent News</h1>
      <div className="h-1 w-20 bg-indigo-700"></div>
      <div className="mx-auto my-8 grid grid-cols-1 gap-4 max-sm:my-4 max-sm:max-w-[90%] md:grid-cols-2 md:gap-8">
        <NewsCard
          area="Siltie"
          title=" በኮንትሮባንድ ቁጥጥር ከ2 ነጥብ 8 ቢሊየን ብር በላይ ሀብት ማዳን መቻሉ ተገለፀ"
          image={b1}
          date="Oct 18, 2024"
          classname="bg-indigo-600"
        />

        <NewsCard
          area="Centeral Ethiopia"
          title=" በኮንትሮባንድ ቁጥጥር ከ2 ነጥብ 8 ቢሊየን ብር በላይ ሀብት ማዳን መቻሉ ተገለፀ"
          image={b2}
          date="Oct 18, 2024"
          classname="bg-orange-600"
        />

        <NewsCard
          area="Ethiopia"
          title=" በኮንትሮባንድ ቁጥጥር ከ2 ነጥብ 8 ቢሊየን ብር በላይ ሀብት ማዳን መቻሉ ተገለፀ"
          image={b2}
          date="Oct 18, 2024"
          classname="bg-sky-600"
        />
        <NewsCard
          area="Africa"
          title=" በኮንትሮባንድ ቁጥጥር ከ2 ነጥብ 8 ቢሊየን ብር በላይ ሀብት ማዳን መቻሉ ተገለፀ"
          image={b2}
          date="Oct 18, 2024"
          classname="bg-green-400"
        />
        <NewsCard
          area="World"
          title=" በኮንትሮባንድ ቁጥጥር ከ2 ነጥብ 8 ቢሊየን ብር በላይ ሀብት ማዳን መቻሉ ተገለፀ"
          image={b2}
          date="Oct 18, 2024"
          classname="bg-cyan-400"
        />
        <NewsCard
          area="Bussiness"
          title=" በኮንትሮባንድ ቁጥጥር ከ2 ነጥብ 8 ቢሊየን ብር በላይ ሀብት ማዳን መቻሉ ተገለፀ"
          image={b2}
          date="Oct 18, 2024"
          classname="bg-teal-400"
        />

        <NewsCard
          area="Sport"
          title=" በኮንትሮባንድ ቁጥጥር ከ2 ነጥብ 8 ቢሊየን ብር በላይ ሀብት ማዳን መቻሉ ተገለፀ"
          image={b2}
          date="Oct 18, 2024"
          classname="bg-fuchsia-400"
        />
      </div>
    </div>
  );
};

export default NewsCollecton;
