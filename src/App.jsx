import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ReactLenis } from 'lenis/react';
// Important: if you switched to lenis/react, you might need its CSS.
// If you are still using studio-freight, ignore this CSS import.
// import 'lenis/dist/lenis.css'; 
import Home from "./pages/Home";

// --- MEDICAL THEME PRE-LOADER (Windows-style) ---
const MedicalPreLoader = () => {
  // Animation for the "Windows-style" rotating dots
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1, // Creates the sequential 'pulse'
      },
    },
  };

  const dotVariants = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, -10, 0], // The "hop" animation
      opacity: [0, 1, 0], // Fades in and out
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white overflow-hidden font-sans"
    >
      <div className="flex flex-col items-center">
        
        {/* 1. MEDICAL PULSE/DOTS ANIMATION (Windows-style) */}
        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex gap-2 mb-8"
        >
          {[...Array(5)].map((_, i) => (
            <motion.span 
              key={i} 
              variants={dotVariants}
              className="w-3 h-3 rounded-full bg-blue-600 shadow-md shadow-blue-200"
            />
          ))}
        </motion.div>

        {/* 2. MEDICAL BRANDING (Chennai Home Medico) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-[#0F172A] text-2xl md:text-3xl font-black tracking-tighter flex items-center gap-2 justify-center">
            {/* Simple Medical Icon */}
            <span className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-blue-100">
              +
            </span>
            Chennai <span className="text-blue-600 font-medium">Home Medico</span>
          </h1>
          <p className="text-slate-500 text-[10px] sm:text-xs uppercase tracking-[0.4em] mt-3 font-bold">
            Trusted Clinical Care at Your Home
          </p>
        </motion.div>

        {/* 3. SUBTLE PROGRESS BAR */}
        <div className="w-40 h-[1px] bg-slate-100 mt-10 relative overflow-hidden rounded-full">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
          />
        </div>

      </div>
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Keep loader visible for 2.5 seconds to establish trust
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    // ReactLenis for that premium smooth scroll
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {/* Set the background of the app based on your Home page's theme */}
      <div className="bg-[#050505] min-h-screen">
        
        {/* MEDICAL PRE-LOADER */}
        <AnimatePresence mode="wait">
          {loading && <MedicalPreLoader key="medical-loader" />}
        </AnimatePresence>

        {/* MAIN CONTENT WITH ROUTE TRANSITIONS */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Home />
                </motion.div>
              } 
            />
          </Routes>
        </AnimatePresence>
        
      </div>
    </ReactLenis>
  );
};

export default App;