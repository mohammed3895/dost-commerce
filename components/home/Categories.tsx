import Image from "next/image";
import Link from "next/link";
import React from "react";

const categoryItems = [
  {
    name: "Fashion",
    path: "/products?category=fashion",
    bgImage:
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Elecronics",
    path: "/products?category=elecronics",
    bgImage:
      "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Furniture",
    path: "/products?category=furniture",
    bgImage:
      "https://images.unsplash.com/photo-1540638349517-3abd5afc5847?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Categories = () => {
  return (
    <div className="flex flex-col items-center 0">
      <h1 className="text-xl font-semibold text-zinc-900 mb-6">
        Browse Categories
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {categoryItems.map((item, i) => (
          <Link
            href={item.path}
            key={i}
            className="w-60 h-60 rounded-lg relative hover:opacity-60 transition-opacity"
          >
            <Image
              src={item.bgImage}
              alt=""
              width={200}
              height={200}
              className="w-full h-full rounded-lg object-cover"
            />
            <span className="px-4 py-2 rounded-lg bg-accent text-zinc-900 text-sm font-medium absolute bottom-4 right-4">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
