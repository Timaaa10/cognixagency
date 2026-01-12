
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
import AIAuditModal from './components/AIAuditModal';

type Theme = 'light' | 'dark' | 'system';
export type AuditType = 'Free' | 'Advanced' | 'Strategic';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'privacy' | 'terms'>('home');
  const [theme, setTheme] = useState<Theme>((localStorage.getItem('theme') as Theme) || 'system');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedAuditType, setSelectedAuditType] = useState<AuditType>('Free');

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

  const handleAuditClick = (type: AuditType = 'Free') => {
    setSelectedAuditType(type);
    setIsAuditModalOpen(true);
  };

  const scrollToAudit = () => {
    const element = document.getElementById('audit');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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
            <Hero onBookClick={handleBookClick} onAuditClick={scrollToAudit} />
            <HowItWorks />
            <Services onBookClick={handleBookClick} />
            <AIAudit onAuditClick={handleAuditClick} />
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

      {isAuditModalOpen && (
        <AIAuditModal type={selectedAuditType} onClose={() => setIsAuditModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
