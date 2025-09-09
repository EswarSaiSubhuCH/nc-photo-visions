import React, { useState } from "react";
import { ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const LensGear = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const lenses = [
    {
      id: 1,
      src: "https://i.ibb.co/jkJ60Zvn/Samyang-85mm.jpg",
      link: "https://ibb.co/xqFC98Sx",
      name: "Samyang 85mm f/1.4",
      description: "Premium portrait lens designed for sharp, high-quality images with beautiful bokeh. Perfect for professional portrait, fashion, and low-light photography.",
      specifications: [
        "85mm Fixed Focal Length",
        "f/1.4 Maximum Aperture",
        "Ultra Multi-Coating for minimal flare",
        "Manual Focus Lens",
        "High-resolution optical performance",
      ],
    },
    /*
    {
      id: 2,
      src: "https://i.ibb.co/wFdrHy6M/Canon-200-D-II.jpg",
      name: "Canon 200D Mark II",
      description: "Compact and versatile DSLR designed for beginner and enthusiast photographers. Combines excellent image quality with easy-to-use controls and lightweight portability.",
      specifications: [
        "24.1MP APS-C CMOS Sensor",
        "DIGIC 8 Image Processor",
        "Full HD 1080p Video Recording at 60fps",
        "Dual Pixel CMOS AF for fast and accurate focusing",
        "ISO 100-25600 for low-light performance",
        "3-inch Vari-angle Touchscreen LCD",
        "Wi-Fi and Bluetooth connectivity"
      ],
    },
    {
      id: 3,
      src: lensImage,
      name: "Canon RF 16-35mm f/2.8L",
      description: "Ultra-wide angle zoom lens ideal for landscapes and architecture",
      specifications: ["16-35mm Focal Range", "f/2.8 Constant Aperture", "ASC Coating", "Weather Resistant"],
    },
    {
      id: 4,
      src: lensImage,
      name: "Canon RF 85mm f/1.2L",
      description: "Premium portrait lens with exceptional bokeh and sharpness",
      specifications: ["85mm Fixed Focal Length", "f/1.2 Maximum Aperture", "Blue Spectrum Refractive", "DS Version Available"],
    }
    */
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/gear"
          className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Gear</span>
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6">Lens Collection</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our premium lens for professional portrait and creative photography.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Eye size={16} />
              <span>{lenses.length} Item</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {lenses.map((lens) => (
            <div
              key={lens.id}
              className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedItem(lens.id)}
            >
              <div className="aspect-[4/3] relative mb-4 rounded-xl overflow-hidden">
                <a href={lens.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={lens.src}
                    alt={lens.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              </div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-playfair font-semibold text-xl">{lens.name}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {lens.description}
              </p>
              <div className="space-y-2 mb-4">
                {lens.specifications.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1 h-1 rounded-full bg-accent"></div>
                    <span className="text-xs text-muted-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LensGear;