import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ShieldCheck, Clock, MapPin } from 'lucide-react';

const FinalCTACinematicWhite = () => {
  const phoneNumber = "+919952388983";
  const whatsappNumber = "919952388983";

  return (
    <section className="relative w-full py-24 lg:py-40 bg-white overflow-hidden selection:bg-blue-600/10">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src="https://thecompanion.in/wp-content/uploads/2025/01/AdobeStock_34800743-645x645-1.jpeg" 
          className="w-full h-full object-cover"
          alt="Healthcare Background"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
      </div>

      {/* GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[400px] bg-blue-400/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        
        {/* HEADING */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#050505] text-5xl sm:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.95] mb-10"
        >
          Need Immediate <br />
          <span className="text-blue-600 italic font-medium">Nursing Care?</span>
        </motion.h2>

        {/* TEXT */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-16 px-4"
        >
          Your family’s health cannot wait. Connect with our ICU-certified nursing team in Chennai instantly.
        </motion.p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
          
          {/* CALL */}
          <motion.a
            href={`tel:${phoneNumber}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full sm:w-auto flex items-center justify-center gap-4 bg-blue-600 text-white px-12 py-6 rounded-[2rem] font-bold text-sm uppercase tracking-[0.2em] shadow-lg transition-all"
          >
            <Phone size={18} className="animate-pulse" />
            Call Now
          </motion.a>

          {/* WHATSAPP */}
          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-slate-900 border px-12 py-6 rounded-[2rem] font-bold text-sm uppercase tracking-[0.2em] shadow-md"
          >
            <MessageCircle size={18} className="text-green-500" />
            WhatsApp
          </motion.a>
        </div>

        {/* TRUST */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto pt-16 border-t">
          {[
            { icon: <Clock size={24}/>, title: "Quick Reach", desc: "Response in 2 Hours" },
            { icon: <ShieldCheck size={24}/>, title: "Safe Care", desc: "Verified Professionals" },
            { icon: <MapPin size={24}/>, title: "Local Presence", desc: "Serving all of Chennai" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3">
              <div className="text-blue-600">{item.icon}</div>
              <h4 className="text-xs font-black uppercase">{item.title}</h4>
              <p className="text-slate-400 text-[10px] uppercase">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FINAL CALL */}
        <div className="mt-20">
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.5em] mb-4">
            Direct Clinical Line
          </p>
          <a
            href={`tel:${phoneNumber}`}
            className="text-[#050505] text-2xl sm:text-4xl font-light hover:text-blue-600 transition"
          >
            +91 9952388983
          </a>
        </div>

      </div>
    </section>
  );
};

export default FinalCTACinematicWhite;