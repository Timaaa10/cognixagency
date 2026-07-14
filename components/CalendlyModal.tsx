import React, { useEffect, useRef } from 'react';

interface CalendlyModalProps {
  onClose: () => void;
}

declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({ onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    const initWidget = () => {
      if (window.Calendly && containerRef.current) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/cognix-agency/30min',
          parentElement: containerRef.current,
        });
      }
    };

    // If Calendly script is already loaded
    if (window.Calendly) {
      initWidget();
    } else {
      // Ensure script exists (in case it wasn't in index.html or failed)
      // Check if script tag exists
      let script = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        script.setAttribute('async', 'true');
        document.head.appendChild(script);
      }

      // Poll for Calendly object to be ready
      const interval = setInterval(() => {
        if (window.Calendly) {
          initWidget();
          clearInterval(interval);
        }
      }, 500);

      return () => {
        clearInterval(interval);
        document.body.style.overflow = 'unset';
      };
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-navy-900 rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-navy-700 h-[750px]">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-all border-none cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Calendly Inline Widget */}
        <div 
          ref={containerRef}
          className="calendly-inline-widget w-full h-full" 
          data-url="https://calendly.com/cognix-agency/30min" 
          style={{ minWidth: '320px', height: '100%' }}
        ></div>
      </div>
    </div>
  );
};

export default CalendlyModal;