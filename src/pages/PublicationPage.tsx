import React from 'react';
import SEO from '../components/SEO';
import { FileText, BookOpen, CheckCircle, ExternalLink } from 'lucide-react';

const PublicationPage: React.FC = () => {
  const journals = [
    {
      name: "Journal of Clean Energy Technologies",
      indexing: "Scopus, Web of Science",
      impact: "3.2",
      publisher: "Elsevier",
      website: "#"
    },
    {
      name: "Advanced Manufacturing Technology",
      indexing: "Scopus, Web of Science",
      impact: "2.8",
      publisher: "Springer",
      website: "#"
    },
    {
      name: "Sustainable Energy Systems",
      indexing: "Scopus, Web of Science, SCI-E",
      impact: "3.5",
      publisher: "Taylor & Francis",
      website: "#"
    },
    {
      name: "Journal of Energy Engineering",
      indexing: "Scopus, Web of Science",
      impact: "2.6",
      publisher: "Wiley",
      website: "#"
    }
  ];

  return (
    <>
      <SEO 
        title="Publication" 
        description="Information about paper publication opportunities at ICSEAMS-2026, including indexed journals and conference proceedings." 
        canonical="/publication"
      />
      <div className="bg-gradient-to-r from-conference-purple/90 to-conference-green/90 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Publication Opportunities
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90" data-aos="fade-up" data-aos-delay="200">
            Get your research published in reputed indexed journals and proceedings
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Publication Process</h2>
            <p className="text-gray-700 mb-6">
              ICSEAMS-2026 offers authors the opportunity to have their research papers published in reputed Scopus and Web of Science indexed journals or in the conference proceedings. All submitted papers undergo a rigorous triple peer-review process to ensure high-quality publications.
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-conference-orange text-white font-bold shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Paper Submission</h3>
                  <p className="text-gray-700">
                    Authors submit their full papers following the conference template and guidelines. Papers must be original and not published elsewhere.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-conference-orange text-white font-bold shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Triple Peer-Review</h3>
                  <p className="text-gray-700">
                    Each paper is reviewed by at least three expert reviewers from the technical committee. The review process is double-blind to ensure fairness and quality.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-conference-orange text-white font-bold shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Revision & Acceptance</h3>
                  <p className="text-gray-700">
                    Authors receive reviewer feedback and may be asked to revise their papers. Final acceptance is based on addressing reviewer comments and meeting quality standards.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-conference-orange text-white font-bold shrink-0">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Journal Selection</h3>
                  <p className="text-gray-700">
                    Accepted papers are allocated to appropriate journals based on their quality, relevance, and scope alignment. Authors may indicate their preferred journal during submission.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-conference-orange text-white font-bold shrink-0">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Publication</h3>
                  <p className="text-gray-700">
                    Accepted papers are published in the selected journals or conference proceedings following author registration and presentation at the conference.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Conference Proceedings</h2>
            <p className="text-gray-700 mb-6">
              All accepted papers that are presented at the conference will be published in the official ICSEAMS-2026 conference proceedings. The proceedings will be:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <FileText className="w-10 h-10 text-conference-purple mr-4" />
                  <h3 className="text-lg font-semibold text-gray-800">Digital Proceedings</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-purple rounded-full mt-2 mr-2"></span>
                    Indexed in major digital libraries
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-purple rounded-full mt-2 mr-2"></span>
                    Permanently archived online
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-purple rounded-full mt-2 mr-2"></span>
                    Searchable by major search engines
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-purple rounded-full mt-2 mr-2"></span>
                    DOI assigned to each paper
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-10 h-10 text-conference-orange mr-4" />
                  <h3 className="text-lg font-semibold text-gray-800">Indexed Collection</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Scopus indexed proceedings
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    Web of Science indexed
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    ISBN registered collection
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                    High visibility in academic databases
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <CheckCircle size={20} className="mr-2 text-conference-green" />
              Publication Ethics
            </h3>
            <p className="text-gray-700 mb-4">
              ICSEAMS-2026 follows strict publication ethics and standards to ensure the integrity of the scientific record. Authors must adhere to the following:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Original work that has not been published elsewhere
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Proper acknowledgment of all sources and references
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                No plagiarism or data fabrication
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Disclosure of any conflicts of interest
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Adherence to ethical guidelines for research involving humans or animals
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicationPage;