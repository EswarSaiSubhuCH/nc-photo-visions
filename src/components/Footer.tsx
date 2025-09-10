import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { FaPinterestP } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X logo

const Footer = () => {
  const quickLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "Galleries",
    path: "/galleries"
  }, {
    name: "Social Media",
    path: "/social"
  }, {
    name: "Gear",
    path: "/gear"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <footer className="bg-[rgb(38,38,38)] text-white py-8 sm:py-10 md:py-[25px]">
      <div className="container mx-auto py-[12px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-6 sm:gap-y-8 mb-6">
          
          {/* Brand Section */}
          <div className="space-y-4 text-left">
            <Link to="/" onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth"
          })} className="text-xl sm:text-2xl font-playfair font-bold text-white hover:text-accent transition-colors site-title block">
              NC Photography & Aerials
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Capturing life's beautiful moments from every angle. 
              Professional photography and aerial services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:ml-2 px-0 md:mx-[10px]">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-xs md:max-w-none">
              {quickLinks.map((item, idx) => <Link key={idx} to={item.path} onClick={() => window.scrollTo({
              top: 0,
              behavior: "smooth"
            })} className="text-gray-300 hover:text-white transition-colors text-sm px-0 mx-0 my-0 hover:text-accent">
                  {item.name}
                </Link>)}
            </div>
          </div>

          {/* Follow Us & Contact Side by Side */}
          <div className="flex flex-col md:flex-row md:justify-start md:items-start md:space-x-12 text-center md:text-left">
            {/* Follow Us */}
            <div className="flex flex-col mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-3 sm:space-x-4 justify-center md:justify-start">
                <a href="https://www.instagram.com/nc_photography_galleryz/" target="_blank" rel="noreferrer noopener" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-accent transition-all hover:scale-110" aria-label="Instagram" title="Follow us on Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61580168834907" target="_blank" rel="noreferrer noopener" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-accent transition-all hover:scale-110" aria-label="Facebook" title="Follow us on Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://x.com/ncphotographys" target="_blank" rel="noreferrer noopener" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-accent transition-all hover:scale-110" aria-label="X" title="Follow us on X">
                  <SiX className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@NCPhotographyAerials" target="_blank" rel="noreferrer noopener" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-accent transition-all hover:scale-110" aria-label="YouTube" title="Follow us on YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://pin.it/3ZKWi8vw2" target="_blank" rel="noreferrer noopener" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-accent transition-all hover:scale-110" aria-label="Pinterest" title="Follow us on Pinterest">
                  <FaPinterestP className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Us */}
            
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center md:text-left text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} NC Photography & Aerials. All rights reserved.
        </div>
      </div>
    </footer>;
};
export default Footer;