"use client";
import React from "react";
import prisma from "@/lib/prisma";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Metadata, ResolvingMetadata } from "next";
import AddToCart from "@/components/cart/AddToCart";
import { Prisma } from "@prisma/client";
import { trpc } from "@/app/_trpc/client";

type Props = {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   // read route params
//   const product = await prisma.product.findFirst({
//     where: { id: params.productId },
//   });

//   return {
//     title: product?.name,
//   };
// }

const ProductDetails = ({ params }: Props) => {
  const { productId } = params;
  const { data: product } = trpc.getProduct.useQuery({
    productId: params.productId,
  });

  return (
    <div className="w-full h-full">
      <div className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row -mx-4 gap-16">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <Image
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  src={product?.imageUrl!}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <AddToCart product={product as any} />
                </div>
                <div className="w-1/2 px-2">
                  <Button className="w-full" variant="secondary">
                    Add to Wishlist
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <div className="flex items-center justify-between gap-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {product?.name}
                </h2>
                <span className="text-muted-foreground font-medium text-2xl font-sans">
                  ${product?.price}
                </span>
              </div>

              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Color:
                </span>
                <div className="flex items-center mt-2">
                  <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                </div>
              </div>

              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-[16px] mt-2 w-3/4">
                  {product?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
