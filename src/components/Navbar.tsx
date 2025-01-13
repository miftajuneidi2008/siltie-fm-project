import Link from "next/link";
import React from "react";
import { CircleUserRound } from "lucide-react";
import ThemeSwitch from "./ThemeSwitch";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 h-20 w-full border-b-2 bg-slate-100 py-6 dark:bg-black dark:text-white">
      <nav className="mx-auto max-w-[1300px]">
        {/*  Large Screen */}
        <div className="hidden w-full items-center md:flex">
          <div className="flex w-3/4 items-center gap-16">
            <h1 className="text-xl font-bold text-blue-600">Siltie FM</h1>
            <div className="flex gap-6">
              <Link
                href={`/`}
                className="border-black transition-all duration-300 ease-in-out hover:border-b-2"
              >
                Home
              </Link>
              <Link
                href={`/news`}
                className="border-black transition-all duration-300 ease-in-out hover:border-b-2"
              >
                News
              </Link>
              <Link
                href={`/bussiness`}
                className="border-black transition-all duration-300 ease-in-out hover:border-b-2"
              >
                Bussiness
              </Link>
              <Link
                href={`/sport`}
                className="border-black transition-all duration-300 ease-in-out hover:border-b-2"
              >
                Sport
              </Link>
              <Link
                href={`/technology`}
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
          </div>
          <div className="flex w-1/4 items-center justify-center gap-1">
            <div>
              <ThemeSwitch />
            </div>
            <div className="group relative">
              <CircleUserRound size={30} className="cursor-pointer" />
              <div className="absolute top-7 hidden w-24 flex-col bg-slate-50 px-4 shadow-lg group-hover:flex dark:text-black">
                <Link href={``} className="py-2 hover:text-sky-500">
                  Login
                </Link>
                <Link href={``} className="hover:text-sky-500">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
