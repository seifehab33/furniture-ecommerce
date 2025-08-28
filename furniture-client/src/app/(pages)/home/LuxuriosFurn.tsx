import React from "react";
import homemask from "@/assets/home-mask-image.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function LuxuriosFurn() {
  return (
    <div className="custom-container my-14 flex-col lg:flex-row items-center gap-5">
      <div className="w-full lg:max-w-lg flex flex-col gap-5">
        <h1 className="font-bold text-5xl leading-tight">
          Luxurious Furniture Starts with the Best Quality Materials
        </h1>
        <p className="text-sm text-gray-500">
          Donec et odio pellentesque diam volutpat commodo amet consectetur
          adipiscing elit ut aliquam purus vitae et leo duis ut diam quam nulla
          porttitor. Sodales ut eu sem integer vitae justo eget magna.
        </p>
        <Button className=" bg-[var(--theme-text-color)] text-white hover:bg-[#152420] rounded-full w-36 h-10 font-bold">
          Learn More
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-[500px]">
        <div className=" rounded-2xl ">
          <Image
            src={homemask}
            alt="Luxurious Furniture"
            className="object-cover md:object-left h-full rounded-xl"
          />
        </div>

        <div className=" rounded-2xl hidden md:block">
          <Image
            src={homemask}
            alt="Luxurious Furniture"
            className="object-cover object-center md:object-right h-full rounded-xl"
          />
        </div>

        <div className=" rounded-2xl hidden lg:block ">
          <Image
            src={homemask}
            alt="Luxurious Furniture"
            className="object-cover object-right h-full rounded-xl "
          />
        </div>
      </div>
    </div>
  );
}

export default LuxuriosFurn;
