import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Award, 
  Clock, 
  ShieldCheck, 
  UserCheck, 
  Wallet, 
  Sparkles,
  ArrowRight,
  MoveRight
} from 'lucide-react';

const WhyChooseUsWhite = () => {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  const indicatorOpacity = useTransform(scrollXProgress, [0, 0.08], [1, 0]);
  const indicatorScale = useTransform(scrollXProgress, [0, 0.08], [1, 0.8]);

  const reasons = [
    { id: "01", title: "Certified Experts", desc: "ICU-trained nurses background-verified for safety.", icon: <Award />, img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800" },
    { id: "02", title: "24/7 Response", desc: "Emergency support available anytime across Chennai.", icon: <Clock />, img: "https://images.unsplash.com/photo-1584982324572-755d14c597c5?auto=format&fit=crop&q=80&w=800" },
    { id: "03", title: "Hygiene Priority", desc: "Strict adherence to international safety protocols.", icon: <ShieldCheck />, img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800" },
    { id: "04", title: "Personalized Care", desc: "Customized recovery plans tailored to patient needs.", icon: <UserCheck />, img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800" },
    { id: "05", title: "Transparent Pricing", desc: "Premium care with no hidden hospital charges.", icon: <Wallet />, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" },
    { id: "06", title: "Advanced Kits", desc: "High-end medical tools for home-based ICU setups.", icon: <Sparkles />, img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#F8FAFC] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center space-x-3 mb-4">
              <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
              <span className="text-blue-600 text-[10px] uppercase tracking-[0.4em] font-bold">The Difference</span>
            </motion.div>
            
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-[#0F172A] text-5xl md:text-7xl font-light tracking-tighter leading-tight">
              Why Families <br /> 
              <span className="text-blue-600 italic font-medium">Trust Us.</span>
            </motion.h2>
          </div>
          
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-slate-500 text-sm md:text-base max-w-xs font-light border-l-2 border-blue-100 pl-6">
            We combine clinical precision with the warmth of home care across Chennai.
          </motion.p>
        </div>

        {/* RE-DESIGNED CARDS */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible pb-12 md:pb-0 snap-x snap-mandatory hide-scrollbar"
          >
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="min-w-[85vw] md:min-w-0 snap-center group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
              >
                {/* 1. IMAGE SECTION (Top 50%) */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Floating Step Number */}
                  <div className="absolute top-6 right-6 text-white/40 font-black text-4xl italic tracking-tighter">
                    {item.id}
                  </div>
                </div>

                {/* 2. CONTENT SECTION (Bottom 50%) */}
                <div className="relative p-8 pt-10">
                  {/* Floating Icon Box */}
                  <div className="absolute -top-8 left-8 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30 group-hover:-translate-y-2 transition-transform duration-300">
                    {React.cloneElement(item.icon, { size: 28, strokeWidth: 1.5 })}
                  </div>

                  <h3 className="text-[#0F172A] text-2xl font-bold mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {item.desc}
                  </p>

                  {/* Clean Action Link */}
                  <div className="flex items-center gap-2 text-blue-600 text-[11px] font-bold uppercase tracking-[0.2em]">
                    <span>Learn More</span>
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* PROGRESS INDICATOR (Mobile Only) */}
          <div className="mt-12 flex flex-col items-center md:hidden">
            <motion.div style={{ opacity: indicatorOpacity, scale: indicatorScale }} className="flex items-center gap-3 mb-4 text-blue-600">
              <span className="text-[10px] font-bold uppercase tracking-widest">Swipe</span>
              <MoveRight size={18} />
            </motion.div>
            <div className="w-32 h-1 bg-slate-200 rounded-full overflow-hidden">
              <motion.div style={{ scaleX: scrollXProgress }} className="h-full bg-blue-600 origin-left" />
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

export default WhyChooseUsWhite;