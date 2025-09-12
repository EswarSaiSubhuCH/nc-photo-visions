import React from "react";
import { Camera, Zap, Settings, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Gear = () => {
  // Main categories
  const categories = [
    {
      id: "cameras",
      name: "Cameras",
      icon: Camera,
      description: "Professional full-frame cameras for every shooting scenario",
    },
    {
      id: "lenses",
      name: "Lenses",
      icon: Zap,
      description: "High-quality lenses for portraits, landscapes, and wildlife",
    },
    {
      id: "drones",
      name: "Drones",
      icon: Smartphone,
      description: "Aerial photography drones with advanced imaging features",
    },
    {
      id: "accessories",
      name: "Accessories",
      icon: Settings,
      description: "Tripods, lights, and other essential photography gear",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6">
            Photography Gear
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our professional equipment by category — from cameras to
            drones, discover what we use to capture stunning imagery.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-3xl font-playfair font-bold mb-8">
            Equipment Categories ({categories.length})
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.id}
                  to={`/gear/${cat.id}`}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="group bg-card rounded-2xl border border-border p-8 hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Icon
                        size={32}
                        className="text-accent transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-playfair font-semibold mb-2 group-hover:text-accent transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gear;