"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows, MdRemoveRedEye } from "react-icons/md";

type Product = {
  id: number;
  img: string | StaticImageData;
  title: string;
  desc?: string;
  price: number;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card my-10 relative group overflow-hidden">
      <Image
        src={product.img}
        alt={product.title}
        height={300}
        width={300}
        className="rounded-xl w-full transform transition-transform duration-500 group-hover:scale-110"
      />

      {/* Icons */}
      <div className="icon-product absolute top-2 right-2 *:bg-white *:cursor-pointer *:p-2 *:rounded-full *:text-sm *:text-gray-600 flex flex-col gap-2">
        <div className="hover:bg-[var(--theme-text-color)] transition-colors duration-150 ease-in-out hover:text-gray-300">
          <FaRegHeart />
        </div>
        <div className="hover:bg-[var(--theme-text-color)] transition-colors duration-150 ease-in-out hover:text-gray-300">
          <MdCompareArrows />
        </div>
        <div className="hover:bg-[var(--theme-text-color)] transition-colors duration-150 ease-in-out hover:text-gray-300">
          <MdRemoveRedEye />
        </div>
      </div>

      {/* Card Body */}
      <div className="bg-white rounded-xl">
        <div className="flex flex-col justify-center items-center gap-3 my-6">
          <h1 className="font-bold">{product.title}</h1>
          {product.desc && (
            <p className="uppercase text-xs font-light">{product.desc}</p>
          )}
        </div>
        <hr className="border-t w-full border-gray-200" />
        <div className="p-5 flex justify-between items-center">
          <span className="font-medium text-gray-700">${product.price}</span>
          <div className="bg-gray-400 w-[0.2px] h-6"></div>
          <Link href={"/"} className="text-[var(--theme-text-color)] font-bold">
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}
