// src/pages/NotFound.tsx
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

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

      {/* Optional message */}
      <p className="mt-4 text-gray-600 text-center">
        The page you are looking for does not exist.
      </p>

      {/* Back to home link */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;