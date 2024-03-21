"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { buttonVariants } from "../ui/button";

const categories = [
  { name: "All", href: "/products" },
  { name: "fasion", href: "/products?category=fashion" },
  { name: "tech", href: "/products?category=tech" },
];

const ProductSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-40  flex items-center justify-center gap-4">
      {categories.map((category, i) => (
        <Link
          key={i}
          href={category.href}
          onClick={() => setActiveIndex(i)}
          className={cn(buttonVariants({ variant: "ghost" }), "px-6", {
            "bg-accent": activeIndex === i,
          })}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default ProductSidebar;
