import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Book, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import AnimatedSection from '../components/common/AnimatedSection';

const PublicationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Publication | ICSEAMS 2025';
  }, []);

  // Journal special issues data
  const journalIssues = [
    {
      name: 'International Journal of Sustainable Energy',
      impact: '3.2',
      indexing: 'SCI, Scopus',
      scope: 'Energy efficiency, renewable energy, sustainable power systems',
      deadline: 'November 30, 2025'
    },
    {
      name: 'Journal of Advanced Manufacturing Technology',
      impact: '4.1',
      indexing: 'SCI, Scopus, Web of Science',
      scope: 'Smart manufacturing, automation, Industry 4.0',
      deadline: 'December 15, 2025'
    },
    {
      name: 'Renewable Energy Systems and Applications',
      impact: '3.8',
      indexing: 'Scopus, Web of Science',
      scope: 'Renewable energy integration, energy storage, microgrid',
      deadline: 'October 31, 2025'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Publication Opportunities" 
        subtitle="Get your research published in prestigious journals and proceedings"
      />
      
      <div className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Conference Proceedings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md mb-10"
            >
              <div className="flex items-start md:items-center mb-4">
                <Book className="h-8 w-8 text-primary-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-primary-800">Conference Proceedings</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  All accepted and presented papers at ICSEAMS 2025 will be published in the conference proceedings,
                  which will be submitted for indexing in major scientific databases including Scopus and Web of Science.
                </p>
                
                <div className="bg-primary-50 p-4 rounded-md border border-primary-100">
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">Proceedings Details</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Publisher:</strong> IEEE Xplore Digital Library
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Indexing:</strong> Scopus, Web of Science, IEEE Xplore
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>ISBN:</strong> 978-X-XXXX-XXXX-X (to be assigned)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Format:</strong> Digital proceedings with DOI for each paper
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-warning-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Important:</strong> At least one author must register for the conference and present 
                    the paper for it to be included in the proceedings.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Journal Special Issues */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Journal Special Issues</h2>
              <p className="text-gray-700 mb-6">
                Selected high-quality papers from ICSEAMS 2025 will be invited for extension and submission 
                to special issues of the following prestigious journals:
              </p>
              
              <div className="space-y-6">
                {journalIssues.map((journal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                  >
                    <div className="flex items-start">
                      <FileText className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-primary-800">{journal.name}</h3>
                        <div className="mt-2 space-y-1.5">
                          <p className="text-sm text-gray-700">
                            <strong>Impact Factor:</strong> {journal.impact}
                          </p>
                          <p className="text-sm text-gray-700">
                            <strong>Indexed in:</strong> {journal.indexing}
                          </p>
                          <p className="text-sm text-gray-700">
                            <strong>Scope:</strong> {journal.scope}
                          </p>
                          <p className="text-sm text-primary-600 font-medium">
                            <strong>Extended Submission Deadline:</strong> {journal.deadline}
                          </p>
                        </div>
                        <a 
                          href="#" 
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium mt-3"
                        >
                          Journal Website
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 bg-gray-50 p-4 rounded-md border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Special Issue Process</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Authors of accepted papers will be notified if their paper is selected for a journal special issue</li>
                  <li>Selected papers must be extended significantly (at least 30% new content) from the conference version</li>
                  <li>Extended papers will undergo a regular peer-review process by the journal</li>
                  <li>Acceptance in the conference does not guarantee publication in the journal special issue</li>
                </ol>
              </div>
            </div>
            
            {/* Publication Ethics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-primary-50 p-6 rounded-lg border border-primary-100"
            >
              <h2 className="text-xl font-bold text-primary-800 mb-4">Publication Ethics</h2>
              
              <div className="text-gray-700 space-y-3">
                <p>
                  ICSEAMS 2025 is committed to maintaining high standards of publication ethics and academic integrity. 
                  All submitted papers are checked for plagiarism and must adhere to ethical guidelines.
                </p>
                
                <div className="space-y-2">
                  <p className="font-medium">Authors must ensure that:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>The submitted work is original and has not been published elsewhere</li>
                    <li>All sources are properly cited and referenced</li>
                    <li>All authors have made significant contributions to the work</li>
                    <li>Any conflicts of interest are clearly stated</li>
                    <li>Research involving human subjects or animals follows ethical standards</li>
                  </ul>
                </div>
                
                <p>
                  Any form of plagiarism, data fabrication, or other unethical behavior will result in rejection of the paper
                  and may lead to additional consequences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationPage;