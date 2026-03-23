import React, { useState } from "react";
import u1 from "../assets/u1.jpeg";
import u2 from "../assets/u2.jpeg";
import u3 from "../assets/u3.jpeg";
import u4 from "../assets/u4.jpeg";
import u5 from "../assets/u5.jpeg";
import u7 from "../assets/u7.jpeg";
import u8 from "../assets/u8.jpeg";
import u9 from "../assets/u9.jpeg";
import u10 from "../assets/u10.jpeg";
import u12 from "../assets/u12.jpeg";
import u13 from "../assets/u13.jpeg";
import u15 from "../assets/u15.jpeg";
import u16 from "../assets/u16.jpeg";
import u17 from "../assets/u17.jpeg";

// Gallery images from assets
const galleryImages = [
  { id: 1, src: u1, alt: "Gallery Image 1" },
  { id: 2, src: u2, alt: "Gallery Image 2" },
  { id: 3, src: u3, alt: "Gallery Image 3" },
  { id: 4, src: u4, alt: "Gallery Image 4" },
  { id: 5, src: u5, alt: "Gallery Image 5" },
  { id: 6, src: u7, alt: "Gallery Image 6" },
  { id: 7, src: u8, alt: "Gallery Image 7" },
  { id: 8, src: u9, alt: "Gallery Image 8" },
  { id: 9, src: u10, alt: "Gallery Image 9" },
  { id: 10, src: u12, alt: "Gallery Image 10" },
  { id: 11, src: u13, alt: "Gallery Image 11" },
  { id: 12, src: u15, alt: "Gallery Image 12" },
  { id: 13, src: u16, alt: "Gallery Image 13" },
  { id: 14, src: u17, alt: "Gallery Image 14" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="bg-black text-white py-20 px-6 min-h-screen animate-fadeIn">
      <div className="container mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 text-orange-400 animate-slideUp">
          Gallery
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-size image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl hover:text-orange-400 transition"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;