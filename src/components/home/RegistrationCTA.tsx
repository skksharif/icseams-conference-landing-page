import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

const RegistrationCTA = () => {
  return (
    <AnimatedSection className="py-20 bg-gradient-to-r from-primary-800 to-secondary-900 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">Join Us at ICSEAMS 2025</h2>
          <p className="text-xl text-gray-200 mb-8">
            Connect with researchers, industry experts, and academics from around the world.
            Register today to secure your place at this premier international conference.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/registration" 
              className="btn bg-white text-primary-800 hover:bg-gray-100 group"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="btn border border-white bg-transparent hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default RegistrationCTA;