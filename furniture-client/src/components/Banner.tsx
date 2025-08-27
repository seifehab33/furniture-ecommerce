"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const socailMedia = [
  { id: 1, icon: <FaFacebook /> },
  { id: 2, icon: <FaTwitter /> },
  { id: 3, icon: <FaInstagram /> },
  { id: 4, icon: <FaYoutube /> },
];
function Banner() {
  return (
    <div className="w-full bg-[var(--theme-text-color)]">
      <div className="custom-container py-3 *:flex *:items-center *:gap-5 *:text-sm *:text-gray-100 *:cursor-pointer">
        <div>
          <h1>Showrooms</h1>
          <h1>Custom Work</h1>
          <h1>Gift Cards</h1>
        </div>
        <div>
          {socailMedia.map((media) => (
            <span key={media.id} className="">
              {media.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
