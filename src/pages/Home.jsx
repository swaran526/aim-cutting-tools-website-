import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import AboutSection from '../components/AboutSection';
import ProductGrid from '../components/ProductGrid';
import FinalCtaBand from '../components/FinalCtaBand';

export default function Home({ onOpenQuote }) {
  return (
    <div className="space-y-0 bg-slate-950">
      
      {/* 1. Hero Section */}
      <Hero onOpenQuote={onOpenQuote} />

      {/* 2. Trust Metrics Strip */}
      <TrustStrip />

      {/* Transition Device 1: Glowing Gradient Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-act-red/40 to-transparent"></div>

      {/* 3. About Section (Asymmetric Story Layout) */}
      <AboutSection onOpenQuote={onOpenQuote} />

      {/* Transition Device 2: Subtle Red Light Bleed */}
      <div className="relative w-full h-6 bg-slate-950 overflow-hidden flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      </div>

      {/* 4. Product Taxonomy Grid Section */}
      <ProductGrid onOpenQuote={onOpenQuote} limit={4} title="Our Precision Tooling Catalog" />



      {/* 7. Final Call-to-Action Banner */}
      <FinalCtaBand onOpenQuote={onOpenQuote} />
      
    </div>
  );
}
