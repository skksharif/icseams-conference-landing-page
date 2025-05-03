import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import AnimatedSection from '../components/common/AnimatedSection';

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'FAQ | ICSEAMS 2025';
  }, []);

  // FAQ categories and questions
  const faqCategories = [
    {
      category: 'Submission Guidelines',
      questions: [
        {
          question: 'What is the submission deadline?',
          answer: 'The abstract submission deadline is March 15, 2025, and the full paper submission deadline is April 30, 2025. We recommend submitting well before the deadlines to avoid any last-minute technical issues.'
        },
        {
          question: 'What formats are accepted for paper submissions?',
          answer: 'All submissions must be in PDF format. Authors are required to use the provided IEEE template for formatting their papers. The template is available for download on the Call for Papers page.'
        },
        {
          question: 'How long should my paper be?',
          answer: 'Extended abstracts should be 2-3 pages in length. Full papers should be 6-8 pages, including figures, tables, and references. Papers exceeding the page limit may be rejected without review.'
        },
        {
          question: 'Are there any formatting guidelines?',
          answer: 'Yes, all submissions must follow the IEEE conference format. Please use the template provided on our website. Papers not following the template will be returned to the authors for reformatting.'
        }
      ]
    },
    {
      category: 'Registration',
      questions: [
        {
          question: 'When does registration open?',
          answer: 'Early bird registration opens on June 16, 2025, immediately after the notification of acceptance. Regular registration starts after July 31, 2025. Late registration will be available until September 10, 2025.'
        },
        {
          question: 'What are the registration fees?',
          answer: 'Registration fees vary by category and registration timing. Academic/Faculty: $350 (Early Bird), $450 (Regular); Student: $200 (Early Bird), $250 (Regular); Industry Professional: $450 (Early Bird), $550 (Regular). Please visit the Registration page for detailed information.'
        },
        {
          question: 'What does the registration fee include?',
          answer: 'The registration fee includes access to all conference sessions, conference materials, lunches and refreshments during the conference days, welcome reception, and publication of accepted papers in the conference proceedings. Full registration (non-student) also includes the conference dinner.'
        },
        {
          question: 'Is at least one author registration per paper mandatory?',
          answer: 'Yes, at least one author must register for the conference for each accepted paper to be included in the conference program and proceedings. One registration covers only one paper.'
        }
      ]
    },
    {
      category: 'Presentation',
      questions: [
        {
          question: 'What presentation formats are available?',
          answer: 'ICSEAMS 2025 offers both oral and poster presentations. Authors will be notified of their presentation format along with the acceptance notification. Both formats are given equal importance in the proceedings.'
        },
        {
          question: 'How long are the oral presentations?',
          answer: 'Oral presentations are typically 15 minutes long, followed by a 5-minute Q&A session. Presenters should prepare their slides accordingly and must strictly adhere to the time limit.'
        },
        {
          question: 'What are the requirements for poster presentations?',
          answer: 'Posters should be in A0 size (841 x 1189 mm) in portrait orientation. Authors are responsible for printing and bringing their posters to the conference. Mounting materials will be provided at the venue.'
        },
        {
          question: 'Is virtual presentation an option?',
          answer: 'Yes, virtual presentation options are available for authors who cannot attend the conference in person. However, we strongly encourage in-person participation for better networking and interaction with peers.'
        }
      ]
    },
    {
      category: 'Travel & Accommodation',
      questions: [
        {
          question: 'Do you provide assistance with visa applications?',
          answer: 'Yes, we provide invitation letters for accepted authors and registered participants to support visa applications. Please contact registration@icseams2025.org with your registration details after completing your registration.'
        },
        {
          question: 'Are there recommended hotels near the venue?',
          answer: 'Yes, we have negotiated special rates for conference attendees at several hotels near the venue. Please see the Venue & Accommodation page for details and booking information. Make sure to mention "ICSEAMS 2025" when booking to avail of the conference discount.'
        },
        {
          question: 'How do I reach the conference venue from the airport?',
          answer: 'The conference venue, BVRIT Campus, is approximately 80 km from Rajiv Gandhi International Airport, Hyderabad. You can use taxi services (Uber, Ola), or the conference shuttle service on specific dates. Detailed transportation information is available on the Venue page.'
        },
        {
          question: 'Will there be transportation between the recommended hotels and the venue?',
          answer: 'Yes, complimentary shuttle service will be provided between the recommended hotels and the conference venue during the conference days. The shuttle schedule will be shared with registered participants closer to the conference dates.'
        }
      ]
    },
    {
      category: 'Publication',
      questions: [
        {
          question: 'Where will the conference proceedings be published?',
          answer: 'All accepted and presented papers will be published in the conference proceedings, which will be submitted for indexing in major scientific databases including IEEE Xplore, Scopus, and Web of Science.'
        },
        {
          question: 'Is there an opportunity for journal publication?',
          answer: 'Yes, selected high-quality papers will be invited for extension and submission to special issues of reputable journals. More information is available on the Publication page.'
        },
        {
          question: 'How are papers reviewed?',
          answer: 'All submissions undergo a double-blind peer review process by at least two experts in the field. Papers are evaluated based on originality, technical quality, clarity, and relevance to the conference themes.'
        },
        {
          question: 'When will I know if my paper is accepted?',
          answer: 'Notification of acceptance will be sent to authors by June 15, 2025. Authors will receive detailed feedback from reviewers along with the notification.'
        }
      ]
    },
    {
      category: 'Other',
      questions: [
        {
          question: 'Are there opportunities for sponsorship?',
          answer: 'Yes, we offer various sponsorship packages for organizations wishing to support the conference and gain visibility. Please visit the Sponsors page or contact sponsors@icseams2025.org for more information.'
        },
        {
          question: 'Will there be any social or cultural events?',
          answer: 'Yes, the conference includes a welcome reception, conference dinner, and optional cultural tours. These events provide excellent networking opportunities and a chance to experience the local culture.'
        },
        {
          question: 'Is there a dress code for the conference?',
          answer: 'Business casual attire is recommended for all conference sessions. For the conference dinner, smart casual attire is appropriate.'
        },
        {
          question: 'How can I become a reviewer for the conference?',
          answer: 'Experienced researchers interested in reviewing papers can send their CV and research interests to papers@icseams2025.org. The technical committee will review your application and contact you if selected.'
        }
      ]
    }
  ];

  // State for expanded questions and search
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState(faqCategories);

  // Handle question toggle
  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredFAQs(faqCategories);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = faqCategories
        .map(category => ({
          category: category.category,
          questions: category.questions.filter(
            q => q.question.toLowerCase().includes(query) || q.answer.toLowerCase().includes(query)
          )
        }))
        .filter(category => category.questions.length > 0);
      
      setFilteredFAQs(filtered);
    }
  }, [searchQuery]);

  return (
    <div>
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about ICSEAMS 2025"
      />
      
      <div className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Search questions or keywords..."
                />
              </div>
            </motion.div>
            
            {/* FAQ Categories and Questions */}
            <div>
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-lg text-gray-600">No matching questions found. Please try a different search term.</p>
                </div>
              ) : (
                filteredFAQs.map((category, categoryIndex) => (
                  category.questions.length > 0 && (
                    <motion.div
                      key={categoryIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                      className="mb-8"
                    >
                      <h2 className="text-2xl font-bold text-primary-800 mb-4">{category.category}</h2>
                      
                      <div className="space-y-4">
                        {category.questions.map((item, questionIndex) => {
                          const key = `${categoryIndex}-${questionIndex}`;
                          const isExpanded = expandedQuestions[key];
                          
                          return (
                            <div 
                              key={questionIndex} 
                              className="border border-gray-200 rounded-lg overflow-hidden"
                            >
                              <button
                                className={`w-full text-left p-4 flex justify-between items-center focus:outline-none ${
                                  isExpanded ? 'bg-primary-50' : 'bg-white hover:bg-gray-50'
                                }`}
                                onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                              >
                                <span className="font-medium text-gray-800">{item.question}</span>
                                {isExpanded ? (
                                  <ChevronUp className="h-5 w-5 text-primary-600" />
                                ) : (
                                  <ChevronDown className="h-5 w-5 text-primary-600" />
                                )}
                              </button>
                              
                              {isExpanded && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  transition={{ duration: 0.3 }}
                                  className="p-4 bg-white border-t border-gray-200"
                                >
                                  <p className="text-gray-700">{item.answer}</p>
                                </motion.div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )
                ))
              )}
            </div>
            
            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 bg-primary-50 p-6 rounded-lg border border-primary-100 text-center"
            >
              <h3 className="text-xl font-bold text-primary-800 mb-3">Can't find what you're looking for?</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions that are not answered here, please feel free to contact us.
                Our team will be happy to assist you.
              </p>
              <a 
                href="mailto:info@icseams2025.org" 
                className="btn btn-primary inline-flex items-center"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;