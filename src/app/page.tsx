import Banner from "@/components/Banner";
import Container from "@/components/Container";
import BannerSkeleton from "@/components/LoadingSkeletons/BannerSkeleton";
import NewscollectionSkeleton from "@/components/LoadingSkeletons/NewscollectionSkeleton";
import NewsCollecton from "@/components/NewsCollecton";
import NewsSection from "@/components/NewsSection";
import Programs from "@/components/Programs";
import Videos from "@/components/Videos";
import { Ban } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  return (
    <section>
      <Container>
        <Suspense fallback={<BannerSkeleton />}>
          <Banner />
        </Suspense>
        <Suspense fallback={<NewscollectionSkeleton />}>
          <NewsCollecton />
        </Suspense> 
      </Container>
      <Videos />
      <Container>
        <NewsSection />
      </Container>
      <div className="bg-stone-300 dark:bg-black">
        <h1 className="px-32 py-2 text-xl font-semibold md:text-2xl">
          የሬዲዮ ፕሮግራሞች
        </h1>
        <Programs />
      </div>
    </section>
  );
}
