"use client";
import { useState } from "react";
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
        {images.map((image, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => openModal(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
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
