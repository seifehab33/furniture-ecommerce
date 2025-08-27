import React from "react";
import avat1 from "@/assets/home-avatar-1.webp";
import avat2 from "@/assets/home-avatar-2.webp";
import avat3 from "@/assets/home-avatar-3.webp";
import hero1 from "@/assets/home-hero-image-1.webp";
import hero2 from "@/assets/home-hero-image-2.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
const avatars = [avat1, avat2, avat3];

function Main() {
  return (
    <div className="bg-[#eef4f5] max-w-[1500px] my-0 mx-auto py-[3rem] rounded-xl flex justify-between flex-col lg:flex-row">
      <div className="custom-container items-center flex-col lg:flex-row">
        <div className="flex-1 ">
          <div className="left-side mb-4 flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <p className="md:text-4xl  font-bold text-black my-5 leading-snug lg:text-6xl text-center lg:text-start">
              Exquisite design combined with functionalities
            </p>
            <p className="w-full md:text-center">
              Pellentesque ullamcorper dignissim condimentum volutpat consequat
              mauris nunc lacinia quis.
            </p>
            <div className="bg-[#e2edef] max-w-fit p-2 flex items-center gap-5 my-5 rounded-xl">
              <div className="flex gap-5">
                {avatars.map((avatar, idx) => (
                  <Image
                    src={avatar}
                    width={40}
                    height={40}
                    alt="avatar"
                    key={idx}
                    className="rounded-full"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-[var(--theme-text-color)]">
                Contact with our expert
              </p>
            </div>
            <Link
              href={"/shop"}
              className="flex justify-center items-center lg:justify-start lg:items-start "
            >
              <Button className="bg-[var(--theme-text-color)] text-white p-6 rounded-xl hover:bg-[#274c4f] ">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="right-side flex gap-5 flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-start">
          <div className="relative ">
            <Image
              src={hero1}
              alt="Chair"
              height={300}
              width={300}
              className="rounded-xl w-96 lg:w-80"
            />
            <div className="bg-white p-2 max-w-fit absolute top-2 left-3 rounded-xl">
              <p className="font-bold">WoodenChair</p>
              <p>$199</p>
            </div>
            <Link href={"/shop/woodenchair"}>
              <div className="bg-white absolute bottom-5 text-xl px-7 py-4 flex justify-center items-center left-3 rounded-xl hover:bg-[var(--theme-text-color)] hover:text-white cursor-pointer transition-colors ease-in-out duration-150">
                <FaArrowRightLong />
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-10">
            <div className="relative">
              <Image
                src={hero2}
                alt="Chair"
                height={300}
                width={300}
                className="rounded-xl w-96 lg:w-80"
              />
              <div className="bg-white p-2 max-w-fit absolute top-2 left-3 rounded-xl">
                <p className="font-bold">Pretium Elite</p>
                <p>$130</p>
              </div>
              <Link href="/shop/pretiumelite">
                <div className="bg-white absolute bottom-5 text-xl px-7 py-4 flex justify-center items-center left-3 rounded-xl hover:bg-[var(--theme-text-color)] hover:text-white cursor-pointer transition-colors ease-in-out duration-150">
                  <FaArrowRightLong />
                </div>
              </Link>
            </div>
            <div className="">
              <div className="bg-[var(--theme-text-color)] flex flex-col gap-7 justify-center items-center font-bold text-white p-5 rounded-xl">
                <p>25% OFF</p>
                <p>Donec ac odio tempor dapibus</p>
                <Link href="/shop">
                  <Button className="bg-[#274c4f] rounded-xl">
                    Explore Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
