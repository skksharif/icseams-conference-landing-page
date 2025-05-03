import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import HomePage from './pages/HomePage';
import CommitteePage from './pages/CommitteePage';
import CallForPapersPage from './pages/CallForPapersPage';
import SpeakersPage from './pages/SpeakersPage';
import RegistrationPage from './pages/RegistrationPage';
import ImportantDatesPage from './pages/ImportantDatesPage';
import PublicationPage from './pages/PublicationPage';
import VenuePage from './pages/VenuePage';
import SponsorsPage from './pages/SponsorsPage';
import AttractionsPage from './pages/AttractionsPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/committee" element={<CommitteePage />} />
              <Route path="/call-for-papers" element={<CallForPapersPage />} />
              <Route path="/speakers" element={<SpeakersPage />} />
              <Route path="/registration" element={<RegistrationPage />} />
              <Route path="/important-dates" element={<ImportantDatesPage />} />
              <Route path="/publication" element={<PublicationPage />} />
              <Route path="/venue" element={<VenuePage />} />
              <Route path="/sponsors" element={<SponsorsPage />} />
              <Route path="/attractions" element={<AttractionsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;