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
          <div className="grid md:grid-cols-3 gap-8">
            {featuredGalleries.map((gallery) => {
              const IconComponent = gallery.icon;
              return (
                <div
                  key={gallery.id}
                  className="gallery-item group cursor-pointer rounded-2xl overflow-hidden border border-border hover:border-accent"
                >
                  <div className={`relative h-64 bg-gradient-to-br ${gallery.gradient} flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <IconComponent size={64} className="text-white relative z-10" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-center text-white">
                        <Eye size={32} className="mx-auto mb-2" />
                        <p className="font-medium">View Gallery</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-playfair font-semibold">{gallery.title}</h3>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        {gallery.imageCount} photos
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {gallery.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Galleries */}
        <div>
          <h2 className="text-3xl font-playfair font-bold mb-8 text-center">All Collections</h2>
          
          {viewMode === "grid" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allGalleries.map((gallery) => {
                const IconComponent = gallery.icon;
                return (
                  <div
                    key={gallery.id}
                    className="gallery-item group cursor-pointer rounded-xl overflow-hidden border border-border hover:border-accent"
                  >
                    <div className={`relative h-48 bg-gradient-to-br ${gallery.gradient} flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <IconComponent size={48} className="text-white relative z-10" />
                      
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-center text-white">
                          <Eye size={24} className="mx-auto mb-1" />
                          <p className="text-sm font-medium">View Gallery</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{gallery.title}</h3>
                        <span className="text-xs text-muted-foreground">
                          {gallery.imageCount}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {gallery.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {allGalleries.map((gallery) => {
                const IconComponent = gallery.icon;
                return (
                  <div
                    key={gallery.id}
                    className="group cursor-pointer flex items-center p-6 rounded-xl border border-border hover:border-accent hover:bg-muted/30 transition-all"
                  >
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${gallery.gradient} flex items-center justify-center mr-6`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-playfair font-semibold mb-1">{gallery.title}</h3>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                            {gallery.imageCount} photos
                          </span>
                          <Eye size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                        </div>
                      </div>
                      <p className="text-muted-foreground">{gallery.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-accent/5 rounded-2xl p-12">
          <h2 className="text-3xl font-playfair font-bold mb-4">Like What You See?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to create your own stunning photography collection? Let's discuss your vision and bring it to life.
          </p>
          <button className="btn-hero">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Galleries;