
import React from 'react';

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick }) => {
  const instagramLink = "https://www.instagram.com/cognix.agency?igsh=MXBrMTltdzJwbWJtMA%3D%3D&utm_source=qr";
  const telegramLink = "https://t.me/cognixagency";
  const whatsappLink = "https://wa.me/998931286400";

  return (
    <footer className="bg-[#0a1d37] dark:bg-navy-950 text-white pt-20 pb-10 border-t border-slate-800 dark:border-navy-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12">
          <div className="max-w-md">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M75,32 L50,17 L25,32 L25,68 L50,83" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="16" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
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
              <span className="text-xl font-black tracking-tight text-white">Cognix Agency</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering high-ticket businesses with end-to-end AI revenue systems. We combine top-tier advertising with the next generation of sales automation.
            </p>
            <div className="flex space-x-4">
              <a 
                href={instagramLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 dark:bg-navy-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
                title="Instagram"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href={telegramLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 dark:bg-navy-800 flex items-center justify-center hover:bg-blue-500 transition-colors"
                title="Telegram"
              >
                <span className="sr-only">Telegram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.762 5.319-1.056 6.891-.125.664-.37 1.114-.607 1.136-.514.048-.905-.34-1.402-.666-.777-.51-1.216-.827-1.97-1.323-.872-.572-.307-.887.19-.92l3.434-3.238c.222-.202.407-.341.341-.466-.065-.124-.247-.083-.353-.06l-4.86 3.087c-.15.093-.442.235-.808.125l-2.022-.63c-.412-.128-.74-.196-.708-.415.016-.113.17-.23.461-.35 1.8-.783 5.332-2.222 6.588-2.744.3-.124.573-.186.82-.189z"/>
                </svg>
              </a>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 dark:bg-navy-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                title="WhatsApp"
              >
                <span className="sr-only">WhatsApp</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.996-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.146 1.417 4.75 1.418 5.422 0 9.835-4.413 9.838-9.835.002-2.628-1.022-5.1-2.885-6.963s-4.333-2.885-6.963-2.885c-5.424 0-9.838 4.413-9.841 9.835 0 1.745.46 3.447 1.33 4.954l-1.01 3.693 3.791-.983zm10.16-5.873c-.275-.138-1.63-.804-1.883-.896s-.437-.138-.62.138c-.184.277-.712.896-.872 1.08s-.32.208-.596.07c-.276-.138-1.165-.43-2.22-1.37-0.82-.73-1.374-1.633-1.535-1.91s-.017-.427.12-.564c.125-.122.276-.322.415-.483.139-.161.185-.276.277-.46s.046-.345-.023-.483c-.069-.138-.621-1.496-.85-2.049-.224-.539-.469-.466-.644-.475-.165-.008-.356-.01-.547-.01s-.502.071-.764.354c-.263.282-1.003.98-1.003 2.39s1.026 2.781 1.17 2.972c.143.191 2.02 3.084 4.893 4.324.684.296 1.217.473 1.632.605.687.218 1.312.187 1.806.114.551-.081 1.63-.666 1.859-1.31.228-.644.228-1.196.16-1.31-.069-.115-.253-.184-.528-.322z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-500">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>tim@cognix.agency</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Global HQ / Remote-First</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 pt-8 border-t border-slate-800 dark:border-navy-800">
          <p>© {new Date().getFullYear()} Cognix Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              onClick={(e) => { e.preventDefault(); onPrivacyClick(); }} 
              className="hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); onTermsClick(); }} 
              className="hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
