import React from "react";
import brand1 from "@/assets/brand-asgardia.svg";
import brand2 from "@/assets/brand-boltshift.svg";
import brand3 from "@/assets/brand-contrast.svg";
import brand4 from "@/assets/brand-goldline.svg";
import brand5 from "@/assets/brand-komplex.svg";
import brand6 from "@/assets/brand-magnolia.svg";
import Image from "next/image";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

function Brand() {
  return (
    <div className="mt-10">
      <h1 className="mb-4 font-bold">Filter by brand</h1>
      <div className="grid grid-cols-4 gap-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center border  hover:border-blue-500 transition"
          >
            <Image
              alt={`brand-${index}`}
              src={brand}
              className="h-14 w-14 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brand;
