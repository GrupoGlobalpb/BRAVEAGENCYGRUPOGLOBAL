import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import BraveIntranet from '../components/BraveIntranet';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
        <Stats />
        <Testimonials />
        <BraveIntranet />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
