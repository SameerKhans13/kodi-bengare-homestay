import React, { useRef, useEffect } from 'react';
import { REVIEWS } from '../../constants';
import { Star, Quote } from 'lucide-react';
import gsap from 'gsap';

const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".review-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top 80%",
        }
      });
    }, scrollRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" ref={scrollRef} className="py-16 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
            <span className="font-bold text-slate-700 text-sm">5/5 Rating</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Guest Experiences
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here is what our guests have to say about their stay at Kodi Bengare Homestay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="review-card bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-slate-400">{review.date}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>

              <div className="relative mb-6 flex-grow">
                <Quote size={24} className="text-brand-200 absolute -top-2 -left-2 opacity-50" />
                <p className="text-slate-600 text-sm leading-relaxed relative z-10 pt-2">
                  "{review.text}"
                </p>
              </div>

              {review.response && (
                <div className="mt-auto bg-slate-50 p-4 rounded-lg border-l-4 border-brand-500">
                  <p className="text-xs font-bold text-brand-800 mb-1">Response from Owner</p>
                  <p className="text-xs text-slate-500 italic">
                    {review.response}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
           <a 
             href="https://www.google.com/maps/place/Kodi+Bengare+Homestay" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-800 transition-colors"
           >
             View all reviews on Google
             <span className="text-xl">→</span>
           </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;