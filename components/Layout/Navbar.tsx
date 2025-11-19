import React, { useState, useEffect } from 'react';
import { Menu, X, CalendarCheck } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="relative z-10"
            >
              <h1 className={`text-2xl font-serif font-bold tracking-wide transition-colors duration-300 ${
                isScrolled || isOpen ? 'text-brand-900' : 'text-white drop-shadow-md'
              }`}>
                Kodi Bengare
                <span className={`block text-[10px] font-sans font-bold uppercase tracking-[0.3em] transition-colors duration-300 ${
                  isScrolled || isOpen ? 'text-brand-600' : 'text-brand-100'
                }`}>
                  Homestay
                </span>
              </h1>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-brand-600' 
                    : 'text-white/90 hover:text-white'
                } relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={scrollToContact}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 shadow-lg ${
                isScrolled
                  ? 'bg-brand-600 text-white hover:bg-brand-700'
                  : 'bg-white text-brand-900 hover:bg-brand-50'
              }`}
            >
              <CalendarCheck size={16} />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                 isScrolled || isOpen ? 'text-slate-800' : 'text-white'
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-serif text-slate-800 hover:text-brand-600 transition-colors"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={scrollToContact}
            className="mt-8 w-full max-w-xs bg-brand-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl active:scale-95 transition-transform"
          >
            Book Your Stay
          </button>
          
          <div className="absolute bottom-10 text-center">
            <p className="text-slate-400 text-sm">Call us directly</p>
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-brand-600 font-bold text-lg mt-1 block">
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;