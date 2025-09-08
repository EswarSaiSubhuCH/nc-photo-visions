import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Pinterest } from "lucide-react";
import { SiX } from "react-icons/si"; // For the X (Twitter) logo

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-neutral-900 to-black text-gray-300 pt-10 pb-6">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Brand / Logo */}
          <div className="space-y-4">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-3xl font-playfair font-bold text-white hover:text-accent transition-colors"
            >
              NC Photography & Aerials
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
              Capturing timeless moments and breathtaking aerial views. 
              Where every picture tells a story.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-center">
            <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
            <div className="flex flex-col space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Galleries", path: "/galleries" },
                { name: "Social Media", path: "/social" },
                { name: "Gear", path: "/gear" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-sm relative group text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/nc_photography_galleryz/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61580168834907"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/ncphotographys"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-all"
                aria-label="X"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@NCPhotographyAerials"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://pin.it/3ZKWi8vw2"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-all"
                aria-label="Pinterest"
              >
                <Pinterest className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-800 pt-4 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} NC Photography & Aerials. Crafted with passion ✦ All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;