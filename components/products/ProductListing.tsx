"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@prisma/client";
import ProductPlaceholder from "./ProductPlaceholder";

interface QueryProps {
  product: Product;
  i: number;
}

const ProductListing = ({ product, i }: QueryProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, i * 100);

    return () => clearTimeout(timer);
  }, [i]);

  if (!product || !isVisible) return <ProductPlaceholder />;
  return <ProductCard product={product} isVisible={isVisible} />;
};

export default ProductListing;
