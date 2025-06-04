import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import SEO from '../../components/SEO';

const CommitteePage: React.FC = () => {
  const committees = [
    { name: 'Advisory Committee', path: '/committee/advisory' },
    { name: 'Technical Committee', path: '/committee/technical' },
    { name: 'Organizing Committee', path: '/committee/organizing' }
  ];

  return (
    <>
      <SEO 
        title="Committee" 
        description="Meet the Advisory, Technical, and Organizing Committees of ICSEAMS-2025." 
        canonical="/committee"
      />
      <div className="bg-gradient-to-r from-conference-purple/90 to-conference-orange/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Conference Committees
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90" data-aos="fade-up" data-aos-delay="200">
            Meet the distinguished experts and organizers behind ICSEAMS-2025
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up">
          {committees.map((committee) => (
            <NavLink
              key={committee.path}
              to={committee.path}
              className={({ isActive }) => `
                px-6 py-3 rounded-full text-center transition-all
                ${isActive 
                  ? 'bg-conference-orange text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {committee.name}
            </NavLink>
          ))}
        </div>
        
        <Outlet />
      </div>
    </>
  );
};

export default CommitteePage;