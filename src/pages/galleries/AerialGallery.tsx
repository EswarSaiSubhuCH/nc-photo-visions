import React, { useState } from "react";
import { ArrowLeft, Download, Share2, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import aerialImage1 from "../../assets/samples/aerial-1.jpg";

const AerialGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Sample images - easily replaceable by changing these imports and objects
  const images = [
    {
      id: 1,
      src: aerialImage1,
      title: "Mountain Valley Vista",
      description: "Breathtaking aerial view of the mountain valley during golden hour",
      camera: "DJI Mavic 3 Pro",
      settings: "f/2.8, 1/120s, ISO 100"
    },
    {
      id: 2,
      src: aerialImage1,
      title: "Coastal Perspective",
      description: "Stunning coastline captured from 400 feet above",
      camera: "DJI Air 2S",
      settings: "f/4.0, 1/200s, ISO 100"
    },
    {
      id: 3,
      src: aerialImage1,
      title: "Urban Architecture",
      description: "Modern cityscape showcasing geometric patterns from above",
      camera: "DJI Mavic 3 Pro",
      settings: "f/5.6, 1/160s, ISO 200"
    },
    {
      id: 4,
      src: aerialImage1,
      title: "Forest Canopy",
      description: "Dense forest canopy revealing nature's intricate patterns",
      camera: "DJI Mini 3",
      settings: "f/2.8, 1/100s, ISO 100"
    },
    {
      id: 5,
      src: aerialImage1,
      title: "River Meanders",
      description: "Winding river creating natural art through the landscape",
      camera: "DJI Mavic 3 Pro",
      settings: "f/4.0, 1/150s, ISO 100"
    },
    {
      id: 6,
      src: aerialImage1,
      title: "Agricultural Patterns",
      description: "Geometric farmland patterns creating a natural mosaic",
      camera: "DJI Air 2S",
      settings: "f/5.6, 1/180s, ISO 100"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Link 
          to="/galleries" 
          className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Galleries</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6">Aerial Photography</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the world from a new perspective. Our aerial photography captures 
            breathtaking views and unique angles that showcase the beauty of landscapes from above.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Eye size={16} />
              <span>{images.length} Images</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart size={16} />
              <span>Featured Collection</span>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {images.map((image) => (
            <div 
              key={image.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-playfair font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.camera}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-semibold text-lg mb-2">{image.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {image.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{image.camera}</span>
                    <span>{image.settings}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-white/10 backdrop-blur-sm">
          <h2 className="text-3xl font-playfair font-bold mb-4">Interested in Aerial Photography?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us capture your property, event, or project from a stunning aerial perspective. 
            Contact us to discuss your aerial photography needs.
          </p>
          <button className="btn-hero">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {images.find(img => img.id === selectedImage) && (
              <img 
                src={images.find(img => img.id === selectedImage)?.src} 
                alt={images.find(img => img.id === selectedImage)?.title}
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AerialGallery;