import React, { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Features from './components/Sections/Features';
import Rooms from './components/Sections/Rooms';
import Reviews from './components/Sections/Reviews';
import Gallery from './components/Sections/Gallery';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from './constants';

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  // Smooth reveal animation setup on mount
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-on-scroll');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const handleWhatsAppClick = () => {
    // Replace with actual number format required for WhatsApp API
    const phone = CONTACT_INFO.phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phone}?text=Hi, I'm interested in booking a stay at Kodi Bengare Homestay.`, '_blank');
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Rooms />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <button 
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} fill="currentColor" className="text-white" />
          <span className="absolute right-full mr-3 bg-white text-green-800 px-3 py-1 rounded-lg shadow-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
          </span>
        </button>
        <a 
          href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
          className="bg-brand-600 hover:bg-brand-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group"
          aria-label="Call Now"
        >
          <Phone size={24} />
          <span className="absolute right-full mr-3 bg-white text-brand-800 px-3 py-1 rounded-lg shadow-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call Now
          </span>
        </a>
      </div>
    </div>
  );
};

export default App;