import React, { useState } from "react";
import { ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";

// Images - can be remote URLs or moved to public folder
const weddingImages = [
  { src: "https://i.ibb.co/gMTFLL2Q/Wedding-Photography-1.jpg", title: "Wedding Photo 1" },
  { src: "https://i.ibb.co/qFF2LFZW/Wedding-Photography-2.jpg", title: "Wedding Photo 2" },
  { src: "https://i.ibb.co/j9WG7cgL/Wedding-Photography-3.jpg", title: "Wedding Photo 3" },
  { src: "https://i.ibb.co/Tx3NpgQ6/Wedding-Photography-4.jpg", title: "Wedding Photo 4" }
];

const WeddingGallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Single album for simplicity
  const album = {
    id: 1,
    title: "Wedding Photography",
    description: "Explore our curated wedding photography album.",
    coverImage: weddingImages[0].src,
    images: weddingImages.map((img, index) => ({
      id: index + 1,
      src: img.src,
      title: img.title,
      description: "Captured with love and artistic vision",
      camera: "Canon EOS R5",
      settings: "85mm, f/2.8, 1/250s, ISO 800"
    }))
  };

  const handleAlbumClick = () => {
    setSelectedAlbum(album.id);
    setSelectedImageIndex(0);
  };

  const handleCloseSlider = () => {
    setSelectedAlbum(null);
  };

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
          <h1 className="text-5xl font-playfair font-bold mb-6">{album.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {album.description}
          </p>
        </div>

        {/* Album Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            className="bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300 cursor-pointer group"
            onClick={handleAlbumClick}
          >
            <div className="aspect-[4/3] relative mb-4 rounded-xl overflow-hidden">
              <img
                src={album.coverImage}
                alt={album.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <Eye size={32} className="mx-auto mb-2" />
                  <p className="font-semibold">View Album</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                {album.images.length} photos
              </div>
            </div>
            <h3 className="font-playfair font-semibold text-lg mb-2">{album.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{album.description}</p>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      {selectedAlbum && (
        <ImageSlider
          images={album.images}
          isOpen={true}
          initialIndex={selectedImageIndex}
          onClose={handleCloseSlider}
        />
      )}
    </div>
  );
};

export default WeddingGallery;