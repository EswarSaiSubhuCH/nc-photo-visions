import React, { useState } from "react";
import { ArrowLeft, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import weddingImage1 from "../../assets/samples/wedding-1.jpg";
const WeddingGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images = [{
    id: 1,
    src: weddingImage1,
    title: "Ceremony Moment",
    description: "Intimate ceremony moment captured with emotional depth",
    camera: "Canon EOS R5",
    settings: "85mm, f/2.8, 1/250s, ISO 800"
  }, {
    id: 2,
    src: weddingImage1,
    title: "First Dance",
    description: "Romantic first dance in golden light",
    camera: "Canon EOS R6",
    settings: "50mm, f/1.8, 1/160s, ISO 1600"
  }, {
    id: 3,
    src: weddingImage1,
    title: "Ring Exchange",
    description: "Detail shot of ring exchange with artistic composition",
    camera: "Canon EOS R5",
    settings: "100mm macro, f/2.8, 1/200s, ISO 400"
  }, {
    id: 4,
    src: weddingImage1,
    title: "Reception Joy",
    description: "Candid reception moments full of joy and laughter",
    camera: "Canon EOS R6",
    settings: "35mm, f/2.0, 1/200s, ISO 1250"
  }];
  return <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/galleries" className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Back to Galleries</span>
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6">Wedding Photography</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Capturing love stories with artistic vision and emotional depth. Every moment, 
            from intimate ceremonies to joyful celebrations, preserved forever.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {images.map(image => <div key={image.id} className="group cursor-pointer" onClick={() => setSelectedImage(image.id)}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500/20 to-orange-500/20 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-500/20">
                <div className="aspect-[4/3] relative">
                  <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
export default WeddingGallery;