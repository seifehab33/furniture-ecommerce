import React from "react";
import pro1 from "@/assets/product-42-150x150.webp";
import pro2 from "@/assets/product-43-300x300.webp";
import pro3 from "@/assets/product-35-300x300.webp";
import pro4 from "@/assets/product-37-300x300.webp";
import pro5 from "@/assets/product-7-300x300.webp";
import Image from "next/image";
const products = [
  { id: 1, title: "Tellus Convallis", price: 1200, sale: 1350, img: pro1 },
  { id: 2, title: "Egestas Elit", price: 980, img: pro2 }, // no sale
  { id: 3, title: "Pellentesque Habitant", price: 1450, sale: 1600, img: pro3 },
  { id: 4, title: "Feugiat Dapibus", price: 750, img: pro4 }, // no sale
  { id: 5, title: "Ornare Quam", price: 2100, sale: 2500, img: pro5 },
];
const formatPrice = (price: number | undefined): string | number => {
  if (!price) return "";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price as number);
};
function BestSellingProducts() {
  return (
    <div className="mt-10">
      <h1 className="font-bold text-xs md:text-[16px]">
        Best Selling Products
      </h1>
      <div className="mt-4 flex flex-col gap-2">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-4">
            <div>
              <Image
                width={70}
                height={70}
                src={product.img}
                alt="Best Sell Product"
              />
            </div>
            <div className="">
              <h1 className="font-bold text-xs">{product.title}</h1>
              <p className="text-xs text-gray-500 font-medium">
                <span>{formatPrice(product.price)}</span>{" "}
                <span className="line-through ml-1 text-gray-400">
                  {formatPrice(product?.sale) || ""}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellingProducts;
