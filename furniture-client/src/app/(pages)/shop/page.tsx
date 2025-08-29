"use client";
import heroShopImg from "@/assets/shop-hero-image.webp";
import ShopLayout from "./ShopLayout";

const Shop: React.FC = () => {
  return (
    <>
      <ShopLayout title="Shop" headerImage={heroShopImg} />
    </>
  );
};
export default Shop;
