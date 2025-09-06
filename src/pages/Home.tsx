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
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            Capturing Life from
            <span className="block text-accent">Every Angle</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Professional photography and aerial imagery services that tell your story with stunning clarity and artistic vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/galleries" className="btn-hero flex items-center justify-center space-x-2">
              <Camera size={20} />
              <span>View Our Work</span>
              <ArrowRight size={20} />
            </Link>
            
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From ground-level portraits to breathtaking aerial perspectives, we capture moments that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Photography Card */}
            <div className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Camera size={32} className="text-accent" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-playfair font-semibold">Photography</h3>
                      <p className="text-accent font-medium">Portrait & Commercial</p>
                    </div>
                    
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Professional portrait photography with artistic flair and technical excellence for all your creative needs.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Link to="/galleries/portraits" className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full hover:bg-accent/20 transition-colors">
                      View Portfolio
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Aerial Photography Card */}
            <div className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Plane size={32} className="text-accent" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-playfair font-semibold">Aerial Photography</h3>
                      <p className="text-accent font-medium">Drone & Aviation</p>
                    </div>
                    
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Stunning drone photography and videography capturing unique perspectives from above with professional equipment.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Link to="/galleries/aerial" className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full hover:bg-accent/20 transition-colors">
                      View Aerials
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Wedding Photography Card */}
            <div className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart size={32} className="text-accent" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-playfair font-semibold">Wedding Photography</h3>
                      <p className="text-accent font-medium">Romantic & Timeless</p>
                    </div>
                    
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Capturing your special day with romantic and timeless wedding photography that tells your love story.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Link to="/galleries/wedding" className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full hover:bg-accent/20 transition-colors">
                      View Weddings
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Photography Card */}
            <div className="group bg-card rounded-2xl border border-border p-8 hover:border-accent transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users size={32} className="text-accent" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-playfair font-semibold">Event Photography</h3>
                      <p className="text-accent font-medium">Corporate & Social</p>
                    </div>
                    
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Professional event coverage for corporate functions, parties, and celebrations with candid storytelling.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Link to="/galleries/events" className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full hover:bg-accent/20 transition-colors">
                      View Events
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>;
};
export default Home;