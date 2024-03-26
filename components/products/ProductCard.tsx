import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductProps {
  product: Product;
  isVisible: boolean;
}

const ProductCard = ({ product, isVisible }: ProductProps) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group col-span-1 animate-in fade-in duration-1000"
    >
      <div className="w-full h-80 overflow-hidden rounded-lg bg-gray-200 ">
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={400}
          width={400}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-base font-medium text-zinc-900">
        {product.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-muted-foreground">
        ${product.price}
      </p>
    </Link>
  );
};

export default ProductCard;
