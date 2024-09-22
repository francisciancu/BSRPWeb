"use client";

import React from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css"; // Lightgallery core styles
import "lightgallery/css/lg-zoom.css"; // Plugin styles
import "lightgallery/css/lg-thumbnail.css"; // Plugin styles

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const images = [
  { src: "/images/crafting/Asmondian_1.25_Diseases.jpg", alt: "Diseases" },
  { src: "/images/crafting/Asmondian_1.26_Crafting_1.jpg", alt: "Crafting 1" },
  { src: "/images/crafting/Asmondian_1.26_Crafting_2.jpg", alt: "Crafting 2" },
  { src: "/images/crafting/Asmondian_1.26_Crafting_3.jpg", alt: "Crafting 1" },
  {
    src: "/images/crafting/Asmondian_1.26_Weapon_Chart.jpg",
    alt: "Weapon Chart",
  },
];

const newpage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full pt-20">
      <LightGallery plugins={[lgThumbnail, lgZoom]} mode="lg-fade">
        {images.map((image, index) => (
          <a key={index} href={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={600}
              className="rounded-lg"
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </a>
        ))}
      </LightGallery>
    </main>
  );
};

export default newpage;
