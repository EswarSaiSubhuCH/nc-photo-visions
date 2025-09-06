import React, { useState } from "react";
import { ArrowLeft, Eye, Star } from "lucide-react";
import { Link } from "react-router-dom";
import accessoriesImage from "../../assets/samples/accessories-gear.jpg";

const AccessoriesGear = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const accessories = [
    {
      id: 1,
      src: accessoriesImage,
      name: "Manfrotto Carbon Fiber Tripod",
      description: "Ultra-lightweight carbon fiber tripod with professional ball head system",
      specifications: ["Carbon Fiber Construction", "Max Load 8kg", "Compact Design", "Quick Release Plate"],
      price: "$459",
      rating: 4.7
    },
    {
      id: 2,
      src: accessoriesImage,
      name: "Godox AD600Pro Flash",
      description: "High-power portable flash system with advanced wireless control capabilities",
      specifications: ["600Ws Power", "HSS Support", "Wireless Control", "Fast Recycle Time"],
      price: "$899",
      rating: 4.8
    },
    {
      id: 3,
      src: accessoriesImage,
      name: "Peak Design Camera Strap",
      description: "Quick-connecting camera strap with innovative Anchor Link system",
      specifications: ["Quick Connect System", "Adjustable Length", "Comfortable Padding", "Lifetime Warranty"],
      price: "$59",
      rating: 4.9
    },
    {
      id: 4,
      src: accessoriesImage,
      name: "B+W UV Protection Filter",
      description: "High-quality UV filter for lens protection and image quality enhancement",
      specifications: ["Multi-Coated Glass", "Brass Mount", "Various Sizes", "Optical Glass"],
      price: "$89",
      rating: 4.6
    }
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
          <h1 className="text-5xl font-playfair font-bold mb-6">Photography Accessories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Essential accessories that enhance our photography workflow. From professional tripods 
            to lighting equipment, these tools help us deliver exceptional results.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Eye size={16} />
              <span>{accessories.length} Items</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star size={16} />
              <span>Professional Grade</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {accessories.map((accessory) => (
            <div 
              key={accessory.id}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(accessory.id)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/20">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={accessory.src} 
                    alt={accessory.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                    {accessory.price}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-playfair font-semibold text-xl mb-1">{accessory.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-white/80 text-sm">{accessory.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-playfair font-semibold text-xl">{accessory.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-muted-foreground">{accessory.rating}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {accessory.description}
                  </p>
                  <div className="space-y-2">
                    {accessory.specifications.map((spec, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1 h-1 rounded-full bg-accent"></div>
                        <span className="text-xs text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="font-semibold text-lg">{accessory.price}</span>
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full hover:bg-accent/20 transition-colors cursor-pointer">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-white/10 backdrop-blur-sm">
          <h2 className="text-3xl font-playfair font-bold mb-4">Need Photography Accessories?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            The right accessories can make all the difference in your photography. Let us recommend 
            the essential gear that will enhance your shooting experience and results.
          </p>
          <button className="btn-hero">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesGear;