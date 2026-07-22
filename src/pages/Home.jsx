import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import AboutSection from '../components/AboutSection';
import ProductGrid from '../components/ProductGrid';
import CapabilitiesSection from '../components/CapabilitiesSection';
import WhyChooseUs from '../components/WhyChooseUs';
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
      <div className="relative w-full h-12 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      </div>

      {/* 4. Product Taxonomy Grid Section */}
      <ProductGrid onOpenQuote={onOpenQuote} limit={14} title="Product Categories Taxonomy (14)" />

      {/* Transition Device 3: Angled Accent Cut Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-act-red/50 to-transparent"></div>

      {/* 5. Capabilities & Servicing (Interactive Tabbed Process Workflow) */}
      <CapabilitiesSection onOpenQuote={onOpenQuote} />

      {/* Transition Device 4: Gradient Bleed Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      {/* 6. Why Choose Us (Split Feature & Stat Showcase) */}
      <WhyChooseUs onOpenQuote={onOpenQuote} />

      {/* 7. Final Call-to-Action Banner */}
      <FinalCtaBand onOpenQuote={onOpenQuote} />
      
    </div>
  );
}
