import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Camera } from "lucide-react";

const NotFound = () => {
  const [flash, setFlash] = useState(false);
  const [message, setMessage] = useState("");
  const fullMessage = "📸 Take Photos with NC Photography!";
  
  const handleCapture = () => {
    setFlash(true);
    setMessage("");

    // Play shutter sound
    const audio = new Audio("/shutter.mp3");
    audio.play();

    setTimeout(() => {
      setFlash(false);
      typeMessage();
    }, 400);
  };

  const typeMessage = () => {
    let index = 0;
    const interval = setInterval(() => {
      setMessage((prev) => prev + fullMessage[index]);
      index++;
      if (index >= fullMessage.length) clearInterval(interval);
    }, 50); // Adjust typing speed here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 relative overflow-hidden">
      {flash && <div className="absolute inset-0 bg-white z-50 animate-flash"></div>}

      <div
        className="flex flex-col items-center justify-center cursor-pointer z-10"
        onClick={handleCapture}
      >
        <Camera
          size={100}
          className="text-accent mb-6 hover:scale-110 transition-transform"
        />
        <button className="btn-hero px-6 py-3">Capture</button>
      </div>

      {message && (
        <p className="text-accent font-bold text-2xl mt-8 animate-fadeIn">
          {message}
        </p>
      )}

      <div className="mt-12 flex flex-col sm:flex-row gap-4 text-center z-10">
        <Link to="/" className="btn-hero px-6 py-3">Return Home</Link>
        <Link to="/galleries" className="text-accent hover:text-accent/80 transition-colors font-medium">Explore Galleries</Link>
      </div>

      <style>
        {`
          @keyframes flash {0% { opacity: 0; } 50% { opacity: 1; } 100% { opacity: 0; }}
          .animate-flash { animation: flash 0.4s ease-in-out forwards; }

          @keyframes fadeIn {0% { opacity: 0; transform: translateY(-10px); } 100% { opacity: 1; transform: translateY(0); }}
          .animate-fadeIn { animation: fadeIn 0.6s ease forwards; }
        `}
      </style>
    </div>
  );
};

export default NotFound;