import React from 'react';

// 1. Layout Components (Keeping your structure)
import Navigation from '../components/layout/Navigation'; 
import Hero from '../components/sections/Hero'; 

// 2. Feature Components
import FeaturedGuides from '../components/FeaturedGuides';
import Newsletter from '../components/Newsletter'; // Now this exists!
import WhatsAppChatButton from '../components/WhatsAppChatButton';

// 3. Footer (Check if this is in layout or components folder in your tree)
// If your Footer is in src/components/layout/Footer.jsx, change this path to '../components/layout/Footer'
import Footer from '../components/layout/Footer'; 

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      
      <Navigation />

      <main>
        {/* The Authority Hero */}
        <Hero />

        {/* The Value Stack */}
        <FeaturedGuides />
        
        {/* The Lead Magnet */}
        <Newsletter />
      </main>

      <Footer />
      
      {/* Floating Call to Action */}
      <WhatsAppChatButton />
      
    </div>
  );
}