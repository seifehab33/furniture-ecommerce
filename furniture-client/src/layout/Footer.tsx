import SubscribeForm from "@/components/ui/SubscribeForm";
import Link from "next/link";
import React from "react";
import { FaBehanceSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaS, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
const infos = [
  {
    icon: <IoLocationOutline />,
    label: "Address:",
    value: "Street Name, NY 38954",
  },
  {
    icon: <FiPhoneCall />,
    label: "Phone:",
    value: "(+20)1500 0416 81",
  },
  {
    icon: <LuClock4 />,
    label: "Opening hours:",
    value: "9AM - 5PM / 10AM - 3PM",
  },
];
const categories = [
  {
    id: 1,
    title: "Shop Categories",
    lists: [
      "Armchairs",
      "Beds",
      "Chairs",
      "Decor",
      "Sofas",
      "Storage",
      "Tables",
    ],
  },
  {
    id: 2,
    title: "Useful Links",
    lists: [
      "Careers",
      "Delivery",
      "Help Center",
      "Returns & Refunds",
      "Newsletter",
      "Status",
      "Testimonials",
    ],
  },
  {
    id: 3,
    title: "Account",
    lists: [
      "UserDashboard",
      "Wishlist",
      "Shippinh & Delivery",
      "Affiliate Program",
      "Brand Assets",
      "Support",
      "Recommendations",
    ],
  },
  {
    id: 4,
    title: "About Company",
    lists: [
      "About Us",
      "Our Partner",
      "Locations",
      "Design Services",
      "How it Works",
      "Customers",
      "Other Info",
    ],
  },
];
function Footer() {
  return (
    <>
      <SubscribeForm />
      <div className="bg-[#eef4f5]">
        <div className="touch custom-container py-6 flex-col ">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-xl">Get in touch with us</h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-gray-700">
              {infos.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="border border-gray-400 p-2 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-5 border-t-gray-300 border-t" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="flex flex-col gap-5">
                <h1 className="font-bold">{category.title}</h1>
                <div className="flex flex-col gap-2">
                  {category.lists.map((list, idx) => (
                    <p key={idx} className="text-sm text-gray-700">
                      {list}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <hr className="my-5 border-t-gray-300 border-t" />
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm gap-4 *:flex *:items-center *:gap-4 text-center sm:text-left">
            <p>Copyright © 2025 - S|E Dev</p>

            <div>
              <FaFacebook />
              <FaSquareXTwitter />
              <FaSquareInstagram />
              <FaLinkedin />
              <FaBehanceSquare />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Terms & Conditions</Link>
              <Link href={"/"}>Site Map</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
