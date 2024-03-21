import React from "react";
import prisma from "@/lib/prisma";
import ProductListing from "./ProductListing";
import { cn } from "@/lib/utils";

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

  const pLength = products.length;
  return (
    <div className="w-full flex items-center justify-center mx-auto">
      <div
        className={cn(
          { "grid lg:grid-cols-3": pLength > 2 },
          "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2  xl:gap-x-8 w-full max-w-7xl items-center justify-center"
        )}
      >
        {products.map((product, i) => (
          <ProductListing key={i} product={product} i={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductQuery;
