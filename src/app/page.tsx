import Banner from "@/components/Banner";
import Container from "@/components/Container";
import NewsCollecton from "@/components/NewsCollecton";
import NewsSection from "@/components/NewsSection";
import Programs from "@/components/Programs";
import Videos from "@/components/Videos";

export default function Home() {
  return (
    <section>
      <Container>
        <Banner />
        <NewsCollecton />
      </Container>
      <Videos />
      <Container>
        <NewsSection />
      </Container>
      <div className="bg-stone-300 dark:bg-black">
        <h1 className="px-32 py-2 text-xl font-semibold md:text-2xl">
          Radio Programmes
        </h1>
       <Programs/>
      </div>
    </section>
  );
}
