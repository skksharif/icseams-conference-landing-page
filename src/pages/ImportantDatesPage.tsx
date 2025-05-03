import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import AnimatedSection from '../components/common/AnimatedSection';

const ImportantDatesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Important Dates | ICSEAMS 2025';
  }, []);

  // Important dates grouped by category
  const dateCategories = [
    {
      category: 'Submission Deadlines',
      dates: [
        { event: 'Abstract Submission Opens', date: 'January 15, 2025', past: false },
        { event: 'Abstract Submission Deadline', date: 'March 15, 2025', past: false },
        { event: 'Full Paper Submission Deadline', date: 'April 30, 2025', past: false },
        { event: 'Submission of Revised Papers', date: 'July 15, 2025', past: false }
      ]
    },
    {
      category: 'Review Process',
      dates: [
        { event: 'Review Process Begins', date: 'May 1, 2025', past: false },
        { event: 'Notification of Acceptance', date: 'June 15, 2025', past: false },
        { event: 'Camera-Ready Paper Submission', date: 'July 15, 2025', past: false }
      ]
    },
    {
      category: 'Registration',
      dates: [
        { event: 'Early Bird Registration Opens', date: 'June 16, 2025', past: false },
        { event: 'Early Bird Registration Closes', date: 'July 31, 2025', past: false },
        { event: 'Regular Registration Deadline', date: 'August 31, 2025', past: false },
        { event: 'Late Registration', date: 'September 1-10, 2025', past: false }
      ]
    },
    {
      category: 'Conference Dates',
      dates: [
        { event: 'Pre-Conference Workshops', date: 'September 10, 2025', past: false },
        { event: 'Conference Day 1', date: 'September 11, 2025', past: false },
        { event: 'Conference Day 2', date: 'September 12, 2025', past: false },
        { event: 'Conference Day 3', date: 'September 13, 2025', past: false }
      ]
    },
    {
      category: 'Post-Conference',
      dates: [
        { event: 'Post-Conference Tour', date: 'September 14, 2025', past: false },
        { event: 'Final Manuscript for Proceedings', date: 'October 15, 2025', past: false },
        { event: 'Publication of Proceedings', date: 'December 15, 2025', past: false }
      ]
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Important Dates" 
        subtitle="Mark your calendar with these key deadlines"
      />
      
      <div className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md mb-10"
            >
              <div className="flex items-center text-primary-600 mb-4">
                <Calendar className="h-6 w-6 mr-2" />
                <h2 className="text-2xl font-bold text-primary-800">Timeline Overview</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                Please note these important dates for ICSEAMS 2025. All deadlines are end of day, 
                11:59 PM UTC. We recommend submitting well before the deadlines to avoid any last-minute technical issues.
              </p>
              
              <div className="flex flex-col space-y-2 text-gray-700">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3" />
                  <span>Early submissions are encouraged and will receive earlier decisions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3" />
                  <span>No extensions will be granted for abstract and paper submissions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3" />
                  <span>At least one author must register for accepted papers to be included in the proceedings</span>
                </div>
              </div>
            </motion.div>
            
            {/* Timeline Visualization */}
            <div className="mb-16 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-200 ml-6 md:ml-8"></div>
              
              {dateCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="mb-10"
                >
                  <h3 className="text-xl font-semibold text-primary-800 mb-6">{category.category}</h3>
                  
                  <div className="space-y-6">
                    {category.dates.map((item, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0 relative z-10">
                          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-4 ${
                            item.past 
                              ? 'bg-gray-300 border-gray-400' 
                              : 'bg-primary-100 border-primary-500'
                          }`}>
                            <Calendar className={`h-6 w-6 ${
                              item.past ? 'text-gray-600' : 'text-primary-600'
                            }`} />
                          </div>
                        </div>
                        
                        <div className="ml-4 md:ml-6">
                          <div className={`pt-3 ${item.past ? 'opacity-60' : ''}`}>
                            <h4 className={`text-lg font-medium ${
                              item.past ? 'text-gray-600' : 'text-primary-800'
                            }`}>
                              {item.event}
                            </h4>
                            <p className={`${
                              item.past ? 'text-gray-500' : 'text-primary-600 font-medium'
                            }`}>
                              {item.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-primary-50 p-6 rounded-lg border border-primary-100"
            >
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Current Status</h3>
              <div className="p-4 bg-white rounded-md border border-primary-200">
                <p className="text-center text-lg text-primary-600 font-medium">
                  Currently in: <span className="text-primary-800 font-bold">Abstract Submission Phase</span>
                </p>
                <p className="text-center text-gray-600 mt-2">
                  Next deadline: <span className="font-medium">Abstract Submission - March 15, 2025</span>
                </p>
              </div>
              
              <div className="mt-4 text-gray-700 italic text-sm">
                <p>
                  *All dates are subject to slight adjustments. Please check the website regularly for any updates.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantDatesPage;