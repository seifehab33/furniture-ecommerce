import React from "react";

const colors = [
  { id: 1, color: "Beige", counts: 5 },
  { id: 2, color: "Blue", counts: "1" },
  { id: 3, color: "Gray", counts: "3" },
];

function ColorFilter() {
  return (
    <div className="mt-10">
      <h1 className="mb-4 font-bold">Filter by color</h1>
      <div className="space-y-3">
        {colors.map((color) => (
          <div
            key={color.id}
            className="flex justify-between items-center group cursor-pointer"
          >
            {/* Color circle + name */}
            <div className="flex items-center gap-2">
              <div className="border border-gray-400 max-w-fit p-[3px] rounded-full transition-all group-hover:border-4">
                <div
                  className="h-5 w-5 rounded-full"
                  style={{ backgroundColor: color.color }}
                ></div>
              </div>
              <p className="text-gray-700">{color.color}</p>
            </div>

            {/* Count badge */}
            <div className="border px-2 py-0.5 rounded-full text-sm text-gray-500 transition-colors duration-150 ease-in-out group-hover:bg-[var(--theme-text-color)] group-hover:text-white">
              {color.counts}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorFilter;
