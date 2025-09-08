import React, { useState } from "react";
import { ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";
import aerialImage1 from "../../assets/samples/aerial-1.jpg";
const AerialGallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Sample albums - each album contains multiple images
  const albums = [
    {
      id: 1,
      title: "Mountain Valley Collection",
      description: "Breathtaking aerial views of mountain valleys during golden hour",
      coverImage: aerialImage1,
      imageCount: 8,
      images: Array(8).fill(null).map((_, index) => ({
        id: index + 1,
        src: aerialImage1,
        title: `Mountain Valley Vista ${index + 1}`,
        description: `Breathtaking aerial view of the mountain valley captured at different times and angles`,
        camera: "DJI Mavic 3 Pro",
        settings: "f/2.8, 1/120s, ISO 100"
      }))
    },
    {
      id: 2,
      title: "Coastal Perspectives",
      description: "Stunning coastline captured from 400 feet above",
      coverImage: aerialImage1,
      imageCount: 6,
      images: Array(6).fill(null).map((_, index) => ({
        id: index + 1,
        src: aerialImage1,
        title: `Coastal Perspective ${index + 1}`,
        description: `Stunning coastline captured from different aerial viewpoints`,
        camera: "DJI Air 2S",
        settings: "f/4.0, 1/200s, ISO 100"
      }))
    },
    {
      id: 3,
      title: "Urban Architecture",
      description: "Modern cityscape showcasing geometric patterns from above",
      coverImage: aerialImage1,
      imageCount: 10,
      images: Array(10).fill(null).map((_, index) => ({
        id: index + 1,
        src: aerialImage1,
        title: `Urban Architecture ${index + 1}`,
        description: `Modern cityscape showcasing geometric patterns and urban design`,
        camera: "DJI Mavic 3 Pro",
        settings: "f/5.6, 1/160s, ISO 200"
      }))
    },
    {
      id: 4,
      title: "Forest Canopy Series",
      description: "Dense forest canopy revealing nature's intricate patterns",
      coverImage: aerialImage1,
      imageCount: 5,
      images: Array(5).fill(null).map((_, index) => ({
        id: index + 1,
        src: aerialImage1,
        title: `Forest Canopy ${index + 1}`,
        description: `Dense forest canopy revealing nature's intricate patterns and textures`,
        camera: "DJI Mini 3",
        settings: "f/2.8, 1/100s, ISO 100"
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
  return <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Link to="/galleries" className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors mb-8">
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
              <span>{albums.length} Albums</span>
            </div>
          </div>
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

        {/* CTA Section */}
        
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
    </div>;
};
export default AerialGallery;