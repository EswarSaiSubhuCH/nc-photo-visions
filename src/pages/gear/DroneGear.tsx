import React, { useState } from "react";
import { ArrowLeft, Eye, Star } from "lucide-react";
import { Link } from "react-router-dom";
import droneImage from "../../assets/samples/drone-gear.jpg";

const DroneGear = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const drones = [
    {
      id: 1,
      src: droneImage,
      name: "DJI Mavic 3 Pro",
      description: "Professional drone with Hasselblad camera and extended flight time capabilities",
      specifications: ["4/3 CMOS Sensor", "43min Flight Time", "15km Transmission", "Obstacle Avoidance"],
      price: "$2,199",
      rating: 4.8
    },
    {
      id: 2,
      src: droneImage,
      name: "DJI Air 2S",
      description: "Compact drone with 1-inch sensor delivering professional image quality",
      specifications: ["1-inch CMOS Sensor", "31min Flight Time", "12km Transmission", "MasterShots Mode"],
      price: "$999",
      rating: 4.7
    },
    {
      id: 3,
      src: droneImage,
      name: "DJI Mini 3 Pro",
      description: "Ultra-portable drone under 249g with professional camera capabilities",
      specifications: ["1/1.3-inch Sensor", "34min Flight Time", "12km Transmission", "True Vertical Shooting"],
      price: "$759",
      rating: 4.6
    },
    {
      id: 4,
      src: droneImage,
      name: "DJI Inspire 3",
      description: "Professional cinema drone with full-frame camera and advanced features",
      specifications: ["Full-Frame Sensor", "28min Flight Time", "15km Transmission", "360° Obstacle Sensing"],
      price: "$16,499",
      rating: 4.9
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
          <h1 className="text-5xl font-playfair font-bold mb-6">Drone Equipment</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional aerial photography and videography equipment. From compact travel drones 
            to cinema-grade systems for capturing breathtaking aerial perspectives.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Eye size={16} />
              <span>{drones.length} Items</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star size={16} />
              <span>DJI Professional</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {drones.map((drone) => (
            <div 
              key={drone.id}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(drone.id)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-500/20">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={drone.src} 
                    alt={drone.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                    {drone.price}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-playfair font-semibold text-xl mb-1">{drone.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-white/80 text-sm">{drone.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-playfair font-semibold text-xl">{drone.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-muted-foreground">{drone.rating}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {drone.description}
                  </p>
                  <div className="space-y-2">
                    {drone.specifications.map((spec, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1 h-1 rounded-full bg-accent"></div>
                        <span className="text-xs text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="font-semibold text-lg">{drone.price}</span>
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
          <h2 className="text-3xl font-playfair font-bold mb-4">Ready to Take Flight?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover the perfect drone for your aerial photography needs. From beginner-friendly 
            models to professional cinema drones, we can help you choose the right equipment.
          </p>
          <button className="btn-hero">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default DroneGear;