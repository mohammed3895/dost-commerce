import React from "react";
import prisma from "@/lib/prisma";
import ProductListing from "./ProductListing";

interface QueryProps {
  limit?: number;
  category?: string;
}

const ProductQuery = async ({ limit, category }: QueryProps) => {
  const products = await prisma.product.findMany({
    take: limit,
    where: { category: category },
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 w-full px-8">
      {products.map((product, i) => (
        <ProductListing key={i} product={product} i={i} />
      ))}
    </div>
  );
};

export default ProductQuery;
