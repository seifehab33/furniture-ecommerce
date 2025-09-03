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
    material: "Cotton",
    color: "Beige",
  },
  {
    id: 2,
    title: "Product 2",
    desc: "Category B",
    price: 39.99,
    img: pro2,
    categoryId: "Decor",
    material: "Wool",
    color: "Blue",
  },
  {
    id: 3,
    title: "Product 3",
    desc: "Category C",
    price: 19.99,
    img: pro3,
    categoryId: "decor",
    material: "Silk",
    color: "Gray",
  },
  {
    id: 4,
    title: "Product 4",
    desc: "Category A",
    price: 49.99,
    img: pro4,
    categoryId: "decor",
    material: "Polyester",
    color: "Green",
  },
  {
    id: 5,
    title: "Product 5",
    desc: "Category B",
    price: 59.99,
    img: pro5,
    categoryId: "Decor",
    material: "Leather",
    color: "Red",
  },
  {
    id: 6,
    title: "Product 6",
    desc: "Category C",
    price: 24.99,
    img: pro6,
    categoryId: "beds",
    material: "Cotton",
    color: "Yellow",
  },
  {
    id: 7,
    title: "Product 7",
    desc: "Category A",
    price: 34.99,
    img: pro7,
    categoryId: "beds",
    material: "Wool",
    color: "Purple",
  },
  {
    id: 8,
    title: "Product 8",
    desc: "Category B",
    price: 44.99,
    img: pro8,
    categoryId: "beds",
    material: "Silk",
    color: "Beige",
  },
  {
    id: 9,
    title: "Product 9",
    desc: "Category C",
    price: 54.99,
    img: pro9,
    categoryId: "beds",
    material: "Polyester",
    color: "Gray",
  },
  {
    id: 10,
    title: "Product 10",
    desc: "Category A",
    price: 64.99,
    img: pro10,
    categoryId: "Decor",
    material: "Leather",
    color: "Green",
  },
  {
    id: 11,
    title: "Product 11",
    desc: "Category B",
    price: 74.99,
    img: pro11,
    categoryId: "Decor",
    material: "Cotton",
    color: "Blue",
  },
];

const Shop: React.FC = () => {
  const searchParams = useSearchParams();

  // Get current values from URL with defaults
  const min = Number(searchParams.get("min")) || 0;
  const max = Number(searchParams.get("max")) || 2000;
  const color = searchParams.get("color");
  // Filter products by price range
  const filteredProducts = allProducts.filter((product) => {
    const matchesPrice = product.price >= min && product.price <= max;
    const matchesColor = color ? product.color === color : true;
    return matchesPrice && matchesColor;
  });

  return (
    <ShopLayout
      title="Shop"
      headerImage={heroShopImg}
      products={filteredProducts}
    />
  );
};

export default Shop;
