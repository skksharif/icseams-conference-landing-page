import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';

const WelcomeSection = () => {
  return (
    <AnimatedSection className="section bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold text-primary-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to ICSEAMS 2025
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 text-gray-700"
          >
            <p className="text-lg">
              We are delighted to announce the 1<sup>st</sup> International Conference on Sustainable Energy and Advanced Manufacturing Systems (ICSEAMS 2025), 
              to be held at BVRIT, Telangana, India from September 11-13, 2025.
            </p>
            
            <p>
              ICSEAMS 2025 aims to bring together leading academic scientists, researchers, and scholars to exchange and share 
              their experiences and research results on all aspects of Sustainable Energy and Advanced Manufacturing Systems. 
              It also provides a premier interdisciplinary platform to present and discuss the most recent innovations, 
              trends, and concerns as well as practical challenges encountered and solutions adopted in these fields.
            </p>
            
            <p>
              The conference will feature plenary talks by distinguished speakers, technical sessions, poster presentations, 
              and workshops covering a wide range of topics within sustainable energy and advanced manufacturing.
            </p>
            
            <p className="font-medium text-primary-700">
              We cordially invite you to participate and contribute to this premier event in the field!
            </p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WelcomeSection;