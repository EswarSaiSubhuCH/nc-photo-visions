import React, { useState } from "react";
import { ArrowLeft, Eye, Star } from "lucide-react";
import { Link } from "react-router-dom";
import lensImage from "../../assets/samples/lens-gear.jpg";
const LensGear = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const lenses = [{
    id: 1,
    src: lensImage,
    name: "Canon RF 24-70mm f/2.8L",
    description: "Professional standard zoom lens with constant f/2.8 aperture and weather sealing",
    specifications: ["24-70mm Focal Range", "f/2.8 Constant Aperture", "Weather Sealed", "Nano USM Motor"],
    price: "$2,299",
    rating: 4.8
  }, {
    id: 2,
    src: lensImage,
    name: "Canon RF 70-200mm f/2.8L",
    description: "Professional telephoto zoom lens perfect for portraits and wildlife photography",
    specifications: ["70-200mm Focal Range", "f/2.8 Constant Aperture", "IS Technology", "Fluorine Coating"],
    price: "$2,699",
    rating: 4.9
  }, {
    id: 3,
    src: lensImage,
    name: "Canon RF 16-35mm f/2.8L",
    description: "Ultra-wide angle zoom lens ideal for landscapes and architecture",
    specifications: ["16-35mm Focal Range", "f/2.8 Constant Aperture", "ASC Coating", "Weather Resistant"],
    price: "$2,299",
    rating: 4.7
  }, {
    id: 4,
    src: lensImage,
    name: "Canon RF 85mm f/1.2L",
    description: "Premium portrait lens with exceptional bokeh and sharpness",
    specifications: ["85mm Fixed Focal Length", "f/1.2 Maximum Aperture", "Blue Spectrum Refractive", "DS Version Available"],
    price: "$2,699",
    rating: 4.9
  }];
  return <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/gear" className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Back to Gear</span>
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6">Lens Collection</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional lenses that bring creative vision to life. From versatile zooms to 
            specialized primes, each lens offers unique capabilities for different shooting scenarios.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Eye size={16} />
              <span>{lenses.length} Items</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star size={16} />
              <span>L-Series Quality</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {lenses.map(lens => (
            <div key={lens.id} className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300 cursor-pointer" onClick={() => setSelectedItem(lens.id)}>
              <div className="aspect-[4/3] relative mb-4 rounded-xl overflow-hidden">
                <img src={lens.src} alt={lens.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-foreground text-sm font-medium">
                  {lens.price}
                </div>
              </div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-playfair font-semibold text-xl">{lens.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-sm text-muted-foreground">{lens.rating}</span>
                </div>
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
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="font-semibold text-lg">{lens.price}</span>
                <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full hover:bg-accent/20 transition-colors cursor-pointer">
                  View Details
                </span>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>;
};
export default LensGear;