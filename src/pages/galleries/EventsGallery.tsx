import React, { useState } from "react";
import { ArrowLeft, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import eventsImage1 from "../../assets/samples/events-1.jpg";

const EventsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: eventsImage1,
      title: "Corporate Conference",
      description: "Professional conference photography capturing keynote moments",
      camera: "Canon EOS R5",
      settings: "24-70mm, f/2.8, 1/250s, ISO 1600"
    },
    {
      id: 2,
      src: eventsImage1,
      title: "Celebration Party",
      description: "Vibrant party atmosphere with candid celebration shots",
      camera: "Canon EOS R6",
      settings: "35mm, f/1.8, 1/200s, ISO 2000"
    },
    {
      id: 3,
      src: eventsImage1,
      title: "Product Launch",
      description: "High-energy product launch event with dynamic compositions",
      camera: "Canon EOS R5",
      settings: "50mm, f/2.0, 1/160s, ISO 1250"
    },
    {
      id: 4,
      src: eventsImage1,
      title: "Charity Gala",
      description: "Elegant charity gala with formal event photography",
      camera: "Canon EOS R6",
      settings: "85mm, f/2.8, 1/200s, ISO 800"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/galleries" 
          className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Galleries</span>
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6">Event Photography</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Corporate events, celebrations, and special occasions documented professionally. 
            Capturing the energy, emotion, and important moments that matter.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Eye size={16} />
              <span>{images.length} Images</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart size={16} />
              <span>Event Collection</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {images.map((image) => (
            <div key={image.id} className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300 cursor-pointer" onClick={() => setSelectedImage(image.id)}>
              <div className="aspect-[4/3] relative mb-4 rounded-xl overflow-hidden">
                <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">{image.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {image.description}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                <span className="font-medium">{image.camera}</span>
                <span>{image.settings}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-white/10 backdrop-blur-sm">
          <h2 className="text-3xl font-playfair font-bold mb-4">Planning an Event?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us document your special event with professional photography that captures 
            every important moment and the atmosphere of your celebration.
          </p>
          <button className="btn-hero">
            Get In Touch
          </button>
        </div>
      </div>

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

export default EventsGallery;