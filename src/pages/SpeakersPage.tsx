import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import AnimatedSection from '../components/common/AnimatedSection';

// Placeholder data for keynote speakers
const keynoteSpeakers = [
  {
    name: 'Prof. David Chen',
    title: 'Director, Center for Renewable Energy',
    affiliation: 'Stanford University, USA',
    topic: 'The Future of Sustainable Energy: Challenges and Opportunities',
    bio: 'Prof. David Chen is a world-renowned expert in renewable energy systems with over 25 years of experience. His research focuses on next-generation solar cell technology and grid integration of renewable sources.',
    photo: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Dr. Maria Rodriguez',
    title: 'Chief Technology Officer',
    affiliation: 'Global Energy Solutions, Spain',
    topic: 'Digital Transformation in Energy Systems: Towards a Smart Energy Future',
    bio: 'Dr. Rodriguez has pioneered several breakthrough technologies in smart grid implementation. She has successfully led the digital transformation of energy infrastructure in major European cities.',
    photo: 'https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Prof. Hiroshi Yamamoto',
    title: 'Professor of Advanced Manufacturing',
    affiliation: 'Tokyo Institute of Technology, Japan',
    topic: 'Industry 5.0: Human-Centric Manufacturing Systems',
    bio: 'Prof. Yamamoto is a leading researcher in advanced manufacturing systems, focusing on the integration of human expertise with AI and robotics. He has published over 200 papers in prestigious journals.',
    photo: 'https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

// Placeholder data for plenary speakers
const plenarySpeakers = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Lead Researcher',
    affiliation: 'National Renewable Energy Laboratory, USA',
    topic: 'Next-Generation Energy Storage Solutions',
    photo: 'https://images.pexels.com/photos/6146979/pexels-photo-6146979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Prof. Rajiv Patel',
    title: 'Professor of Electrical Engineering',
    affiliation: 'Indian Institute of Technology Delhi, India',
    topic: 'Microgrids for Rural Electrification',
    photo: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Dr. Emma Wilson',
    title: 'Director of Sustainability',
    affiliation: 'European Energy Commission, Belgium',
    topic: 'Policy Frameworks for Energy Transition',
    photo: 'https://images.pexels.com/photos/6238029/pexels-photo-6238029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Prof. Li Wei',
    title: 'Professor of Materials Science',
    affiliation: 'Tsinghua University, China',
    topic: 'Advanced Materials for Energy Storage',
    photo: 'https://images.pexels.com/photos/8367855/pexels-photo-8367855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Dr. Carlos Mendez',
    title: 'Research Scientist',
    affiliation: 'Brazilian Center for Energy Research, Brazil',
    topic: 'Sustainable Biofuels: Current State and Future Directions',
    photo: 'https://images.pexels.com/photos/8367834/pexels-photo-8367834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Prof. Anna Schmidt',
    title: 'Chair of Sustainable Manufacturing',
    affiliation: 'Technical University of Berlin, Germany',
    topic: 'Circular Economy Principles in Manufacturing',
    photo: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const SpeakersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Speakers | ICSEAMS 2025';
  }, []);

  return (
    <div>
      <PageHeader 
        title="Conference Speakers" 
        subtitle="Distinguished experts from academia and industry"
      />
      
      <div className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700">
              ICSEAMS 2025 features keynote and plenary speakers who are leading experts in the fields of 
              sustainable energy and advanced manufacturing systems from around the world.
            </p>
          </div>
          
          {/* Keynote Speakers Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary-800 mb-10 text-center">Keynote Speakers</h2>
            
            <div className="space-y-12">
              {keynoteSpeakers.map((speaker, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={speaker.photo} 
                      alt={speaker.name} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-primary-800 mb-1">{speaker.name}</h3>
                    <p className="text-gray-600 mb-1">{speaker.title}</p>
                    <div className="flex items-center text-primary-600 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{speaker.affiliation}</span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800">Keynote Topic:</h4>
                      <p className="text-primary-700 italic">"{speaker.topic}"</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Biography:</h4>
                      <p className="text-gray-700">{speaker.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Plenary Speakers Section */}
          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-10 text-center">Plenary Speakers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plenarySpeakers.map((speaker, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden group"
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={speaker.photo} 
                      alt={speaker.name} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-primary-800 mb-1">{speaker.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{speaker.title}</p>
                    <div className="flex items-center text-primary-600 text-sm mb-3">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{speaker.affiliation}</span>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800">Topic:</h4>
                      <p className="text-primary-700 italic text-sm">"{speaker.topic}"</p>
                    </div>
                    
                    <button className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-800 text-sm font-medium transition-colors">
                      View Profile
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Note about additional speakers */}
          <div className="mt-16 text-center">
            <p className="text-gray-700 italic">
              *More speakers will be announced soon. Check back for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersPage;