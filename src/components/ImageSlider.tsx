import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageSliderProps {
  images: {
    id: number;
    src: string;
    title: string;
    description: string;
    camera?: string;
    settings?: string;
  }[];
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, isOpen, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!isOpen) return null;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "Escape") onClose();
  };

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative max-w-6xl w-full h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex justify-between items-center mb-4 text-white">
          <div>
            <h3 className="text-xl font-semibold">{currentImage.title}</h3>
            <p className="text-sm text-gray-300">
              {currentIndex + 1} of {images.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Close slider"
          >
            <X size={24} />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative flex-1 flex items-center justify-center">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-w-full max-h-full object-contain rounded-lg select-none"
            style={{ userSelect: 'none', pointerEvents: 'none' }}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Image Info */}
        <div className="text-white mt-4 text-center">
          <p className="text-sm text-gray-300 mb-2">{currentImage.description}</p>
          {currentImage.camera && currentImage.settings && (
            <div className="text-xs text-gray-400">
              <span className="mr-4">{currentImage.camera}</span>
              <span>{currentImage.settings}</span>
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                  index === currentIndex ? "border-white" : "border-gray-600 hover:border-gray-400"
                }`}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover select-none"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;