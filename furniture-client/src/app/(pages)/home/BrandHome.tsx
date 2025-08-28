import React from "react";
import brand1 from "@/assets/brand-goldline.svg";
import brand2 from "@/assets/brand-magnolia.svg";
import brand3 from "@/assets/brand-boltshift.svg";
import brand4 from "@/assets/brand-contrast.svg";
import brand5 from "@/assets/brand-asgardia.svg";
import brand6 from "@/assets/brand-komplex.svg";
import Image from "next/image";
import Link from "next/link";
const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
function BrandHome() {
  return (
    <div className="bg-[var(--footer-color)] w-full h-full">
      <div className="custom-container justify-between items-center py-6">
        <div className="w-[2px] h-20 md:h-10 lg:h-6 bg-gray-300 "></div>
        <div className="grid w-full justify-between mx-20 items-center grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3 lg:grid-cols-6">
          {brands.map((brand, index) => (
            <Link key={index} href={""}>
              {" "}
              <Image src={brand} width={100} alt="Sponsers" />
            </Link>
          ))}
        </div>
        <div className="w-[2px] h-20 md:h-10 lg:h-6 bg-gray-300"></div>
      </div>
    </div>
  );
}

export default BrandHome;
