import React from "react";
import { motion } from "framer-motion";

const AnimatedLogo = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginTop:"7px",
    // height: "100vh", // Full screen height
    // backgroundColor: "#000", // Black background to enhance the logo's visibility
  };

  const logoStyle = {
    width: "300px", // Adjust the size of the logo
    height: "auto",
    marginTop:"40px",
  };

  return (
    <div style={containerStyle}>
      <motion.img
        src="https://i.ibb.co/HV8DpnR/final-pic-1.png" // Update with the correct path to your logo
        alt="Starlit Logo"
        style={logoStyle}
        animate={{
          scale: [1, 1.1, 1], // Smoothly scale up and back down
          rotate: [0, 10, -10, 0], // Subtle rotation
          filter: [
            "drop-shadow(0 0 10px rgba(102, 204, 255, 0.8))",
            "drop-shadow(0 0 20px rgba(102, 204, 255, 1))",
            "drop-shadow(0 0 10px rgba(102, 204, 255, 0.8))",
          ], // Glowing effect
        }}
        transition={{
          duration: 3, // Duration of one animation cycle
          repeat: Infinity, // Repeat animation infinitely
          repeatType: "mirror", // Mirror the animation (back and forth)
        }}
      />
    </div>
  );
};

export default AnimatedLogo;