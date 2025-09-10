import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mountainImage from "../../assets/samples/snow-mountains.jpg";
import birdImage from "../../assets/samples/bird.png";
import starImage from "../../assets/samples/star.png";
import shutterSoundFile from "../../assets/samples/shutter.mp3";

interface Bird {
  id: number;
  x: number;
  y: number;
  speed: number;
}

interface Star {
  id: number;
  x: number;
  y: number;
  life: number;
}

const GAME_DURATION = 30; // seconds

const NotFoundGame = () => {
  const [birds, setBirds] = useState<Bird[]>([]);
  const [stars, setStars] = useState<Star[]>([]);
  const [flash, setFlash] = useState(false);
  const [captured, setCaptured] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [gameOver, setGameOver] = useState(false);

  const shutterSound = new Audio(shutterSoundFile);

  // Initialize birds
  useEffect(() => {
    const initialBirds = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * 300 + 50,
      speed: Math.random() * 2 + 1,
    }));
    setBirds(initialBirds);
  }, []);

  // Animate birds and stars
  useEffect(() => {
    const interval = setInterval(() => {
      setBirds((prev) =>
        prev.map((b) => ({
          ...b,
          x: b.x + b.speed > window.innerWidth ? -50 : b.x + b.speed,
        }))
      );
      setStars((prev) =>
        prev.map((s) => ({ ...s, y: s.y + 3, life: s.life - 1 })).filter((s) => s.life > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const captureBird = (id: number) => {
    if (gameOver) return;

    setFlash(true);
    setCaptured((prev) => prev + 1);

    // Play shutter sound
    shutterSound.currentTime = 0;
    shutterSound.play();

    const bird = birds.find((b) => b.id === id);
    if (bird) {
      const newStars = Array.from({ length: 5 }, (_, i) => ({
        id: Date.now() + i,
        x: bird.x + Math.random() * 30 - 15,
        y: bird.y,
        life: 40 + Math.floor(Math.random() * 20),
      }));
      setStars((prev) => [...prev, ...newStars]);
    }

    setTimeout(() => setFlash(false), 150);
  };

  const restartGame = () => {
    setCaptured(0);
    setTimeLeft(GAME_DURATION);
    setGameOver(false);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-900">
      {/* Background */}
      <img
        src={mountainImage}
        alt="Snow Mountains"
        className="absolute w-full h-full object-cover -z-10"
      />

      {/* Flash effect */}
      {flash && <div className="absolute inset-0 bg-white z-50 animate-flash"></div>}

      {/* Birds */}
      {!gameOver &&
        birds.map((bird) => (
          <img
            key={bird.id}
            src={birdImage}
            alt="Bird"
            className="absolute w-12 h-12 cursor-pointer z-40"
            style={{ top: bird.y, left: bird.x }}
            onMouseEnter={() => captureBird(bird.id)}
          />
        ))}

      {/* Stars */}
      {stars.map((star) => (
        <img
          key={star.id}
          src={starImage}
          alt="Star"
          className="absolute w-6 h-6 z-50"
          style={{ top: star.y, left: star.x }}
        />
      ))}

      {/* UI */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-white z-50 text-center">
        {!gameOver && (
          <div>
            <h1 className="text-3xl font-bold mb-2">Time Left: {timeLeft}s</h1>
            <h2 className="text-xl">Birds Captured: {captured}</h2>
          </div>
        )}

        {gameOver && (
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Game Over!</h1>
            <p className="text-xl">Total Birds Captured: {captured}</p>
            <div className="flex gap-4 justify-center mt-4">
              <button
                onClick={restartGame}
                className="bg-accent px-6 py-3 rounded-lg hover:bg-accent/80 transition-colors text-white"
              >
                Restart Game
              </button>
              <Link
                to="/galleries"
                className="bg-accent px-6 py-3 rounded-lg hover:bg-accent/80 transition-colors text-white"
              >
                Explore Galleries
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes flash {
            0% { opacity: 1; }
            100% { opacity: 0; }
          }
          .animate-flash { animation: flash 0.15s forwards; }
        `}
      </style>
    </div>
  );
};

export default NotFoundGame;