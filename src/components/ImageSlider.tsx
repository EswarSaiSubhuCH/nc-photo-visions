import React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Image {
  id: number;
  src: string;
  title: string;
  description: string;
  camera?: string;
  settings?: string;
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
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  React.useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  if (!isOpen) return null;

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4">
      {/* Close slider button */}
      <button
        onClick={onClose}
        aria-label="Close image slider"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-accent transition-colors z-10 p-2"
      >
        <X size={24} className="sm:w-8 sm:h-8" />
      </button>

      {/* Previous image button */}
      <button
        onClick={prevImage}
        aria-label="Previous image"
        className="absolute left-2 sm:left-6 text-white hover:text-accent transition-colors z-10 p-2"
      >
        <ChevronLeft size={32} className="sm:w-12 sm:h-12" />
      </button>

      {/* Displayed image */}
      <div className="max-w-full max-h-full flex items-center justify-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="w-auto h-auto max-w-full max-h-full object-contain"
        />
      </div>

      {/* Next image button */}
      <button
        onClick={nextImage}
        aria-label="Next image"
        className="absolute right-2 sm:right-6 text-white hover:text-accent transition-colors z-10 p-2"
      >
        <ChevronRight size={32} className="sm:w-12 sm:h-12" />
      </button>

      {/* Mobile swipe indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:hidden">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;