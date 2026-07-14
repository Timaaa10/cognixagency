import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface TestimonialsProps {
  onBookClick: () => void;
}

const testimonialsData = [
  {
    name: "Dr. Marcus Chen",
    position: "Founder & Lead Clinician",
    company: "Renew Men's Health",
    location: "Austin, TX",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150&h=150",
    text: "I was pretty burned by agencies before. Spent $8K/month with another firm that sent me 'leads' who thought TRT was a new cryptocurrency. Cognix was different from the first strategy call. They actually understood that our patients are men 35-55 who are exhausted, not 22-year-olds looking for 'gains.' The AI qualification system they built filters out about 70% of unqualified inquiries before my staff even touches them. We're 4 months in and our cost per booked consultation dropped from $340 to $127. My intake coordinator actually has time to breathe now."
  },
  {
    name: "James Whitfield",
    position: "CEO",
    company: "Vitality TRT Clinics",
    location: "Denver / Colorado Springs / Fort Collins",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    text: "We went from one clinic to three locations in 18 months, and our lead volume became unmanageable almost overnight. We were losing probably 40% of inquiries just because our small team couldn't call everyone back within an hour. Cognix built us a full acquisition system — Meta/Google ads, AI voice callers that sound surprisingly natural, and a CRM that actually talks to our EHR. The AI handles initial qualification and scheduling, and only escalates to my team when someone is genuinely ready to book. We went from 12 booked consultations per week to 47, without hiring a single new intake person."
  },
  {
    name: "Dr. Sarah Okonkwo",
    position: "Medical Director",
    company: "Precision Hormone Institute",
    location: "Miami, FL",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150",
    text: "In men's health, one wrong claim in your ad copy can get you flagged by platforms or worse, state medical boards. Cognix gets this. They built our entire funnel with compliance guardrails baked in — from ad copy review to AI caller scripts that never promise outcomes we can't guarantee. The chatbot they deployed on our site increased our after-hours conversion rate by something like 3x, and it never 'hallucinates' medical advice because they trained it on our actual protocols. That peace of mind is worth the fee alone."
  },
  {
    name: "Ryan Torres",
    position: "Founder",
    company: "Elevate Men's Wellness",
    location: "Scottsdale, AZ",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    text: "I'll be blunt — I don't care about impressions, clicks, or 'brand awareness.' I care about how much it costs me to get a paying patient in a chair. Cognix showed me their numbers on day one: $94 cost per booked consultation, 68% show-up rate, and a 3.2x ROAS in month three. I signed. Six months later, my numbers are $71 per booking, 74% show-up rate, and 4.1x ROAS. They report on actual revenue tied back to ad spend, not vanity metrics. Refreshing."
  },
  {
    name: "Dr. Paul Hendricks",
    position: "Founder",
    company: "Hendricks Hormone & Wellness",
    location: "Portland, OR",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    text: "I'm a clinician, not a marketer. The idea of managing AI callers, CRM automations, and ad dashboards made me want to retire early. Cognix handled the entire stack — I literally just open one dashboard in the morning to see yesterday's bookings and revenue. If something's off, they flag it before I notice. The AI voice agent they set up is so good that two of my patients actually complimented 'her' phone manner before they realized it wasn't human. My only regret is not doing this two years ago when I was still doing intake calls myself at 9 PM."
  },
  {
    name: "David Park",
    position: "Co-Founder",
    company: "Regenerate Health",
    location: "Chicago, IL",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    text: "We were three months from closing. COVID had wrecked our patient flow, our previous agency was bleeding us dry with $600+ cost per lead, and our front desk was overwhelmed with unqualified calls. Cognix came in, audited everything, and basically rebuilt our patient acquisition from scratch. They paused our underperforming channels, restructured our offer, and deployed their AI qualification system. Within 60 days we were profitable on ad spend again. By month five we were opening a second location. I don't write testimonials, but they earned this one."
  }
];

const Testimonials: React.FC<TestimonialsProps> = ({ onBookClick }) => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-navy-950 border-t border-b border-slate-100 dark:border-navy-900 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
              Case Studies & Proof
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a1d37] dark:text-white mb-6 tracking-tight">
            Results That Talk. Clinicians Who Trust Us.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Six clinic owners and medical founders share how Cognix systems automated their lead response, lowered acquisition costs, and scaled bookings.
          </p>
        </div>

        {/* Masonry or structured grid style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col justify-between p-8 rounded-3xl border border-slate-200/60 dark:border-navy-800 bg-white dark:bg-navy-900/40 hover:shadow-2xl hover:shadow-blue-500/5 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 relative group"
            >
              {/* Quote icon watermark */}
              <div className="absolute top-6 right-8 text-slate-100 dark:text-navy-800/30 pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center space-x-1 mb-6 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Testimonial body text */}
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-8 font-medium italic relative z-10">
                  "{t.text}"
                </p>
              </div>

              {/* User profile details */}
              <div className="flex items-center space-x-4 border-t border-slate-100 dark:border-navy-800 pt-6 mt-auto">
                <div className="relative flex-shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/20 dark:border-blue-500/40"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.15)] pointer-events-none"></div>
                </div>
                
                <div className="min-w-0">
                  <h4 className="text-base font-bold text-[#0a1d37] dark:text-white truncate">
                    {t.name}
                  </h4>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 truncate">
                    {t.position}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">
                    {t.company} • <span className="italic">{t.location}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action card under the testimonials */}
        <div className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-[#0a1d37] to-[#122b51] dark:from-navy-900 dark:to-blue-950 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0 bg-grid-slate-900 opacity-20 pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
              Ready to be our next success story?
            </h3>
            <p className="text-blue-200/80 text-sm md:text-base leading-relaxed font-medium">
              Let's build your automated client acquisition engine and fill your calendar with highly qualified inquiries.
            </p>
          </div>
          <button
            onClick={onBookClick}
            className="relative z-10 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-base font-black rounded-2xl shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get a free strategy call ↗
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
