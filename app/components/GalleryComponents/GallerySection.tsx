"use client";
import { useState, useEffect } from "react";
import ModalImage from "./ModalImage";
import Star from "../global/Star";
import Image from "next/image";

type Image = {
  src: string;
  alt: string;
};

type GallerySectionProps = {
  year: string;
  images: Image[];
};

const GallerySection = ({ year, images }: GallerySectionProps) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    setImagesLoaded(false);

    Promise.all(
      images.map((image) => {
        return new Promise((resolve) => {
          const img = document.createElement("img");
          img.src = image.src;
          img.onload = resolve;
        });
      })
    ).then(() => {
      setImagesLoaded(true);
    });
  }, [images]);

  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="my-4 w-[80%] mx-auto">
      {/* Year Section Header */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-left">
        {year} Images
      </h2>

      {/* Blue Border */}
      <hr className="border-b-1 border-blue-500 mb-6" />

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {!imagesLoaded
          ? // Skeleton Loading Grid
            [...Array(images.length)].map((_, idx) => (
              <div
                key={`skeleton-${idx}`}
                className="relative overflow-hidden rounded-lg bg-gray-900 aspect-square w-full"
              >
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 skeleton-animate" />
              </div>
            ))
          : // Actual Images
            images.map((image, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 w-full"
                onClick={() => openModal(image)}
              >
                <div className="aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
      </div>

      {/* Modal */}
      <ModalImage
        isOpen={!!selectedImage}
        imageSrc={selectedImage?.src || null}
        imageAlt={selectedImage?.alt || null}
        onClose={closeModal}
      />

      {/* Star Symbol After Year */}
      <div className="flex justify-center mt-6">
        <Star />
      </div>
    </section>
  );
};

export default GallerySection;
