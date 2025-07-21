import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSipSection from './components/AboutSipSection';
import WhyVolunteerSection from './components/WhyVolunteerSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-base-text">
      <Header />
      <main>
        <HeroSection />
        <AboutSipSection />
        <WhyVolunteerSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
