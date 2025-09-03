import React from "react";

interface CatMateState {
  title: string;
  items: { id: number; title: string; counts: number }[];
}

function CatMat({ title, items }: CatMateState) {
  return (
    <div className="mt-10">
      <h1 className="mb-4 font-bold text-[16px]">{title}</h1>

      <div className="space-y-3 rounded-lg">
        {items.map((item) => (
          <label
            key={item.id}
            className="flex justify-between items-center cursor-pointer  group"
          >
            {/* Left side: checkbox + text */}
            <div className="flex items-center gap-2">
              <div className=" max-w-fit p-[3px] rounded transition-all ">
                <input
                  type="checkbox"
                  className="w-3 h-3 mt-1 text-gray-600 bg-gray-900 rounded cursor-pointer"
                />
              </div>
              <span className="text-gray-700 group-hover:text-[var(--theme-text-color)]">
                {item.title}
              </span>
            </div>

            {/* Right side: counts */}
            <div className="border px-2 text-xs py-0.5 rounded-full  text-gray-500 transition-colors duration-150 ease-in-out group-hover:bg-[var(--theme-text-color)] group-hover:text-white">
              {item.counts}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default CatMat;
