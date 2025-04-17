import Link from "next/link";
import React from "react";
import { CircleUserRound } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "./ThemeSwitch";
import { Button } from "./ui/button";
import { auth, signOut } from "@/lib/auth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Links from "./Link";

const Navbar = async() => {
  const session = await auth()
  let Username = null
  if (session?.user) {
   const names = session.user.name 
    const fullname = names?.split(' ')
    Username = fullname?.map((names)=>names.charAt(0).toUpperCase()).join('')
  }

  return (
    <header className="z-50 h-20 w-full border-b-2 bg-slate-200 py-6 dark:bg-black dark:text-white">
      <nav className="mx-auto max-w-[1300px] h-full">
        {/*  Large Screen */}
        <div className="hidden w-full h-full items-center md:flex">
          <div className="flex w-3/4 items-center gap-16">
            <Link href="/">
              <h1 className="text-xl font-bold text-blue-600">Siltie FM</h1>
            </Link>
            <Links />
          </div>
          <div className="flex w-1/4 items-center justify-center gap-2">
            <div>
              <ModeToggle />
            </div>
            <div className="group relative">
              {!session?.user ? (
                <Button className="bg-blue-600 hover:bg-blue-900" asChild>
                  <Link
                    href="/login"
                    className="flex items-center justify-center gap-1"
                  >
                    <CircleUserRound size={30} className="cursor-pointer" /> ግባ
                  </Link>
                </Button>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage
                        src={
                          session.user.image || "https://github.com/shadcn.png"
                        }
                      />
                      <AvatarFallback>{Username}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
             
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      {session.user.isAdmin ? (
                        <Link href={`/admin`}>ዳሽቦርድ</Link>
                      ) : null}
                    </DropdownMenuItem>
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
                          ዉጣ
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
