import React from 'react';
import Header from './src/components/Header';
import HeroSection from './src/components/HeroSection';
import AboutSipSection from './src/components/AboutSipSection';
import WhyVolunteerSection from './src/components/WhyVolunteerSection';
import CtaSection from './src/components/CtaSection';
import Footer from './src/components/Footer';

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