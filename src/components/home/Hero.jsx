import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ChevronRight, Shield } from 'lucide-react';

const CinematicHero = () => {
  const phoneNumber = "+919952388983";

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-black font-sans">
      
      {/* BACKGROUND */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_1280.jpg" 
          alt="Chennai Home Care" 
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] z-10" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 mt-25 w-full">
        <div className="max-w-3xl">
          
          {/* Top Line */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center space-x-3 mb-6"
          >
            <span className="h-[1px] w-8 bg-blue-500" />
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-white text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tighter mb-8"
          >
            Humanity in <br />
            <span className="font-medium text-blue-500 italic">Medical <br /> 
            <span className='font-medium text-blue-500 italic'>Care</span></span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-12 font-light tracking-wide opacity-80"
          >
            Experience hospital-grade nursing within the sanctuary of your home. 
            Tailored recovery and elderly support for Chennai's families.
          </motion.p>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >

            {/* BOOK SERVICE → CALL */}
            <a
              href={`tel:${phoneNumber}`}
              className="group relative overflow-hidden bg-blue-600 text-white px-10 py-4 rounded-sm transition-all duration-500 hover:bg-white hover:text-black"
            >
              <span className="relative z-10 flex items-center font-bold tracking-widest text-xs uppercase">
                Book Service
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {/* CALL NUMBER */}
            <a href={`tel:${phoneNumber}`} className="group flex flex-col">
              <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mb-1">
                Emergency Hotline
              </span>
              <span className="text-white text-xl font-medium tracking-tight group-hover:text-blue-400 transition-colors">
                +91 9952388983
              </span>
            </a>

          </motion.div>

          {/* TRUST POINTS */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="mt-20 pt-8 border-t border-white/10 flex flex-wrap gap-x-12 gap-y-6"
          >
            {[
              { label: "Certified Staff", icon: Shield },
              { label: "24/7 Response", icon: Phone },
              { label: "Home Specialized", icon: Shield }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-400">
                <item.icon size={14} className="text-blue-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* SIDE TEXT */}
      <div className="absolute right-12 bottom-12 hidden lg:block">
        <span className="text-white/30 text-xs font-bold uppercase tracking-[1em] rotate-90 origin-right inline-block">
          Chennai Home Nursing
        </span>
      </div>
    </section>
  );
};

export default CinematicHero;