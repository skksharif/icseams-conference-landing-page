import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

const dates = [
  {
    event: 'Abstract Submission Deadline',
    date: 'March 15, 2025',
  },
  {
    event: 'Full Paper Submission',
    date: 'April 30, 2025',
  },
  {
    event: 'Notification of Acceptance',
    date: 'June 15, 2025',
  },
  {
    event: 'Early Bird Registration',
    date: 'July 31, 2025',
  },
  {
    event: 'Conference Dates',
    date: 'September 11-13, 2025',
  },
];

const KeyDates = () => {
  return (
    <AnimatedSection className="section bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Important Dates</h2>
            <p className="text-gray-600 mb-6">
              Mark your calendar with these critical deadlines for ICSEAMS 2025
            </p>
            
            <div className="space-y-4">
              {dates.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center p-4 border-l-4 border-primary-500 bg-gray-50 rounded-r-md"
                >
                  <Calendar className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">{item.event}</p>
                    <p className="text-primary-600">{item.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <Link
                to="/important-dates"
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                View All Important Dates
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-primary-50 rounded-lg p-8 border border-primary-100">
              <h3 className="text-2xl font-semibold text-primary-800 mb-4">Call for Papers</h3>
              <p className="text-gray-700 mb-6">
                ICSEAMS 2025 invites high-quality original research papers in the fields of sustainable energy and 
                advanced manufacturing systems. We welcome submissions from academia, industry, and research institutions.
              </p>
              
              <div className="space-y-3 mb-6">
                <p className="font-medium text-primary-700">Submission Guidelines:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>All papers must be original and not simultaneously submitted elsewhere</li>
                  <li>Extended abstracts should be 2-3 pages in length</li>
                  <li>Full papers should be 6-8 pages (including figures and references)</li>
                  <li>All submissions will undergo double-blind peer review</li>
                </ul>
              </div>
              
              <div>
                <Link to="/call-for-papers" className="btn btn-primary">
                  View Submission Guidelines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default KeyDates;