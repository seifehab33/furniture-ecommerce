"use client";
import heroShopImg from "@/assets/shop-hero-image.webp";
import pro1 from "@/assets/product-10-300x300.webp";
import pro2 from "@/assets/product-10-300x300.webp";
import pro3 from "@/assets/product-10-300x300.webp";
import pro4 from "@/assets/product-10-300x300.webp";
import pro5 from "@/assets/product-10-300x300.webp";
import pro6 from "@/assets/product-10-300x300.webp";
import pro7 from "@/assets/product-10-300x300.webp";
import pro8 from "@/assets/product-10-300x300.webp";
import pro9 from "@/assets/product-10-300x300.webp";
import pro10 from "@/assets/product-10-300x300.webp";
import pro11 from "@/assets/product-10-300x300.webp";
import ShopLayout from "./ShopLayout";
import { useSearchParams } from "next/navigation";

export const allProducts = [
  {
    id: 1,
    title: "Product 1",
    desc: "Category A",
    price: 29.99,
    img: pro1,
    categoryId: "Beds",
  },
  {
    id: 2,
    title: "Product 3",
    desc: "Category B",
    price: 39.99,
    img: pro2,
    categoryId: "Decor",
  },
  {
    id: 3,
    title: "Product 3",
    desc: "Category C",
    price: 19.99,
    img: pro3,
    categoryId: "decor",
  },
  {
    id: 4,
    title: "Product 4",
    desc: "Category A",
    price: 49.99,
    img: pro4,
    categoryId: "decor",
  },
  {
    id: 5,
    title: "Product 5",
    desc: "Category B",
    price: 59.99,
    img: pro5,
    categoryId: "Decor",
  },
  {
    id: 6,
    title: "Product 6",
    desc: "Category C",
    price: 24.99,
    img: pro6,
    categoryId: "beds",
  },
  {
    id: 7,
    title: "Product 7",
    desc: "Category A",
    price: 34.99,
    img: pro7,
    categoryId: "beds",
  },
  {
    id: 8,
    title: "Product 8",
    desc: "Category B",
    price: 44.99,
    img: pro8,
    categoryId: "beds",
  },
  {
    id: 9,
    title: "Product 9",
    desc: "Category C",
    price: 54.99,
    img: pro9,
    categoryId: "beds",
  },
  {
    id: 10,
    title: "Product 10",
    desc: "Category A",
    price: 64.99,
    img: pro10,
    categoryId: "Decor",
  },
  {
    id: 11,
    title: "Product 11",
    desc: "Category B",
    price: 74.99,
    img: pro11,
    categoryId: "Decor",
  },
];

const Shop: React.FC = () => {
  const searchParams = useSearchParams();

  // Get current values from URL with defaults
  const min = Number(searchParams.get("min")) || 0;
  const max = Number(searchParams.get("max")) || 2000;

  // Filter products by price range
  const filteredProducts = allProducts.filter(
    (product) => product.price >= min && product.price <= max
  );

  return (
    <ShopLayout
      title="Shop"
      headerImage={heroShopImg}
      products={filteredProducts}
    />
  );
};

export default Shop;
