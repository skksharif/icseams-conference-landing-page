import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-primary-900 to-secondary-900 overflow-hidden">
      {/* Background dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full">
          {Array(20).fill(0).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 10 + 5 + 'px',
                height: Math.random() * 10 + 5 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.3
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            ICSEAMS 2025
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-primary-100 mb-6">
            1<sup>st</sup> International Conference on<br />
            Sustainable Energy and Advanced Manufacturing Systems
          </h2>
          <p className="text-xl text-gray-200 mb-4">11-13 September 2025</p>
          <p className="text-lg text-gray-300">BVRIT, Telangana, India</p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link 
            to="/registration" 
            className="btn btn-primary group"
          >
            Register Now
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;