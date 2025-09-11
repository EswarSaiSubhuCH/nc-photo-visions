import React, { useState } from "react";
import { ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const DroneGear = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const drones = [
    {
      id: 1,
      src: "https://i.postimg.cc/NjFqdfxd/Dji-Mini-4-Pro.jpg",
      name: "DJI Mini 4 Pro",
      description:
        "Compact and powerful drone under 249g designed for travelers and creators. Features advanced obstacle avoidance and excellent camera quality.",
      specifications: [
        "1/1.3-inch CMOS Sensor",
        "4K/60fps HDR Video",
        "34min Flight Time",
        "Omnidirectional Obstacle Sensing",
        "Extended 20km HD Video Transmission"
      ],
      price: "$999",
      rating: 4.8,
    },

    /*
    {
      id: 2,
      src: droneImage,
      name: "DJI Air 2S",
      description: "Compact drone with 1-inch sensor delivering professional image quality",
      specifications: ["1-inch CMOS Sensor", "31min Flight Time", "12km Transmission", "MasterShots Mode"],
      price: "$999",
      rating: 4.7,
    },
    {
      id: 3,
      src: droneImage,
      name: "DJI Mini 3 Pro",
      description: "Ultra-portable drone under 249g with professional camera capabilities",
      specifications: ["1/1.3-inch Sensor", "34min Flight Time", "12km Transmission", "True Vertical Shooting"],
      price: "$759",
      rating: 4.6,
    },
    {
      id: 4,
      src: droneImage,
      name: "DJI Inspire 3",
      description: "Professional cinema drone with full-frame camera and advanced features",
      specifications: ["Full-Frame Sensor", "28min Flight Time", "15km Transmission", "360° Obstacle Sensing"],
      price: "$16,499",
      rating: 4.9,
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
          <h1 className="text-5xl font-playfair font-bold mb-6">
            Drone Equipment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional aerial photography and videography equipment. From
            compact travel drones to cinema-grade systems for capturing
            breathtaking aerial perspectives.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Eye size={16} />
              <span>{drones.length} Items</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {drones.map((drone) => (
            <div
              key={drone.id}
              className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedItem(drone.id)}
            >
              <div className="aspect-[4/3] relative mb-4 rounded-xl overflow-hidden">
                <img
                  src={drone.src}
                  alt={drone.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-playfair font-semibold text-xl">
                  {drone.name}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {drone.description}
              </p>
              <div className="space-y-2 mb-4">
                {drone.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2"
                  >
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

export default DroneGear;