"use client";
import { Menu,X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./ThemeSwitch";
import { navData } from "@/lib/data";
import Live from "./Live";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative hidden items-center justify-between max-md:flex">
      <Link className="ml-1 text-xl font-semibold text-blue-600" href={`/`}>
        Siltie Fm
      </Link>
      <div className="mr-1 flex items-center gap-2">
        <Live />
        <ModeToggle />
        {open ? (
          <X
            className="cursor-pointer"
            size={30}
            onClick={() => setOpen((prev) => !prev)}
          />
        ) : (
          <Menu
            className="cursor-pointer"
            size={30}
            onClick={() => setOpen((prev) => !prev)}
          />
        )}
      </div>
      {open && (
        <div className="absolute right-0 top-14 flex h-screen w-full flex-col items-center justify-center gap-6 bg-slate-100 dark:bg-black dark:text-white z-50">
          {navData.map((links) => (
            <Link href={links.to} key={links.name}>
              {links.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
