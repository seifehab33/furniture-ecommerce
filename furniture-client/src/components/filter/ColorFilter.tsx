"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const colors = [
  { id: 1, color: "Beige", counts: 5 },
  { id: 2, color: "Blue", counts: 1 },
  { id: 3, color: "Gray", counts: 3 },
  { id: 4, color: "Green", counts: 4 },
  { id: 5, color: "Red", counts: 2 },
  { id: 6, color: "Yellow", counts: 7 },
  { id: 7, color: "Purple", counts: 6 },
];

function ColorFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedColor, setSelectedColor] = useState("");
  const handleClick = (selectedColor: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("color", selectedColor); // 👈 set color param
    router.push(`?${params.toString()}`, { scroll: false });
    setSelectedColor(selectedColor);
  };

  return (
    <div className="mt-10">
      <h1 className="mb-4 font-bold text-[16px]">Filter by color</h1>
      <div className="space-y-3">
        {colors.map((c) => (
          <div
            key={c.id}
            className="flex justify-between items-center group cursor-pointer"
            onClick={() => handleClick(c.color)} // 👈 click sets param
          >
            <div className="flex items-center gap-2">
              <div
                className={`${
                  selectedColor === c.color
                    ? "border-gray-700 border-2"
                    : "border-gray-400 border"
                } max-w-fit p-[3px] rounded-full transition-all group-hover:border-4`}
              >
                <div
                  className="h-3.5 w-3.5 rounded-full"
                  style={{ backgroundColor: c.color }}
                />
              </div>
              <p
                className={`${
                  selectedColor === c.color ? "font-bold" : "font-normal"
                } text-gray-600`}
              >
                {c.color}
              </p>
            </div>
            <div
              className={`border px-2 py-0.5 rounded-full text-xs transition-colors duration-150 ease-in-out
    ${
      selectedColor === c.color
        ? "bg-[var(--theme-text-color)] text-white"
        : "text-gray-500 group-hover:bg-[var(--theme-text-color)] group-hover:text-white"
    }`}
            >
              {c.counts}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorFilter;
