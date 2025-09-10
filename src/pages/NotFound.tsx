import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NotFoundGame = () => {
  const [flash, setFlash] = useState(false);
  const [score, setScore] = useState(0);
  const [targets, setTargets] = useState(
    Array.from({ length: 5 }, () => ({
      x: Math.random() * 80,
      y: Math.random() * 60,
    }))
  );

  // Move targets randomly every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setTargets(targets.map(() => ({
        x: Math.random() * 80,
        y: Math.random() * 60,
      })));
    }, 1000);
    return () => clearInterval(interval);
  }, [targets]);

  const handleCapture = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 150);
    setScore(score + 1); // increment score for demo; can implement collision logic
  };

  return (
    <div className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      {flash && <div className="absolute inset-0 bg-white opacity-95 animate-ping z-50"></div>}

      <h1 className="text-6xl text-white mb-4">📷</h1>
      <button onClick={handleCapture} className="btn-hero px-6 py-3 text-lg font-semibold mb-6">
        Capture
      </button>
      <p className="text-white text-xl mb-4">Score: {score}</p>

      {/* Render targets */ }
      {targets.map((t, i) => (
        <div
          key={i}
          className="absolute w-12 h-12 bg-accent rounded-full"
          style={{ top: `${t.y}vh`, left: `${t.x}vw` }}
        />
      ))}

      <p className="text-white mt-4 font-medium">Take Photos with NC Photography!</p>
      <Link
        to="/galleries"
        className="mt-6 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/80 transition-colors"
      >
        Explore Galleries
      </Link>
    </div>
  );
};

export default NotFoundGame;