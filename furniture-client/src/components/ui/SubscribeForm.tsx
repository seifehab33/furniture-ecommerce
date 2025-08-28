import React from "react";
import subscribe from "@/assets/subscribe-section-image.webp";
import Image from "next/image";
import { Input } from "./input";
import { Button } from "./button";

function SubscribeForm() {
  return (
    <div className="bg-[var(--theme-text-color)] py-8">
      <div className="custom-container flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Left Section */}
        <div className="flex items-center gap-5">
          <Image alt="subscribe" src={subscribe} width={100} height={100} />
          <div className="text-white">
            <h1 className="font-bold text-lg md:text-xl">
              Important updates waiting for you!
            </h1>
            <p className="text-sm">Subscribe and grab 20% OFF!</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <Input
              type="text"
              placeholder="Your email *"
              className="pl-3 w-full h-14 md:h-16 placeholder:text-gray-400 placeholder:font-bold rounded-full border-[#152420] border-2 py-1 text-gray-200"
            />
            <Button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#152420] text-white rounded-full px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeForm;
