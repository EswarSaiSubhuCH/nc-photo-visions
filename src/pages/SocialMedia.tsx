import React from "react";
import {
  Instagram,
  Twitter,
  Youtube,
  Image,
  Facebook,
  Camera,
  Play,
} from "lucide-react";

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@nc_photography_galleryz",
      url: "https://www.instagram.com/nc_photography_galleryz/",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
      handle: "@NCPhotographyAerials",
      url: "https://www.youtube.com/@NCPhotographyAerials",
      color: "from-red-600 to-red-500",
    },
    {
      name: "Pinterest",
      icon: Image,
      handle: "@ncphotographyaerials",
      url: "https://pin.it/3ZKWi8vw2",
      color: "from-red-500 to-red-400",
    },
    {
      name: "X",
      icon: Twitter,
      handle: "@ncphotographys",
      url: "https://x.com/ncphotographys",
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      handle: "@NC Photography & Aerials",
      url: "https://www.facebook.com/profile.php?id=61580168834907",
      color: "from-blue-600 to-blue-500",
    },
  ];

  // Sample highlights posts
  const highlights = [
    {
      title: "Golden Hour Drone Shot",
      description: "Captured stunning city skyline during golden hour.",
      icon: Camera,
    },
    {
      title: "YouTube Tutorial",
      description: "Mastering Aerial Photography Techniques.",
      icon: Play,
    },
    {
      title: "Featured Instagram Post",
      description: "Latest aerial shot trending on Instagram.",
      icon: Camera,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6 text-foreground">
            Follow My Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with my latest work and creative process across social
            platforms
          </p>
        </div>

        {/* Social Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mb-20">
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group ${platform.color} rounded-3xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center transition-colors duration-200 group-hover:bg-white">
                    <IconComponent size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {platform.name}
                </h3>
                <p className="text-gray-600 mb-4">{platform.handle}</p>
                <div>
                  <button className="inline-block bg-white/80 text-gray-800 hover:bg-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
                    Follow Us
                  </button>
                </div>
              </a>
            );
          })}
        </div>

        {/* Latest Social Highlights */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4 text-foreground">
              Latest Social Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out some of our recent posts and highlights from social
              media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-orange-50 rounded-2xl p-8 text-center"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <IconComponent size={32} className="text-orange-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
