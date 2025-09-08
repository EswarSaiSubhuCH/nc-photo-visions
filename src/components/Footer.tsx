import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { FaPinterestP } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X logo

const Footer = () => {
  return (
    <footer className="bg-[rgb(38,38,38)] text-white py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          
          {/* Brand Section */}
          <div className="space-y-4 text-left">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-playfair font-bold text-white hover:text-accent transition-colors site-title"
            >
              NC Photography & Aerials
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Capturing life's beautiful moments from every angle. 
              Professional photography and aerial services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
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
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Follow Us */ }
          <div className="flex flex-col items-start text-left">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/nc_photography_galleryz/"
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all hover:scale-110"
                aria-label="Instagram"
                title="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61580168834907"
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all hover:scale-110"
                aria-label="Facebook"
                title="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/ncphotographys"
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all hover:scale-110"
                aria-label="X"
                title="Follow us on X"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@NCPhotographyAerials"
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all hover:scale-110"
                aria-label="YouTube"
                title="Follow us on YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://pin.it/3ZKWi8vw2"
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all hover:scale-110"
                aria-label="Pinterest"
                title="Follow us on Pinterest"
              >
                <FaPinterestP className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-left text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} NC Photography & Aerials. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;