import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, FileText, Download } from 'lucide-react';
import SEO from '../components/SEO';

interface TrackProps {
  title: string;
  topics: string[];
  isOpen?: boolean;
  toggleOpen: () => void;
}

const Track: React.FC<TrackProps> = ({ title, topics, isOpen = false, toggleOpen }) => {
  return (
    <div className="border rounded-lg overflow-hidden mb-4 shadow-sm">
      <button
        className={`w-full flex justify-between items-center p-4 text-left focus:outline-none ${
          isOpen ? 'bg-gray-50' : 'bg-white'
        }`}
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 border-t animate-fade-in">
          <ul className="space-y-2 text-gray-700">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const CallForPapersPage: React.FC = () => {
  const [openTrack, setOpenTrack] = useState<number | null>(0);

  const tracks = [
    {
      title: "Renewable Energy Technologies",
      topics: [
        "Solar energy technologies and applications",
        "Wind energy systems and optimization",
        "Hydropower and ocean energy",
        "Geothermal energy extraction and utilization",
        "Bioenergy and biofuels",
        "Hybrid renewable energy systems"
      ]
    },
    {
      title: "Hydrogen Storage & Battery Tech",
      topics: [
        "Hydrogen production and storage technologies",
        "Fuel cell systems and applications",
        "Battery materials and cell design",
        "Battery management systems",
        "Energy storage system integration",
        "Thermal management in batteries"
      ]
    },
    {
      title: "Smart Grids & EV Infrastructure",
      topics: [
        "Smart grid technologies and applications",
        "EV charging infrastructure",
        "Vehicle-to-grid (V2G) technologies",
        "Distributed energy resources management",
        "Power electronics for smart grids",
        "Smart metering and demand response"
      ]
    },
    {
      title: "Energy Efficiency & Conservation",
      topics: [
        "Building energy efficiency technologies",
        "Industrial energy optimization",
        "Energy-efficient HVAC systems",
        "Waste heat recovery",
        "Energy monitoring and management systems",
        "Energy conservation policies and economics"
      ]
    },
    {
      title: "Waste-to-Energy Technologies",
      topics: [
        "Municipal solid waste to energy",
        "Biogas production and utilization",
        "Industrial waste valorization",
        "Thermal treatment of waste",
        "Agricultural waste utilization",
        "Circular economy approaches"
      ]
    },
    {
      title: "AI/IoT in Energy Systems",
      topics: [
        "AI applications in energy forecasting",
        "IoT for energy monitoring and control",
        "Machine learning for energy optimization",
        "Smart sensors and data analytics",
        "Digital twins for energy systems",
        "Predictive maintenance in energy infrastructure"
      ]
    },
    {
      title: "Energy Policy & Economics",
      topics: [
        "Renewable energy policies and incentives",
        "Energy market design and regulations",
        "Carbon pricing and trading mechanisms",
        "Economic analysis of energy transitions",
        "Energy access and equity",
        "Sustainable development goals and energy"
      ]
    },
    {
      title: "Advanced Manufacturing Technologies",
      topics: [
        "Additive manufacturing / 3D printing",
        "Advanced machining processes",
        "Laser-based manufacturing",
        "Micro and nano manufacturing",
        "Advanced forming and joining technologies",
        "Sustainable manufacturing processes"
      ]
    },
    {
      title: "Smart & Digital Manufacturing",
      topics: [
        "Industry 4.0 and digital transformation",
        "Digital twins in manufacturing",
        "Cloud manufacturing",
        "Cyber-physical production systems",
        "Smart factory technologies",
        "Industrial internet of things (IIoT)"
      ]
    },
    {
      title: "Automation & Robotics",
      topics: [
        "Industrial automation systems",
        "Collaborative robots (cobots)",
        "Autonomous guided vehicles",
        "Robotic process automation",
        "Machine vision in manufacturing",
        "Human-robot interaction"
      ]
    },
    {
      title: "Sustainable Manufacturing Practices",
      topics: [
        "Life cycle assessment in manufacturing",
        "Clean production technologies",
        "Resource efficiency in manufacturing",
        "Green supply chain management",
        "Circular economy in manufacturing",
        "Eco-design for manufacturing"
      ]
    }
  ];

  const toggleTrack = (index: number) => {
    setOpenTrack(openTrack === index ? null : index);
  };

  return (
    <>
      <SEO 
        title="Call for Papers" 
        description="Submit your research papers to ICSEAMS-2025 on topics related to sustainable energy and advanced manufacturing systems." 
        canonical="/call-for-papers"
      />
      <div className="bg-gradient-to-r from-conference-green/90 to-conference-orange/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Call for Papers
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90" data-aos="fade-up" data-aos-delay="200">
            Submit your research contributions to ICSEAMS-2025
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Conference Overview</h2>
            <p className="text-gray-700 mb-4">
              ICSEAMS-2025 invites original research contributions related to sustainable energy and advanced manufacturing systems. The conference aims to bring together researchers, industry professionals, and academics to share their innovative work and latest findings in these rapidly evolving fields.
            </p>
            <p className="text-gray-700 mb-4">
              All submitted papers will undergo a rigorous triple peer-review process to ensure the highest quality of technical content. Accepted papers will be published in Scopus and Web of Science indexed journals or conference proceedings.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FileText size={20} className="mr-2 text-conference-orange" />
                Paper Submission Guidelines
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                  <span>Full papers should be 6-8 pages in length, following the conference template format.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                  <span>Papers must be original and not submitted or published elsewhere.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                  <span>Submit your paper to <a href="mailto:icseams@bvrit.ac.in" className="text-conference-orange hover:underline">icseams@bvrit.ac.in</a></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                  <span>All submissions will undergo a triple peer-review process.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                  <span>At least one author of each accepted paper must register for the conference and present the paper.</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/important-dates" className="text-conference-orange hover:underline flex items-center">
                  <span>View submission deadlines</span>
                  <ChevronDown size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Conference Tracks</h2>
            <p className="text-gray-700 mb-6">
              ICSEAMS-2025 welcomes papers across a wide range of topics related to sustainable energy and advanced manufacturing systems. Click on each track to view detailed topics:
            </p>

            {tracks.map((track, index) => (
              <Track
                key={index}
                title={track.title}
                topics={track.topics}
                isOpen={openTrack === index}
                toggleOpen={() => toggleTrack(index)}
              />
            ))}
          </div>

          <div data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Paper Template</h2>
            <p className="text-gray-700 mb-4">
              Please download and use the official ICSEAMS-2025 paper template to format your submission correctly.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <FileText size={36} className="text-conference-purple mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-800">ICSEAMS-2025 Paper Template</h4>
                  <p className="text-sm text-gray-600">Word Document (.docx)</p>
                </div>
              </div>
              <button className="btn-primary flex items-center">
                <Download size={16} className="mr-2" />
                <span>Download Template</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallForPapersPage;