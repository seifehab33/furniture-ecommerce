"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import covervideo from "@/assets/about-us-page-video-cover.webp";
function VideoAboutUs() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative  rounded-xl overflow-hidden shadow-lg w-full">
      {!isPlaying ? (
        <div
          className="relative w-full h-96 cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          {/* Cover image */}
          <Image
            src={covervideo}
            alt="About Us Video"
            className="object-cover "
          />
          {/* Overlay */}
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full p-4">
              <Play className="w-4 h-4 md:w-6 md:h-6 text-gray-500" />
            </div>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-96"
          src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1"
          title="About Us Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default VideoAboutUs;
