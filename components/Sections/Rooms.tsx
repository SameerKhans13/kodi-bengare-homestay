import React, { useRef, useEffect } from 'react';
import { ROOMS } from '../../constants';
import { Check, ChevronRight, Wifi, Tv, Wind } from 'lucide-react';
import gsap from 'gsap';

const Rooms: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".room-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top 80%",
        }
      });
    }, scrollRef);
    return () => ctx.revert();
  }, []);

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="rooms" ref={scrollRef} className="py-16 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-sm">Experience</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-3 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
             Choose between a luxurious stay at our homestay or an adventurous deep sea safari.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {ROOMS.map((room) => (
            <div 
              key={room.id} 
              className="room-card bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 flex-1 flex flex-col relative">
                {/* Decorative floating circle */}
                <div className="absolute -top-6 right-8 w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center shadow-lg text-white">
                   <span className="font-serif font-bold text-lg">{room.id}</span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">{room.title}</h3>
                <div className="flex gap-4 mb-6 text-slate-400">
                  <Wifi size={18} />
                  <Wind size={18} />
                  <Tv size={18} />
                </div>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {room.features.map((feat, i) => (
                    <li key={i} className="flex items-start text-slate-600 text-sm group/item">
                      <div className="mt-1 mr-3 p-0.5 rounded-full bg-green-100 text-green-600 group-hover/item:bg-green-500 group-hover/item:text-white transition-colors">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={handleBookClick}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-medium hover:bg-slate-800 transition-colors"
                >
                  <span className="flex items-center justify-center gap-2">
                    {room.title.includes('Safari') ? 'Book Boat Ride' : 'Book This Room'}
                    <ChevronRight size={16} />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;