import React, { useState } from "react";
import { ArrowLeft, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import commercialImage1 from "../../assets/samples/commercial-1.jpg";
const CommercialGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images = [{
    id: 1,
    src: commercialImage1,
    title: "Product Showcase",
    description: "Clean product photography with professional lighting setup",
    camera: "Canon EOS R5",
    settings: "100mm macro, f/8, 1/125s, ISO 100"
  }, {
    id: 2,
    src: commercialImage1,
    title: "Corporate Headshots",
    description: "Professional business portraits for corporate use",
    camera: "Canon EOS R6",
    settings: "85mm, f/2.8, 1/160s, ISO 200"
  }, {
    id: 3,
    src: commercialImage1,
    title: "Brand Campaign",
    description: "Creative commercial photography for marketing campaigns",
    camera: "Canon EOS R5",
    settings: "50mm, f/4, 1/200s, ISO 320"
  }, {
    id: 4,
    src: commercialImage1,
    title: "Interior Architecture",
    description: "Professional architectural photography of commercial spaces",
    camera: "Canon EOS R6",
    settings: "16-35mm, f/8, 1/60s, ISO 400"
  }];
  return <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/galleries" className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Back to Galleries</span>
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6">Commercial Photography</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional photography for businesses, products, and marketing campaigns. 
            High-quality images that elevate your brand and drive results.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Eye size={16} />
              <span>{images.length} Images</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart size={16} />
              <span>Professional Work</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {images.map(image => <div key={image.id} className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300 cursor-pointer" onClick={() => setSelectedImage(image.id)}>
              <div className="aspect-[4/3] relative mb-4 rounded-xl overflow-hidden">
                <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">{image.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {image.description}
              </p>
              
            </div>)}
        </div>

        
      </div>

      {selectedImage && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full">
            <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {images.find(img => img.id === selectedImage) && <img src={images.find(img => img.id === selectedImage)?.src} alt={images.find(img => img.id === selectedImage)?.title} className="w-full h-auto rounded-lg" />}
          </div>
        </div>}
    </div>;
};
export default CommercialGallery;