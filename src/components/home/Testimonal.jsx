import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, User, MessageSquare, CheckCircle, Plus } from 'lucide-react';

const TestimonialsSectionDark = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: '', text: '', rating: 5 });
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const defaultReviews = [
    { id: 1, name: "Arun Kumar", rating: 5, text: "Exceptional ICU-trained care in T. Nagar. Highly professional.", date: "2 days ago" },
    { id: 2, name: "Priya S.", rating: 4, text: "Reliable home nursing in Chennai. High hygiene standards.", date: "1 week ago" },
    { id: 3, name: "Vikram R.", rating: 5, text: "Kind staff and 24/7 support. A lifesaver.", date: "3 days ago" }
  ];

  useEffect(() => {
    const savedReviews = localStorage.getItem('healthcare_reviews_dark');
    setReviews(savedReviews ? JSON.parse(savedReviews) : defaultReviews);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { ...formData, id: Date.now(), date: "Just now" };
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('healthcare_reviews_dark', JSON.stringify(updatedReviews));
    setIsSubmitted(true);
    setFormData({ name: '', text: '', rating: 5 });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-[#050505] font-sans overflow-hidden">
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.img 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }} 
          transition={{ duration: 2 }}
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-10 md:mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center gap-3 mb-4">
            <span className="h-[1px] w-6 bg-blue-600" />
            <span className="text-blue-500 text-[10px] uppercase tracking-[0.3em] font-bold">Testimonials</span>
            <span className="h-[1px] w-6 bg-blue-600" />
          </motion.div>
          <h2 className="text-white text-4xl md:text-7xl font-light tracking-tighter leading-tight">
            Voices of <span className="text-blue-600 italic">Trust.</span>
          </h2>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* FORM - APPEARS FIRST ON MOBILE */}
          <div className="order-first lg:order-last lg:col-span-4 lg:sticky lg:top-10">
            <motion.div 
              className="w-full p-6 md:p-10 rounded-[2rem] bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-20 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
                    <CheckCircle size={40} className="text-blue-500 mb-2" />
                    <p className="text-white font-bold">Feedback Sent!</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Leave a Review</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                {/* RATING SELECTOR */}
                <div className="space-y-2">
                  <p className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Your Rating</p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button key={s} type="button" onClick={() => setFormData({...formData, rating: s})} onMouseEnter={() => setHoverRating(s)} onMouseLeave={() => setHoverRating(0)}>
                        <Star size={24} className={`transition-colors ${s <= (hoverRating || formData.rating) ? "text-blue-500 fill-blue-500" : "text-white/10"}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <input 
                  required type="text" placeholder="Your Name"
                  className="w-full px-5 py-3 md:py-4 bg-white/5 rounded-xl border border-white/5 text-white text-sm focus:border-blue-500 transition-all outline-none"
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                />

                <textarea 
                  required rows="3" placeholder="Share your experience..."
                  className="w-full px-5 py-3 md:py-4 bg-white/5 rounded-xl border border-white/5 text-white text-sm focus:border-blue-500 transition-all outline-none resize-none"
                  value={formData.text} onChange={(e) => setFormData({...formData, text: e.target.value})}
                />

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                  Submit <Plus size={14} />
                </button>
              </form>
            </motion.div>
          </div>

          {/* REVIEWS LIST - SWIPEABLE ON MOBILE */}
          <div className="lg:col-span-8">
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory hide-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0 pb-6">
              {reviews.map((rev) => (
                <div 
                  key={rev.id} 
                  className="min-w-[85vw] md:min-w-[400px] lg:min-w-full snap-center p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500">
                        <User size={18} />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-bold">{rev.name}</h4>
                        <span className="text-[10px] text-slate-500">{rev.date}</span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className={i < rev.rating ? "text-blue-500 fill-blue-500" : "text-white/10"} />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm md:text-base italic leading-relaxed">"{rev.text}"</p>
                </div>
              ))}
            </div>
            {/* MOBILE SWIPE INDICATOR */}
            <div className="flex justify-center mt-2 lg:hidden">
               <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: [-20, 20] }} 
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-1/2 h-full bg-blue-600"
                  />
               </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default TestimonialsSectionDark;