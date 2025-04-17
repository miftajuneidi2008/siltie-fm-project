import Container from "@/components/Container";
import React, { Suspense } from "react";


import ReadNews from "@/components/News/ReadNews";
import NewsSkeleton from "@/components/LoadingSkeletons/NewsSkeleton";
import type { Metadata } from "next";

export const metadata:Metadata={
title:"ዜና"
}

const NewsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ type: string }>;
}) => {
  const type = (await searchParams).type;
  const decodedtype = decodeURIComponent(type);
  const NewsFilter = type ? decodedtype : "ሁሉም";

  return (
    <Container>
      <Suspense fallback={<NewsSkeleton />}>
        <ReadNews type={NewsFilter} />
      </Suspense>
    </Container>
  );
};

export default NewsPage;
