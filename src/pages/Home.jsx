import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/home/Navbar';
import HeroSection from '../components/home/Hero';
import Service from '../components/home/Service'
import WhyChooseUs from '../components/home/ChooseUs';
import TestimonialsSection from '../components/home/Testimonal';
import FinalCTAWitness from '../components/home/CTA';
import Footer from '../components/home/Footer';

const Home = () => {
  // Premium Progress Bar at the top
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-[#050505] selection:bg-blue-600/30 selection:text-blue-500">
      
      {/* 1. CINEMATIC SCROLL PROGRESS (Top) */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* 2. SHARED BACKGROUND GRADIENTS (Floating Orbs) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[30vw] h-[30vw] bg-indigo-600/5 rounded-full blur-[120px]" />
      </div>

      {/* 3. SECTION WRAPPERS WITH REVEAL ANIMATIONS */}
      <Navbar />
      
      <main className="relative">
        <section className="min-h-screen">
          <HeroSection />
        </section>

        {/* Scroll Reveal Wrapper for Sections */}
        {[
          <Service />,
          <WhyChooseUs />,
          <TestimonialsSection />,
          <FinalCTAWitness />
        ].map((Component, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            {Component}
          </motion.div>
        ))}
      </main>

      <Footer />
    </div>
  )
}

export default Home