import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Calendar, LightbulbIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LightbulbIcon className="w-6 h-6 text-conference-orange" />
              <h2 className="text-xl font-bold">ICSEAMS-2025</h2>
            </div>
            <p className="text-gray-300 mb-4">
              International Conference on Sustainable Energy and Advanced Manufacturing Systems
            </p>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <Calendar size={16} />
              <span>11th–13th September 2025</span>
            </div>
            <div className="flex items-start gap-2 text-gray-300">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <span>B V Raju Institute of Technology (BVRIT), Narsapur, Telangana, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-conference-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/call-for-papers" className="text-gray-300 hover:text-conference-orange transition-colors">
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link to="/registration" className="text-gray-300 hover:text-conference-orange transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/important-dates" className="text-gray-300 hover:text-conference-orange transition-colors">
                  Important Dates
                </Link>
              </li>
              <li>
                <Link to="/venue" className="text-gray-300 hover:text-conference-orange transition-colors">
                  Venue
                </Link>
              </li>
            </ul>
          </div>

          {/* Committee Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Committees</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/committee/advisory" className="text-gray-300 hover:text-conference-orange transition-colors">
                  Advisory Committee
                </Link>
              </li>
              <li>
                <Link to="/committee/technical" className="text-gray-300 hover:text-conference-orange transition-colors">
                  Technical Committee
                </Link>
              </li>
              <li>
                <Link to="/committee/organizing" className="text-gray-300 hover:text-conference-orange transition-colors">
                  Organizing Committee
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone size={16} />
                <a href="tel:+918309463748" className="hover:text-conference-orange transition-colors">
                  +91 8309463748
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail size={16} />
                <a href="mailto:icseams@bvrit.ac.in" className="hover:text-conference-orange transition-colors">
                  icseams@bvrit.ac.in
                </a>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  Medak District, Telangana-502313, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} ICSEAMS-2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;