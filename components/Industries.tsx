
import React from 'react';

const industries = [
  {
    name: 'Consulting',
    benefit: 'Scalable systems for high-ticket coaches and consultants looking to automate their calendar.',
    image: 'https://www.shutterstock.com/image-photo/diverse-coworkers-working-together-boardroom-600nw-2471755275.jpg'
  },
  {
    name: 'Pool Construction',
    benefit: 'Follow up on high-value inquiries and filter for serious homeowners before booking site visits.',
    image: 'https://plungepools.com/wp-content/uploads/2023/11/pool-care-101-1024x536.jpg'
  },
  {
    name: 'Law Firms',
    benefit: 'Qualify personal injury or family law leads instantly and book consultations automatically.',
    image: 'https://ambadar.com/storage/2024/04/International-Law-Firm-AM-Badar.png'
  },
  {
    name: 'Home Services',
    benefit: 'Catch every lead the moment they search for help with specialized automated outreach.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    name: 'Medical & Dental',
    benefit: 'Automate patient acquisition and appointment scheduling for high-value elective procedures.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    name: 'Real Estate & Development',
    benefit: 'Handle massive volumes of property inquiries and pre-qualify serious buyers and sellers.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    name: 'Aesthetic Clinics',
    benefit: 'Streamline consultation bookings for premium skin, face, and body treatments 24/7.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    name: 'Roofing',
    benefit: 'Instant response to storm-chasing leads and residential roof replacement inquiries.',
    image: 'https://images.ctfassets.net/wz4em6cftltu/3eGpqKHLbnKMjLoV31cEHZ/663bdec4e0eb6f551f2eafdfbe61f872/metal_roof.jpeg?w=1200&h=630&fl=progressive&q=50&fm=jpg'
  },
  {
    name: 'Solar',
    benefit: 'Prequalify homeowners based on roof orientation and utility spend before the first call.',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    name: 'Landscaping',
    benefit: 'Convert design-build inquiries into site surveys without manual back-and-forth scheduling.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800&h=600'
  }
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-slate-50 dark:bg-navy-950 scroll-mt-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1d37] dark:text-white mb-4">Built for Your Industry</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">Specialized systems designed for high-intent, high-ticket services.</p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((ind, i) => (
          <div key={i} className="group relative overflow-hidden rounded-3xl bg-white dark:bg-navy-800 shadow-sm border border-slate-100 dark:border-navy-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-56 overflow-hidden relative">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src={ind.image} 
                alt={ind.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800&h=600';
                }}
              />
              <h3 className="absolute bottom-4 left-6 z-20 text-xl font-bold text-white drop-shadow-md">{ind.name}</h3>
            </div>
            <div className="p-6">
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{ind.benefit}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
