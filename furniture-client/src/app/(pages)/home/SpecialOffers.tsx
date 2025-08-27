import { Button } from "@/components/ui/button";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { MdArrowRightAlt, MdOutlineArrowRightAlt } from "react-icons/md";
import offer1 from "@/assets/offers-image-1.webp";
import offer2 from "@/assets/offers-image-2.webp";
import offer3 from "@/assets/offers-image-3.webp";
import Image from "next/image";
const offers = [
  {
    id: 1,
    img: offer1,
    title: "Special Discount 30% OFF",
    desc: "Nulla facilisi cras fermentum odio feugiat.",
    color: "#9ba89e",
  },
  {
    id: 2,
    img: offer2,
    title: "Weekly Discount 25% OFF",
    desc: "Aliquet sagittis purus faucibus egestas.",
    color: "#d39e76",
  },
  {
    id: 3,
    img: offer3,
    title: "Birthday Discount 40% OFF",
    desc: "Porta non pulvinar neque laoreet suspendisse.",
    color: "#a7a29c",
  },
];
function SpecialOffers() {
  return (
    <div className="custom-container flex-col">
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="font-bold text-4xl mb-2">Special Offers</h1>
          <p className="text-sm text-gray-500">
            Quam elementum pulvinar etiam non quam tincidunt eget nullam non.
          </p>
        </div>
        <Button className="bg-[var(--theme-text-color)] text-white p-6 text-[15px] flex justify-center items-center hover:bg-[#07340f] rounded-xl">
          Sell All <GoArrowRight />
        </Button>
      </div>
      <div className="flex gap-3 mt-10 ">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="p-5 flex items-center gap-4 rounded-xl"
            style={{ backgroundColor: offer.color }}
          >
            <Image
              src={offer.img}
              className="rounded-xl"
              alt="offer"
              width={200}
              height={200}
            />
            <div className="flex flex-col gap-5">
              <h1 className="font-bold">{offer.title}</h1>
              <p className="text-sm">{offer.desc}</p>
              <Button className="bg-white rounded-xl">Browse Now</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialOffers;
