import React, { useState, useEffect } from 'react';
import { X, Mail, CheckCircle, Loader2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const SubscribeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  // Show after 5 seconds
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('ttf_popup_seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 5000); 
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('ttf_popup_seen', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    const serviceId = 'service_n22qsrq';
    const templateId = 'template_akdqils';
    const publicKey = '6ICiKx6wEuxS-3WZ5';

    // 🔴 THE FIX: EXACT MAPPING
    const templateParams = {
      user_name: 'Popup Subscriber',    // Matches {{user_name}}
      user_email: email,                // Matches {{user_email}}
      user_message: 'Joined via Homepage Popup Modal' // Matches {{user_message}}
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('success');
        localStorage.setItem('ttf_popup_seen', 'true');
        setTimeout(() => setIsOpen(false), 3000);
      }, (err) => {
        console.log('FAILED...', err);
        setStatus('error');
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-8"
          >
            <button onClick={handleClose} className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors"><X size={24} /></button>
            
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="text-green-500 w-8 h-8" /></div>
                <h3 className="text-2xl font-bold text-white mb-2">You're in.</h3>
                <p className="text-text-muted">Welcome to the Inner Circle.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"/>
                    <span className="text-accent text-xs font-bold uppercase tracking-widest">Limited Access</span>
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-white mb-4">Don't Miss the <span className="text-accent">Blueprint.</span></h2>
                  <p className="text-text-muted leading-relaxed">Join 2,000+ developers getting my weekly Salesforce architecture breakdowns.</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input type="email" placeholder="enter_your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-5 py-4 bg-primary border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-accent transition-colors" required />
                  <button type="submit" disabled={status === 'loading'} className="w-full py-4 bg-accent text-primary font-bold rounded-lg hover:bg-white transition-colors uppercase tracking-wide flex items-center justify-center gap-2">
                    {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Join Inner Circle'}
                  </button>
                </form>
                <p className="mt-6 text-center text-xs text-text-muted/40">No spam. Unsubscribe anytime.</p>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SubscribeModal;