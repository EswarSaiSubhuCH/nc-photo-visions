// src/components/NotFoundGame.tsx
import React from 'react';
import snowMountain from '../assets/404game/snow-mountain.png';
import bird1 from '../assets/404game/download.jpeg';
import bird2 from '../assets/404game/images1.jpeg';
import bird3 from '../assets/404game/images.jpeg';
import camera from '../assets/404game/camera.png';

const NotFoundGame = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-5xl font-bold mb-6 text-red-600">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>

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

export default NotFoundGame;