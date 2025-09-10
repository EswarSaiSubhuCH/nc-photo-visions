import { useState } from "react";
import { Link } from "react-router-dom";
import { Camera } from "lucide-react";

const NotFound = () => {
  const [flash, setFlash] = useState(false);
  const [message, setMessage] = useState("");

  const handleCapture = () => {
    setFlash(true);
    setMessage("");
    // Flash effect duration
    setTimeout(() => {
      setFlash(false);
      setMessage("📸 Take Photos!");
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 relative overflow-hidden">
      {/* Flash effect overlay */}
      {flash && (
        <div className="absolute inset-0 bg-white opacity-80 animate-flash z-50"></div>
      )}

      {/* Camera Illustration */}
      <div
        className="flex flex-col items-center justify-center cursor-pointer"
        onClick={handleCapture}
      >
        <Camera size={100} className="text-accent mb-6 hover:scale-110 transition-transform" />
        <button className="btn-hero px-6 py-3">Capture</button>
      </div>

      {/* Message after flash */}
      {message && (
        <p className="text-accent font-bold text-2xl mt-8 animate-pulse">
          {message}
        </p>
      )}

      {/* Navigation Links */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4 text-center">
        <Link to="/" className="btn-hero px-6 py-3">
          Return Home
        </Link>
        <Link to="/galleries" className="text-accent hover:text-accent/80 transition-colors font-medium">
          Explore Galleries
        </Link>
      </div>

      {/* Flash animation keyframes */}
      <style>
        {`
          @keyframes flash {
            0% { opacity: 0; }
            50% { opacity: 0.8; }
            100% { opacity: 0; }
          }
          .animate-flash {
            animation: flash 0.3s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;