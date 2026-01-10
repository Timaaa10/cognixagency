
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onHomeClick: () => void;
  currentTheme: 'light' | 'dark' | 'system';
  onThemeChange: (theme: 'light' | 'dark' | 'system') => void;
  onBookClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick, currentTheme, onThemeChange, onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    onHomeClick(); 
    
    setTimeout(() => {
      const element = document.getElementById(id);
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
    }, 0);
    
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Services', id: 'services' },
    { name: 'Industries', id: 'industries' },
    { name: 'FAQ', id: 'faq' },
  ];

  const ThemeIcon = () => {
    if (currentTheme === 'light') return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z"/></svg>
    );
    if (currentTheme === 'dark') return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
    );
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-white dark:bg-navy-900 shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Main 'C' Body - Hexagonal paths */}
                <path 
                  d="M75,32 L50,17 L25,32 L25,68 L50,83" 
                  fill="none" 
                  className="stroke-[#1e293b] dark:stroke-white transition-colors duration-300"
                  strokeWidth="16" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                {/* Accent Segment - Bottom Right */}
                <path 
                  d="M50,83 L75,68" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="16" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
            <button 
              onClick={(e) => { e.preventDefault(); onHomeClick(); window.scrollTo({top: 0, behavior: 'smooth'}); setIsMenuOpen(false); }} 
              className="text-xl font-extrabold tracking-tight text-[#0a1d37] dark:text-white bg-transparent border-none cursor-pointer"
            >
              Cognix Agency
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#0a1d37] dark:hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.name}
              </button>
            ))}

            <div className="relative">
              <button 
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors bg-transparent border-none cursor-pointer flex items-center"
              >
                <ThemeIcon />
              </button>
              
              {isThemeMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-navy-800 rounded-xl shadow-xl border border-slate-100 dark:border-navy-700 py-2 z-50">
                  {(['light', 'dark', 'system'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => { onThemeChange(t); setIsThemeMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm capitalize hover:bg-slate-50 dark:hover:bg-navy-700 transition-colors bg-transparent border-none cursor-pointer ${
                        currentTheme === t ? 'text-blue-600 font-bold' : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={onBookClick}
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0a1d37] dark:bg-blue-600 rounded-lg hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-md border-none cursor-pointer"
            >
              Book Strategy Call
            </button>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={() => onThemeChange(currentTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 bg-transparent border-none"
            >
              <ThemeIcon />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-[#0a1d37] focus:outline-none bg-transparent border-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-navy-900 border-b border-slate-100 dark:border-navy-800 transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={(e) => scrollToSection(e, link.id)}
              className="block w-full text-left px-3 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl transition-colors bg-transparent border-none cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4">
            <button 
              onClick={onBookClick}
              className="block w-full text-center px-5 py-4 text-base font-bold text-white bg-[#0a1d37] dark:bg-blue-600 rounded-xl hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-md border-none cursor-pointer"
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
