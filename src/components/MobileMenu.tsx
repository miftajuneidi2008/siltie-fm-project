"use client";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative hidden items-center justify-between max-md:flex">
      <Link className="ml-1 text-xl font-semibold text-blue-600" href={`/`}>
        Siltie Fm
      </Link>
      <div className="mr-1 flex items-center gap-2">
        <ThemeSwitch />
        <Menu
          className="cursor-pointer"
          size={30}
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>
      {open && (
        <div className="absolute right-0 top-14 flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-slate-100 dark:bg-black dark:text-white">
          <Link
            href={`/`}
            className="border-black transition-all duration-300 ease-in-out hover:border-b-2"
          >
            Home
          </Link>
          <Link
            href={`/`}
            className="border-black transition-all duration-300 ease-in-out hover:border-b-2"
          >
            News
          </Link>
          <Link
            href={`/`}
            className="border-black transition-all duration-300 ease-in-out hover:border-b-2"
          >
            Bussiness
          </Link>
          <Link
            href={`/`}
            className="border-black transition-all duration-300 ease-in-out hover:border-b-2"
          >
            Sport
          </Link>
          <Link
            href={`/`}
            className="border-black transition-all duration-300 ease-in-out hover:border-b-2"
          >
            Tech
          </Link>
          <Link
            href={`/`}
            className="border-black transition-all duration-300 ease-in-out hover:border-b-2"
          >
            Culture
          </Link>
          <Link
            href={`/`}
            className="border-black transition-all duration-500 ease-in-out hover:border-b-2"
          >
            Live
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
