import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { Shield, Wrench, Award } from 'lucide-react';

export default function Products({ onOpenQuote }) {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans tech-grid-bg relative overflow-hidden">
      
      {/* 1. Page Hero Banner matching site style */}
      <section className="relative py-3 sm:py-5 bg-slate-950 border-b border-slate-800/80 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
            Carbide Cutting Tools &amp; <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-act-red via-red-500 to-amber-500">
              CNC Tooling Accessories.
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Manufactured in Peenya 2nd Stage, Bangalore, or supplied ready for immediate machine shop dispatch across India.
          </p>

          {/* Quick Specs Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            <span className="px-3.5 py-1.5 bg-slate-900/90 border border-slate-800 rounded-xl text-xs font-mono font-semibold text-slate-200 shadow-md backdrop-blur-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-act-red" />
              <span>±0.002mm ISO H6 Tolerance</span>
            </span>
            <span className="px-3.5 py-1.5 bg-slate-900/90 border border-slate-800 rounded-xl text-xs font-mono font-semibold text-slate-200 shadow-md backdrop-blur-sm flex items-center gap-2">
              <Shield className="w-4 h-4 text-act-red" />
              <span>Sub-micron Grain Carbide</span>
            </span>
            <span className="px-3.5 py-1.5 bg-slate-900/90 border border-slate-800 rounded-xl text-xs font-mono font-semibold text-slate-200 shadow-md backdrop-blur-sm flex items-center gap-2">
              <Wrench className="w-4 h-4 text-act-red" />
              <span>Custom Blueprint Form Tools</span>
            </span>
          </div>

        </div>
      </section>

      {/* Transition Device */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-act-red/40 to-transparent"></div>

      {/* 2. Main Product Grid Section */}
      <ProductGrid onOpenQuote={onOpenQuote} showFilters={true} showTitle={false} />

    </div>
  );
}
