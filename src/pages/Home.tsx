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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Photography Card */}
            <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                  <Camera size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4 text-white">Photography</h3>
                <p className="text-white/90 mb-6 text-sm leading-relaxed">
                  Professional portrait photography with artistic flair and technical excellence.
                </p>
                <Link to="/galleries/portraits" className="inline-flex items-center space-x-2 text-white/90 hover:text-white font-medium group-hover:translate-x-1 transition-all duration-200">
                  <span>View Portfolio</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Aerial Photography Card */}
            <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                  <Plane size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4 text-white">Aerial Photography</h3>
                <p className="text-white/90 mb-6 text-sm leading-relaxed">
                  Stunning drone photography and videography capturing unique perspectives from above.
                </p>
                <Link to="/galleries/aerial" className="inline-flex items-center space-x-2 text-white/90 hover:text-white font-medium group-hover:translate-x-1 transition-all duration-200">
                  <span>View Aerials</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Wedding Photography Card */}
            <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                  <Heart size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4 text-white">Wedding Photography</h3>
                <p className="text-white/90 mb-6 text-sm leading-relaxed">
                  Capturing your special day with romantic and timeless wedding photography.
                </p>
                <Link to="/galleries/wedding" className="inline-flex items-center space-x-2 text-white/90 hover:text-white font-medium group-hover:translate-x-1 transition-all duration-200">
                  <span>View Weddings</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Event Photography Card */}
            <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4 text-white">Event Photography</h3>
                <p className="text-white/90 mb-6 text-sm leading-relaxed">
                  Professional event coverage for corporate functions, parties, and celebrations.
                </p>
                <Link to="/galleries/events" className="inline-flex items-center space-x-2 text-white/90 hover:text-white font-medium group-hover:translate-x-1 transition-all duration-200">
                  <span>View Events</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>;
};
export default Home;