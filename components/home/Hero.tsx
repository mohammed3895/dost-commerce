import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Categories from "./Categories";

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 mt-6">
      <h1 className="text-2xl md:text-6xl font-bold text-zinc-900 leading-tight text-center">
        Welcome to our brand new <br />
        Dost
        <span className="text-primary">Commerce</span> Store!
      </h1>
      <p className="text-sm md:text-base text-center mt-6 text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-8 md:mt-6">
        <Link href="/products" className={cn(buttonVariants(), "px-12")}>
          Discover Now
        </Link>
        <Button variant="secondary" className="px-12">
          New Arrivals
        </Button>
      </div>
      <div className="w-1/2 h-px bg-gray-100  my-16" />
      {/* <Categories /> */}
    </div>
  );
};

export default Hero;
