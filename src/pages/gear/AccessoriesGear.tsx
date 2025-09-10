import React, { useState } from "react";
import { ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const AccessoriesGear = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const accessories = [
    {
      id: 1,
      src: "https://i.ibb.co/pBktwW5X/Sandisk-Extreme-Portable-2-TB.webp",
      name: "Sandisk Extreme Portable 2TB SSD",
      description:
        "High-speed portable SSD with rugged durability, perfect for photographers on the move.",
      specifications: [
        "2TB Capacity",
        "1050MB/s Read, 1000MB/s Write",
        "3m Drop Protection",
        "IP65 Water & Dust Resistance",
        "Hardware Encryption",
        "PC, Mac & Type-C Smartphone Compatible",
        "5-Year Warranty",
        "Black Color",
      ],
      price: "$249",
      rating: 4.9,
    },
    {
      id: 2,
      src: "https://i.ibb.co/39dWJWr7/Godox-SB-UBW80.webp",
      name: "Godox SB-UBW80 Octa Softbox",
      description:
        "80cm octa softbox designed for speedlites, delivering soft and even light.",
      specifications: [
        "80 cm Octa Softbox",
        "Optimized for Speedlites",
        "Soft, Natural Lighting",
        "Portable & Lightweight",
      ],
      price: "$129",
      rating: 4.7,
    },
    {
      id: 3,
      src: "https://i.ibb.co/fzRPHWS3/Godox-TT520ii-Flash.jpg",
      name: "Godox TT520ii Flash Speedlite",
      description:
        "Universal hot shoe flash for DSLR cameras with adjustable output and wide compatibility.",
      specifications: [
        "Universal Hot Shoe Mount",
        "Compatible with Canon, Nikon, Pentax, Olympus",
        "Manual Power Control",
        "Tilting & Rotating Head",
      ],
      price: "$79",
      rating: 4.6,
    },
    {
      id: 4,
      src: "https://i.ibb.co/tMMX32Z0/MOBIUS.jpg",
      name: "MOBIUS Screenshot SLR/DSLR Backpack Bag",
      description:
        "100% waterproof camera backpack with rain cover, laptop compartment, and dedicated lens/flash slots.",
      specifications: [
        "Rain Cover Protection",
        "Waterproof Material",
        "Laptop Compartment",
        "Monopod Holder",
        "Supports 18-135mm / 55mm / 85mm / 70-200mm Lenses",
        "Dedicated Slots for Flash & Charger",
      ],
      price: "$149",
      rating: 4.8,
    },
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
          <h1 className="text-5xl font-playfair font-bold mb-6">
            Photography Accessories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Essential accessories that enhance our photography workflow. From
            storage solutions to protective gear, these tools help us deliver
            exceptional results.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Eye size={16} />
              <span>{accessories.length} Items</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {accessories.map((accessory) => (
            <div
              key={accessory.id}
              className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedItem(accessory.id)}
            >
              <div className="aspect-[4/3] relative mb-4 rounded-xl overflow-hidden">
                <img
                  src={accessory.src}
                  alt={accessory.name}
                  className="w-full h-full object-contain transition-transform duration-300"
                />
              </div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-playfair font-semibold text-xl">
                  {accessory.name}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {accessory.description}
              </p>
              <div className="space-y-2 mb-4">
                {accessory.specifications.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1 h-1 rounded-full bg-accent"></div>
                    <span className="text-xs text-muted-foreground">
                      {spec}
                    </span>
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

export default AccessoriesGear;