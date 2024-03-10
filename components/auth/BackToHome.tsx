import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { Home } from "lucide-react";

const BackToHome = () => {
  return (
    <div className="w-full text-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "text-muted-foreground flex items-center gap-4"
        )}
      >
        <Home /> Back To Home
      </Link>
    </div>
  );
};

export default BackToHome;
