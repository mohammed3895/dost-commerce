import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import { Amita } from "next/font/google";
import { cn } from "@/lib/utils";

const amita = Amita({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  return (
    <header className="px-8 lg:px-20 py-8 flex items-center">
      <div className="w-full  py-4 flex items-center justify-between gap-6">
        <Link
          href="/"
          className={cn("text-xl font-bold text-zinc-900", amita.className)}
        >
          Dost<span className="text-primary">Commerce</span>
        </Link>
        <NavItems />
      </div>
    </header>
  );
};

export default Navbar;
