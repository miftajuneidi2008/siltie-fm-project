import AddNewsCategory from "@/components/News/AddNewsCategory";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const AddNewCategory = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="flex gap-2 items-center"
          asChild
        >
          <Link href={`/admin/news`}>
            <ChevronLeftIcon />
          </Link>
        </Button>
        <h1>የዜና መደብ ይጨምሩ</h1>
      </div>
      <AddNewsCategory />
    </div>
  );
};

export default AddNewCategory;
