import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const socialLinks = [
    { name: "Instagram", path: "/social/instagram" },
    { name: "Facebook", path: "/social/facebook" },
    { name: "YouTube", path: "/social/youtube" },
    { name: "Twitter", path: "/social/twitter" },
  ];

  const galleryLinks = [
    { name: "Aerial Photography", path: "/galleries/aerial" },
    { name: "Portrait Sessions", path: "/galleries/portraits" },
    { name: "Wedding Photography", path: "/galleries/weddings" },
    { name: "Commercial Work", path: "/galleries/commercial" },
  ];

  const gearLinks = [
    { name: "Cameras", path: "/gear/cameras" },
    { name: "Lenses", path: "/gear/lenses" },
    { name: "Drones", path: "/gear/drones" },
    { name: "Accessories", path: "/gear/accessories" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-effect shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-playfair font-bold text-foreground hover:text-accent transition-colors"
            >
              NC Photography & Aerials
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>

            {/* Social Media Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("social")}
                className="nav-link flex items-center space-x-1"
              >
                <span>Social Media</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "social" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "social" && (
                <div className="absolute top-full left-0 mt-2 w-56 glass-effect rounded-lg shadow-lg py-2">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Galleries Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("galleries")}
                className="nav-link flex items-center space-x-1"
              >
                <span>Galleries</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "galleries" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "galleries" && (
                <div className="absolute top-full left-0 mt-2 w-56 glass-effect rounded-lg shadow-lg py-2">
                  {galleryLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Gear Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("gear")}
                className="nav-link flex items-center space-x-1"
              >
                <span>Gear</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "gear" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "gear" && (
                <div className="absolute top-full left-0 mt-2 w-56 glass-effect rounded-lg shadow-lg py-2">
                  {gearLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-accent transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-effect rounded-lg mt-2 p-4">
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/social"
                className="block text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Social Media
              </Link>
              <Link
                to="/galleries"
                className="block text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Galleries
              </Link>
              <Link
                to="/gear"
                className="block text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gear
              </Link>
              <Link
                to="/about"
                className="block text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;