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
import Beams from './Beams';

export default function LandingPageClient() {
  return (
    <AudienceProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <div className="hyperspeed-background">
          <Beams
            lightColor="hsl(var(--accent))"
            rotation={-20}
            noiseIntensity={0}
            beamNumber={8}
            speed={0.5}
            scale={0.4}
            beamWidth={2}
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
