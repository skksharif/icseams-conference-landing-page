import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";

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
        <div className="absolute inset-0 bg-black/30" />{" "}
        {/* Optional dark overlay */}
      </div>

      <div className="container mx-auto px-4 py-16 z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-xl text-white">
            ICSEAMS 2025
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 drop-shadow-lg text-white">
            1<sup>st</sup> International Conference on
            <br />
            Sustainable Energy and Advanced Manufacturing Systems
          </h2>
          <p className="text-xl mb-4 drop-shadow-md">11-13 September 2025</p>
          <p className="text-lg drop-shadow-md">BVRIT, Telangana, India</p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            to="/registration"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Register Now
          </Link>
          <a
            href="#"
            className="btn btn-outline group bg-transparent border-white text-white hover:bg-white/10"
          >
            Download Call for Papers
            <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
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
