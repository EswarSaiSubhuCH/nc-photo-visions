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

  const socialLinks = [
    { name: "All Platforms", path: "/social", internal: true },
    { name: "Instagram", path: "https://www.instagram.com/nc_photography_galleryz/", internal: false },
    { name: "YouTube", path: "https://www.youtube.com/@NCPhotographyAerials", internal: false },
    { name: "Pinterest", path: "https://pin.it/3ZKWi8vw2", internal: false },
    { name: "X", path: "https://x.com/ncphotographys", internal: false },
    { name: "Facebook", path: "https://www.facebook.com/profile.php?id=61580168834907", internal: false },
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

  const Dropdown = ({
    title,
    links,
  }: {
    title: string;
    links: { name: string; path: string; internal?: boolean }[];
  }) => (
    <div
      className="relative text-left hidden md:block"
      onMouseEnter={() => handleMouseEnter(title)}
      onMouseLeave={() => handleMouseLeave(title)}
    >
      <button className="nav-link flex items-center space-x-1" type="button">
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === title ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50 transition-opacity duration-300 ease-in-out pointer-events-none opacity-0 ${
          activeDropdown === title ? "opacity-100 pointer-events-auto" : ""
        }`}
      >
        {links.map((link) =>
          link.internal ? (
            <Link
              key={link.path}
              to={link.path}
              className="block px-4 py-2 text-left text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {link.name}
            </Link>
          ) : (
            <a
              key={link.path}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-left text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {link.name}
            </a>
          )
        )}
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
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-playfair font-bold text-foreground hover:text-accent transition-colors site-title"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              NC Photography & Aerials
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>

            <Dropdown title="Social Media" links={socialLinks} />
            <Dropdown title="Galleries" links={galleryLinks} />
            <Dropdown title="Gear" links={gearLinks} />

            <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>About</Link>
            <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Contact</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground hover:text-accent transition-colors" type="button" aria-label="Toggle mobile menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

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