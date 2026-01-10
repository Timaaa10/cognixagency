
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
import CalendlyModal from './components/CalendlyModal';
import FloatingChatWidget from './components/FloatingChatWidget';

type Theme = 'light' | 'dark' | 'system';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'privacy' | 'terms'>('home');
  const [theme, setTheme] = useState<Theme>((localStorage.getItem('theme') as Theme) || 'system');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    
    const applyTheme = () => {
      if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme();
    localStorage.setItem('theme', theme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') applyTheme();
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const navigateTo = (newView: 'home' | 'privacy' | 'terms') => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  const handleBookClick = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-navy-950 transition-colors duration-300">
      <Navbar 
        onHomeClick={() => navigateTo('home')} 
        currentTheme={theme} 
        onThemeChange={setTheme} 
        onBookClick={handleBookClick}
      />
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero onBookClick={handleBookClick} />
            <HowItWorks />
            <Services />
            <AIAudit />
            <WhyUs onBookClick={handleBookClick} />
            <Industries />
            <Booking onBookClick={handleBookClick} />
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

      <FloatingChatWidget onBookClick={handleBookClick} />

      {isBookingModalOpen && (
        <CalendlyModal onClose={() => setIsBookingModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
