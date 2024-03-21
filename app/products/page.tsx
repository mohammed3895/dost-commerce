import React from "react";
import ProductQuery from "@/components/products/ProductQuery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DostCommerce | Products",
};

const ProducsPage = () => {
  return (
    <div className="bg-white flex items-start justify-between gap-8 p-8">
      <div className="mx-auto max-w-2xl py-24 sm:px-6 lg:py-16 lg:max-w-7xl lg:px-8 w-full">
        <div className="flex flex-col items-start justify-start mb-6">
          <h1 className="text-2xl capitalize font-bold tracking-tight text-zinc-900">
            Browse our Products
          </h1>
          <p className="mt-2 mb-4 text-base text-gray-500 dark:text-gray-400">
            Find the perfect product for your needs. You can filter by category,
            price and more.
          </p>
        </div>
        <ProductQuery />
      </div>
    </div>
  );
};

export default ProducsPage;
