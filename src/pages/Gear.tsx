import React, { useState } from "react";
import { Camera, Zap, Settings, Smartphone, Grid, List } from "lucide-react";
import { Link } from "react-router-dom";

const Gear = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

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

        {/* View Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-lg p-1 flex">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                viewMode === "grid"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Grid size={16} />
              <span>Grid</span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                viewMode === "list"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <List size={16} />
              <span>List</span>
            </button>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-3xl font-playfair font-bold mb-8">
            Equipment Categories ({categories.length})
          </h2>

          {viewMode === "grid" ? (
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
                    className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon size={32} className="text-accent" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-playfair font-semibold mb-2">
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
          ) : (
            <div className="space-y-6">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.id}
                    to={`/gear/${cat.id}`}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon size={32} className="text-accent" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-playfair font-semibold">
                            {cat.name}
                          </h3>
                          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                            Category
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gear;