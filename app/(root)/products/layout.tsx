import React from "react";

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>layout</h1>
      {children}
    </div>
  );
};

export default ProductsLayout;
