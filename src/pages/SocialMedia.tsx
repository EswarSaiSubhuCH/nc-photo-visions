import React from "react";
import { ExternalLink, Instagram, Facebook, Youtube, Twitter, Camera, Users } from "lucide-react";

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@nc_photography_aerials",
      url: "https://instagram.com/nc_photography_aerials",
      followers: "12.5K",
      description: "Daily shots, behind-the-scenes content, and aerial photography highlights",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Facebook",
      icon: Facebook,
      handle: "NC Photography & Aerials",
      url: "https://facebook.com/ncphotographyaerials",
      followers: "8.2K",
      description: "Latest projects, client testimonials, and photography tips",
      color: "from-blue-600 to-blue-500"
    },
    {
      name: "YouTube",
      icon: Youtube,
      handle: "NC Photography Aerials",
      url: "https://youtube.com/@ncphotographyaerials",
      followers: "3.1K",
      description: "Photography tutorials, drone flight footage, and project documentaries",
      color: "from-red-600 to-red-500"
    },
    {
      name: "Twitter",
      icon: Twitter,
      handle: "@nc_photo_aerials",
      url: "https://twitter.com/nc_photo_aerials",
      followers: "2.8K",
      description: "Quick updates, industry news, and photography insights",
      color: "from-blue-400 to-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6">Connect With Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Follow our journey across social media platforms and stay updated with our latest work, 
            behind-the-scenes content, and photography insights.
          </p>
        </div>

        {/* Social Platform Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={platform.name}
                className="group relative overflow-hidden rounded-2xl border border-border hover:border-accent transition-all duration-300 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center text-white`}>
                        <IconComponent size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-playfair font-semibold">{platform.name}</h3>
                        <p className="text-muted-foreground">{platform.handle}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-muted-foreground mb-1">
                        <Users size={16} />
                        <span className="text-sm">Followers</span>
                      </div>
                      <p className="text-2xl font-bold text-accent">{platform.followers}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {platform.description}
                  </p>

                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors group-hover:scale-105 transform duration-200"
                  >
                    <span>Visit {platform.name}</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Content Section */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold mb-4">Latest Social Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get a glimpse of our most recent social media content and photography adventures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl mb-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Camera size={48} className="text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Instagram Stories</h3>
              <p className="text-sm text-muted-foreground">
                Behind-the-scenes content from our latest aerial photography session
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl mb-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Youtube size={48} className="text-accent" />
              </div>
              <h3 className="font-semibold mb-2">New Tutorial</h3>
              <p className="text-sm text-muted-foreground">
                "Mastering Golden Hour Photography" - Our latest YouTube tutorial
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl mb-4 flex items-center justify-center hover:scale-105 transition-transform">
                <Instagram size={48} className="text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Featured Post</h3>
              <p className="text-sm text-muted-foreground">
                Stunning drone shot of the city skyline at sunset - trending on Instagram
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-playfair font-bold mb-4">Stay Connected</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't miss out on our latest work and photography tips. Follow us on your favorite platform!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialPlatforms.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r ${platform.color} text-white hover:scale-105 transition-transform font-medium`}
                >
                  <IconComponent size={20} />
                  <span>{platform.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;