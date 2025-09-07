import React from "react";

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@nc_photography_galleryz",
      url: "https://www.instagram.com/nc_photography_galleryz/",
      color: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="32" height="32">
          <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f09433" />
              <stop offset="25%" stopColor="#e6683c" />
              <stop offset="50%" stopColor="#dc2743" />
              <stop offset="75%" stopColor="#cc2366" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </defs>
          <path fill="url(#instagram-gradient)" d="M250 250 L500 500 L0 500 Z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      handle: "@NCPhotographyAerials",
      url: "https://www.youtube.com/@NCPhotographyAerials",
      color: "bg-red-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="32" height="32">
          <path
            fill="#ff0034"
            d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"
          />
        </svg>
      ),
    },
    {
      name: "Pinterest",
      handle: "@ncphotographyaerials",
      url: "https://pin.it/3ZKWi8vw2",
      color: "bg-red-400",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32">
          <path
            fill="#e60024"
            d="M504 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2C161.5 437.2 163.5 467.4 165.6 487 73.4 450.9 8 361.1 8 256 8 119 119 8 256 8S504 119 504 256z"
          />
        </svg>
      ),
    },
    {
      name: "X",
      handle: "@ncphotographys",
      url: "https://x.com/ncphotographys",
      color: "bg-blue-400",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32" height="32">
          <path
            fill="#000000"
            d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm297.1 84l-103.8 118.6 122.1 161.4-95.6 0-74.8-97.9-85.7 97.9-47.5 0 111-126.9-117.1-153.1 98 0 67.7 89.5 78.2-89.5 47.5 0zM323.3 367.6l-169.9-224.7-28.3 0 171.8 224.7 26.4 0z"
          />
        </svg>
      ),
    },
    {
      name: "Facebook",
      handle: "@NC Photography & Aerials",
      url: "https://www.facebook.com/profile.php?id=61580168834907",
      color: "bg-blue-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32">
          <path
            fill="#0966ff"
            d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"
          />
        </svg>
      ),
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
              className={`flex flex-col items-center p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 ${platform.color} text-white`}
            >
              <div className="bg-white/20 rounded-full p-4 mb-4 flex items-center justify-center">
                {platform.icon}
              </div>
              <h3 className="text-xl font-semibold mb-1">{platform.name}</h3>
              <p className="text-sm">{platform.handle}</p>
              <button className="mt-4 px-6 py-2 rounded-full bg-white text-gray-800 font-medium hover:bg-gray-200 transition">
                Follow Us
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;