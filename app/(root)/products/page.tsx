import React from "react";
import ProductsFlitering from "@/components/products/ProductsFlitering";
import ProductQuery from "@/components/products/ProductQuery";
import { Metadata } from "next";
import BreadCrumbs from "@/components/shared/BreadCrumbs";

export const metadata: Metadata = {
  title: "DostCommerce | Products",
};

const ProducsPage = () => {
  return (
    <>
      <BreadCrumbs lastChild="products" />
      <div className="bg-white flex items-start justify-between gap-8 p-8">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:py-16 lg:max-w-7xl lg:px-8 w-full">
          <h1 className="text-center text-2xl capitalize font-bold tracking-tight text-zinc-900">
            Browse our Products
          </h1>
          <p className="mt-6 mb-8 text-base text-gray-500 dark:text-gray-400 text-center">
            Find the perfect product for your needs. You can filter by category,
            price and more.
          </p>
          <ProductsFlitering />
          <ProductQuery />
        </div>
      </div>
    </>
  );
};

export default ProducsPage;
