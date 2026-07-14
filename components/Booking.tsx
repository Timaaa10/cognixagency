import React from 'react';

interface BookingProps {
  onBookClick: () => void;
}

const Booking: React.FC<BookingProps> = ({ onBookClick }) => {
  return (
    <section id="booking" className="py-24 bg-white dark:bg-navy-950 scroll-mt-24 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider mb-6 border border-green-100 dark:border-green-800">
          Available Now
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1d37] dark:text-white mb-6">Take Your Revenue to the Next Level</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Book a 30-minute discovery call to see how we can build your custom AI Revenue System.
        </p>
        
        <div className="bg-slate-50 dark:bg-navy-900 border-2 border-dashed border-slate-200 dark:border-navy-800 rounded-[2rem] p-12 md:p-24 flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-slate-400 dark:text-slate-500 font-medium mb-8">Ready to automate your sales process?</p>
          <button 
            onClick={onBookClick}
            className="inline-flex justify-center items-center px-10 py-5 bg-[#0a1d37] dark:bg-blue-600 text-white text-xl font-bold rounded-2xl hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1 border-none cursor-pointer"
          >
            Book a Consultation with us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Booking;