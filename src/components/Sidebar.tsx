"use client";
import { sideBar } from "@/components/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const path = usePathname();
  return (
    <aside className="flex flex-col  gap-6">
      {sideBar.map((side) => (
        <div key={side.name} className="text-center">
          <Link
            href={side.to}
            className={cn(
              "text-[17px] hover:border-[1px]  hover:border-sky-800 px-8 py-2 ",
              path === side.to && "bg-sky-800  text-white"
            )}
          >
            {side.name}
          </Link>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
