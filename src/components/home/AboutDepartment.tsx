import React from 'react';
import { Cog, Microscope, BookOpen, Users } from 'lucide-react';

const AboutDepartment: React.FC = () => {
  return (
    <section className="py-8" id="about-department">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title" data-aos="fade-up">About Department of Mechanical Engineering</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
            Excellence in Mechanical Engineering Education and Research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Research Areas */}
          <div className="card h-full" data-aos="fade-up">
            <Microscope className="w-10 h-10 text-conference-green mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Research Areas</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Advanced Manufacturing Technologies
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Sustainable Energy Systems
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Materials Science and Engineering
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Thermal and Fluid Systems
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Robotics and Automation
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Computer-Aided Design and Manufacturing
              </li>
            </ul>
          </div>

          {/* Facilities and Labs */}
          <div className="card h-full" data-aos="fade-up" data-aos-delay="100">
            <Cog className="w-10 h-10 text-conference-green mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Facilities & Labs</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Advanced Manufacturing Laboratory
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Thermal Engineering Laboratory
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Materials Testing Laboratory
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Computer-Aided Design Center
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Fluid Mechanics and Hydraulic Machinery Lab
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Robotics and Automation Laboratory
              </li>
            </ul>
          </div>

          {/* Software and Tools */}
          <div className="card h-full" data-aos="fade-up" data-aos-delay="200">
            <BookOpen className="w-10 h-10 text-conference-green mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Software & Tools</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                ANSYS for Finite Element Analysis
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                SolidWorks for 3D Modeling
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                MATLAB for Simulation and Analysis
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                AutoCAD for Engineering Drawing
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                Computational Fluid Dynamics Software
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-green rounded-full mt-2 mr-2"></span>
                3D Printing and Rapid Prototyping Tools
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            The Department of Mechanical Engineering at BVRIT has been at the forefront of research and education in sustainable energy and advanced manufacturing systems. With its state-of-the-art facilities and experienced faculty, the department provides an ideal environment for hosting ICSEAMS-2025.
          </p>
          <div className="flex justify-center">
            <Users className="w-8 h-8 text-conference-orange" />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Join us at ICSEAMS-2025 to be part of this exciting academic endeavor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutDepartment;