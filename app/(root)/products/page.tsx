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
      <BreadCrumbs />
      <div className="bg-white flex items-start justify-between gap-8 p-8">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 w-full">
          <h2 className="sr-only">Products</h2>
          <ProductsFlitering />
          <ProductQuery />
        </div>
      </div>
    </>
  );
};

export default ProducsPage;
