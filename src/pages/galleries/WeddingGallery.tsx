import React, { useState } from "react";
import { ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";

// Your uploaded images 
const wedding1 = "https://i.ibb.co/gMTFLL2Q/Wedding-Photography-1.jpg";
const wedding2 = "https://i.ibb.co/qFF2LFZW/Wedding-Photography-2.jpg";
const wedding3 = "https://i.ibb.co/j9WG7cgL/Wedding-Photography-3.jpg";
const wedding4 = "https://i.ibb.co/Tx3NpgQ6/Wedding-Photography-4.jpg";

// Sample placeholder images (commented since unused)
// const sample1 = "https://picsum.photos/id/1018/1200/800";
// const sample2 = "https://picsum.photos/id/1025/1200/800";
// const sample3 = "https://picsum.photos/id/1035/1200/800";
// const sample4 = "https://picsum.photos/id/1041/1200/800";

const WeddingGallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const albums = [
    {
      id: 1,
      title: "Album 1",
      description: "",
      coverImage: wedding1,
      imageCount: 4,
      images: [wedding1, wedding2, wedding3, wedding4].map((src, index) => ({
        id: index + 1,
        src,
        title: `Wedding Photo ${index + 1}`,
        description: "Captured with love and artistic vision",
        camera: "Canon EOS R5",
        settings: "85mm, f/2.8, 1/250s, ISO 800"
      }))
    },
    /*
    {
      id: 2,
      title: "Album 2 - Ceremony",
      ...
    },
    {
      id: 3,
      title: "Album 3 - Reception",
      ...
    },
    {
      id: 4,
      title: "Album 4 - Detail Shots",
      ...
    },
    {
      id: 5,
      title: "Album 5 - Outdoor",
      ...
    }
    */
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
          <h1 className="text-5xl font-playfair font-bold mb-6">Wedding Photography</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our curated wedding photography album.
          </p>
        </div>

        {/* Albums Grid */}
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
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
              <p className="text-muted-foreground text-sm leading-relaxed">{album.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Slider Modal */}
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

export default WeddingGallery;