import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

const images = [
  "/images/bg1.png",
  "/images/bg2.png",
  "/images/bg3.png",
  "/images/bg4.png",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow background */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              opacity: current === index ? 1 : 0,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: current === index ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-black/0" />{" "}
        {/* Optional dark overlay */}
      </div>

   

      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L80,101.3C160,107,320,117,480,106.7C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
