import Products from "@/components/home/Products";
import React from "react";

export const metadata = {
  title: {
    default: "All Products",
    template: "%s | Hero Kidz",
  },
  description: "",
};

const ProductsPage = () => {
  return (
    <div>
      <Products></Products>
    </div>
  );
};

export default ProductsPage;
