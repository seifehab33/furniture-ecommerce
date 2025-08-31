import { usePathname } from "next/navigation";
import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import cat1 from "@/assets/armchairs-category-hero-image.webp";
import cat2 from "@/assets/chairs-category-hero-image.webp";
import cat3 from "@/assets/storage-category-hero-image.webp";
import cat4 from "@/assets/sofas-category-hero-image.webp";
import cat5 from "@/assets/decor-category-hero-image.webp";
import cat6 from "@/assets/tables-category-hero-image.webp";
import PriceFilter from "@/components/filter/PriceSlider";
import ColorFilter from "@/components/filter/ColorFilter";
import CatMat from "@/components/filter/CatMat";
import Brand from "@/components/filter/Brand";
const categories = [
  { id: 1, title: "Armcharis", img: cat1, products: 5 },
  { id: 2, title: "Chairs", img: cat2, products: 6 },
  { id: 3, title: "Storage", img: cat3, products: 6 },
  { id: 4, title: "Sofas", img: cat4, products: 6 },
  { id: 5, title: "Decor", img: cat5, products: 8 },
  { id: 6, title: "Tables", img: cat6, products: 5 },
];
const filterCategories = [
  { id: 1, title: "Armcharis", counts: 5 },
  { id: 2, title: "Chairs", counts: 6 },
  { id: 3, title: "Storage", counts: 6 },
  { id: 4, title: "Sofas", counts: 6 },
  { id: 5, title: "Decor", counts: 8 },
  { id: 6, title: "Tables", counts: 5 },
];
const materials = [
  { id: 1, title: "Cotton", counts: 12 },
  { id: 2, title: "Wool", counts: 7 },
  { id: 3, title: "Silk", counts: 5 },
  { id: 4, title: "Polyester", counts: 9 },
  { id: 5, title: "Leather", counts: 4 },
];
type ShopLayoutProps = {
  title: string;
  headerImage: string | StaticImageData;
  products?: { id: number; name: string; desc: string; price: number }[];
};
function ShopLayout({ title, headerImage, products }: ShopLayoutProps) {
  const pathName = usePathname();
  const parts = pathName.split("/").filter(Boolean);
  return (
    <div className="">
      <div className="headerImg">
        <div className="relative w-full max-w-[1400px] mx-auto">
          <Image
            src={headerImage}
            alt="shop"
            width={800}
            height={800}
            className="w-full  rounded-3xl"
          />
          <div className="absolute inset-0 rounded-3xl bg-black/50" />

          <div className="absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-gray-300">
            <h1 className=" text-3xl font-bold">{title}</h1>
            <div className="py-4 flex items-center">
              <Breadcrumb className="font-medium">
                <BreadcrumbList>
                  {/* Home always first */}
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link
                        href="/"
                        className="flex items-center text-gray-300"
                      >
                        <BiHome className="inline-block w-4 h-4 mr-1" />
                        <p>Home</p>
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  {parts.map((part, index) => {
                    const href = "/" + parts.slice(0, index + 1).join("/");
                    const isLast = index === parts.length - 1;

                    return (
                      <React.Fragment key={href}>
                        <BreadcrumbSeparator className="mt-1" />
                        <BreadcrumbItem className="font-medium ">
                          {!isLast ? (
                            <BreadcrumbLink asChild>
                              <Link
                                href={{ pathname: href }}
                                className="capitalize font-medium text-gray-300"
                              >
                                {part}
                              </Link>
                            </BreadcrumbLink>
                          ) : (
                            <BreadcrumbPage className="capitalize font-medium text-gray-300">
                              {part}
                            </BreadcrumbPage>
                          )}
                        </BreadcrumbItem>
                      </React.Fragment>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container mt-14 flex-col">
        <div className="categories flex items-center gap-4 w-full justify-between">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="group w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={category.img}
                  alt="category"
                  width={200}
                  height={200}
                  className="rounded-full object-cover w-16 h-16 transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div>
                <h1 className="font-bold">{category.title}</h1>
                <p className="text-gray-500">{category.products} products</p>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <div className="left-side max-w-sm">
            <div className="mt-10 text-sm">
              <PriceFilter />
              <CatMat title="Filter by Category" items={filterCategories} />
              <ColorFilter />
              <CatMat title="Filter by Material" items={materials} />
              <Brand />
            </div>
          </div>
          <div className="right-side"></div>
        </div>
      </div>
    </div>
  );
}

export default ShopLayout;
