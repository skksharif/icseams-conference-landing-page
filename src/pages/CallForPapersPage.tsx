import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, FileText, Download } from "lucide-react";
import SEO from "../components/SEO";

interface TrackProps {
  title: string;
  topics: string[];
  isOpen?: boolean;
  toggleOpen: () => void;
}

const Track: React.FC<TrackProps> = ({
  title,
  topics,
  isOpen = false,
  toggleOpen,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden mb-4 shadow-sm">
      <button
        className={`w-full flex justify-between items-center p-4 text-left focus:outline-none ${
          isOpen ? "bg-gray-50" : "bg-white"
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
      title: "Design of Renewable Energy Technologies",
      topics: [
        "Solar Photovoltaic (PV) and Solar thermal systems",
        "Wind Turbine Design and Offshore Wind Technologies",
        "Small and Large scale hydropower systems",
        "Design of hybrid renewable energy systems",
      ],
    },
    {
      title: "Hydrogen Storage and Battery Technologies",
      topics: [
        "Lithium-ion, Sodium-ion, and Solid-state Batteries",
        "Grid-scale Storage vs. Decentralized Storage",
        "Battery Management Systems and Safety",
        "Supercapacitors and Hybrid Storage Technologies",
        "Hydrogen Production and Storage Methods",
      ],
    },
    {
      title: "Smart Grids and EV Charging Infrastructure",
      topics: [
        "Grid-tied Inverters for Solar and Wind Systems",
        "High-Efficiency DC-DC Converters",
        "Cybersecurity in Smart Grid Networks",
        "Renewable-Powered EV Charging Stations",
      ],
    },
    {
      title: "Energy Efficiency in Industrial and Commercial Sectors",
      topics: [
        "CFD modelling for coupled fluid-thermal-structural analysis",
        "Process Optimization and Waste Heat Recovery",
        "Building Management Systems (BMS)",
        "Digital Twins and Predictive Maintenance",
        "Carbon Capture, Utilization, and Storage Technologies",
      ],
    },
    {
      title: "Waste-to-Energy Conversion and Sustainable Practices",
      topics: [
        "Anaerobic Digestion and Biogas Production",
        "Pyrolysis and Gasification of Waste",
        "Integration with Circular Economy Models",
      ],
    },
    {
      title: "AI and IoT Applications in Energy Systems",
      topics: [
        "Predictive Maintenance and energy consumption Using AI",
        "Smart Home Energy Management",
        "IoT-enabled Grid Monitoring and Control",
        "AI Optimization in Renewable Integration",
        "Edge Computing and Real-time Decision-Making",
      ],
    },
    {
      title: "Policy and Economics of Sustainable Energy Systems",
      topics: [
        "Renewable Energy Incentives and Subsidies",
        "Carbon Pricing and Emissions Trading Schemes",
        "International Agreements and Climate Policy",
        "Economic Impact Assessments and Cost-Benefit Analysis",
        "Financing Models and Public-Private Partnerships",
        "Paris Agreement Crediting Mechanism (PACM)",
      ],
    },
    {
      title: "Advanced Manufacturing Technologies",
      topics: [
        "Advances in Additive Manufacturing",
        "Advanced Welding and Joining Processes",
        "Advanced Materials for Manufacturing (Composites, Alloys, and Ceramics)",
        "Advances in Biomaterials Science and Engineering",
      ],
    },
    {
      title: "Digital and Smart Manufacturing",
      topics: [
        "Industry 4.0 and Smart Manufacturing Technologies",
        "IoT Applications in Manufacturing Systems",
        "Integration of AI and Machine Learning in Manufacturing",
        "Simulation and Modelling in Manufacturing Processes",
      ],
    },
    {
      title: "Automation and Robotics in Manufacturing",
      topics: [
        "Robotics and Automation in Manufacturing",
        "Flexible and Agile Manufacturing Systems",
      ],
    },
    {
      title: "Sustainable and Efficient Manufacturing",
      topics: [
        "Sustainable Manufacturing Practices and Circular Economy",
        "Optimization and Quality Control",
      ],
    },
  ];

  const cardColors = [
    "bg-conference-orange/10 border-conference-orange",
    "bg-conference-purple/10 border-conference-purple",
    "bg-conference-green/10 border-conference-green",
    "bg-blue-100 border-blue-400",
  ];

  const toggleTrack = (index: number) => {
    setOpenTrack(openTrack === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Call for Papers"
        description="Submit your research papers to ICSEAMS-2026 on topics related to sustainable energy and advanced manufacturing systems."
        canonical="/call-for-papers"
      />
      <div className="bg-gradient-to-r from-conference-green/90 to-conference-orange/90 text-white py-10">
        <div className="container mx-auto px-2 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            Call for Papers
          </h1>
          <p
            className="max-w-3xl mx-auto text-lg opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Submit your research contributions to ICSEAMS-2026
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Conference Overview
            </h2>
            <p className="text-gray-700 mb-4">
              ICSEAMS-2026 invites original research contributions related to
              sustainable energy and advanced manufacturing systems. The
              conference aims to bring together researchers, industry
              professionals, and academics to share their innovative work and
              latest findings in these rapidly evolving fields.
            </p>
            <p className="text-gray-700 mb-4">
              All submitted papers will undergo a rigorous triple peer-review
              process to ensure the highest quality of technical content.
              Accepted papers will be published in Scopus and Web of Science
              indexed journals or conference proceedings.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FileText size={20} className="mr-2 text-conference-orange" />
                Paper Submission Guidelines
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                  <span>
                    Full papers should be 6-8 pages in length, following the
                    conference template format.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                  <span>
                    Papers must be original and not submitted or published
                    elsewhere.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                  <span>
                    Submit your paper to{" "}
                    <a
                      href="mailto:icseams@bvrit.ac.in"
                      className="text-conference-orange hover:underline"
                    >
                      icseams@bvrit.ac.in
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                  <span>
                    All submissions will undergo a triple peer-review process.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                  <span>
                    At least one author of each accepted paper must register for
                    the conference and present the paper.
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  to="/important-dates"
                  className="text-conference-orange hover:underline flex items-center"
                >
                  <span>View submission deadlines</span>
                  <ChevronDown size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Conference Tracks
            </h2>
            <p className="text-gray-700 mb-6">
              ICSEAMS-2026 welcomes papers across a wide range of topics related
              to sustainable energy and advanced manufacturing systems. Click on
              each track to view detailed topics:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tracks.map((track, index) => (
                <div
                  key={index}
                  className={`border rounded-lg shadow-md p-6 hover:shadow-lg transition ${
                    cardColors[index % cardColors.length]
                  }`}
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {track.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {track.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Paper Template
            </h2>
            <p className="text-gray-700 mb-4">
              Please download and use the official ICSEAMS-2026 paper template
              to format your submission correctly.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <FileText size={36} className="text-conference-purple mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    ICSEAMS-2026 Paper Template
                  </h4>
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
