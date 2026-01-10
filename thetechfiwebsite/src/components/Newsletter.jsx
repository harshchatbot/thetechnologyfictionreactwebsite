import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // YOUR REAL CREDENTIALS
    const serviceId = 'service_n22qsrq';
    const templateId = 'template_akdqils';
    const publicKey = '6ICiKx6wEuxS-3WZ5';

    // 🔴 THE FIX: EXACT MAPPING TO YOUR TEMPLATE
    const templateParams = {
      // Template says: Name: {{user_name}}
      user_name: 'Inner Circle Subscriber', 
      
      // Template says: Email: {{user_email}}
      user_email: email,
      
      // Template says: Message: {{user_message}}
      user_message: 'I would like to join the TechFi Inner Circle newsletter.'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setEmail('');
      }, (err) => {
        console.log('FAILED...', err);
        setStatus('error');
      });
  };

  return (
    <section id="newsletter" className="py-24 bg-surface border-y border-white/5 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-accent/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
          <Mail size={14} className="text-accent" />
          <span className="text-accent text-xs font-bold uppercase tracking-widest">Weekly Insights</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Join the <span className="text-accent">Inner Circle</span>
        </h2>
        <p className="text-text-muted mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
          Get my weekly architectural breakdowns, career roadmaps, and unfiltered Salesforce strategies.
        </p>

        {/* THE FORM LOGIC */}
        {status === 'success' ? (
          <div className="flex flex-col items-center justify-center p-8 bg-primary/50 border border-accent/20 rounded-xl max-w-lg mx-auto animate-fade-in">
            <CheckCircle className="text-accent w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">You're in.</h3>
            
            {/* THE "CHECK INBOX" FIX */}
            <p className="text-text-muted">Welcome to the elite. You've been added to the priority list.</p>
            
            <button 
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm text-accent underline hover:text-white"
            >
              Add another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter_your@email.com" 
              className="flex-grow px-5 py-4 bg-primary border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-accent transition-colors shadow-inner disabled:opacity-50"
              required
              disabled={status === 'loading'}
            />
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-200 transition-colors uppercase tracking-wide text-sm flex items-center justify-center gap-2 min-w-[140px] disabled:opacity-70"
            >
              {status === 'loading' ? (
                <Loader2 className="animate-spin w-5 h-5" />
              ) : (
                <>
                  Subscribe
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-4 text-red-400 text-sm">
            Something went wrong. Please email me directly at hello@thetechnologyfiction.com
          </p>
        )}
        
        {status !== 'success' && (
          <p className="mt-6 text-xs text-text-muted/40">
            Join 2,000+ developers. Unsubscribe at any time.
          </p>
        )}

      </div>
    </section>
  );
};

export default Newsletter;