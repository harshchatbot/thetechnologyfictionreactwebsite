import React from 'react';
import { Terminal, Code, Cpu, ArrowRight } from 'lucide-react';

const guides = [
  {
    icon: Terminal,
    category: "Architecture",
    title: "Salesforce Trigger Frameworks",
    desc: "Stop writing spaghetti code. A deep dive into the handler patterns used in enterprise orgs to manage order of execution.",
    link: "#"
  },
  {
    icon: Code,
    category: "LWC Development",
    title: "Mastering Shadow DOM",
    description: "Why your styles aren't working and how to effectively communicate between parent and child components using LMS.",
    link: "#"
  },
  {
    icon: Cpu,
    category: "AI & Data",
    title: "Building AI Agents for Salesforce",
    description: "How I integrated OpenAI with Apex using Named Credentials and zero middleware to automate case summarization.",
    link: "#"
  }
];

const FeaturedGuides = () => {
  return (
    <section id="resources" className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Technical <span className="text-accent">Deep Dives</span>
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Direct from the trenches of enterprise development. No sales fluff—just the code, architecture, and strategies I use daily.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-surface rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              
              {/* Icon */}
              <div className="mb-6 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <guide.icon size={24} />
              </div>

              {/* Category */}
              <div className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
                {guide.category}
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {guide.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted text-sm leading-relaxed mb-8 border-b border-white/5 pb-8">
                {guide.desc || guide.description}
              </p>

              {/* Link */}
              <a href={guide.link} className="inline-flex items-center gap-2 text-white text-sm font-bold group-hover:gap-3 transition-all">
                Read Article 
                <ArrowRight size={16} className="text-accent" />
              </a>

            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 border border-white/10 rounded-lg text-text-muted hover:text-white hover:border-accent transition-colors text-sm font-medium uppercase tracking-wide">
            View All Resources
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default FeaturedGuides;