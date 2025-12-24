
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onHomeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    onHomeClick(); // Ensure we are on the home view first
    
    // Small delay to allow home view to render if we were on privacy page
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M75,30 L50,15 L25,30 L25,70 L50,85" 
                  fill="none" 
                  stroke="#0f2a43" 
                  strokeWidth="18" 
                  strokeLinecap="butt" 
                  strokeLinejoin="miter" 
                />
                <path 
                  d="M50,85 L75,70" 
                  fill="none" 
                  stroke="#3fa1e0" 
                  strokeWidth="18" 
                  strokeLinecap="butt" 
                  strokeLinejoin="miter" 
                />
              </svg>
            </div>
            <button 
              onClick={(e) => { e.preventDefault(); onHomeClick(); window.scrollTo({top: 0, behavior: 'smooth'}); setIsMenuOpen(false); }} 
              className="text-xl font-extrabold tracking-tight text-[#0a1d37] bg-transparent border-none cursor-pointer"
            >
              Cognix Agency
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-sm font-medium text-slate-600 hover:text-[#0a1d37] transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={(e) => scrollToSection(e, 'booking')}
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0a1d37] rounded-lg hover:bg-slate-800 transition-all shadow-md border-none cursor-pointer"
            >
              Book Strategy Call
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-[#0a1d37] focus:outline-none bg-transparent border-none"
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

      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={(e) => scrollToSection(e, link.id)}
              className="block w-full text-left px-3 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors bg-transparent border-none cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4">
            <button 
              onClick={(e) => scrollToSection(e, 'booking')}
              className="block w-full text-center px-5 py-4 text-base font-bold text-white bg-[#0a1d37] rounded-xl hover:bg-slate-800 transition-all shadow-md border-none cursor-pointer"
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
