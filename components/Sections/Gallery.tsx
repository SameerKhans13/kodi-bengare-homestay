import React from 'react';
import { GALLERY_IMAGES } from '../../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 reveal-on-scroll">
          <span className="text-brand-500 font-semibold uppercase tracking-wider text-sm">Photos</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">
            A Glimpse of Paradise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className={`reveal-on-scroll relative group overflow-hidden rounded-xl shadow-md ${
                idx === 0 || idx === 4 ? 'md:col-span-2' : ''
              } h-64 md:h-80`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;