import Link from "next/link";
import React from "react";
import { CircleUserRound } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "./ThemeSwitch";
import { Button } from "./ui/button";
import { auth, signOut } from "@/lib/auth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async() => {
  const user = await auth()

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
                href={`/live`}
                className="border-black transition-all duration-500 ease-in-out hover:border-b-2"
              >
                Live
              </Link>
            </div>
          </div>
          <div className="flex w-1/4 items-center justify-center gap-2">
            <div>
              <ModeToggle />
            </div>
            <div className="group relative">
              {!user?.user ? (
                <Button className=" bg-blue-600 hover:bg-blue-900" asChild>
                  <Link
                    href="/login"
                    className="flex items-center justify-center gap-1"
                  >
                    <CircleUserRound size={30} className="cursor-pointer" />{" "}
                    Login
                  </Link>
                </Button>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage
                        src={
                          user.user.image || "https://github.com/shadcn.png"
                        }
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                    <DropdownMenuItem>
                      <form
                        action={async () => {
                          "use server";

                          await signOut();
                        }}
                      >
                        <Button
                          variant="outline"
                          className="border-none py-0 pl-0 shadow-none"
                        >
                          Logout
                        </Button>
                      </form>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
