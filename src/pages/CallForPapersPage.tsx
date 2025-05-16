import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import {
  Zap,
  Factory,
  BatteryCharging,
  Cpu,
  Database,
  LineChart,
  Leaf,
  CheckCircle,
  Download
} from 'lucide-react';

const topics = [
  {
    category: 'Design of Renewable Energy Technologies',
    icon: <Zap className="h-6 w-6 text-primary-600" />,
    items: [
      'Solar Photovoltaic (PV) and Solar thermal systems',
      'Wind Turbine Design and Offshore Wind Technologies',
      'Small and Large scale hydropower systems',
      'Design of hybrid renewable energy systems'
    ]
  },
  {
    category: 'Hydrogen Storage and Battery Technologies',
    icon: <BatteryCharging className="h-6 w-6 text-primary-600" />,
    items: [
      'Lithium-ion, Sodium-ion, and Solid-state Batteries',
      'Grid-scale Storage vs. Decentralized Storage',
      'Battery Management Systems and Safety',
      'Supercapacitors and Hybrid Storage Technologies',
      'Hydrogen Production and Storage Methods'
    ]
  },
  {
    category: 'Smart Grids and EV Charging Infrastructure',
    icon: <Cpu className="h-6 w-6 text-primary-600" />,
    items: [
      'Grid-tied Inverters for Solar and Wind Systems',
      'High-Efficiency DC-DC Converters',
      'Cybersecurity in Smart Grid Networks',
      'Renewable-Powered EV Charging Stations'
    ]
  },
  {
    category: 'Energy Efficiency in Industrial and Commercial Sectors',
    icon: <Factory className="h-6 w-6 text-primary-600" />,
    items: [
      'CFD modelling for coupled fluid-thermal-structural analysis',
      'Process Optimization and Waste Heat Recovery',
      'Building Management Systems (BMS)',
      'Digital Twins and Predictive Maintenance',
      'Carbon Capture, Utilization, and Storage Technologies'
    ]
  },
  {
    category: 'Waste-to-Energy Conversion and Sustainable Practices',
    icon: <Database className="h-6 w-6 text-primary-600" />,
    items: [
      'Anaerobic Digestion and Biogas Production',
      'Pyrolysis and Gasification of Waste',
      'Carbon Credits',
      'Integration with Circular Economy Models'
    ]
  },
  {
    category: 'AI and IoT Applications in Energy Systems',
    icon: <Cpu className="h-6 w-6 text-primary-600" />,
    items: [
      'Predictive Maintenance and energy consumption Using AI',
      'Smart Home Energy Management',
      'IoT-enabled Grid Monitoring and Control',
      'AI Optimization in Renewable Integration',
      'Edge Computing and Real-time Decision-Making'
    ]
  },
  {
    category: 'Policy and Economics of Sustainable Energy Systems',
    icon: <LineChart className="h-6 w-6 text-primary-600" />,
    items: [
      'Renewable Energy Incentives and Subsidies',
      'Carbon Pricing and Emissions Trading Schemes',
      'International Agreements and Climate Policy',
      'Economic Impact Assessments and Cost-Benefit Analysis',
      'Financing Models and Public-Private Partnerships',
      'Paris Agreement Crediting Mechanism (PACM)'
    ]
  },
  {
    category: 'Advanced Manufacturing Technologies',
    icon: <Factory className="h-6 w-6 text-primary-600" />,
    items: [
      'Advances in Additive Manufacturing',
      'Advanced Welding and Joining Processes',
      'Advanced Materials for Manufacturing (Composites, Alloys, and Ceramics)',
      'Advances in Biomaterials Science and Engineering'
    ]
  },
  {
    category: 'Digital and Smart Manufacturing',
    icon: <Cpu className="h-6 w-6 text-primary-600" />,
    items: [
      'Industry 4.0 and Smart Manufacturing Technologies',
      'Industry 5.0',
      'IoT Applications in Manufacturing Systems',
      'Integration of AI and Machine Learning in Manufacturing',
      'Simulation and Modelling in Manufacturing Processes'
    ]
  },
  {
    category: 'Automation and Robotics in Manufacturing',
    icon: <Factory className="h-6 w-6 text-primary-600" />,
    items: [
      'Robotics and Automation in Manufacturing',
      'Flexible and Agile Manufacturing Systems'
    ]
  },
  {
    category: 'Sustainable and Efficient Manufacturing',
    icon: <Leaf className="h-6 w-6 text-primary-600" />,
    items: [
      'Sustainable Manufacturing Practices and Circular Economy',
      'Optimization and Quality Control'
    ]
  }
];


const CallForPapersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Call for Papers | ICSEAMS 2025';
  }, []);

  return (
    <div>
      <PageHeader 
        title="Call for Papers" 
        subtitle="Submit your research on sustainable energy and advanced manufacturing systems"
      />

      <div className="section">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl w-full mx-auto">
            {/* Submission Guidelines */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Submission Guidelines</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  ICSEAMS 2025 invites researchers, academics, and industry experts to submit high-quality original 
                  papers related to sustainable energy and advanced manufacturing systems.
                </p>

                <div className="space-y-2">
                  <p className="font-medium">All submissions must adhere to the following guidelines:</p>
                  <ul className="list-none space-y-3">
                    {[
                      'All papers must be original and not simultaneously submitted elsewhere',
                      'Extended abstracts should be 2-3 pages in length',
                      'Full papers should be 6-8 pages (including figures and references)',
                      'Use the provided template for submissions',
                      'All submissions will undergo double-blind peer review',
                      'At least one author must register for the conference for the paper to be included in the proceedings'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <a href="#" className="btn btn-primary inline-flex items-center">
                    Download Template
                    <Download className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Conference Themes */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Conference Themes</h2>
              <p className="text-gray-700 mb-8">
                We invite submissions on the following themes (but not limited to):
              </p>

              <div className="space-y-8">
                {topics.map((topic, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-primary-50 flex items-center p-4 border-b border-gray-200">
                      <div className="mr-3 p-2 bg-white rounded-full">
                        {topic.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-primary-800">{topic.category}</h3>
                    </div>
                    <div className="p-5 bg-white">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {topic.items.map((item, i) => (
                          <li key={i} className="flex items-center">
                            <div className="h-2 w-2 bg-primary-500 rounded-full mr-3"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Important Dates</h2>
              <ul className="space-y-3">
                {[
                  { event: 'Abstract Submission Deadline', date: 'March 15, 2025' },
                  { event: 'Full Paper Submission', date: 'April 30, 2025' },
                  { event: 'Notification of Acceptance', date: 'June 15, 2025' },
                  { event: 'Camera-Ready Submission', date: 'July 15, 2025' },
                  { event: 'Early Bird Registration', date: 'July 31, 2025' },
                  { event: 'Conference Dates', date: 'September 11-13, 2025' }
                ].map((item, index) => (
                  <li key={index} className="flex justify-between pb-2 border-b border-primary-100">
                    <span className="font-medium text-gray-800">{item.event}</span>
                    <span className="text-primary-700">{item.date}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link to="/important-dates" className="text-primary-600 font-medium hover:text-primary-700">
                  View all important dates
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapersPage;
