"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function ShopDropdown({
  components,
}: {
  components: { title: string; href: string }[];
}) {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 font-medium">
        Shop <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-white rounded-xl">
        <DropdownMenuLabel>Categories</DropdownMenuLabel>
        {components.map((c) => {
          const isActive =
            pathname === c.href || pathname.startsWith(c.href + "/");

          return (
            <DropdownMenuItem key={c.title} asChild>
              <Link
                href={c.href}
                className={clsx(
                  "block w-full px-2 py-1 rounded-md transition-colors",
                  isActive && "text-[var(--theme-text-color)] font-medium"
                )}
              >
                {c.title}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
