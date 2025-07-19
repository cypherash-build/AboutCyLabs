"use client";
import { useState, useEffect } from 'react';
import { AudienceProvider } from '@/components/landing/AudienceContext';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Products from '@/components/landing/Products';
import Founder from '@/components/landing/Founder';
import Vision from '@/components/landing/Vision';
import Impact from '@/components/landing/Impact';
import Footer from '@/components/landing/Footer';
import DarkVeil from './DarkVeil';
import Loader from '../ui/Loader';
import { AnimatePresence } from 'framer-motion';

export default function LandingPageClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <AudienceProvider>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      <div className="flex min-h-screen flex-col bg-background">
        <div className="hyperspeed-background">
          <DarkVeil />
        </div>
        <div className="relative z-10">
          <Header />
          <div className="relative z-0 -mt-20">
            <main>
              <Hero />
              <About />
              <Products />
              <Founder />
              <Vision />
              <Impact />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </AudienceProvider>
  );
}
