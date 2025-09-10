// src/pages/NotFound.tsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import snowMountain from "../assets/404game/snow-mountain.png";
import bird1 from "../assets/404game/download.jpeg";
import bird2 from "../assets/404game/images1.jpeg";
import bird3 from "../assets/404game/images.jpeg";
import camera from "../assets/404game/camera-png-image-from-pngfre-6.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* 404 Code */}
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>

      {/* Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <img src={snowMountain} alt="Snow Mountain" className="rounded shadow-lg" />
        <img src={bird1} alt="Bird 1" className="rounded shadow-lg" />
        <img src={bird2} alt="Bird 2" className="rounded shadow-lg" />
        <img src={bird3} alt="Bird 3" className="rounded shadow-lg" />
        <img src={camera} alt="Camera" className="rounded shadow-lg" />
      </div>

      <p className="mt-8 text-gray-600">
        Try going back to <a href="/" className="text-blue-500 underline">Home</a>
      </p>
    </div>
  );
};

export default NotFound;