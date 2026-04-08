import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  UserRound, 
  Stethoscope, 
  Activity, 
  Syringe, 
  Accessibility,
  ArrowRight,
  Plus,
  Phone
} from 'lucide-react';

const HealthcareServices = () => {
  const phoneNumber = "+919952388983";

  const services = [
    { title: "Elderly Care", desc: "Dedicated geriatric support ensuring comfort and dignity for your seniors.", icon: <HeartPulse />, id: "01" },
    { title: "Patient Care", desc: "Round-the-clock bedside assistance with a focus on hygiene and nutrition.", icon: <UserRound />, id: "02" },
    { title: "Post-Surgery", desc: "Specialized clinical monitoring to accelerate recovery after major operations.", icon: <Stethoscope />, id: "03" },
    { title: "ICU At Home", desc: "Hospital-grade critical care equipment and monitoring in your bedroom.", icon: <Activity />, id: "04" },
    { title: "IV Services", desc: "Professional administration of medications and fluids by certified nurses.", icon: <Syringe />, id: "05" },
    { title: "Bedridden Support", desc: "Comprehensive care for mobility-impaired patients to prevent complications.", icon: <Accessibility />, id: "06" },
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#050505] overflow-hidden font-sans">
      
      {/* BACKGROUND DECOR */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-[10%] text-blue-500/10 hidden lg:block"
      >
        <Plus size={120} strokeWidth={1} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <span className="h-[1px] w-12 bg-blue-600" />
              <span className="text-blue-500 text-[10px] uppercase tracking-[0.5em] font-bold">Services</span>
            </div>

            <h2 className="text-white text-5xl md:text-7xl font-light tracking-tighter leading-[0.9]">
              Precision <br /> 
              <span className="text-blue-600 italic font-medium">Home Nursing.</span>
            </h2>
          </div>

          <p className="text-gray-500 text-sm md:text-base max-w-xs font-light leading-relaxed border-l border-white/10 pl-6">
            We bridge the gap between hospital excellence and home comfort in Chennai.
          </p>
        </div>

        {/* SERVICES */}
        <div className="flex lg:grid lg:grid-cols-3 gap-5 overflow-x-auto lg:overflow-visible pb-10 snap-x snap-mandatory hide-scrollbar">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center group relative p-10 rounded-3xl bg-[#0A0A0A] border border-white/5 overflow-hidden transition-all duration-500"
            >

              {/* NUMBER */}
              <span className="absolute -right-4 -top-4 text-9xl font-bold text-white/[0.02] group-hover:text-blue-600/5">
                {service.id}
              </span>

              {/* ICON */}
              <div className="relative w-16 h-16 mb-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition" />
                <div className="relative z-10 text-blue-500 group-hover:text-white group-hover:scale-110 transition">
                  {React.cloneElement(service.icon, { size: 32 })}
                </div>
              </div>

              {/* TEXT */}
              <h3 className="text-white text-2xl font-light mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-8 group-hover:text-gray-400 transition">
                {service.desc}
              </p>

              {/* ACTIONS */}
              <div className="flex items-center justify-between">

                {/* REQUEST SERVICE → CALL */}
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center space-x-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest"
                >
                  <span>Request Service</span>
                  <ArrowRight size={14} />
                </a>

                {/* QUICK CALL ICON */}
                <a
                  href={`tel:${phoneNumber}`}
                  className="bg-blue-600/10 p-2 rounded-full hover:bg-blue-600 hover:text-white transition"
                >
                  <Phone size={16} />
                </a>

              </div>

              {/* BOTTOM LINE */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* MOBILE INDICATOR */}
        <div className="flex lg:hidden justify-center space-x-2 mt-4">
          <div className="w-8 h-[2px] bg-blue-600" />
          <div className="w-4 h-[2px] bg-white/10" />
          <div className="w-4 h-[2px] bg-white/10" />
        </div>
      </div>

      {/* HIDE SCROLLBAR */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default HealthcareServices;