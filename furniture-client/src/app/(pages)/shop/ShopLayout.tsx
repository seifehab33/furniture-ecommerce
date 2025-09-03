import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
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
import BestSellingProducts from "@/components/filter/BestSellingProducts";
import ProductCard from "@/components/products/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaXmark } from "react-icons/fa6";
export const categories = [
  { id: 1, title: "Armchairs", img: cat1, products: 5 },
  { id: 2, title: "Chairs", img: cat2, products: 6 },
  { id: 3, title: "Storage", img: cat3, products: 6 },
  { id: 4, title: "Sofas", img: cat4, products: 6 },
  { id: 5, title: "Decor", img: cat5, products: 8 },
  { id: 6, title: "Tables", img: cat6, products: 5 },
];
const filterCategories = [
  { id: 1, title: "Armchairs", counts: 5 },
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
  products: {
    id: number;
    img: string | StaticImageData;
    title: string;
    desc?: string;
    price: number;
    categoryId?: string;
  }[];
};
function ShopLayout({ title, headerImage, products }: ShopLayoutProps) {
  const defaultMin = 0;
  const defaultMax = 2000;
  const ITEMS_PER_PAGE = 8;
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams.toString());
  const parts = pathName.split("/").filter(Boolean);
  const min = Number(searchParams.get("min")) || 0;
  const max = Number(searchParams.get("max")) || 2000;
  const color = searchParams.get("color");
  const currentPage = Number(searchParams.get("page")) || 1;
  const [priceRange, setPriceRange] = useState<[number, number]>([min, max]);
  const totalResults = products.length;
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const startResult = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endResult = Math.min(currentPage * ITEMS_PER_PAGE, totalResults);
  const handlePriceChange = ([newMin, newMax]: [number, number]) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("min", String(newMin));
    newParams.set("max", String(newMax));
    router.push(`?${newParams.toString()}`, { scroll: false });
    setPriceRange([newMin, newMax]);
  };

  const resetFilter = () => {
    router.replace(`?`, { scroll: false });
    setPriceRange([defaultMin, defaultMax]);
  };
  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", String(newPage));
    router.push(`?${newParams.toString()}`, { scroll: false });
  };
  const handleNextPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };
  const handlePreviousPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };
  const isFiltered = min !== defaultMin || max !== defaultMax || color;
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
                <Link
                  href={{
                    pathname: `/shop/category/${category.title}`,
                  }}
                >
                  <Image
                    src={category.img}
                    alt="category"
                    width={200}
                    height={200}
                    className="rounded-full object-cover w-16 h-16 transform transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
              <div>
                <h1 className="font-bold">{category.title}</h1>
                <p className="text-gray-500 text-sm">
                  {category.products} products
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="my-10 flex justify-between gap-10">
          <div className="left-side w-1/4">
            <div className=" text-sm">
              <PriceFilter
                min={0}
                max={2000}
                value={priceRange}
                onValueChange={handlePriceChange}
              />
              <ColorFilter />
              <CatMat title="Filter by Category" items={filterCategories} />
              <CatMat title="Filter by Material" items={materials} />
              <Brand />
              <BestSellingProducts />
            </div>
          </div>
          <div className="right-side flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <p className="text-sm font-medium text-gray-500">
                  Showing {startResult} – {endResult} of {totalResults} results
                </p>
                {isFiltered && (
                  <Button
                    className="flex items-center bg-[var(--theme-text-color)]"
                    onClick={resetFilter}
                  >
                    Reset Button
                    <FaXmark />
                  </Button>
                )}
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Default Sorting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sorts</SelectLabel>
                      <SelectItem value="popularity">
                        Sort by popularity
                      </SelectItem>
                      <SelectItem value="averagerating">
                        Sort by average rating
                      </SelectItem>
                      <SelectItem value="lowprice">
                        Sort by Low Price
                      </SelectItem>
                      <SelectItem value="highprice">
                        Sort by High Price
                      </SelectItem>
                      <SelectItem value="latest">Sort by latest</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {paginatedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                  {paginatedProducts.map((product) => (
                    <ProductCard product={product} key={product.id} />
                  ))}
                </div>
              </>
            ) : (
              ""
            )}
            <Pagination>
              <PaginationContent>
                {/* Previous */}
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={handlePreviousPage}
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={page === currentPage}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}

                {/* Next */}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={handleNextPage}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopLayout;
