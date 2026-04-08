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

  // Mobile indicator animation: Fade out as user scrolls
  const indicatorOpacity = useTransform(scrollXProgress, [0, 0.08], [1, 0]);
  const indicatorScale = useTransform(scrollXProgress, [0, 0.08], [1, 0.8]);

  const reasons = [
    { id: "01", title: "Certified Experts", desc: "ICU-trained nurses background-verified for safety.", icon: <Award />, img: "https://media.istockphoto.com/id/1437830105/photo/cropped-shot-of-a-female-nurse-hold-her-senior-patients-hand-giving-support-doctor-helping.jpg?s=612x612&w=0&k=20&c=oKR-00at4oXr4tY5IxzqsswaLaaPsPRkdw2MJbYHWgA=" },
    { id: "02", title: "24/7 Response", desc: "Emergency support available anytime across Chennai.", icon: <Clock />, img: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?cs=srgb&dl=pexels-pixabay-40568.jpg&fm=jpg" },
    { id: "03", title: "Hygiene Priority", desc: "Strict adherence to international medical safety protocols.", icon: <ShieldCheck />, img: "https://static.vecteezy.com/system/resources/thumbnails/053/274/306/small/top-view-of-a-stethoscope-and-a-red-heart-shape-over-the-medical-prescription-sheet-on-a-blue-background-photo.jpg" },
    { id: "04", title: "Personalized Care", desc: "Customized recovery plans tailored to patient needs.", icon: <UserCheck />, img: "https://i.pinimg.com/736x/ce/4b/2b/ce4b2be2cca08c7d0a0c3dba19929aa2.jpg" },
    { id: "05", title: "Transparent Pricing", desc: "Premium care with no hidden hospital charges.", icon: <Wallet />, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" },
    { id: "06", title: "Advanced Kits", desc: "High-end medical tools for home-based ICU setups.", icon: <Sparkles />, img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 bg-white overflow-hidden font-sans selection:bg-blue-600/10">
      
      {/* SECTION BACKGROUND IMAGE (Subtle Parallax Layer) */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Medical Background"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* HEADER: Awwwards Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-4"
            >
              <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
              <span className="text-blue-600 text-[10px] uppercase tracking-[0.4em] font-bold">The Difference</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#0F172A] text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.05]"
            >
              Why Families <br /> 
              <span className="text-blue-600 italic font-medium underline decoration-blue-100 underline-offset-8">Trust Us.</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm md:text-base max-w-xs font-light leading-relaxed border-l-2 border-blue-50/50 pl-6"
          >
            We combine clinical precision with the warmth of home care across Chennai.
          </motion.p>
        </div>

        {/* MOBILE: Snap Carousel | DESKTOP: Grid */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible pb-12 md:pb-0 snap-x snap-mandatory hide-scrollbar"
          >
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
                whileTap={{ scale: 0.95 }} // sophisticated Mobile touch feedback
                whileHover={{ y: -10 }}    // Sophisticated Desktop hover
                className="min-w-[80vw] md:min-w-0 snap-center group relative h-[500px] rounded-[3rem] overflow-hidden bg-white shadow-xl shadow-slate-200/50 transition-all duration-500"
              >
                {/* IMAGE LAYER: Always Clear */}
                <div className="absolute inset-0 z-0">
                  <motion.img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Gentle White Gradient for text contrast without grayscale */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent group-hover:from-blue-900/90 group-hover:via-blue-900/40 transition-all duration-700" />
                </div>

                {/* CONTENT LAYER */}
                <div className="absolute inset-0 z-10 p-10 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-blue-600 shadow-xl border border-white/50 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      {React.cloneElement(item.icon, { size: 24, strokeWidth: 1.5 })}
                    </div>
                    <span className="text-blue-600/10 font-black text-6xl group-hover:text-white/20 transition-colors italic tracking-tighter">
                      {item.id}
                    </span>
                  </div>

                  {/* BOTTOM TEXT PANEL with Glass Effect for readability on clear image */}
                  <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-white/40 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-[#0F172A] text-2xl font-bold mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed group-hover:text-slate-700 transition-colors mb-6">
                      {item.desc}
                    </p>
                    
                    {/* Haptic Link */}
                    <div className="flex items-center text-blue-600 text-[10px] font-bold uppercase tracking-widest overflow-hidden">
                      <span className="translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        Consult Experts
                      </span>
                      <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Glassy Top Border on Hover */}
                <div className="absolute top-0 left-0 w-full h-[6px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-30" />
              </motion.div>
            ))}
          </div>

          {/* MOBILE SCROLL INDICATOR BAR */}
          <div className="mt-12 flex flex-col items-center md:hidden">
            <motion.div 
              style={{ opacity: indicatorOpacity, scale: indicatorScale }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em]">START</span>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-blue-600"
              >
                <MoveRight size={20} strokeWidth={1.5} />
              </motion.div>
            </motion.div>

            {/* Progress Track */}
            <div className="w-32 h-[2px] bg-slate-100 rounded-full overflow-hidden relative">
              <motion.div 
                style={{ scaleX: scrollXProgress }}
                className="absolute inset-0 bg-blue-600 origin-left"
              />
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