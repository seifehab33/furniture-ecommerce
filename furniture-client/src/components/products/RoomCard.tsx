import Image, { StaticImageData } from "next/image";
import React from "react";
interface ProductCardState {
  img: string | StaticImageData;
  nofp: number;
  title: string;
  width: number;
  height: number;
}
function ProductCard({ img, nofp, title, width, height }: ProductCardState) {
  return (
    <div className="relative">
      <Image
        src={img}
        alt="ProductCard"
        width={width}
        height={height}
        className="rounded-xl"
      />
      <div className="absolute bg-white text-black p-3 w-40 bottom-4 left-4 rounded-xl">
        <h1 className="font-bold ">{title}</h1>
        <p>{nofp} products</p>
      </div>
    </div>
  );
}

export default ProductCard;
