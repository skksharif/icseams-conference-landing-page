import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, Cpu, Wind, Factory, BatteryCharging, Building2, LineChart, PenTool as Tool } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

const topics = [
  {
    title: 'Sustainable Energy Systems',
    icon: <Zap className="w-10 h-10 text-primary-500" />,
    description: 'Renewable energy technologies, Smart grids, Energy efficiency and conservation',
  },
  {
    title: 'Advanced Manufacturing',
    icon: <Factory className="w-10 h-10 text-primary-500" />,
    description: '3D printing, Digital twin, Industry 4.0, Smart manufacturing',
  },
  {
    title: 'Energy Storage',
    icon: <BatteryCharging className="w-10 h-10 text-primary-500" />,
    description: 'Battery technologies, Thermal energy storage, Hydrogen storage',
  },
  {
    title: 'Power Systems Engineering',
    icon: <Building2 className="w-10 h-10 text-primary-500" />,
    description: 'Power quality, Electrical machines, Power electronics, Control systems',
  },
  {
    title: 'Materials Science',
    icon: <Tool className="w-10 h-10 text-primary-500" />,
    description: 'Nanomaterials, Composites, Smart materials, Material characterization',
  },
  {
    title: 'Energy Policy & Economics',
    icon: <LineChart className="w-10 h-10 text-primary-500" />,
    description: 'Energy market analysis, Regulatory frameworks, Sustainability metrics',
  },
];

const ConferenceTopics = () => {
  return (
    <AnimatedSection className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">Conference Topics</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ICSEAMS 2025 covers a wide range of topics in sustainable energy and advanced manufacturing systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{topic.icon}</div>
              <h3 className="text-xl font-semibold text-primary-700 mb-2">{topic.title}</h3>
              <p className="text-gray-600 mb-4">{topic.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/call-for-papers" 
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            View Full List of Topics
            <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ConferenceTopics;