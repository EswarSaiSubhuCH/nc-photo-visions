import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Plane } from "lucide-react";
import heroImage from "@/assets/hero-aerial.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 hero-parallax"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 photo-overlay" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            Capturing Life from
            <span className="block text-accent">Every Angle</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Professional photography and aerial imagery services that tell your story with stunning clarity and artistic vision.
          </p>
          <div className="flex justify-center">
            <Link
              to="/galleries"
              className="btn-hero flex items-center justify-center space-x-2"
            >
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-lg border border-border hover:border-accent transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Camera size={32} />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4">Photography</h3>
              <p className="text-muted-foreground mb-6">
                Professional portrait, wedding, and commercial photography with artistic flair and technical excellence.
              </p>
              <Link
                to="/galleries/portraits"
                className="text-accent hover:text-accent/80 font-medium flex items-center space-x-2"
              >
                <span>View Portfolio</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="group p-8 rounded-lg border border-border hover:border-accent transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Plane size={32} />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4">Aerial Photography</h3>
              <p className="text-muted-foreground mb-6">
                Stunning drone photography and videography capturing unique perspectives from above.
              </p>
              <Link
                to="/galleries/aerial"
                className="text-accent hover:text-accent/80 font-medium flex items-center space-x-2"
              >
                <span>View Aerials</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="group p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Camera size={32} />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4">Wedding & Event Photography</h3>
              <p className="text-muted-foreground mb-6">
                Capturing your special moments and celebrations with artistic vision and professional expertise.
              </p>
              <Link
                to="/galleries/weddings"
                className="text-accent hover:text-accent/80 font-medium flex items-center space-x-2"
              >
                <span>View Work</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Ready to Capture Your Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something beautiful together. Contact us to discuss your vision.
          </p>
          <Link
            to="/contact"
            className="btn-hero"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;