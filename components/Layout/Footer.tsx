import React from 'react';
import { CONTACT_INFO } from '../../constants';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-white py-12 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
             <h3 className="text-2xl font-serif font-bold mb-2">Kodi Bengare Homestay</h3>
             <p className="text-brand-200 text-sm max-w-md">
               Your serene escape near Delta Beach, Udupi. Experience nature, comfort, and culture.
             </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/kodibengrehomestay/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-200 hover:text-white transition-colors flex items-center gap-2"
            >
              <Instagram size={20} />
              <span>kodibengrehomestay</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-300">
          <p>&copy; {new Date().getFullYear()} Kodi Bengare Homestay. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex items-center gap-2">
            <span>Designed with ❤️ for Nature Lovers</span>
            <span className="opacity-50">|</span>
            <span className="group relative cursor-pointer">
              <span className="bg-gradient-to-r from-brand-200 to-teal-200 bg-clip-text text-transparent font-bold hover:from-white hover:to-white transition-all duration-300">
                Brought to life by Sam
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-200 to-teal-200 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;