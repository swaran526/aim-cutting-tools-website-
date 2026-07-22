import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { Layers, Shield, Wrench, Award, Phone } from 'lucide-react';
import companyData from '../data/company.json';

export default function Products({ onOpenQuote }) {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans tech-grid-bg relative overflow-hidden">
      
      {/* 1. Page Hero Banner matching Hero section styling */}
      <section className="relative py-16 sm:py-24 bg-slate-950 border-b border-slate-800/80 text-center overflow-hidden">
        
        {/* Radial Ambient Red and Blue Lighting Glows matching Hero */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-act-red/20 rounded-full filter blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          
          {/* Trust Badge matching Hero */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-200 shadow-lg backdrop-blur-md whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-act-red animate-pulse"></span>
            <span className="text-slate-300">CNC Tooling Catalog</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
            Carbide Cutting Tools & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-act-red via-red-500 to-amber-500">
              CNC Tooling Accessories.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Explore all 14 precision product categories — manufactured in Peenya 2nd Stage, Bangalore, or supplied ready for immediate machine shop dispatch across India.
          </p>

          {/* Quick Specs Pill Strip matching Hero chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="px-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs font-mono font-semibold text-slate-200 shadow-md backdrop-blur-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-act-red" />
              <span>±0.002mm ISO H6 Tolerance</span>
            </span>
            <span className="px-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs font-mono font-semibold text-slate-200 shadow-md backdrop-blur-sm flex items-center gap-2">
              <Shield className="w-4 h-4 text-act-red" />
              <span>Sub-micron Grain Carbide</span>
            </span>
            <span className="px-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs font-mono font-semibold text-slate-200 shadow-md backdrop-blur-sm flex items-center gap-2">
              <Wrench className="w-4 h-4 text-act-red" />
              <span>Custom Blueprint Form Tools</span>
            </span>
          </div>
        </div>
      </section>

      {/* Transition Device: Glowing Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-act-red/40 to-transparent"></div>

      {/* 2. Main Product Grid Section */}
      <ProductGrid onOpenQuote={onOpenQuote} showFilters={true} />

    </div>
  );
}
