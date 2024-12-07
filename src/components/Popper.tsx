import React, { useEffect } from "react";
import "./popper.css";
// import confetti from "canvas-confetti";
const PopperElement = () => {
  const handleClick = () => {
    // Trigger confetti on button click
    if (window.confetti) {
      window.confetti({
        particleCount: 1800,
        spread: 100,
        origin: { x: 1, y: 0.999 },
      });

      window.confetti({
        particleCount: 1800,
        spread: 100,
        origin: { x: 0, y: 0.999 },
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
