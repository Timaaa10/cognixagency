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
    benefit: 'Perfect for HVAC, roofing, and solar. Catch every lead the moment they search for help.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800&h=600'
  }
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a1d37] mb-4">Built for Your Industry</h2>
        <p className="text-lg text-slate-600">Specialized systems designed for high-intent, high-ticket services.</p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {industries.map((ind, i) => (
          <div key={i} className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-xl transition-all">
            <div className="h-48 overflow-hidden">
              <img 
                src={ind.image} 
                alt={ind.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback in case the external link breaks
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800&h=600';
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0a1d37] mb-3">{ind.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{ind.benefit}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;