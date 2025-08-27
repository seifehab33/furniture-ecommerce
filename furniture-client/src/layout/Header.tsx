"use client";
import Link from "next/link";
import React from "react";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuSofa } from "react-icons/lu";
import {
  MdBed,
  MdChairAlt,
  MdOutlineLocalPhone,
  MdStorage,
  MdTableBar,
} from "react-icons/md";
import { TbArmchair } from "react-icons/tb";

export const headerItems = [
  { id: 1, icon: <MdChairAlt />, title: "Chairs", href: "/chair" },
  { id: 2, icon: <MdStorage />, title: "Storage", href: "/storage" },
  { id: 3, icon: <TbArmchair />, title: "Armchairs", href: "/armchair" },
  { id: 4, icon: <LuSofa />, title: "Sofas", href: "/sofas" },
  { id: 5, icon: <MdBed />, title: "Beds", href: "/beds" },
  { id: 6, icon: <MdTableBar />, title: "Tables", href: "/tables" },
  { id: 7, icon: <FaGlassMartiniAlt />, title: "Decor", href: "/decor" },
];

const locationsStyle =
  "text-2xl flex items-center justify-center min-h-fit border border-gray-500 p-2 rounded-full";

function Header({ flexCol }: { flexCol?: boolean }) {
  return (
    <div
      className={`bg-white w-full shadow-sm  ${
        flexCol ? "block lg:hidden " : "hidden lg:block"
      }`}
    >
      <div
        className={`custom-container flex py-4  text-[var(--secondary-text-color)] font-medium ${
          flexCol
            ? "flex flex-col gap-6 "
            : "flex-col lg:flex-row lg:items-center "
        }`}
      >
        {/* Menu Items */}
        <div
          className={`flex ${
            flexCol
              ? "flex-col items-start gap-4"
              : "flex-row justify-center gap-8 items-center"
          } `}
        >
          {headerItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center gap-2 hover:text-[var(--theme-text-color)]"
            >
              <span className="text-xl">{item.icon}</span>
              {item.title}
            </Link>
          ))}
        </div>

        {/* Address & Phone */}
        <div
          className={`flex text-sm ${
            flexCol
              ? "flex-col gap-6 items-start justify-start mt-6"
              : "flex-row justify-center gap-12 items-center"
          }`}
        >
          {/* Address */}
          <div className="flex  gap-3 items-center">
            <div className={locationsStyle}>
              <IoLocationOutline />
            </div>
            <div>
              <p className="font-bold">Address :</p>
              <p>Street Name, NY 38954</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-3 items-center">
            <div className={locationsStyle}>
              <MdOutlineLocalPhone />
            </div>
            <div>
              <p className="font-bold">Phone :</p>
              <p>+20-15000-41681</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
