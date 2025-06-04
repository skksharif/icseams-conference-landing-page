import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/home/Hero';
import AboutConference from '../components/home/AboutConference';
import AboutInstitute from '../components/home/AboutInstitute';
import AboutDepartment from '../components/home/AboutDepartment';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="1st International Conference on Sustainable Energy and Advanced Manufacturing Systems, 11th–13th September 2025, BVRIT, India" 
        canonical="/"
      />
      <Hero />
      <AboutConference />
      <AboutInstitute />
      <AboutDepartment />
    </>
  );
};

export default HomePage;