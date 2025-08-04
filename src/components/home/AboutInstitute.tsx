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
    <section className="py-8 bg-gray-100" id="about-institute">
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
              src="/college.jpg" 
              alt="BVRIT Campus" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              A Premier Engineering Institution
            </h3>
            <p className="text-gray-700 mb-4">
              B.V. Raju Institute of Technology (BVRIT) was established by the eminent philanthropist (late) Padmabhushan Dr. B.V. Raju under the aegis of Sri Vishnu Educational Society (SVES) in 1997. BVRIT was granted autonomous status by the UGC in 2014. The institute is duly approved by the AICTE and affiliated to JNTU Hyderabad.
            </p>
            <p className="text-gray-700 mb-4">
              BVRIT is accredited by the NAAC with an A+ grade and is a member of the NBA. The campus is equipped with centers of excellence such as the Assistive Technology Lab (ATL), the AICTE-Idea Lab, the BVRIT Going Green initiative, the Centennial Health Centre, the Entrepreneurship Development Cell (EDC), and the Graduate Study Abroad Centre (GSAC).
            </p>
            <p className="text-gray-700">
              Other prominent facilities include the Rural Women Technology Park, the Unnat Bharat Abhiyan, the Vishnu Audio Visual Centre, the Artificial Intelligence & Machine Learning department, the Center for VLSI Design, the Vishnu Space Engineering Laboratory, the Robotics Center for Enhanced Learning, the Center for Automotive Technologies, the Center for Nanotechnology, the TVS Haritha Techserve, and the Computational Fluid Dynamics (CFD) laboratory.
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
