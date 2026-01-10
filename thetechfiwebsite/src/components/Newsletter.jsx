import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section id="newsletter" className="py-24 bg-surface border-y border-white/5 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-accent/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
          <Mail size={14} className="text-accent" />
          <span className="text-accent text-xs font-bold uppercase tracking-widest">Weekly Insights</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Join the <span className="text-accent">Inner Circle</span>
        </h2>
        <p className="text-text-muted mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
          Get my weekly architectural breakdowns, career roadmaps, and unfiltered Salesforce strategies. No spam, just engineering.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="enter_your@email.com" 
            className="flex-grow px-5 py-4 bg-primary border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-accent transition-colors shadow-inner"
          />
          <button 
            type="submit" 
            className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-200 transition-colors uppercase tracking-wide text-sm flex items-center justify-center gap-2"
          >
            Subscribe
            <ArrowRight size={16} />
          </button>
        </form>
        
        <p className="mt-6 text-xs text-text-muted/40">
          Join 2,000+ developers. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;