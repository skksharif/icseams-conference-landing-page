import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import WelcomeSection from '../components/home/WelcomeSection';
import ConferenceTopics from '../components/home/ConferenceTopics';
import KeyDates from '../components/home/KeyDates';
import RegistrationCTA from '../components/home/RegistrationCTA';

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'ICSEAMS 2025 | International Conference on Sustainable Energy and Advanced Manufacturing Systems';
  }, []);

  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <ConferenceTopics />
      <KeyDates />
      <RegistrationCTA />
    </div>
  );
};

export default HomePage;