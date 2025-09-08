import React, { useState } from "react";
import { ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";
import commercialImage1 from "../../assets/samples/commercial-1.jpg";

const CommercialGallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const albums = [
    {
      id: 1,
      title: "Product Showcases",
      description: "Clean product photography with professional lighting setup",
      coverImage: commercialImage1,
      imageCount: 10,
      images: Array(10).fill(null).map((_, index) => ({
        id: index + 1,
        src: commercialImage1,
        title: `Product Showcase ${index + 1}`,
        description: `Clean product photography with professional lighting and composition`,
        camera: "Canon EOS R5",
        settings: "100mm macro, f/8, 1/125s, ISO 100"
      }))
    },
    {
      id: 2,
      title: "Corporate Portfolios",
      description: "Professional business portraits and corporate photography",
      coverImage: commercialImage1,
      imageCount: 8,
      images: Array(8).fill(null).map((_, index) => ({
        id: index + 1,
        src: commercialImage1,
        title: `Corporate Portfolio ${index + 1}`,
        description: `Professional business portrait for corporate and marketing use`,
        camera: "Canon EOS R6",
        settings: "85mm, f/2.8, 1/160s, ISO 200"
      }))
    }
  ];

  const handleAlbumClick = (albumId: number) => {
    setSelectedAlbum(albumId);
    setSelectedImageIndex(0);
  };

  const handleCloseSlider = () => {
    setSelectedAlbum(null);
  };

  const selectedAlbumData = albums.find(album => album.id === selectedAlbum);

  return (
    <div className="min-h-screen pt-24 pb-16">
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
              <span>{albums.length} Albums</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {albums.map(album => (
            <div 
              key={album.id} 
              className="bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300 cursor-pointer group" 
              onClick={() => handleAlbumClick(album.id)}
            >
              <div className="aspect-[4/3] relative mb-4 rounded-xl overflow-hidden">
                <img 
                  src={album.coverImage} 
                  alt={album.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 gallery-image"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Eye size={32} className="mx-auto mb-2" />
                    <p className="font-semibold">View Album</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {album.imageCount} photos
                </div>
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">{album.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {album.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedAlbum && selectedAlbumData && (
        <ImageSlider
          images={selectedAlbumData.images}
          isOpen={true}
          initialIndex={selectedImageIndex}
          onClose={handleCloseSlider}
        />
      )}
    </div>
  );
};

export default CommercialGallery;