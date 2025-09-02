"use client";

import React, { use } from "react";
import ShopLayout, { categories } from "../../ShopLayout";
import { useSearchParams } from "next/navigation";
import { allProducts } from "../../page";
import sofas from "@/assets/sofas-category-hero-image.webp";
import decor from "@/assets/decor-category-hero-image.webp";
import heroShopImg from "@/assets/shop-hero-image.webp";
import { StaticImageData } from "next/image";
interface CatProps {
  params: Promise<{ categoryId: string }>;
}

// Map category slugs/names to static images
const categoryImages: Record<string, string | StaticImageData> = {
  beds: sofas,
  Decor: decor,
};

const Page: React.FC<CatProps> = ({ params }) => {
  const searchParams = useSearchParams();
  const { categoryId } = use(params);

  // Add image based on category

  // Get price range from URL query
  const min = Number(searchParams.get("min")) || 0;
  const max = Number(searchParams.get("max")) || 2000;

  // Filter products by category and price
  const filteredProducts = allProducts.filter(
    (product) =>
      product.categoryId === categoryId &&
      product.price >= min &&
      product.price <= max
  );
  console.log(filteredProducts);
  return (
    <ShopLayout
      title={categoryId}
      headerImage={categoryImages[categoryId] || heroShopImg}
      products={filteredProducts}
    />
  );
};

export default Page;
