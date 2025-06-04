import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutConference: React.FC = () => {
  return (
    <section className="section-padding" id="about-conference">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title" data-aos="fade-up">About The Conference</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
            Exploring innovations in sustainable energy and advanced manufacturing systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <p className="text-gray-700 mb-4">
              The 1st International Conference on Sustainable Energy and Advanced Manufacturing Systems (ICSEAMS-2025) brings together researchers, industry professionals, and academics from around the world to share cutting-edge research, innovations, and practical applications.
            </p>
            <p className="text-gray-700 mb-4">
              ICSEAMS-2025 focuses on two critical areas that are shaping our future: sustainable energy solutions to address climate challenges and advanced manufacturing systems that are revolutionizing production processes.
            </p>
            <p className="text-gray-700 mb-6">
              The conference provides a platform for interdisciplinary discussions, networking opportunities, and collaboration between academic institutions and industry partners, fostering innovation and knowledge exchange.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/call-for-papers" className="flex items-center text-conference-orange hover:text-conference-purple font-medium transition-colors">
                View Conference Tracks <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/important-dates" className="flex items-center text-conference-orange hover:text-conference-purple font-medium transition-colors">
                Important Dates <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Conference collaboration" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="text-conference-purple font-bold text-xl">11-13</div>
                <div className="text-gray-700">September 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConference;