import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import coffeeposter from "../assets/Cofee Poster.png";
import washingmachineposter from "../assets/washing Machine poster 2.png";
import iphoneposter from "../assets/Iphone.png";
import adobochickenposter from "../assets/Adobo Chicken Poster.png";
import burger from "../assets/Burger Poster.png";
import homeposter from "../assets/Home Poster.png";
import springrollposter from "../assets/spring Roll Poster.png";

export default function PostersShowcase() {
  const posters = [
    washingmachineposter,
    coffeeposter,
    homeposter,
    burger,
    springrollposter,
    adobochickenposter,
    iphoneposter,
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleClose = () => setLightboxIndex(null);
  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? posters.length - 1 : prev - 1));
  };
  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === posters.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="Poster" className="relative py-20 bg-black overflow-hidden">
      {/* Heading */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Professional Poster Design
        </h2>
        <div className="w-5/6 h-1  bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      {/* Gallery Grid (exact image sizes, no crop) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {posters.map((poster, i) => (
          <div
            key={i}
            className="cursor-pointer flex justify-center items-center bg-white/5 rounded-md shadow-md p-2"
            onClick={() => setLightboxIndex(i)}
          >
            <img
              src={poster}
              alt={`Poster ${i + 1}`}
              className="w-full h-auto object-contain hover:scale-105 rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={posters[lightboxIndex]}
              alt={`Poster ${lightboxIndex + 1}`}
              className="w-full max-h-[85vh] object-contain rounded-lg shadow-lg"
            />

            {/* Controls */}
            <button
              className="absolute top-4 right-4 text-white"
              onClick={handleClose}
            >
              <X size={32} />
            </button>
            <button
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
              onClick={handlePrev}
            >
              <ChevronLeft size={28} />
            </button>
            <button
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
              onClick={handleNext}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
