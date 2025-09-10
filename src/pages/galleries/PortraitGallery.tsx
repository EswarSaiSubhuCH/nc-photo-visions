import React, { useState } from "react";
import { ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";

const Album1Images = [
  "https://i.postimg.cc/8PtdYGDs/1000044247.jpg",
  "https://i.postimg.cc/7L0dyhKq/1000044242.jpg",
  "https://i.postimg.cc/sXNV0KKM/1000044243.jpg",
  "https://i.postimg.cc/3rkSM9n3/1000044244.jpg",
  "https://i.postimg.cc/nhrY7hgp/1000044245.jpg",
  "https://i.postimg.cc/MGj7PrzL/1000044248.jpg",
  "https://i.postimg.cc/rmDwCvcd/1000025015.jpg",
  "https://i.postimg.cc/sXbDnwDT/1000025016.jpg",
  "https://i.postimg.cc/Prs5Y37x/1000025050.jpg",
  "https://i.postimg.cc/Mpn3w5W7/1000025044.jpg",
  "https://i.postimg.cc/N0pKx6Hn/1000025055.jpg",
  "https://i.postimg.cc/cJNRzB64/1000025058.jpg",
  "https://i.postimg.cc/zBQ3sqpS/1000025063.jpg",
  "https://i.postimg.cc/sDhZRGkB/1000025064.jpg",
  "https://i.postimg.cc/V5QvN4xJ/1000036667.jpg"
];

const PortraitGallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const albums = [
    {
      id: 1,
      title: "Album 1",
      description: "",
      coverImage: Album1Images[0],
      imageCount: Album1Images.length,
      images: Album1Images.map((src, index) => ({
        id: index + 1,
        src,
        title: `Image ${index + 1}`,
        description: "",
        camera: "",
        settings: ""
      }))
    }
  ];

  const handleAlbumClick = (albumId: number) => {
    setSelectedAlbum(albumId);
    setSelectedImageIndex(0);
  };

  const handleCloseSlider = () => setSelectedAlbum(null);

  const selectedAlbumData = albums.find(album => album.id === selectedAlbum);

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
          <h1 className="text-5xl font-playfair font-bold mb-6">Portrait Photography</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional portraits that capture personality and character.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Eye size={16} />
              <span>{albums.length} Album(s)</span>
            </div>
          </div>
        </div>

        {/* Albums Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {albums.map(album => (
            <div
              key={album.id}
              className="bg-card rounded-2xl border border-border p-4 hover:border-accent transition-all duration-300 cursor-pointer group"
              onClick={() => handleAlbumClick(album.id)}
            >
              <div className="aspect-[3/4] relative rounded-xl overflow-hidden">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Eye size={32} className="mx-auto mb-2" />
                    <p className="font-semibold">View Album</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {album.imageCount} photos
                </div>
              </div>
              <h3 className="font-playfair font-semibold text-lg mt-2">{album.title}</h3>
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

export default PortraitGallery;