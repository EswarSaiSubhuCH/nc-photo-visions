import React, { useState } from "react";
import { ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";

// Album cover images
const album1Cover = "https://i.postimg.cc/8PtdYGDs/1000044247.jpg";
const album2Cover = "https://i.postimg.cc/K8FG11Hs/1000033084.jpg";
const album3Cover = "https://i.postimg.cc/j5g01q6x/compressed-image.jpg";

const PortraitGallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const albums = [
    {
      id: 1,
      title: "Album 1",
      description: "",
      coverImage: album1Cover,
      imageCount: 15,
      images: [
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
        "https://i.postimg.cc/V5QvN4xJ/1000036667.jpg",
      ].map((src, index) => ({
        id: index + 1,
        src,
        title: `Album 1 Photo ${index + 1}`,
        description: "",
        camera: "",
        settings: "",
      })),
    },
    {
      id: 2,
      title: "Album 2",
      description: "",
      coverImage: album2Cover,
      imageCount: 15,
      images: [
        "https://i.postimg.cc/K8FG11Hs/1000033084.jpg",
        "https://i.postimg.cc/c4Ggc4zf/1000044531.jpg",
        "https://i.postimg.cc/d1ndfMTJ/1000044376.jpg",
        "https://i.postimg.cc/ZK63kyNf/1000044377.jpg",
        "https://i.postimg.cc/XNcDVX9v/1000044333.jpg",
        "https://i.postimg.cc/ZnGq7jjT/1000044334.jpg",
        "https://i.postimg.cc/pL9Znd5z/1000044335.jpg",
        "https://i.postimg.cc/G2RJNJ7x/1000044374.jpg",
        "https://i.postimg.cc/9McgThh2/1000025065.jpg",
        "https://i.postimg.cc/yNHL4HWR/1000025089.jpg",
        "https://i.postimg.cc/509pySBN/1000034796.jpg",
        "https://i.postimg.cc/hjCsdQs8/1000034798.jpg",
        "https://i.postimg.cc/9MNPM5XJ/1000034799.jpg",
        "https://i.postimg.cc/fWpfvn4Y/1000034803.jpg",
        "https://i.postimg.cc/NLvH9Q37/1000034804.jpg",
      ].map((src, index) => ({
        id: index + 1,
        src,
        title: `Album 2 Photo ${index + 1}`,
        description: "",
        camera: "",
        settings: "",
      })),
    },
    {
      id: 3,
      title: "Album 3",
      description: "",
      coverImage: album3Cover,
      imageCount: 15,
      images: [
        "https://i.postimg.cc/j5g01q6x/compressed-image.jpg",
        "https://i.postimg.cc/FFCNWpGy/compressed-image-2.jpg",
        "https://i.postimg.cc/WbQjj4Bt/compressed-image-3.jpg",
        "https://i.postimg.cc/262rf7Yf/compressed-image-4.jpg",
        "https://i.postimg.cc/fRn4prd9/1000025021.jpg",
        "https://i.postimg.cc/Njmt0ctD/1000025022.jpg",
        "https://i.postimg.cc/rw16kNGY/1000025023.jpg",
        "https://i.postimg.cc/fyVnQ45x/1000025028.jpg",
        "https://i.postimg.cc/bwhykJ3W/1000025030.jpg",
        "https://i.postimg.cc/j5w0G0My/1000025031.jpg",
        "https://i.postimg.cc/Wpgxr7Cp/1000025032.jpg",
        "https://i.postimg.cc/GmhfWn29/1000025036.jpg",
        "https://i.postimg.cc/hv1CY2R9/1000025039.jpg",
        "https://i.postimg.cc/7ZWKjCdQ/1000025042.jpg",
        "https://i.postimg.cc/P5x66b3w/1000025043.jpg",
      ].map((src, index) => ({
        id: index + 1,
        src,
        title: `Album 3 Photo ${index + 1}`,
        description: "",
        camera: "",
        settings: "",
      })),
    },
  ];

  const handleAlbumClick = (albumId: number) => {
    setSelectedAlbum(albumId);
    setSelectedImageIndex(0);
  };

  const handleCloseSlider = () => {
    setSelectedAlbum(null);
  };

  const selectedAlbumData = albums.find((album) => album.id === selectedAlbum);

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
          <h1 className="text-5xl font-playfair font-bold mb-6">
            Portrait Photography
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional portraits that capture personality and character. From
            business headshots to family portraits, we create images that tell
            your unique story.
          </p>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {albums.map((album) => (
            <div
              key={album.id}
              className="bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300 cursor-pointer group"
              onClick={() => handleAlbumClick(album.id)}
            >
              <div className="aspect-[3/4] relative mb-4 rounded-xl overflow-hidden">
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
              <h3 className="font-playfair font-semibold text-lg mb-2">
                {album.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {album.description}
              </p>
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