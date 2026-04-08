import React from 'react'
import Navbar from '../components/home/Navbar';
import HeroSection from '../components/home/Hero';
import Service from '../components/home/Service'
import WhyChooseUs from '../components/home/ChooseUs';
import TestimonialsSection from '../components/home/Testimonal';
import FinalCTAWitness from '../components/home/CTA';
import Footer from '../components/home/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Service/>
      <WhyChooseUs/>
      <TestimonialsSection/>
      <FinalCTAWitness/>
      <Footer/>

    </div>
  )
}

export default Home
