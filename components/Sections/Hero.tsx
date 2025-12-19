import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Parallax
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

      // Text Stagger Animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.fromTo(".hero-text-element", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, delay: 0.5 }
      );

      // Scroll Indicator Animation
      gsap.to(".scroll-indicator", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut"
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
      {/* Background Layer with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef}
          src="./hero-section-image.avif"
          alt="Kodi Bengare Delta Beach"
          className="w-full h-[120%] object-cover object-center opacity-90 scale-105"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
        <div className="absolute inset-0 bg-brand-900/10 mix-blend-overlay"></div>
      </div>

      {/* Content Layer */}
      <div
        ref={textRef}
        className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto flex flex-col items-center"
      >
        <div className="hero-text-element mb-4 md:mb-6 inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full hover:bg-white/10 transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
          <span className="text-xs md:text-sm font-sans font-medium tracking-[0.2em] uppercase text-brand-100">
            Welcome to Paradise
          </span>
        </div>
        
        <h1 className="hero-text-element text-5xl md:text-7xl lg:text-9xl font-serif font-bold mb-4 md:mb-8 leading-tight tracking-tight drop-shadow-2xl">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80 pb-4">
            Kodi Bengare
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 font-light italic text-brand-200/90">
            Homestay
          </span>
        </h1>
        
        <p className="hero-text-element text-base md:text-xl font-light max-w-2xl mx-auto mb-8 md:mb-12 text-brand-50/90 drop-shadow-lg leading-relaxed mix-blend-screen px-4">
          Experience the weightless luxury of the coast, where the river meets the sea in perfect harmony.
        </p>

        <div className="hero-text-element flex flex-col items-center gap-6 pb-32 md:pb-0">
          <a 
            href="#about" 
            className="group relative px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
            <span className="relative z-10 text-sm md:text-base font-bold uppercase tracking-[0.2em] text-white">
              Start Your Journey
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hero-text-element opacity-0 scroll-indicator">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;