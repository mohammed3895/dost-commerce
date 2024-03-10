import React from "react";
import { Skeleton } from "../ui/skeleton";

const ProductPlaceholder = () => {
  return (
    <div className="group">
      <div className="aspect-h-1 aspect-w-1 w-full  h-80 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Skeleton className="h-full w-full bg-gray-100" />
      </div>
      <Skeleton className="mt-4 w-1/2 h-2 bg-gray-100" />
      <Skeleton className="mt-4 w-12 h-2 bg-gray-100" />
    </div>
  );
};

export default ProductPlaceholder;
