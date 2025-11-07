
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyFooter from './components/StickyFooter';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesHubPage from './pages/ServicesHubPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ServiceAreaHubPage from './pages/ServiceAreaHubPage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import LocalHubPage from './pages/LocalHubPage';
import AttractionPage from './pages/AttractionPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './hooks/useScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-neutral-light font-sans text-neutral-dark">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesHubPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/service-areas" element={<ServiceAreaHubPage />} />
            <Route path="/service-areas/:slug" element={<ServiceAreaPage />} />
            <Route path="/local-attractions" element={<LocalHubPage />} />
            <Route path="/local-attractions/:slug" element={<AttractionPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <StickyFooter />
      </div>
    </HashRouter>
  );
};

export default App;
