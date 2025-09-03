import React, { useState } from "react";
import { Camera, Plane, Heart, Building, Grid, List, Eye } from "lucide-react";

const Galleries = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const galleries = [
    {
      id: "aerial",
      title: "Aerial Photography",
      description: "Breathtaking perspectives from above, captured with professional drone equipment",
      icon: Plane,
      imageCount: 45,
      category: "Aerial",
      featured: true,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: "portraits",
      title: "Portrait Sessions",
      description: "Professional headshots, family portraits, and personal branding photography",
      icon: Camera,
      imageCount: 128,
      category: "Portrait",
      featured: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: "weddings",
      title: "Wedding Photography",
      description: "Capturing love stories with artistic vision and emotional depth",
      icon: Heart,
      imageCount: 89,
      category: "Wedding",
      featured: true,
      gradient: "from-rose-500 to-orange-500"
    },
    {
      id: "commercial",
      title: "Commercial Work",
      description: "Professional photography for businesses, products, and marketing campaigns",
      icon: Building,
      imageCount: 67,
      category: "Commercial",
      featured: false,
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: "landscape",
      title: "Landscape & Nature",
      description: "Natural beauty captured in stunning detail and vibrant colors",
      icon: Camera,
      imageCount: 73,
      category: "Landscape",
      featured: false,
      gradient: "from-emerald-500 to-green-500"
    },
    {
      id: "events",
      title: "Event Photography",
      description: "Corporate events, celebrations, and special occasions documented professionally",
      icon: Camera,
      imageCount: 156,
      category: "Events",
      featured: false,
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  const featuredGalleries = galleries.filter(gallery => gallery.featured);
  const allGalleries = galleries;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6">Our Galleries</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio showcasing the artistry and technical excellence 
            that defines NC Photography & Aerials. Each gallery tells a unique story.
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
              <span>Grid View</span>
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
              <span>List View</span>
            </button>
          </div>
        </div>

        {/* Featured Galleries */}
        <div className="mb-16">
          <h2 className="text-3xl font-playfair font-bold mb-8 text-center">Featured Collections</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredGalleries.map((gallery) => (
              <div key={gallery.id} className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <gallery.icon size={32} className="text-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-playfair font-semibold">{gallery.title}</h3>
                        <p className="text-accent font-medium">{gallery.category}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {gallery.imageCount} images
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {gallery.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                        Featured
                      </span>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full hover:bg-accent/20 transition-colors cursor-pointer">
                        View Gallery
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Galleries */}
        <div>
          <h2 className="text-3xl font-playfair font-bold mb-8 text-center">All Collections</h2>
          
          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 gap-8">
              {allGalleries.map((gallery) => (
                <div key={gallery.id} className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <gallery.icon size={32} className="text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-playfair font-semibold">{gallery.title}</h3>
                          <p className="text-accent font-medium">{gallery.category}</p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {gallery.imageCount} images
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {gallery.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                          {gallery.category}
                        </span>
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full hover:bg-accent/20 transition-colors cursor-pointer">
                          View Gallery
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {allGalleries.map((gallery) => (
                <div key={gallery.id} className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <gallery.icon size={32} className="text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-playfair font-semibold">{gallery.title}</h3>
                          <p className="text-accent font-medium">{gallery.category}</p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {gallery.imageCount} images
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {gallery.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                          {gallery.category}
                        </span>
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full hover:bg-accent/20 transition-colors cursor-pointer">
                          View Gallery
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-white/10 backdrop-blur-sm">
          <h2 className="text-3xl font-playfair font-bold mb-4">Ready to Capture Your Story?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Contact us to discuss your vision and bring it to life.
          </p>
          <button className="btn-hero">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Galleries;