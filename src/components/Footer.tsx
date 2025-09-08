import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter, PinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[rgb(38,38,38)] text-white py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand Section */}
          <div className="space-y-4 text-center md:text-left">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-playfair font-bold text-white hover:text-accent transition-colors site-title"
            >
              NC Photography & Aerials
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Capturing life's beautiful moments from every angle. 
              Professional photography and aerial services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <Link 
                to="/" 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Home
              </Link>
              <Link 
                to="/galleries" 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Galleries
              </Link>
              <Link 
                to="/social" 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Social Media
              </Link>
              <Link 
                to="/gear" 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Gear
              </Link>
              <Link 
                to="/about" 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/nc_photography_galleryz/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61580168834907"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/ncphotographys"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@NCPhotographyAerials"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://pin.it/3ZKWi8vw2"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Pinterest"
              >
                <PinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} NC Photography & Aerials. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;