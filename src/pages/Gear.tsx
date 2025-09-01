import React, { useState } from "react";
import { Camera, Zap, Settings, Smartphone, Search, ShoppingCart, Heart } from "lucide-react";

const Gear = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [wishlist, setWishlist] = useState<string[]>([]);

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
      price: "$3,899",
      image: "/api/placeholder/300/300",
      description: "Professional full-frame mirrorless camera with 45MP resolution",
      specifications: ["45MP Full Frame", "8K Video Recording", "In-Body Image Stabilization"],
      inStock: true,
      featured: true
    },
    {
      id: "2",
      name: "Canon RF 24-70mm f/2.8L",
      category: "lenses",
      price: "$2,299",
      image: "/api/placeholder/300/300",
      description: "Professional standard zoom lens with constant f/2.8 aperture",
      specifications: ["24-70mm Focal Range", "f/2.8 Constant Aperture", "Weather Sealed"],
      inStock: true,
      featured: true
    },
    {
      id: "3",
      name: "DJI Mavic 3 Pro",
      category: "drones",
      price: "$2,199",
      image: "/api/placeholder/300/300",
      description: "Professional drone with Hasselblad camera and 43min flight time",
      specifications: ["4/3 CMOS Sensor", "43min Flight Time", "15km Transmission"],
      inStock: false,
      featured: true
    },
    {
      id: "4",
      name: "Canon RF 70-200mm f/2.8L",
      category: "lenses",
      price: "$2,699",
      image: "/api/placeholder/300/300",
      description: "Professional telephoto zoom lens for portraits and wildlife",
      specifications: ["70-200mm Focal Range", "f/2.8 Constant Aperture", "IS Technology"],
      inStock: true,
      featured: false
    },
    {
      id: "5",
      name: "Manfrotto Carbon Fiber Tripod",
      category: "accessories",
      price: "$449",
      image: "/api/placeholder/300/300",
      description: "Professional carbon fiber tripod with ball head",
      specifications: ["Carbon Fiber Construction", "Max Load 8kg", "Compact Design"],
      inStock: true,
      featured: false
    },
    {
      id: "6",
      name: "Godox AD600Pro",
      category: "accessories",
      price: "$899",
      image: "/api/placeholder/300/300",
      description: "Portable flash with HSS and TTL support",
      specifications: ["600Ws Power", "HSS Support", "Wireless Control"],
      inStock: true,
      featured: false
    }
  ];

  const filteredItems = gearItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleWishlist = (itemId: string) => {
    setWishlist(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

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
                  
                  {/* Stock Status */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.inStock 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(item.id)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
                  >
                    <Heart 
                      size={16} 
                      className={wishlist.includes(item.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"} 
                    />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-playfair font-semibold text-lg">{item.name}</h3>
                    <span className="text-xl font-bold text-accent">{item.price}</span>
                  </div>
                  
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

                  <button
                    disabled={!item.inStock}
                    className="w-full btn-hero disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart size={16} />
                    <span>{item.inStock ? "Add to Cart" : "Out of Stock"}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Equipment Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-playfair font-bold">
              All Equipment ({filteredItems.length})
            </h2>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Heart size={16} />
              <span>{wishlist.length} items in wishlist</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:border-accent transition-all duration-300"
              >
                <div className="relative aspect-square bg-muted flex items-center justify-center">
                  <Camera size={48} className="text-muted-foreground" />
                  
                  <button
                    onClick={() => toggleWishlist(item.id)}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 hover:bg-white transition-colors"
                  >
                    <Heart 
                      size={14} 
                      className={wishlist.includes(item.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"} 
                    />
                  </button>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm line-clamp-2">{item.name}</h3>
                    <span className="text-accent font-bold text-sm ml-2">{item.price}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  <button
                    disabled={!item.inStock}
                    className="w-full btn-outline text-xs py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {item.inStock ? "Add to Cart" : "Out of Stock"}
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