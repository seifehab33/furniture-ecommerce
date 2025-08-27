import ProductSelling from "@/components/products/ProductSelling";
import React from "react";
import topPro1 from "@/assets/product-31.webp";
import topPro2 from "@/assets/product-30-500x500.webp";
import topPro3 from "@/assets/product-35-300x300.webp";
import topPro4 from "@/assets/product-32-500x500.webp";
const products = [
  {
    id: 1,
    img: topPro1,
    title: "Massa Scelerisque",
    desc: "tables",
    price: 790,
  },
  {
    id: 2,
    img: topPro2,
    title: "Sem Integer",
    desc: "storage",
    price: 200,
  },
  {
    id: 3,
    img: topPro3,
    title: "Lectus Proin",
    desc: "tables",
    price: 600,
  },
  {
    id: 4,
    img: topPro4,
    title: "Mollis Nunc",
    desc: "storage",
    price: 750,
  },
];
function TopSelling() {
  return (
    <ProductSelling
      products={products}
      heading="Top Selling furniture"
      description="Quam elementum pulvinar etiam non quam. Faucibus nisl tincidunt eget nullam non nisi elementum sagittis vitae et leo duis ut diam quam."
    />
  );
}

export default TopSelling;
