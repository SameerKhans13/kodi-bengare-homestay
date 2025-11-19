import React, { useState } from 'react';
import { CONTACT_INFO } from '../../constants';
import { Phone, Mail, MapPin, User, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-16 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-10">
          <div className="flex flex-col lg:flex-row">
            
            {/* Contact Info Side */}
            <div className="w-full lg:w-5/12 bg-brand-900 text-white p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-800 rounded-full opacity-50"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-serif font-bold mb-6">Reach Out To Us</h2>
                <p className="text-brand-200 mb-8 text-lg">
                  We're here for you! Contact Mr. Deepak for bookings, directions, or any questions about your stay at Kodi Bengare.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm shrink-0">
                      <Phone size={24} className="text-brand-300" />
                    </div>
                    <div>
                      <p className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-1">Phone & Booking</p>
                      <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-2xl font-bold hover:text-brand-300 transition-colors block mb-1">
                        {CONTACT_INFO.phone}
                      </a>
                      <div className="flex items-center gap-2 text-brand-100 bg-brand-800/50 inline-block px-3 py-1 rounded-full text-sm">
                        <User size={14} />
                        <span>Host: Mr. {CONTACT_INFO.name}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm shrink-0">
                      <Mail size={24} className="text-brand-300" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-medium hover:text-brand-300 transition-colors break-all block">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm shrink-0">
                      <MapPin size={24} className="text-brand-300" />
                    </div>
                    <div>
                      <p className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                      <p className="text-lg leading-snug text-brand-50">
                        {CONTACT_INFO.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-7/12 p-8 lg:p-12 bg-white">
               <div className="mb-8">
                 <h3 className="text-2xl font-bold text-slate-800 mb-2">Send an Inquiry</h3>
                 <p className="text-slate-500">Fill out the form below and we'll get back to you instantly.</p>
               </div>

               <form className="space-y-5" onSubmit={handleSubmit}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">First Name</label>
                     <input required type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all" placeholder="John" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                     <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all" placeholder="Doe" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                   <input required type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all" placeholder="john@example.com" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                   <input required type="tel" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all" placeholder="+91 99999 99999" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                   <textarea required rows={3} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all resize-none" placeholder="I'm interested in booking..."></textarea>
                 </div>

                 <div className="pt-2">
                   <button 
                    type="submit" 
                    disabled={isSubmitted}
                    className={`w-full text-white font-bold uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2 ${isSubmitted ? 'bg-green-600' : 'bg-brand-600 hover:bg-brand-700 hover:shadow-brand-500/30'}`}
                   >
                     {isSubmitted ? (
                       <>
                        <CheckCircle size={20} />
                        Sent Successfully
                       </>
                     ) : 'Send Message'}
                   </button>
                 </div>
               </form>
            </div>

          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-96 w-full reveal-on-scroll">
          <iframe 
            src="https://maps.google.com/maps?q=CMWW%2BV42%2C%20Kodi%20Bengare-Hoode%20Rd%2C%20Kodi%20Bengare%2C%20Kodi%2C%20Karnataka%20576218&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Kodi Bengare Homestay Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;