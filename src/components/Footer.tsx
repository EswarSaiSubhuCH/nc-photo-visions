import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { FaPinterestP } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X (Twitter) logo

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Galleries", path: "/galleries" },
    { name: "Social Media", path: "/social" },
    { name: "Gear", path: "/gear" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Brand Section */}
          <div>
            <Link
              to="/"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="text-lg sm:text-xl font-playfair font-bold text-white hover:text-accent transition-colors"
            >
              NC Photography & Aerials
            </Link>
            <p className="text-gray-400 text-sm mt-3 max-w-sm leading-relaxed">
              Capturing life's beautiful moments from every angle —
              professional photography and aerial services tailored
              to preserve your memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {quickLinks.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-accent text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-base font-semibold mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/nc_photography_galleryz/"
                target="_blank"
                rel="noreferrer noopener"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-accent transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61580168834907"
                target="_blank"
                rel="noreferrer noopener"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-accent transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/ncphotographys"
                target="_blank"
                rel="noreferrer noopener"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-accent transition-all"
              >
                <SiX className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@NCPhotographyAerials"
                target="_blank"
                rel="noreferrer noopener"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-accent transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://pin.it/3ZKWi8vw2"
                target="_blank"
                rel="noreferrer noopener"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-accent transition-all"
              >
                <FaPinterestP className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} NC Photography & Aerials. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;