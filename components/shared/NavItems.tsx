import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

const NavItems = () => {
  return (
    <div className="hidden lg:flex items-center gap-4">
      <Link href="/sign-in" className={cn(buttonVariants(), "px-8")}>
        Sign in
      </Link>
      <Link
        href="/sign-up"
        className={cn(buttonVariants({ variant: "secondary" }), "px-8")}
      >
        Create account
      </Link>
    </div>
  );
};

export default NavItems;
