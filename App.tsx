
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import AIAudit from './components/AIAudit';
import WhyUs from './components/WhyUs';
import Industries from './components/Industries';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'privacy' | 'terms'>('home');

  const navigateTo = (newView: 'home' | 'privacy' | 'terms') => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onHomeClick={() => navigateTo('home')} />
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero />
            <HowItWorks />
            <Services />
            <AIAudit />
            <WhyUs />
            <Industries />
            <Booking />
            <FAQ />
          </>
        )}
        {view === 'privacy' && (
          <PrivacyPolicy onBack={() => navigateTo('home')} />
        )}
        {view === 'terms' && (
          <TermsOfService onBack={() => navigateTo('home')} />
        )}
      </main>
      <Footer 
        onPrivacyClick={() => navigateTo('privacy')} 
        onTermsClick={() => navigateTo('terms')} 
      />
    </div>
  );
};

export default App;
