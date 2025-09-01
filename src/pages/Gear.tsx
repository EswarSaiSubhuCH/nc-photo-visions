import React, { useState } from "react";
import { Camera, Zap, Settings, Smartphone, Search, Eye } from "lucide-react";

const Gear = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Equipment", icon: Settings },
    { id: "cameras", name: "Cameras", icon: Camera },
    { id: "lenses", name: "Lenses", icon: Zap },
    { id: "drones", name: "Drones", icon: Smartphone },
    { id: "accessories", name: "Accessories", icon: Settings },
  ];

  const gearItems = [
    {
      id: "1",
      name: "Canon EOS R5",
      category: "cameras",
      image: "/api/placeholder/300/300",
      description: "Professional full-frame mirrorless camera with 45MP resolution",
      specifications: ["45MP Full Frame", "8K Video Recording", "In-Body Image Stabilization"],
      featured: true
    },
    {
      id: "2",
      name: "Canon RF 24-70mm f/2.8L",
      category: "lenses",
      image: "/api/placeholder/300/300",
      description: "Professional standard zoom lens with constant f/2.8 aperture",
      specifications: ["24-70mm Focal Range", "f/2.8 Constant Aperture", "Weather Sealed"],
      featured: true
    },
    {
      id: "3",
      name: "DJI Mavic 3 Pro",
      category: "drones",
      image: "/api/placeholder/300/300",
      description: "Professional drone with Hasselblad camera and 43min flight time",
      specifications: ["4/3 CMOS Sensor", "43min Flight Time", "15km Transmission"],
      featured: true
    },
    {
      id: "4",
      name: "Canon RF 70-200mm f/2.8L",
      category: "lenses",
      image: "/api/placeholder/300/300",
      description: "Professional telephoto zoom lens for portraits and wildlife",
      specifications: ["70-200mm Focal Range", "f/2.8 Constant Aperture", "IS Technology"],
      featured: false
    },
    {
      id: "5",
      name: "Manfrotto Carbon Fiber Tripod",
      category: "accessories",
      image: "/api/placeholder/300/300",
      description: "Professional carbon fiber tripod with ball head",
      specifications: ["Carbon Fiber Construction", "Max Load 8kg", "Compact Design"],
      featured: false
    },
    {
      id: "6",
      name: "Godox AD600Pro",
      category: "accessories",
      image: "/api/placeholder/300/300",
      description: "Portable flash with HSS and TTL support",
      specifications: ["600Ws Power", "HSS Support", "Wireless Control"],
      featured: false
    }
  ];

  const filteredItems = gearItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });


  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6">Photography Gear</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the professional equipment we use to capture stunning imagery. 
            From cameras to drones, explore our curated selection of photography gear.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <IconComponent size={16} />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Items */}
        <div className="mb-16">
          <h2 className="text-3xl font-playfair font-bold mb-8">Featured Equipment</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {gearItems.filter(item => item.featured).map((item) => (
              <div
                key={item.id}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-square bg-muted flex items-center justify-center">
                  <Camera size={64} className="text-muted-foreground" />
                </div>

                <div className="p-6">
                  <h3 className="font-playfair font-semibold text-lg mb-3">{item.name}</h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {item.specifications.map((spec, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <button className="w-full btn-hero flex items-center justify-center space-x-2">
                    <Eye size={16} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Equipment Grid */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl font-playfair font-bold text-center">
              All Equipment ({filteredItems.length})
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:border-accent transition-all duration-300"
              >
                <div className="relative aspect-square bg-muted flex items-center justify-center">
                  <Camera size={48} className="text-muted-foreground" />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-sm line-clamp-2 mb-2">{item.name}</h3>
                  
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  <button className="w-full btn-outline text-xs py-2 flex items-center justify-center space-x-1">
                    <Eye size={12} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-accent/5 rounded-2xl p-12">
          <h2 className="text-3xl font-playfair font-bold mb-4">Need Recommendations?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Not sure which equipment is right for your needs? Contact our experts for personalized recommendations.
          </p>
          <button className="btn-hero">
            Get Expert Advice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gear;