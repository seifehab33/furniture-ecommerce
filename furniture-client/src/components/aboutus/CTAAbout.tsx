import React from "react";
import CTAImage from "@/assets/about-us-cta-image.webp";
import { Button } from "../ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
function CTAAbout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
      <div className="space-y-6">
        <h1 className="font-bold text-3xl">
          Furniture that will last a lifetime
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Sit massa etiam urna id. Non pulvinar aenean ultrices lectus vitae
          imperdiet vulputate a eu. Aliquet ullamcorper leo mi vel sit pretium
          euismod eget libero. Nullam iaculis vestibulum arcu id urna. In
          pellentesque volutpat quis condimentum lectus
        </p>
        <Button className="bg-[var(--theme-text-color)] hover:bg-[var(--theme-text-color)]">
          Learn More <FaArrowRightLong />
        </Button>
      </div>
      <Image src={CTAImage} alt="CTA Image" className="w-full lg:max-w-2xl" />
    </div>
  );
}

export default CTAAbout;
