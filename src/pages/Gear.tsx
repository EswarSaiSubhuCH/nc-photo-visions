import React, { useState } from "react";
import { Camera, Zap, Settings, Smartphone, Search, Eye, Grid, List } from "lucide-react";
import { Link } from "react-router-dom";
const Gear = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const categories = [{
    id: "all",
    name: "All Equipment",
    icon: Settings
  }, {
    id: "cameras",
    name: "Cameras",
    icon: Camera
  }, {
    id: "lenses",
    name: "Lenses",
    icon: Zap
  }, {
    id: "drones",
    name: "Drones",
    icon: Smartphone
  }, {
    id: "accessories",
    name: "Accessories",
    icon: Settings
  }];
  const gearItems = [{
    id: "1",
    name: "Canon EOS R5",
    category: "cameras",
    image: "/api/placeholder/300/300",
    description: "Professional full-frame mirrorless camera with 45MP resolution and advanced autofocus system",
    specifications: ["45MP Full Frame", "8K Video Recording", "In-Body Image Stabilization", "Dual Pixel CMOS AF II"],
    featured: true,
    gradient: "from-blue-500 to-purple-600"
  }, {
    id: "2",
    name: "Canon RF 24-70mm f/2.8L",
    category: "lenses",
    image: "/api/placeholder/300/300",
    description: "Professional standard zoom lens with constant f/2.8 aperture and weather sealing",
    specifications: ["24-70mm Focal Range", "f/2.8 Constant Aperture", "Weather Sealed", "Nano USM Motor"],
    featured: true,
    gradient: "from-emerald-500 to-teal-600"
  }, {
    id: "3",
    name: "DJI Mavic 3 Pro",
    category: "drones",
    image: "/api/placeholder/300/300",
    description: "Professional drone with Hasselblad camera and extended flight time capabilities",
    specifications: ["4/3 CMOS Sensor", "43min Flight Time", "15km Transmission", "Obstacle Avoidance"],
    featured: true,
    gradient: "from-rose-500 to-pink-600"
  }, {
    id: "4",
    name: "Canon RF 70-200mm f/2.8L",
    category: "lenses",
    image: "/api/placeholder/300/300",
    description: "Professional telephoto zoom lens perfect for portraits and wildlife photography",
    specifications: ["70-200mm Focal Range", "f/2.8 Constant Aperture", "IS Technology", "Fluorine Coating"],
    featured: false,
    gradient: "from-amber-500 to-orange-600"
  }, {
    id: "5",
    name: "Manfrotto Carbon Fiber Tripod",
    category: "accessories",
    image: "/api/placeholder/300/300",
    description: "Ultra-lightweight carbon fiber tripod with professional ball head system",
    specifications: ["Carbon Fiber Construction", "Max Load 8kg", "Compact Design", "Quick Release Plate"],
    featured: false,
    gradient: "from-violet-500 to-purple-600"
  }, {
    id: "6",
    name: "Godox AD600Pro",
    category: "accessories",
    image: "/api/placeholder/300/300",
    description: "High-power portable flash system with advanced wireless control capabilities",
    specifications: ["600Ws Power", "HSS Support", "Wireless Control", "Fast Recycle Time"],
    featured: false,
    gradient: "from-cyan-500 to-blue-600"
  }];
  const filteredItems = gearItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6">Photography Gear</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the professional equipment we use to capture stunning imagery. 
            From cameras to drones, explore our curated selection of photography gear.
          </p>
        </div>

        {/* Search, Filter and View Toggle */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input type="text" placeholder="Search equipment..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => {
            const IconComponent = category.icon;
            return <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${selectedCategory === category.id ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                  <IconComponent size={16} />
                  <span>{category.name}</span>
                </button>;
          })}
          </div>

          {/* View Toggle */}
          <div className="bg-muted rounded-lg p-1 flex">
            <button onClick={() => setViewMode("grid")} className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
              <Grid size={16} />
              <span>Grid</span>
            </button>
            <button onClick={() => setViewMode("list")} className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${viewMode === "list" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
              <List size={16} />
              <span>List</span>
            </button>
          </div>
        </div>

        {/* Featured Items */}
        <div className="mb-16">
          <h2 className="text-3xl font-playfair font-bold mb-8">Featured Equipment</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {gearItems.filter(item => item.featured).map(item => <div key={item.id} className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Camera size={32} className="text-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-playfair font-semibold">{item.name}</h3>
                        <p className="text-accent font-medium">{item.category}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.specifications.slice(0, 2).map((spec, index) => <span key={index} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                          {spec}
                        </span>)}
                      <Link to={`/gear/${item.category}`} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full hover:bg-accent/20 transition-colors cursor-pointer">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* All Equipment */}
        <div>
          <h2 className="text-3xl font-playfair font-bold mb-8">
            All Equipment ({filteredItems.length})
          </h2>

          {viewMode === "grid" ? <div className="grid md:grid-cols-2 gap-8">
              {filteredItems.map(item => <div key={item.id} className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Camera size={32} className="text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-playfair font-semibold">{item.name}</h3>
                          <p className="text-accent font-medium">{item.category}</p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {item.featured ? "Featured" : "Available"}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.specifications.slice(0, 2).map((spec, index) => <span key={index} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                            {spec}
                          </span>)}
                        <Link to={`/gear/${item.category}`} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full hover:bg-accent/20 transition-colors cursor-pointer">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div> : <div className="space-y-6">
              {filteredItems.map(item => <div key={item.id} className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Camera size={32} className="text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-playfair font-semibold">{item.name}</h3>
                          <p className="text-accent font-medium">{item.category}</p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {item.featured ? "Featured" : "Available"}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.specifications.slice(0, 3).map((spec, index) => <span key={index} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                            {spec}
                          </span>)}
                        <Link to={`/gear/${item.category}`} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full hover:bg-accent/20 transition-colors cursor-pointer">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>}
        </div>

        {/* CTA Section */}
        
      </div>
    </div>;
};
export default Gear;