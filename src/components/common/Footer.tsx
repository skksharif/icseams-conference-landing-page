import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">ICSEAMS 2025</h3>
            <p className="text-gray-300 mb-4">
              International Conference on Sustainable Energy and Advanced Manufacturing Systems
            </p>
            <p className="text-gray-300">11-13 September 2025</p>
            <p className="text-gray-300">BVRIT, Telangana, India</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/call-for-papers" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link to="/registration" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/important-dates" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Important Dates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  BVRIT Campus, Narsapur, Medak District, Telangana, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:icseams2025@example.com" className="text-gray-300 hover:text-primary-300 transition-colors">
                  icseams2025@example.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-primary-300 transition-colors">
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <Link to="/venue" className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors">
              View Venue Map
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ICSEAMS 2025. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Organized by BVRIT, Telangana in collaboration with partner institutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;