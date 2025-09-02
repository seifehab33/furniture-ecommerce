"use client";
import React from "react";
import browseImg from "@/assets/browse-by-rooms-image-1-1.webp";
import broImg2 from "@/assets/browse-by-rooms-image-2-1.webp";
import broImg3 from "@/assets/browse-by-rooms-image-3.webp";
import broImg4 from "@/assets/browse-by-rooms-image-4-1.webp";
import ProductCard from "@/components/products/RoomCard";

const lastProducts = [broImg3, broImg4];

function BrowseRooms() {
  return (
    <div className="bg-[var(--theme-text-color)] custom-container grid grid-cols-1 md:grid-cols-2 gap-6 p-6 text-white rounded-xl">
      {/* Left side */}
      <div className="left-side flex flex-col gap-6">
        <div className="heading-animate">
          <h1 className="font-bold text-4xl">Browse by rooms</h1>
          <p className="max-w-sm text-sm mt-4">
            Sit massa etiam urna id. Non pulvinar aenean ultrices lectus vitae
            imperdiet vulputate a eu. Aliquet ullamcorper leo mi vel sit pretium
            euismod eget.
          </p>
        </div>
        <div className="card-animate">
          <ProductCard
            img={browseImg}
            height={600}
            width={600}
            nofp={15}
            title="Living Room"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="right-side flex flex-col gap-6">
        <div className="card-animate">
          <ProductCard
            width={610}
            height={600}
            img={broImg2}
            nofp={24}
            title="Bedroom"
          />
        </div>
        <div className="flex gap-3 mt-4">
          {lastProducts.map((product, idx) => (
            <div key={idx} className="card-animate flex-1">
              <ProductCard
                img={product}
                height={400}
                width={300}
                nofp={30}
                title="Walk-in Closet"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseRooms;
