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

export default function LandingPageClient() {
  return (
    <AudienceProvider>
      <div className="flex min-h-screen flex-col bg-background">
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
    </AudienceProvider>
  );
}
