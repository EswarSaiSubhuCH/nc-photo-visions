import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Image {
  id: number;
  src: string;
  title: string;
  description: string;
  camera: string;
  settings: string;
}

interface ImageSliderProps {
  images: Image[];
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  isOpen,
  initialIndex,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!isOpen) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-accent transition"
      >
        <X size={32} />
      </button>

      {/* Previous button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 text-white hover:text-accent transition"
      >
        <ChevronLeft size={40} />
      </button>

      {/* Image */}
      <div className="w-full h-full flex items-center justify-center px-8">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="w-full h-full object-contain"
          draggable={false}
        />
      </div>

      {/* Next button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 text-white hover:text-accent transition"
      >
        <ChevronRight size={40} />
      </button>

      {/* Caption */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white max-w-4xl px-4">
        <h2 className="text-xl font-semibold mb-2">
          {images[currentIndex].title}
        </h2>
        <p className="text-sm mb-2">
          {images[currentIndex].description}
        </p>
        <p className="text-xs text-gray-300">
          {images[currentIndex].camera} — {images[currentIndex].settings}
        </p>
      </div>
    </div>
  );
};

export default ImageSlider;