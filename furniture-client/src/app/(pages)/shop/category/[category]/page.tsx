"use client";

import React, { use } from "react";
import ShopLayout from "../../ShopLayout";
import { useSearchParams } from "next/navigation";
import { allProducts } from "../../page";
import sofas from "@/assets/sofas-category-hero-image.webp";
import decor from "@/assets/decor-category-hero-image.webp";
import heroShopImg from "@/assets/shop-hero-image.webp";
import { StaticImageData } from "next/image";
interface CatProps {
  params: Promise<{ category: string }>;
}

const categoryImages: Record<string, string | StaticImageData> = {
  beds: sofas,
  Decor: decor,
};

const Page: React.FC<CatProps> = ({ params }) => {
  const searchParams = useSearchParams();
  const { category } = use(params);
  const min = Number(searchParams.get("min")) || 0;
  const max = Number(searchParams.get("max")) || 2000;

  const filteredProducts = allProducts.filter(
    (product) =>
      product.categoryId === category &&
      product.price >= min &&
      product.price <= max
  );
  console.log(filteredProducts);
  return (
    <ShopLayout
      title={category}
      headerImage={categoryImages[category] || heroShopImg}
      products={filteredProducts}
    />
  );
};

export default Page;
