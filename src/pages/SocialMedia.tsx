import React from "react";
import { Instagram, Twitter, Youtube, Linkedin, Users, Camera, Play } from "lucide-react";

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@nc_photography_aerials",
      url: "https://instagram.com/nc_photography_aerials",
      followers: "25.4K",
      bgColor: "bg-pink-200",
      iconColor: "text-pink-600"
    },
    {
      name: "Twitter",
      icon: Twitter,
      handle: "@nc_photo_aerials",
      url: "https://twitter.com/nc_photo_aerials",
      followers: "12.8K",
      bgColor: "bg-blue-200",
      iconColor: "text-blue-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      handle: "/nc-photography-aerials",
      url: "https://linkedin.com/company/nc-photography-aerials",
      followers: "8.2K",
      bgColor: "bg-indigo-200",
      iconColor: "text-indigo-600"
    },
    {
      name: "YouTube",
      icon: Youtube,
      handle: "@NCPhotographyAerials",
      url: "https://youtube.com/@ncphotographyaerials",
      followers: "15.6K",
      bgColor: "bg-orange-200",
      iconColor: "text-red-600"
    }
  ];

  const stats = [
    { label: "Total Followers", value: "62K+" },
    { label: "Total Likes", value: "1.2M+" },
    { label: "Posts Shared", value: "450+" },
    { label: "Engagement Rate", value: "98%" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6 text-foreground">Follow My Journey</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with my latest work and creative process across social platforms
          </p>
        </div>

        {/* Social Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={platform.name}
                className={`${platform.bgColor} rounded-3xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-white/80 flex items-center justify-center ${platform.iconColor}`}>
                    <IconComponent size={32} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{platform.name}</h3>
                <p className="text-gray-600 mb-4">{platform.handle}</p>
                
                <div className="flex items-center justify-center space-x-2 mb-6 text-gray-700">
                  <Users size={16} />
                  <span className="font-semibold">{platform.followers}</span>
                  <span className="text-sm">followers</span>
                </div>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/80 text-gray-800 hover:bg-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
                >
                  Follow Us
                </a>
              </div>
            );
          })}
        </div>

        {/* Latest Social Highlights */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4 text-foreground">Latest Social Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a glimpse of our most recent social media content and photography adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <Camera size={32} className="text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Instagram Stories</h3>
              <p className="text-gray-600 leading-relaxed">
                Behind-the-scenes content from our latest aerial photography session
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <Play size={32} className="text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">New Tutorial</h3>
              <p className="text-gray-600 leading-relaxed">
                "Mastering Golden Hour Photography" - Our latest YouTube tutorial
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <Camera size={32} className="text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Featured Post</h3>
              <p className="text-gray-600 leading-relaxed">
                Stunning drone shot of the city skyline at sunset - trending on Instagram
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;