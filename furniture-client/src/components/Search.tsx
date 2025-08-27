"use client";

import * as React from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function Search({
  placeholder = "Search...",
  className,
  onChange,
}: {
  placeholder?: string;
  className?: string;
  onChange?: (value: string) => void;
}) {
  const [query, setQuery] = React.useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    onChange?.(e.target.value);
  }

  return (
    <div className={cn("relative ", className)}>
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        className="pl-9 rounded-full "
      />
    </div>
  );
}
