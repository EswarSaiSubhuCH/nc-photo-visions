import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="text-center px-4">
        <h1 className="text-6xl font-playfair font-bold mb-4 text-accent">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to our beautiful photography portfolio.
        </p>
        <div className="space-y-4">
          <Link 
            to="/" 
            className="btn-hero inline-flex items-center justify-center"
          >
            Return to Home
          </Link>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/galleries" className="text-accent hover:text-accent/80 transition-colors">
              View Galleries
            </Link>
            <Link to="/about" className="text-accent hover:text-accent/80 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-accent hover:text-accent/80 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
