import React, { useRef, MouseEvent } from 'react';
import { AMENITIES } from '../../constants';

const FeatureCard: React.FC<{ item: typeof AMENITIES[0] }> = ({ item }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; 
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  const Icon = item.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="reveal-on-scroll bg-white p-8 rounded-2xl shadow-xl transition-all duration-200 ease-out border border-slate-100 group cursor-default h-full"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-colors duration-300" style={{ transform: 'translateZ(20px)' }}>
        <Icon className="text-brand-500 group-hover:text-white transition-colors duration-300" size={28} />
      </div>
      <h3 className="text-xl font-bold font-serif text-slate-900 mb-3" style={{ transform: 'translateZ(30px)' }}>
        {item.title}
      </h3>
      <p className="text-slate-600 leading-relaxed" style={{ transform: 'translateZ(20px)' }}>
        {item.description}
      </p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Premium Amenities
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Indulge in a world of luxury and comfort with our exclusive homestay amenities designed to create unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;