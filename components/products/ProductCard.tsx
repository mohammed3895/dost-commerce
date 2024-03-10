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
    <Link href={`/products/${product.id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full h-80 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 animate-in fade-in-25">
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={600}
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
