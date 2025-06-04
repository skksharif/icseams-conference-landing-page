import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CommitteePage from './pages/committee/CommitteePage';
import AdvisoryCommittee from './pages/committee/AdvisoryCommittee';
import TechnicalCommittee from './pages/committee/TechnicalCommittee';
import OrganizingCommittee from './pages/committee/OrganizingCommittee';
import CallForPapersPage from './pages/CallForPapersPage';
import SpeakersPage from './pages/SpeakersPage';
import RegistrationPage from './pages/RegistrationPage';
import ImportantDatesPage from './pages/ImportantDatesPage';
import PublicationPage from './pages/PublicationPage';
import VenuePage from './pages/VenuePage';
import SponsorsPage from './pages/SponsorsPage';
import NearbyPlacesPage from './pages/NearbyPlacesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import AOS from 'aos';

function App() {
  const location = useLocation();

  // Refresh AOS on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="committee" element={<CommitteePage />}>
          <Route path="advisory" element={<AdvisoryCommittee />} />
          <Route path="technical" element={<TechnicalCommittee />} />
          <Route path="organizing" element={<OrganizingCommittee />} />
          <Route index element={<AdvisoryCommittee />} />
        </Route>
        <Route path="call-for-papers" element={<CallForPapersPage />} />
        <Route path="speakers" element={<SpeakersPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="important-dates" element={<ImportantDatesPage />} />
        <Route path="publication" element={<PublicationPage />} />
        <Route path="venue" element={<VenuePage />} />
        <Route path="sponsors" element={<SponsorsPage />} />
        <Route path="nearby-places" element={<NearbyPlacesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;