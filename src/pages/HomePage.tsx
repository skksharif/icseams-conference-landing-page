import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/home/Hero';
import AboutConference from '../components/home/AboutConference';
import AboutInstitute from '../components/home/AboutInstitute';
import AboutDepartment from '../components/home/AboutDepartment';
import BrochureDownload from './BrochureDownload';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="2nd International Conference on Sustainable Energy and Advanced Manufacturing Systems, 10–11 April 2026, BVRIT, India" 
        canonical="/"
      />
      <Hero />
      <AboutConference />
      <BrochureDownload/>
      <AboutInstitute />
      <AboutDepartment />
    </>
  );
};

export default HomePage;