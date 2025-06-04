import React from 'react';
import { Award, BookOpen, Users, Globe } from 'lucide-react';

const AboutInstitute: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-conference-purple" />,
      title: "Academic Excellence",
      description: "BVRIT is known for its academic rigor and excellence in engineering education."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-conference-purple" />,
      title: "Research Focus",
      description: "Strong emphasis on research with state-of-the-art laboratories and facilities."
    },
    {
      icon: <Users className="w-8 h-8 text-conference-purple" />,
      title: "Industry Partnerships",
      description: "Collaborations with leading industry partners for practical exposure."
    },
    {
      icon: <Globe className="w-8 h-8 text-conference-purple" />,
      title: "Global Connections",
      description: "International collaborations for a global perspective in education."
    }
  ];

  return (
    <section className="section-padding bg-gray-100" id="about-institute">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title" data-aos="fade-up">About BVRIT</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
            B V Raju Institute of Technology: Excellence in Engineering Education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div data-aos="fade-right">
            <img 
              src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="BVRIT Campus" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              A Premier Engineering Institution
            </h3>
            <p className="text-gray-700 mb-4">
              B V Raju Institute of Technology (BVRIT) is a leading engineering institution in Telangana, India, committed to providing quality education and fostering innovation. Established with a vision to create competent engineers who contribute to technological advancement, BVRIT has consistently maintained high standards in education and research.
            </p>
            <p className="text-gray-700 mb-4">
              The institute offers undergraduate and postgraduate programs in various engineering disciplines, equipped with modern laboratories, libraries, and other facilities to support academic excellence and research activities.
            </p>
            <p className="text-gray-700">
              BVRIT's campus provides an ideal environment for hosting ICSEAMS-2025, with state-of-the-art conference facilities, accommodation options, and a serene atmosphere conducive to academic discussions and networking.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutInstitute;