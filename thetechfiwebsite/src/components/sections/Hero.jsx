import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, BookOpen, ChevronDown } from 'lucide-react';

const Hero = () => {
  
  const handleScrollDown = () => {
    const nextSection = document.getElementById('resources'); // Changed from 'services' to 'resources'
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden text-center bg-primary px-6">
      
      {/* 1. BACKGROUND: Clean Technical Grid (Replaces Video) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* 2. AMBIENT GLOW (Navy/Gold Theme) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-surface/40 blur-[100px] rounded-full pointer-events-none opacity-60"></div>

      {/* 3. CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto mt-10">
        
        {/* Authority Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <Terminal size={14} className="text-accent" />
          <span className="text-xs md:text-sm font-bold text-accent tracking-widest uppercase">
            For Salesforce Architects,Developers & Career Switchers
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-[1.1] tracking-tight"
        >
          Stop Guessing. <br />
          Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Engineering.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-text-muted leading-relaxed mb-12"
        >
          The Technology Fiction is your roadmap to the technical elite. 
          Deep architectural guides, career strategy, and unfiltered mentorship.
          <span className="block mt-4 text-white/40 text-sm italic font-medium">
            No fluff. No sales pitches. Just pure Learning.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* Primary: Newsletter */}
          <a
            href="#newsletter"
            className="group relative px-8 py-4 bg-accent text-primary rounded-lg font-bold text-lg hover:bg-white transition-all duration-300 flex items-center gap-3 shadow-[0_0_30px_-10px_rgba(224,184,76,0.4)]"
          >
            Join Inner Circle
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary: Resources */}
          <button
            onClick={handleScrollDown}
            className="px-8 py-4 border border-white/20 text-white font-medium text-lg rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2"
          >
            <BookOpen className="w-5 h-5 opacity-70" />
            Explore Roadmaps
          </button>
        </motion.div>

        {/* Trust Signals / Social Proof */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-text-muted/40"
        >
          <span>Read by developers at:</span>
          <div className="flex gap-8 font-heading font-bold tracking-widest uppercase opacity-60">
            <span>Persistent</span>
            <span>Salesforce</span>
            <span>Accenture</span>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted/50 flex flex-col items-center gap-2 cursor-pointer hover:text-accent transition-colors z-20"
        onClick={handleScrollDown}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>

    </section>
  );
};

export default Hero;