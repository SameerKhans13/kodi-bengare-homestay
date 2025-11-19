import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Zoom effect on load
      gsap.fromTo(bgRef.current, 
        { scale: 1.1 },
        { scale: 1, duration: 2, ease: "power2.out" }
      );

      // Parallax on scroll
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(textRef.current, {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'center top',
          scrub: 0.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center bg-slate-900"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef}
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
          alt="Kodi Bengare Delta Beach"
          className="w-full h-[120%] object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
      </div>

      {/* Content Layer */}
      <div
        ref={textRef}
        className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto flex flex-col items-center"
      >
        <div className="mb-6 inline-block border border-white/30 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full">
          <span className="text-xs md:text-sm font-sans font-medium tracking-[0.2em] uppercase">
            Welcome to Paradise
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold mb-8 leading-none tracking-tight drop-shadow-2xl">
          Kodi Bengare Homestay
        </h1>
        
        <p className="text-xl md:text-3xl font-light max-w-2xl mx-auto mb-10 text-brand-50 drop-shadow-md font-serif italic">
          Where luxury begins in the heart of tranquil greenery.
        </p>

        <a 
          href="#about" 
          className="group flex flex-col items-center gap-3 text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            Discover More
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent opacity-50 group-hover:h-24 transition-all duration-500"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;