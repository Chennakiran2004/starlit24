import React, { useEffect } from "react";
import "./popper.css";
// import confetti from "canvas-confetti";
const PopperElement = () => {
  const handleClick = () => {
    // Trigger confetti on button click
    if (window.confetti) {
      window.confetti({
        particleCount: 2000,
        spread: 100,
        angle: 120,
        origin: { x: 1, y: 1},
      });

      window.confetti({
        particleCount: 2000,
        spread: 100,
        angle: 60,
        origin: { x: 0, y: 0.999 },
      });
      window.confetti({
        particleCount: 2500,
        spread: 60,
        // angle: 60,
        origin: { x: 0, y: 0 },
      });
      window.confetti({
        particleCount: 2500,
        spread: 60,
        // angle: 60,
        origin: { x: 0.7, y: 0 },
      });
    }
  };

  useEffect(() => {
    // Load confetti script dynamically on component mount
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Automatically trigger confetti after 3 seconds
    const timeout = setTimeout(() => {
      handleClick();
    }, 500);

    // Clean up script and timeout when component unmounts
    return () => {
      document.body.removeChild(script);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="main-container">
      
    </div>
  );
};

export default PopperElement;
