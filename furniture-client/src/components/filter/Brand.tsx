import React from "react";
import brand1 from "@/assets/brand-asgardia.svg";
import brand2 from "@/assets/brand-boltshift.svg";
import brand3 from "@/assets/brand-contrast.svg";
import brand4 from "@/assets/brand-goldline.svg";
import brand5 from "@/assets/brand-komplex.svg";
import brand6 from "@/assets/brand-magnolia.svg";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const brands = [
  { id: 1, img: brand1, tooltip: "Asgardia" },
  { id: 2, img: brand2, tooltip: "BoltShift" },
  { id: 3, img: brand3, tooltip: "Contrast" },
  { id: 4, img: brand4, tooltip: "Goldline" },
  { id: 5, img: brand5, tooltip: "Komplex" },
  { id: 6, img: brand6, tooltip: "Magnolia" },
];
function Brand() {
  return (
    <div className="mt-10">
      <h1 className="mb-4 font-bold">Filter by brand</h1>
      <div className="grid grid-cols-4 gap-4">
        {brands.map((brand) => (
          <Tooltip key={brand.id}>
            <div className="flex items-center justify-center border  hover:border-[var(--theme-text-color)] transition">
              <TooltipTrigger asChild>
                <Image
                  alt={`brand-${brand.tooltip}`}
                  src={brand.img}
                  className="h-14 w-14 object-contain"
                />
              </TooltipTrigger>
              <TooltipContent className="bg-black text-white">
                <p>{brand.tooltip}</p>
              </TooltipContent>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default Brand;
