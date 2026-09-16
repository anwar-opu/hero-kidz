import React from "react";
// import products from "@/data/toys.json";
import ProductCard from "../cards/ProductCard";
import { getProducts } from "@/actions/server/product";

export const metadata = {
  title: "All Products",

  description: "Explore all educational and fun toys available at Hero Kidz.",

  openGraph: {
    title: "All Products | Hero Kidz",
    description: "Explore all educational and fun toys available at Hero Kidz.",
    url: "https://hero-kidz-theta-three.vercel.app/products",

    images: [
      {
        url: "https://YOUR-DIRECT-ALL-PRODUCTS-PREVIEW-URL",
        width: 1200,
        height: 630,
        alt: "Hero Kidz - All Products",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "All Products | Hero Kidz",
    description: "Explore all educational and fun toys available at Hero Kidz.",
    images: ["https://YOUR-DIRECT-ALL-PRODUCTS-PREVIEW-URL"],
  },
};

const Products = async () => {
  const products = await getProducts();
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-10">Our Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3  md:gap-5 ">
        {products.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
