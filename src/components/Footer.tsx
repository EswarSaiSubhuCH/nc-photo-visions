import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
const Footer = () => {
  return <footer className="bg-[rgb(38,38,38)] text-white py-[16px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              to="/"
              className="text-2xl font-playfair font-bold text-white hover:text-accent transition-colors site-title"
            >
              NC Photography & Aerials
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Capturing life's beautiful moments from every angle. 
              Professional photography and aerial services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/social" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Social Media
              </Link>
              <Link to="/galleries" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Galleries
              </Link>
              <Link to="/gear" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Gear
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        
      </div>
    </footer>;
};
export default Footer;