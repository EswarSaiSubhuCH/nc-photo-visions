import React from "react";

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@nc_photography_galleryz",
      url: "https://www.instagram.com/nc_photography_galleryz/",
      color: "from-purple-500 via-pink-500 to-red-500",
      icon: (
        <i className="fab fa-instagram text-4xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent"></i>
      ),
    },
    {
      name: "YouTube",
      handle: "@NCPhotographyAerials",
      url: "https://www.youtube.com/@NCPhotographyAerials",
      color: "text-red-600",
      icon: <i className="fab fa-youtube text-4xl text-red-600"></i>,
    },
    {
      name: "Pinterest",
      handle: "@ncphotographyaerials",
      url: "https://pin.it/3ZKWi8vw2",
      color: "text-red-500",
      icon: <i className="fab fa-pinterest text-4xl text-red-500"></i>,
    },
    {
      name: "X",
      handle: "@ncphotographys",
      url: "https://x.com/ncphotographys",
      color: "text-black",
      icon: <i className="fab fa-x-twitter text-4xl text-black"></i>,
    },
    {
      name: "Facebook",
      handle: "@NC Photography & Aerials",
      url: "https://www.facebook.com/profile.php?id=61580168834907",
      color: "text-blue-600",
      icon: <i className="fab fa-facebook text-4xl text-blue-600"></i>,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6 text-gray-900">
            Follow My Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with my latest work across social platforms
          </p>
        </div>

        {/* Social Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mb-20">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="mb-4">{platform.icon}</div>
              <h3 className="text-xl font-semibold mb-1 text-gray-900">
                {platform.name}
              </h3>
              <p className="text-sm text-gray-600">{platform.handle}</p>
              <button className="mt-4 px-6 py-2 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-700 transition">
                Follow Us
              </button>
            </a>
          ))}
        </div>

        {/* Latest Social Highlights */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Social Highlights
          </h2>
          <p className="text-lg text-gray-600">
            Get a glimpse of our most recent social media content and
            photography adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <i className="fas fa-camera text-orange-500 text-4xl mb-4"></i>
            <h3 className="font-semibold text-xl mb-2">Instagram Stories</h3>
            <p className="text-gray-600 text-sm">
              Behind-the-scenes from our latest aerial photography session
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <i className="fas fa-video text-orange-500 text-4xl mb-4"></i>
            <h3 className="font-semibold text-xl mb-2">New Tutorial</h3>
            <p className="text-gray-600 text-sm">
              "Mastering Golden Hour Photography" - Our latest YouTube tutorial
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <i className="fab fa-instagram text-orange-500 text-4xl mb-4"></i>
            <h3 className="font-semibold text-xl mb-2">Featured Post</h3>
            <p className="text-gray-600 text-sm">
              Stunning drone shot of the city skyline at sunset - trending on
              Instagram
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;