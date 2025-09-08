// COMMIT: Navigation update: Social Media dropdown opens all links internally (no new tab), "All Platforms" -> /social
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const dropdownRefs = {
    social: useRef<HTMLDivElement>(null),
    galleries: useRef<HTMLDivElement>(null),
    gear: useRef<HTMLDivElement>(null),
  };

  const closeTimeouts = useRef<{ [key: string]: NodeJS.Timeout }>({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (dropdown: string) => {
    if (closeTimeouts.current[dropdown]) {
      clearTimeout(closeTimeouts.current[dropdown]);
      delete closeTimeouts.current[dropdown];
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = (dropdown: string) => {
    closeTimeouts.current[dropdown] = setTimeout(() => {
      setActiveDropdown((current) => (current === dropdown ? null : current));
      delete closeTimeouts.current[dropdown];
    }, 300);
  };

  // Social Media dropdown
  const socialLinks = [
    { name: "All Platforms", path: "/social" },
    { name: "Instagram", path: "/social/instagram" },
    { name: "YouTube", path: "/social/youtube" },
    { name: "Pinterest", path: "/social/pinterest" },
    { name: "X", path: "/social/x" },
    { name: "Facebook", path: "/social/facebook" },
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

  // Dropdown Component
  const Dropdown = ({
    title,
    links,
    dropdownKey,
  }: {
    title: string;
    links: { name: string; path: string }[];
    dropdownKey: "social" | "galleries" | "gear";
  }) => (
    <div
      className="relative text-left"
      ref={dropdownRefs[dropdownKey]}
      onMouseEnter={() => handleMouseEnter(dropdownKey)}
      onMouseLeave={() => handleMouseLeave(dropdownKey)}
    >
      <button className="nav-link flex items-center space-x-1" type="button">
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            activeDropdown === dropdownKey ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50 transition-opacity duration-300 ease-in-out pointer-events-none opacity-0 ${
          activeDropdown === dropdownKey ? "opacity-100 pointer-events-auto" : ""
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="block px-4 py-2 text-left text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );

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
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Link>

            <Dropdown title="Social Media" links={socialLinks} dropdownKey="social" />
            <Dropdown title="Galleries" links={galleryLinks} dropdownKey="galleries" />
            <Dropdown title="Gear" links={gearLinks} dropdownKey="gear" />

            <Link
              to="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-accent transition-colors"
              type="button"
              aria-label="Toggle mobile menu"
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
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
              >
                Home
              </Link>
              <Link
                to="/social"
                className="block text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Platforms
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