"use client";
import { AudienceProvider } from '@/components/landing/AudienceContext';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Products from '@/components/landing/Products';
import Founder from '@/components/landing/Founder';
import Vision from '@/components/landing/Vision';
import Impact from '@/components/landing/Impact';
import Footer from '@/components/landing/Footer';
import RippleGrid from './RippleGrid';

export default function LandingPageClient() {
  return (
    <AudienceProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <div className="hyperspeed-background">
          <RippleGrid
            gridColor="hsl(var(--accent))"
            rippleIntensity={0.1}
            gridSize={20}
            mouseInteraction={true}
            opacity={0.3}
          />
        </div>
        <div className="relative z-10">
          <Header />
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
    </AudienceProvider>
  );
}
