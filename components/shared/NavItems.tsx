"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { trpc } from "@/app/_trpc/client";
import Cart from "../cart/Cart";

const NavItems = () => {
  const [user, setUser] = useState<{}>({});

  const { data: dbUser } = trpc.getUser.useMutation({
    onSuccess: () => {
      const userObj = dbUser?.dbUser;
      setUser({ userObj });
    },
  });

  return (
    <div className="hidden lg:flex items-center gap-4">
      {user !== null ? (
        <div className="flex gap-1.5">
          <Cart />
          <Button variant="secondary">Logout</Button>
        </div>
      ) : (
        <div>
          <Link href="/sign-in" className={cn(buttonVariants(), "px-8")}>
            Sign in
          </Link>

          <Link
            href="/sign-up"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-base text-zinc-900 capitalize font-medium ml-4"
            )}
          >
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavItems;
