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
    <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
      >
        <X size={32} />
      </button>

      {/* Previous Button */}
      <button
        onClick={prevImage}
        className="absolute left-6 text-white hover:text-accent transition-colors"
      >
        <ChevronLeft size={48} />
      </button>

      {/* Image */}
      <div className="max-w-screen max-h-screen flex items-center justify-center">
        <img
          src={images[currentIndex].src}
          alt=""
          className="w-auto h-auto max-w-screen max-h-screen object-contain"
        />
      </div>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute right-6 text-white hover:text-accent transition-colors"
      >
        <ChevronRight size={48} />
      </button>
    </div>
  );
};

export default ImageSlider;