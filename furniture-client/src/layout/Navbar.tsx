"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { CgProfile } from "react-icons/cg";
// import { CiHeart } from "react-icons/ci";
import { MdCompareArrows, MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Search } from "../components/ui/Search";
import { CiMenuBurger } from "react-icons/ci";
import { ShopDropdown } from "../components/ui/DropDownMenu";
import Banner from "../components/ui/Banner";
import Header from "./Header";
const userItems = [
  { id: 1, icon: <CgProfile /> },
  { id: 2, icon: <FaRegHeart /> },
  { id: 3, icon: <MdCompareArrows /> },
  { id: 4, icon: <MdOutlineShoppingBag /> },
];
const components = [
  {
    title: "Variable Product",
    href: "/variable-product",
  },
  {
    title: "Product Gallery",
    href: "/product-gallery",
  },
  {
    title: "Advanced Review",
    href: "/advanced-review",
  },
  {
    title: "Related Products-Slider",
    href: "/related-product-slider",
  },
];
export function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={{ pathname: href }}
      className={clsx(
        " py-2 rounded-md transition-colors font-medium text-[16px] hover:text-[var(--theme-text-color)] duration-150 ease-in-out",
        isActive && " text-[var(--theme-text-color)] ",
        className
      )}
    >
      {children}
    </Link>
  );
}
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={{ pathname: href }}
          className={clsx(
            "flex  px-3 py-4 text-nowrap transition-colors font-medium"
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p
            className={clsx(
              "text-sm leading-snug font-medium",
              isActive ? "text-[var(--theme-text-color)]" : "text-gray-100"
            )}
          >
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      const navHeight = navRef.current?.offsetHeight || 0;
      setScrolled(window.scrollY > navHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="sticky z-10 inset-0">
      <Banner />
      <div
        ref={navRef}
        className={` bg-white transition-shadow ${
          scrolled ? "shadow-md shadow-gray-500" : ""
        }`}
        id="navbar"
      >
        {/* Logo */}
        <div className="flex items-center justify-between  py-4 md:py-8  custom-container text-[var(--secondary-text-color)] ">
          <div className="flex gap-10 lg:gap-5 items-center">
            {" "}
            <Link href="/" className=" font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 117 25"
                className="default-logo h-7"
                aria-label="Furniture"
                role="img"
              >
                <path
                  fill="#152420"
                  d="M60.515 8.956c.18.01.33.026.448.05v2.365a2.705 2.705 0 0 0-.519-.1 4.779 4.779 0 0 0-.674-.05 2.6 2.6 0 0 0-1.265.306c-.369.199-.66.476-.873.831-.213.355-.32.765-.32 1.229V20h-2.57V9.09h2.492v1.82h.114c.199-.63.54-1.116 1.022-1.457a2.815 2.815 0 0 1 1.67-.518c.142 0 .3.007.475.021Zm-10.989 6.456c0 .554-.116 1.016-.348 1.385-.227.365-.518.64-.873.824a2.357 2.357 0 0 1-1.101.277c-.616 0-1.113-.204-1.492-.611-.378-.407-.568-.956-.568-1.648V9.091h-2.57v6.946c0 .871.153 1.614.46 2.23.309.61.735 1.077 1.28 1.4.548.316 1.18.475 1.896.475.819 0 1.508-.194 2.066-.582a3.28 3.28 0 0 0 1.215-1.499h.113V20h2.493V9.09h-2.57v6.322ZM31.652 20h2.635v-6.179h6.044v-2.209h-6.044V7.663h6.683V5.455h-9.318V20ZM70.476 9.432c-.559-.322-1.214-.483-1.967-.483-.814 0-1.499.18-2.053.54-.549.36-.949.845-1.2 1.456h-.128V9.09h-2.457V20h2.57v-6.392c0-.526.098-.973.292-1.342.199-.37.471-.651.817-.846.35-.198.75-.298 1.2-.298.663 0 1.181.206 1.556.618.378.412.568.982.568 1.712V20h2.57v-6.946c.005-.871-.148-1.612-.46-2.223a3.253 3.253 0 0 0-1.308-1.4Zm34.661-.497c-.625 0-1.181.172-1.669.518-.483.341-.824.826-1.023 1.456h-.113V9.091h-2.493V20h2.571v-6.413c0-.464.106-.874.319-1.229.213-.355.505-.632.874-.831a2.6 2.6 0 0 1 1.264-.305c.218 0 .443.016.675.05.237.028.409.06.518.099V9.006a3.185 3.185 0 0 0-.447-.05 5.934 5.934 0 0 0-.476-.021Zm-10.513 6.477c0 .554-.116 1.016-.348 1.385-.227.365-.518.64-.874.824a2.358 2.358 0 0 1-1.1.277c-.616 0-1.113-.204-1.492-.611-.379-.407-.568-.956-.568-1.648V9.091H87.67v6.946c0 .871.154 1.614.461 2.23.308.61.734 1.077 1.279 1.4.55.316 1.181.475 1.896.475.82 0 1.508-.194 2.067-.582a3.28 3.28 0 0 0 1.214-1.499h.114V20h2.493V9.09h-2.571v6.322ZM117 15.249h-7.594c.008.605.118 1.131.342 1.57.232.449.557.795.973 1.036.417.237.905.355 1.463.355.374 0 .713-.052 1.016-.156.303-.109.566-.268.788-.476.223-.208.391-.466.505-.774l2.4.27a3.737 3.737 0 0 1-.866 1.662c-.422.469-.962.833-1.62 1.094-.658.255-1.411.383-2.258.383-1.094 0-2.039-.227-2.834-.682a4.614 4.614 0 0 1-1.825-1.946c-.426-.843-.639-1.835-.639-2.976 0-1.122.213-2.107.639-2.954.431-.852 1.032-1.515 1.804-1.989.771-.478 1.678-.717 2.72-.717.672 0 1.307.109 1.903.327a4.294 4.294 0 0 1 1.591.994c.464.45.829 1.023 1.094 1.719.265.69.398 1.515.398 2.471v.789Zm-2.465-1.733a2.772 2.772 0 0 0-.319-1.314 2.329 2.329 0 0 0-.874-.916c-.369-.223-.8-.334-1.293-.334-.525 0-.987.128-1.385.383a2.652 2.652 0 0 0-.93.995c-.194.361-.29.76-.315 1.186h5.116ZM74.858 20h2.571V9.09h-2.57V20Zm1.293-15.249c-.407 0-.758.138-1.051.412-.294.27-.44.6-.44.988 0 .383.146.712.44.987a1.5 1.5 0 0 0 1.05.405c.413 0 .763-.135 1.052-.405.294-.275.44-.604.44-.987a1.29 1.29 0 0 0-.44-.988 1.47 1.47 0 0 0-1.051-.412Zm8.823 13.196c-.133.024-.28.036-.44.036-.214 0-.408-.033-.583-.1a.843.843 0 0 1-.426-.369c-.104-.184-.156-.45-.156-.795v-5.64h2.152V9.092h-2.152V6.477h-2.571v2.614h-1.549v1.989h1.549v6.065c-.005.682.142 1.25.44 1.704.303.455.712.791 1.229 1.009.516.213 1.096.31 1.74.291a4.82 4.82 0 0 0 .923-.1c.256-.056.452-.108.59-.156l-.434-2.01a3.73 3.73 0 0 1-.312.064ZM25 3.75v15c0 2.125-1.625 3.75-3.75 3.75H20v1.25c0 .75-.5 1.25-1.25 1.25s-1.25-.5-1.25-1.25V22.5h-10v1.25C7.5 24.5 7 25 6.25 25S5 24.5 5 23.75V22.5H3.75C1.625 22.5 0 20.875 0 18.75v-15C0 1.625 1.625 0 3.75 0h17.5C23.375 0 25 1.625 25 3.75Zm-2.5 8.75h-20v6.25C2.5 19.5 3 20 3.75 20h17.5c.75 0 1.25-.5 1.25-1.25V12.5Zm0-8.75c0-.75-.5-1.25-1.25-1.25H3.75C3 2.5 2.5 3 2.5 3.75V10h20V3.75ZM14.375 5h-3.75c-.75 0-1.25.5-1.25 1.25s.5 1.25 1.25 1.25h3.75c.75 0 1.25-.5 1.25-1.25S15.125 5 14.375 5Zm-3.75 12.5h3.75c.75 0 1.25-.5 1.25-1.25s-.5-1.25-1.25-1.25h-3.75c-.75 0-1.25.5-1.25 1.25s.5 1.25 1.25 1.25Z"
                ></path>
              </svg>
            </Link>
            <div className="search ">
              <Search
                placeholder="Search"
                className="min-w-96 max-w-sm hidden lg:block"
              />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10 lg:gap-5">
            <NavigationMenu className="">
              <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <NavLink href="/">Home</NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Components */}

                <NavigationMenuItem className="hover:text-[var(--theme-text-color)] ">
                  <Link href={"/shop"}>
                    <NavigationMenuTrigger className="text-[14px]">
                      Shop
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent className="border-none ">
                    <ul className="flex flex-col text-sm   bg-black ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          href={component.href}
                          className="border-b border-gray-300 text-nowrap "
                        >
                          {component.title}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Docs (direct link) */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <NavLink href="/docs">Docs</NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* With icons */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <NavLink href="/about-us">About Us</NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <NavLink href="/contact-us">Contact Us</NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-5 lg:gap-5">
              {userItems.map((user) => (
                <span
                  key={user.id}
                  className="text-xl text-[var(--secondary-text-color)] cursor-pointer"
                >
                  {user.icon}
                </span>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-xl">
                  <CiMenuBurger />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="p-4 bg-white overflow-y-auto"
              >
                <nav className="flex flex-col gap-4">
                  <SheetTitle>
                    <Link href="/" className="text-xl font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 117 25"
                        className="default-logo h-8"
                        aria-label="Furniture"
                        role="img"
                      >
                        <path
                          fill="#152420"
                          d="M60.515 8.956c.18.01.33.026.448.05v2.365a2.705 2.705 0 0 0-.519-.1 4.779 4.779 0 0 0-.674-.05 2.6 2.6 0 0 0-1.265.306c-.369.199-.66.476-.873.831-.213.355-.32.765-.32 1.229V20h-2.57V9.09h2.492v1.82h.114c.199-.63.54-1.116 1.022-1.457a2.815 2.815 0 0 1 1.67-.518c.142 0 .3.007.475.021Zm-10.989 6.456c0 .554-.116 1.016-.348 1.385-.227.365-.518.64-.873.824a2.357 2.357 0 0 1-1.101.277c-.616 0-1.113-.204-1.492-.611-.378-.407-.568-.956-.568-1.648V9.091h-2.57v6.946c0 .871.153 1.614.46 2.23.309.61.735 1.077 1.28 1.4.548.316 1.18.475 1.896.475.819 0 1.508-.194 2.066-.582a3.28 3.28 0 0 0 1.215-1.499h.113V20h2.493V9.09h-2.57v6.322ZM31.652 20h2.635v-6.179h6.044v-2.209h-6.044V7.663h6.683V5.455h-9.318V20ZM70.476 9.432c-.559-.322-1.214-.483-1.967-.483-.814 0-1.499.18-2.053.54-.549.36-.949.845-1.2 1.456h-.128V9.09h-2.457V20h2.57v-6.392c0-.526.098-.973.292-1.342.199-.37.471-.651.817-.846.35-.198.75-.298 1.2-.298.663 0 1.181.206 1.556.618.378.412.568.982.568 1.712V20h2.57v-6.946c.005-.871-.148-1.612-.46-2.223a3.253 3.253 0 0 0-1.308-1.4Zm34.661-.497c-.625 0-1.181.172-1.669.518-.483.341-.824.826-1.023 1.456h-.113V9.091h-2.493V20h2.571v-6.413c0-.464.106-.874.319-1.229.213-.355.505-.632.874-.831a2.6 2.6 0 0 1 1.264-.305c.218 0 .443.016.675.05.237.028.409.06.518.099V9.006a3.185 3.185 0 0 0-.447-.05 5.934 5.934 0 0 0-.476-.021Zm-10.513 6.477c0 .554-.116 1.016-.348 1.385-.227.365-.518.64-.874.824a2.358 2.358 0 0 1-1.1.277c-.616 0-1.113-.204-1.492-.611-.379-.407-.568-.956-.568-1.648V9.091H87.67v6.946c0 .871.154 1.614.461 2.23.308.61.734 1.077 1.279 1.4.55.316 1.181.475 1.896.475.82 0 1.508-.194 2.067-.582a3.28 3.28 0 0 0 1.214-1.499h.114V20h2.493V9.09h-2.571v6.322ZM117 15.249h-7.594c.008.605.118 1.131.342 1.57.232.449.557.795.973 1.036.417.237.905.355 1.463.355.374 0 .713-.052 1.016-.156.303-.109.566-.268.788-.476.223-.208.391-.466.505-.774l2.4.27a3.737 3.737 0 0 1-.866 1.662c-.422.469-.962.833-1.62 1.094-.658.255-1.411.383-2.258.383-1.094 0-2.039-.227-2.834-.682a4.614 4.614 0 0 1-1.825-1.946c-.426-.843-.639-1.835-.639-2.976 0-1.122.213-2.107.639-2.954.431-.852 1.032-1.515 1.804-1.989.771-.478 1.678-.717 2.72-.717.672 0 1.307.109 1.903.327a4.294 4.294 0 0 1 1.591.994c.464.45.829 1.023 1.094 1.719.265.69.398 1.515.398 2.471v.789Zm-2.465-1.733a2.772 2.772 0 0 0-.319-1.314 2.329 2.329 0 0 0-.874-.916c-.369-.223-.8-.334-1.293-.334-.525 0-.987.128-1.385.383a2.652 2.652 0 0 0-.93.995c-.194.361-.29.76-.315 1.186h5.116ZM74.858 20h2.571V9.09h-2.57V20Zm1.293-15.249c-.407 0-.758.138-1.051.412-.294.27-.44.6-.44.988 0 .383.146.712.44.987a1.5 1.5 0 0 0 1.05.405c.413 0 .763-.135 1.052-.405.294-.275.44-.604.44-.987a1.29 1.29 0 0 0-.44-.988 1.47 1.47 0 0 0-1.051-.412Zm8.823 13.196c-.133.024-.28.036-.44.036-.214 0-.408-.033-.583-.1a.843.843 0 0 1-.426-.369c-.104-.184-.156-.45-.156-.795v-5.64h2.152V9.092h-2.152V6.477h-2.571v2.614h-1.549v1.989h1.549v6.065c-.005.682.142 1.25.44 1.704.303.455.712.791 1.229 1.009.516.213 1.096.31 1.74.291a4.82 4.82 0 0 0 .923-.1c.256-.056.452-.108.59-.156l-.434-2.01a3.73 3.73 0 0 1-.312.064ZM25 3.75v15c0 2.125-1.625 3.75-3.75 3.75H20v1.25c0 .75-.5 1.25-1.25 1.25s-1.25-.5-1.25-1.25V22.5h-10v1.25C7.5 24.5 7 25 6.25 25S5 24.5 5 23.75V22.5H3.75C1.625 22.5 0 20.875 0 18.75v-15C0 1.625 1.625 0 3.75 0h17.5C23.375 0 25 1.625 25 3.75Zm-2.5 8.75h-20v6.25C2.5 19.5 3 20 3.75 20h17.5c.75 0 1.25-.5 1.25-1.25V12.5Zm0-8.75c0-.75-.5-1.25-1.25-1.25H3.75C3 2.5 2.5 3 2.5 3.75V10h20V3.75ZM14.375 5h-3.75c-.75 0-1.25.5-1.25 1.25s.5 1.25 1.25 1.25h3.75c.75 0 1.25-.5 1.25-1.25S15.125 5 14.375 5Zm-3.75 12.5h3.75c.75 0 1.25-.5 1.25-1.25s-.5-1.25-1.25-1.25h-3.75c-.75 0-1.25.5-1.25 1.25s.5 1.25 1.25 1.25Z"
                        ></path>
                      </svg>
                    </Link>
                  </SheetTitle>
                  <NavLink href="/">Home</NavLink>
                  <ShopDropdown components={components} />
                  <NavLink href="/docs">Docs</NavLink>
                  <NavLink href="/contact-us">Contact Us</NavLink>

                  <div className="flex gap-4 mt-6">
                    {userItems.map((user) => (
                      <span
                        key={user.id}
                        className="text-xl text-[var(--secondary-text-color)] cursor-pointer"
                      >
                        {user.icon}
                      </span>
                    ))}
                  </div>
                </nav>
                <hr className="border-t border-gray-400 my-10" />
                <Header flexCol={true} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}
