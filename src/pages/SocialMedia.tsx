import React from "react";
const SocialMedia = () => {
  const socialPlatforms = [{
    name: "Instagram",
    category: "Photos & Reels",
    description: "Follow my latest reels, stories, and photo highlights.",
    followers: "12.5K followers",
    color: "text-pink-500",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
        </svg>,
    link: "https://www.instagram.com/nc_photography_galleryz/"
  }, {
    name: "YouTube",
    category: "Videos",
    description: "Watch cinematic edits and aerial footage on my channel.",
    followers: "8.2K subscribers",
    color: "text-red-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.615 3.184A3.994 3.994 0 0122 6.13v11.74a3.994 3.994 0 01-2.385 2.946C18.057 21.5 12 21.5 12 21.5s-6.057 0-7.615-.684A3.994 3.994 0 012 17.87V6.13a3.994 3.994 0 012.385-2.946C5.943 2.5 12 2.5 12 2.5s6.057 0 7.615.684zM10 8.5v7l6-3.5-6-3.5z" />
        </svg>,
    link: "https://www.youtube.com/@NCPhotographyAerials"
  }, {
    name: "Pinterest",
    category: "Inspiration",
    description: "Explore mood boards, inspirations, and creative visuals.",
    followers: "4.1K saves",
    color: "text-red-400",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 00-3.515 19.36c-.05-.824-.095-2.09.02-2.99.104-.807.672-5.13.672-5.13s-.17-.34-.17-.84c0-.79.46-1.38 1.03-1.38.49 0 .72.37.72.82 0 .5-.32 1.24-.48 1.93-.14.59.3 1.07.89 1.07 1.07 0 1.9-1.13 1.9-2.77 0-1.45-1.04-2.46-2.52-2.46-1.71 0-2.71 1.28-2.71 2.6 0 .52.2 1.08.45 1.38.05.06.06.1.04.16-.04.18-.14.59-.16.67-.03.11-.1.15-.22.09-.82-.38-1.33-1.56-1.33-2.51 0-2.04 1.48-3.92 4.28-3.92 2.25 0 4 1.61 4 3.76 0 2.23-1.41 4.02-3.36 4.02-.65 0-1.26-.34-1.47-.74l-.4 1.53c-.14.53-.52 1.2-.77 1.61A9.96 9.96 0 1012 2z" />
        </svg>,
    link: "https://pin.it/3ZKWi8vw2"
  }, {
    name: "X (Twitter)",
    category: "Updates",
    description: "Quick updates, thoughts, and behind-the-scenes moments.",
    followers: "2.3K followers",
    color: "text-black",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.15l-5.214-6.822L4.996 21.75H1.688l7.73-8.835L1.25 2.25h7.084l4.713 6.231 5.197-6.231z" />
        </svg>,
    link: "https://x.com/ncphotographys"
  }, {
    name: "Facebook",
    category: "Community",
    description: "Join my page for albums, updates, and local events.",
    followers: "6.8K followers",
    color: "text-blue-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-2.9h2.5V9.5c0-2.47 1.48-3.84 3.73-3.84 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87H16l-.4 2.9h-2.12v7.05A10 10 0 0022 12z" />
        </svg>,
    link: "https://www.facebook.com/profile.php?id=61580168834907"
  }];
  return <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6 text-foreground">
            Follow My Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay connected across my social platforms
          </p>
        </div>

        {/* Social Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {socialPlatforms.map(platform => <div key={platform.name} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 relative">
              {/* Icon */}
              <div className="p-3 bg-orange-50 rounded-full w-fit mb-4">
                <span className={platform.color}>{platform.icon}</span>
              </div>

              {/* Followers badge */}
              

              {/* Content */}
              <h3 className="text-xl font-semibold">{platform.name}</h3>
              <p className="text-orange-500 text-sm mb-2">{platform.category}</p>
              <p className="text-gray-600 mb-4">{platform.description}</p>

              {/* Action button */}
              <a href={platform.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium hover:bg-orange-200 transition">
                Visit
              </a>
            </div>)}
        </div>
      </div>
    </div>;
};
export default SocialMedia;