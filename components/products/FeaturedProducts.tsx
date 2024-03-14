import React from "react";
import ProductQuery from "./ProductQuery";

const FeaturedProducts = () => {
  return <ProductQuery category="fashion" limit={4} />;
};

export default FeaturedProducts;
