import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });
      
      gsap.from(textRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-brand-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div ref={imgRef} className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
              <img 
                src="/exterior.jpg" 
                alt="Kodi Bengare Homestay Courtyard" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <p className="font-serif italic text-xl">"Unbeatable luxury, unmatched price."</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-4 border-brand-200 rounded-2xl"></div>
          </div>

          {/* Text Side */}
          <div ref={textRef} className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-12 bg-brand-500 rounded-full"></span>
              <span className="text-brand-600 font-semibold uppercase tracking-wider text-sm">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Experience Luxury in Delta Beach <br/>
              <span className="text-brand-500">Where Luxury Begins</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Nestled by a serene, less-populated beach near Delta Beach, Udupi, our charming homestay offers a perfect blend of tranquil luxury and warm hospitality.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Whether you are looking to hire a fishing boat to explore the waters, or simply relax in our sandy courtyard, Kodi Bengare Homestay is your home away from home.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-brand-400">
                <h4 className="font-bold text-2xl text-brand-600">100%</h4>
                <p className="text-sm text-slate-500">Satisfaction Guaranteed</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-brand-400">
                <h4 className="font-bold text-2xl text-brand-600">10m</h4>
                <p className="text-sm text-slate-500">From the Beach</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;