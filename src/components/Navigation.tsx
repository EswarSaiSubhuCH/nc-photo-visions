import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Separate refs for each dropdown
  const socialRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const gearRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Open dropdown immediately
  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  // Close dropdown with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 300);
  };

  // Close if mouse moves too far from the dropdown
  const handleMouseMove = (
    e: React.MouseEvent,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const buffer = 50;
    if (
      e.clientX < rect.left - buffer ||
      e.clientX > rect.right + buffer ||
      e.clientY < rect.top - buffer ||
      e.clientY > rect.bottom + buffer
    ) {
      setActiveDropdown(null);
    }
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
    { name: "Landscape & Nature", path: "/galleries/landscape" },
    { name: "Event Photography", path: "/galleries/events" },
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
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-playfair font-bold text-foreground hover:text-accent transition-colors site-title"
            >
              NC Photography & Aerials
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
              Home
            </Link>

            {/* Social Media Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("social")}
              onMouseLeave={handleMouseLeave}
              onMouseMove={(e) => handleMouseMove(e, socialRef)}
              ref={socialRef}
            >
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
                <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                  <Link
                    to="/social"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={() => {
                      setActiveDropdown(null);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Social Media Hub
                  </Link>
                  {socialLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => {
                        setActiveDropdown(null);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Galleries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("galleries")}
              onMouseLeave={handleMouseLeave}
              onMouseMove={(e) => handleMouseMove(e, galleryRef)}
              ref={galleryRef}
            >
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
                <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                  {galleryLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => {
                        setActiveDropdown(null);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Gear Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("gear")}
              onMouseLeave={handleMouseLeave}
              onMouseMove={(e) => handleMouseMove(e, gearRef)}
              ref={gearRef}
            >
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
                <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                  {gearLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => {
                        setActiveDropdown(null);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
              About
            </Link>

            <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
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
              <Link to="/" className="block text-foreground hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/social" className="block text-foreground hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Social Media</Link>
              <Link to="/galleries" className="block text-foreground hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Galleries</Link>
              <Link to="/gear" className="block text-foreground hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Gear</Link>
              <Link to="/about" className="block text-foreground hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/contact" className="block text-foreground hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;