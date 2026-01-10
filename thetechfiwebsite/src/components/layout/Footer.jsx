import React from 'react';
import { Linkedin, Twitter, Github, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-28 md:pb-12 border-t border-white/5 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-surface/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">

          {/* BRAND COLUMN */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-accent/50 transition-colors">
                <img
                  src="/tech_fi_logo_512x512_image.jpeg"
                  alt="The Technology Fiction"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <span className="text-xl font-heading font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                TheTechnology<span className="text-accent">Fiction</span>
              </span>
            </Link>
            
            <p className="text-text-muted leading-relaxed mb-8 max-w-sm text-sm">
              Decoding the Salesforce ecosystem for Architects , Developers and Career Switchers. 
              No fluff, just engineering strategies, career roadmaps, and honest technical deep dives.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-text-muted hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block md:col-span-1" />

          {/* EXPLORE COLUMN */}
          <div className="md:col-span-3">
             <h4 className="font-heading font-bold text-white mb-6 tracking-wide">Explore</h4>
             <ul className="space-y-4">
                <li><Link to="/" className="text-text-muted hover:text-accent transition-colors text-sm block hover:translate-x-1 duration-200">Latest Deep Dives</Link></li>
                <li><Link to="/" className="text-text-muted hover:text-accent transition-colors text-sm block hover:translate-x-1 duration-200">Architect Roadmaps</Link></li>
                <li><Link to="/salesforce-coaching-ajmer" className="text-text-muted/60 hover:text-accent transition-colors text-sm block hover:translate-x-1 duration-200">Ajmer Hub</Link></li>
             </ul>
          </div>

          {/* CONNECT COLUMN */}
          <div className="md:col-span-3">
             <h4 className="font-heading font-bold text-white mb-6 tracking-wide">Connect</h4>
             <ul className="space-y-4">
                <li>
                    <a href="mailto:thetechnologyfiction@gmail.com" className="text-text-muted hover:text-accent transition-colors text-sm flex items-center gap-2 hover:translate-x-1 duration-200">
                        <Mail size={14} /> Email Me
                    </a>
                </li>
                <li>
                    <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm flex items-center gap-2 hover:translate-x-1 duration-200">
                        Privacy Policy <ArrowUpRight size={12} className="opacity-50"/>
                    </a>
                </li>
             </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        {/* Increased padding to md:pr-32 for extra safety */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 md:pr-32 relative z-10">
            <p className="text-zinc-500 text-xs">
                &copy; 2024 The Technology Fiction. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500">Client services delivered via</span>
                <a 
                  href="https://www.techfilabs.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  /* Added 'relative z-[100]' to force it above any overlapping elements */
                  className="font-bold text-accent text-xs uppercase tracking-[0.15em] hover:text-white transition-colors border-b border-transparent hover:border-blue-500 pb-0.5 cursor-pointer relative z-[100]"
                >
                  <strong>TechFi Labs</strong>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;