import AddNewsForm from "@/components/News/AddNews";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const AddNews = async() => {
  const session = await auth()
  if (!session?.user) {
    return redirect("/login")
  }
  const newCategory = await db.newsCategory.findMany()
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href={`/admin/news`}>
            <ChevronLeft />
          </Link>
        </Button>
        <h1>ዜና ጨምር</h1>
      </div>
      <AddNewsForm news={newCategory} />
    </div>
  );
};

export default AddNews;
