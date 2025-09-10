import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Plane, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-aerial.jpg";
const Home = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-parallax" style={{
        backgroundImage: `url(${heroImage})`
      }} />
        <div className="absolute inset-0 photo-overlay" />
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-4 sm:mb-6 leading-tight">
            Capturing Life from
            <span className="block text-accent">Every Angle</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed px-2">
            Professional photography and aerial imagery services that tell your story with stunning clarity and artistic vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link to="/galleries" className="btn-hero flex items-center justify-center space-x-2">
              <Camera size={20} />
              <span>View Our Work</span>
              <ArrowRight size={20} />
            </Link>
            
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              From ground-level portraits to breathtaking aerial perspectives, we capture moments that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Photography Card */}
            <Link to="/galleries/portraits" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300 cursor-pointer">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <Camera size={28} className="text-accent sm:w-8 sm:h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-playfair font-semibold">Photography</h3>
                      <p className="text-accent font-medium">Portrait & Commercial</p>
                    </div>
                    
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-center sm:text-left">
                    Professional portrait photography with artistic flair and technical excellence for all your creative needs.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full hover:bg-accent/20 transition-colors">
                      View Portfolio
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Aerial Photography Card */}
            <Link to="/galleries/aerial" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300 cursor-pointer">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <Plane size={28} className="text-accent sm:w-8 sm:h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-playfair font-semibold">Aerial Photography</h3>
                      <p className="text-accent font-medium">Drone & Aviation</p>
                    </div>
                    
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-center sm:text-left">
                    Stunning drone photography and videography capturing unique perspectives from above with professional equipment.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full hover:bg-accent/20 transition-colors">
                      View Aerials
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Wedding Photography Card */}
            <Link to="/galleries/weddings" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300 cursor-pointer">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <Heart size={28} className="text-accent sm:w-8 sm:h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-playfair font-semibold">Wedding Photography</h3>
                      <p className="text-accent font-medium">Romantic & Timeless</p>
                    </div>
                    
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-center sm:text-left">
                    Capturing your special day with romantic and timeless wedding photography that tells your love story.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full hover:bg-accent/20 transition-colors">
                      View Weddings
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Event Photography Card */}
            <Link to="/galleries/events" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300 cursor-pointer">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <Users size={28} className="text-accent sm:w-8 sm:h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-playfair font-semibold">Event Photography</h3>
                      <p className="text-accent font-medium">Corporate & Social</p>
                    </div>
                    
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-center sm:text-left">
                    Professional event coverage for corporate functions, parties, and celebrations with candid storytelling.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full hover:bg-accent/20 transition-colors">
                      View Events
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>;
};
export default Home;