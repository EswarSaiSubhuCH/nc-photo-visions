import React from "react";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      category: "Photos & Reels",
      description: "Follow my latest reels, stories, and photo highlights.",
      followers: "12.5K followers",
      color: "text-pink-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-2.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
        </svg>
      ),
      link: "https://www.instagram.com/nc_aerialshots/", // ✅ Updated clean link
    },
    {
      name: "YouTube",
      category: "Videos",
      description: "Watch cinematic edits and aerial footage on my channel.",
      followers: "8.2K subscribers",
      color: "text-red-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.615 3.184A3.994 3.994 0 0122 6.13v11.74a3.994 3.994 0 01-2.385 2.946C18.057 21.5 12 21.5 12 21.5s-6.057 0-7.615-.684A3.994 3.994 0 012 17.87V6.13a3.994 3.994 0 012.385-2.946C5.943 2.5 12 2.5 12 2.5s6.057 0 7.615.684zM10 8.5v7l6-3.5-6-3.5z" />
        </svg>
      ),
      link: "https://www.youtube.com/@NCPhotographyAerials",
    },
    {
      name: "Pinterest",
      category: "Inspiration",
      description: "Explore mood boards, inspirations, and creative visuals.",
      followers: "4.1K saves",
      color: "text-red-400",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.65 7.9 6.43 9.42-.09-.8-.17-2.03.03-2.91.18-.78 1.18-4.96 1.18-4.96s-.3-.61-.3-1.51c0-1.42.82-2.48 1.85-2.48.87 0 1.3.65 1.3 1.43 0 .87-.56 2.18-.84 3.39-.24 1.01.5 1.83 1.48 1.83 1.77 0 3.14-1.87 3.14-4.57 0-2.39-1.72-4.06-4.17-4.06-2.84 0-4.52 2.13-4.52 4.33 0 .86.33 1.78.75 2.28.08.1.09.19.07.29-.07.3-.23.94-.26 1.07-.04.18-.15.22-.36.13-1.35-.63-2.19-2.6-2.19-4.18 0-3.41 2.47-6.55 7.12-6.55 3.73 0 6.64 2.66 6.64 6.23 0 3.71-2.34 6.7-5.59 6.7-1.09 0-2.12-.57-2.48-1.24l-.68 2.61c-.25.96-.92 2.16-1.37 2.89.97.3 2 .47 3.08.47 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
      ),
      link: "https://pin.it/3ZKWi8vw2",
    },
    {
      name: "X (Twitter)",
      category: "Updates",
      description: "Quick updates, thoughts, and behind-the-scenes moments.",
      followers: "2.3K followers",
      color: "text-black",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.15l-5.214-6.822L4.996 21.75H1.688l7.73-8.835L1.25 2.25h7.084l4.713 6.231 5.197-6.231z" />
        </svg>
      ),
      link: "https://x.com/ncphotographys",
    },
    {
      name: "Facebook",
      category: "Community",
      description: "Join my page for albums, updates, and local events.",
      followers: "6.8K followers",
      color: "text-blue-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-2.9h2.5V9.5c0-2.47 1.48-3.84 3.73-3.84 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87H16l-.4 2.9h-2.12v7.05A10 10 0 0022 12z" />
        </svg>
      ),
      link: "https://www.facebook.com/profile.php?id=61580168834907",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6 text-foreground">
            Follow My Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay connected across my social platforms
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="bg-card rounded-2xl border border-border p-8 mb-12 text-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">Quick Navigation</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/social/highlights"
              className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors py-2 px-6 rounded-lg font-medium"
            >
              Latest Highlights
            </Link>
          </div>
        </div>

        {/* Social Media Cards */}
        <div id="platforms" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {socialPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-card rounded-2xl border border-border hover:border-accent transition-all duration-300 p-6 relative"
            >
              {/* Icon */}
              <div className="p-3 bg-accent/10 rounded-full w-fit mb-4">
                <span className={platform.color}>{platform.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold">{platform.name}</h3>
              <p className="text-accent text-sm mb-2">{platform.category}</p>
              <p className="text-muted-foreground mb-4">{platform.description}</p>

              {/* Action button */}
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-accent/10 text-accent font-medium hover:bg-accent hover:text-accent-foreground transition"
              >
                Visit Platform
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;