import React from "react";
import { ArrowLeft, ExternalLink, Heart, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const SocialHighlights = () => {
  const highlights = [
    {
      id: 1,
      platform: "Instagram",
      type: "Reel",
      title: "Behind the Scenes: Aerial Sunset Shoot",
      description: "Watch how I captured this stunning aerial sunset over the mountains using my DJI Mavic 3 Pro.",
      thumbnail: "/api/placeholder/400/600",
      likes: 2847,
      comments: 126,
      shares: 89,
      date: "2 days ago",
      color: "text-pink-500"
    },
    {
      id: 2,
      platform: "YouTube",
      type: "Short",
      title: "5 Tips for Perfect Portrait Lighting",
      description: "Quick tips that transformed my portrait photography. Save this for your next shoot!",
      thumbnail: "/api/placeholder/400/600",
      likes: 1924,
      comments: 78,
      shares: 145,
      date: "4 days ago",
      color: "text-red-600"
    },
    {
      id: 3,
      platform: "Instagram",
      type: "Post",
      title: "Client Feature: Sarah's Wedding",
      description: "Couldn't be happier with how Sarah & Mike's wedding photos turned out. The golden hour magic! ✨",
      thumbnail: "/api/placeholder/400/600",
      likes: 3156,
      comments: 89,
      shares: 67,
      date: "1 week ago",
      color: "text-pink-500"
    },
    {
      id: 4,
      platform: "TikTok",
      type: "Video",
      title: "Camera Gear Setup Timelapse",
      description: "From empty studio to full professional setup in 60 seconds. Which setup is your favorite?",
      thumbnail: "/api/placeholder/400/600",
      likes: 8743,
      comments: 234,
      shares: 456,
      date: "1 week ago",
      color: "text-gray-800"
    },
    {
      id: 5,
      platform: "Pinterest",
      type: "Pin",
      title: "Moody Portrait Photography Ideas",
      description: "10 creative ideas for dramatic portrait photography. Perfect for your next creative session.",
      thumbnail: "/api/placeholder/400/600",
      likes: 567,
      comments: 23,
      shares: 189,
      date: "2 weeks ago",
      color: "text-red-400"
    },
    {
      id: 6,
      platform: "YouTube",
      type: "Video",
      title: "Complete Drone Photography Tutorial",
      description: "Everything you need to know about aerial photography - from beginner to advanced techniques.",
      thumbnail: "/api/placeholder/400/600",
      likes: 4521,
      comments: 312,
      shares: 789,
      date: "3 weeks ago",
      color: "text-red-600"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/social" 
          className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Social Media</span>
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold mb-6">Latest Social Highlights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Catch up on the latest posts, reels, and videos across all my social media platforms. 
            Behind-the-scenes content, tutorials, and client features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight) => (
            <div 
              key={highlight.id} 
              className="bg-card rounded-2xl border border-border overflow-hidden hover:border-accent transition-all duration-300 group"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={highlight.thumbnail} 
                  alt={highlight.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 select-none"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {highlight.type}
                </div>
                <div className={`absolute top-4 right-4 ${highlight.color}`}>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    {highlight.platform === 'Instagram' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                      </svg>
                    )}
                    {highlight.platform === 'YouTube' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184A3.994 3.994 0 0122 6.13v11.74a3.994 3.994 0 01-2.385 2.946C18.057 21.5 12 21.5 12 21.5s-6.057 0-7.615-.684A3.994 3.994 0 012 17.87V6.13a3.994 3.994 0 012.385-2.946C5.943 2.5 12 2.5 12 2.5s6.057 0 7.615.684zM10 8.5v7l6-3.5-6-3.5z" />
                      </svg>
                    )}
                    {highlight.platform === 'Pinterest' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2a10 10 0 00-3.515 19.36c-.05-.824-.095-2.09.02-2.99.104-.807.672-5.13.672-5.13s-.17-.34-.17-.84c0-.79.46-1.38 1.03-1.38.49 0 .72.37.72.82 0 .5-.32 1.24-.48 1.93-.14.59.3 1.07.89 1.07 1.07 0 1.9-1.13 1.9-2.77 0-1.45-1.04-2.46-2.52-2.46-1.71 0-2.71 1.28-2.71 2.6 0 .52.2 1.08.45 1.38.05.06.06.1.04.16-.04.18-.14.59-.16.67-.03.11-.1.15-.22.09-.82-.38-1.33-1.56-1.33-2.51 0-2.04 1.48-3.92 4.28-3.92 2.25 0 4 1.61 4 3.76 0 2.23-1.41 4.02-3.36 4.02-.65 0-1.26-.34-1.47-.74l-.4 1.53c-.14.53-.52 1.2-.77 1.61A9.96 9.96 0 1012 2z" />
                      </svg>
                    )}
                    {highlight.platform === 'TikTok' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.321 5.562a5.123 5.123 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.849-1.349-1.849-1.562-2.849C16.116 1.256 16.063 1 16 1h-3v16c0 1.5-1.2 2.7-2.7 2.7S7.6 18.5 7.6 17s1.2-2.7 2.7-2.7c.3 0 .6.1.8.2V11c-.3-.1-.5-.1-.8-.1C7.1 10.9 4.9 13.1 4.9 16s2.2 5.1 5.1 5.1 5.1-2.3 5.1-5.1V8.4c1.4 1 3.1 1.5 4.9 1.5V6.9c-1-.1-1.9-.6-2.6-1.338z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{highlight.platform}</span>
                  <span className="text-sm text-muted-foreground">{highlight.date}</span>
                </div>

                <h3 className="font-playfair font-semibold text-lg mb-2 line-clamp-2">
                  {highlight.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {highlight.description}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart size={14} />
                      <span>{highlight.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle size={14} />
                      <span>{highlight.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Share2 size={14} />
                      <span>{highlight.shares}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors py-2 px-4 rounded-lg flex items-center justify-center space-x-2">
                  <span>View on {highlight.platform}</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialHighlights;