import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <header className="px-8 lg:px-20 py-8 flex items-center">
      <div className="w-full border-b py-4 flex items-center justify-between gap-6">
        <Link href="/" className="text-base font-semibold text-zinc-900">
          Dost<span className="text-primary">Commerce</span>
        </Link>
        <NavItems />
      </div>
    </header>
  );
};

export default Navbar;
