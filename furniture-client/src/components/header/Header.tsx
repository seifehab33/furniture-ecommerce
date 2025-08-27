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
const headerItems = [
  { id: 1, icon: <MdChairAlt />, title: "Chairs", href: "/chair" },
  { id: 2, icon: <MdStorage />, title: "Storage", href: "/storage" },
  { id: 3, icon: <TbArmchair />, title: "Armchairds", href: "/armchair" },
  { id: 4, icon: <LuSofa />, title: "Sofas", href: "/sofas" },
  { id: 5, icon: <MdBed />, title: "Beds", href: "/beds" },
  { id: 6, icon: <MdTableBar />, title: "Tables", href: "/tables" },
  { id: 7, icon: <FaGlassMartiniAlt />, title: "Decor", href: "/decor" },
];
const locationsStyle =
  "text-2xl flex items-center justify-center min-h-fit border border-gray-500 p-2 rounded-full";
function Header() {
  return (
    <div className="bg-white w-full hidden lg:block  ">
      <div className="custom-container *:flex *:items-center *:gap-5 py-3 text-[var(--secondary-text-color)] font-medium">
        <div>
          {headerItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 hover:text-[var(--theme-text-color)]"
            >
              <span className="text-xl">{item.icon}</span>
              <Link href={item.href}>{item.title}</Link>
            </div>
          ))}
        </div>
        <div className="locations *:flex *:gap-3 *:items-center *:text-sm lg:*:text-xs text-nowrap ml-2">
          <div className="address flex gap-3 items-center">
            <div className={`${locationsStyle}`}>
              <IoLocationOutline />
            </div>
            <div>
              <p className="font-bold">Address :</p>
              <p>Street Name, NY 38954</p>
            </div>
          </div>
          <div className="phone  ">
            <div className={`${locationsStyle}`}>
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
