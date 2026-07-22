import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Shield, CheckCircle2, ChevronLeft, ChevronRight, Award, Phone, Zap } from 'lucide-react';
import companyData from '../data/company.json';
import productsData from '../data/products.json';

export default function Hero({ onOpenQuote }) {
  // 6 Flagship showcase items
  const flagshipTools = productsData.slice(0, 6);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % flagshipTools.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [flagshipTools.length]);

  const currentTool = flagshipTools[activeSlide];

  return (
    <section className="relative w-full min-h-[92vh] bg-slate-950 text-white overflow-hidden flex flex-col justify-center tech-grid-bg">

      {/* Radial Ambient Red Lighting Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-act-red/10 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12 sm:pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Hero Left Copy Content */}
          <div className="lg:col-span-6 space-y-6 text-left flex flex-col justify-between">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-200 shadow-lg backdrop-blur-md self-start">
              <span className="w-2.5 h-2.5 rounded-full bg-act-red animate-pulse shrink-0"></span>
              <span className="text-slate-300">EST. 2016 • PEENYA 2ND STAGE, BANGALORE</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
              Precision Carbide Tooling. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-act-red via-red-500 to-amber-500">
                Manufactured to Perform.
              </span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              AIM CUTTING TOOLS (ACT) specializes in <strong className="text-white font-semibold">Solid Carbide Drills, Endmills, Reamers, and Custom Form Tools</strong> built to exact blueprints. Full in-house resharpening & PVD re-coating facility in Peenya, Bangalore.
            </p>

            {/* Quick Feature Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center space-x-3 shadow-md backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-act-red shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-100">±0.002mm ISO H6</p>
                  <p className="text-[11px] text-slate-300">Micron Tolerance</p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center space-x-3 shadow-md backdrop-blur-sm">
                <Shield className="w-5 h-5 text-act-red shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-100">100% CNC Built</p>
                  <p className="text-[11px] text-slate-300">German/Swiss Grinding</p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center space-x-3 shadow-md backdrop-blur-sm">
                <Wrench className="w-5 h-5 text-act-red shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-100">Quick Regrind</p>
                  <p className="text-[11px] text-slate-300">24-48h Turnaround</p>
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-base font-bold rounded-xl transition-all shadow-xl shadow-act-red/25 hover:shadow-act-red/40 flex items-center justify-center space-x-3 group transform active:scale-95 cursor-pointer"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                to="/products"
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-base font-semibold rounded-xl border border-slate-700/80 hover:border-slate-500 transition-all flex items-center justify-center space-x-2 text-center shadow-lg"
              >
                <span>Explore Catalog (14+)</span>
              </Link>
            </div>

            {/* Quick Sales Contact Line */}
            <div className="pt-2 text-xs text-slate-300 flex flex-wrap items-center gap-y-1 gap-x-4">
              <a 
                href={`tel:${companyData.contact.phonePrimary}`} 
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-act-red font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-act-red" />
                <span>Sales: {companyData.contact.phonePrimary}</span>
              </a>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <span className="text-slate-400">Founder: <strong className="text-slate-200">{companyData.founder}</strong></span>
            </div>

          </div>

          {/* Hero Right Interactive Showcase Card */}
          <div className="lg:col-span-6 relative w-full h-[520px] sm:h-[560px] flex flex-col shrink-0">
            
            {/* Soft Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-act-red/30 to-amber-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>

            {/* Card Frame */}
            <div className="relative bg-slate-900/95 border border-slate-800/90 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden h-full flex flex-col justify-between">
              
              {/* Card Top Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 shrink-0">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-act-red animate-pulse"></span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 font-display">Flagship CNC Showcase</span>
                </div>
                <span className="text-xs font-mono font-bold text-act-red bg-act-red/10 px-3 py-1 rounded-full border border-act-red/30">
                  0{activeSlide + 1} / 0{flagshipTools.length}
                </span>
              </div>

              {/* Product Preview Image Frame - LOCKED SIZE */}
              <div className="relative my-3 h-[240px] sm:h-[280px] w-full flex items-center justify-center bg-slate-950/90 rounded-xl border border-slate-800/90 overflow-hidden shadow-inner shrink-0">
                <img 
                  src={currentTool.image} 
                  alt={currentTool.name}
                  className="w-full h-full object-cover rounded-xl transition-all duration-500 transform hover:scale-105 filter drop-shadow-xl"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-2 text-left flex-1 flex flex-col justify-center">
                <div className="flex items-center justify-between gap-2 shrink-0">
                  <h3 className="text-base sm:text-lg font-bold text-white font-display truncate h-7">{currentTool.name}</h3>
                  <span className="text-xs px-2.5 py-0.5 bg-slate-800 text-slate-300 rounded-md font-medium shrink-0 border border-slate-700">
                    {currentTool.type}
                  </span>
                </div>
                
                {/* Description with fixed height to prevent vertical shifting */}
                <p className="text-xs text-slate-400 h-8 line-clamp-2 leading-relaxed shrink-0">
                  {currentTool.shortDescription}
                </p>

                {/* Specs Pill Summary */}
                <div className="flex flex-wrap items-center gap-2 pt-1 shrink-0">
                  <span className="text-[11px] font-mono px-2 py-0.5 bg-slate-800/80 text-slate-300 rounded border border-slate-700/60">
                    Sub-micron Carbide
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 bg-slate-800/80 text-slate-300 rounded border border-slate-700/60">
                    Custom Diameters
                  </span>
                </div>
              </div>

              {/* Slider Navigation & Direct Quote CTA */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between shrink-0">
                <div className="flex space-x-1.5">
                  {flagshipTools.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === activeSlide ? 'w-6 bg-act-red' : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveSlide((prev) => (prev - 1 + flagshipTools.length) % flagshipTools.length)}
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer border border-slate-700"
                    aria-label="Previous Tool"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveSlide((prev) => (prev + 1) % flagshipTools.length)}
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer border border-slate-700"
                    aria-label="Next Tool"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Hero Bottom Trust Bar */}
      <div className="w-full bg-slate-950 border-t border-b border-slate-800/80 py-5 relative z-10 tech-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-800/80">
            <div className="px-2">
              <p className="text-xl sm:text-2xl font-extrabold font-mono text-act-red">±0.002 mm</p>
              <p className="text-xs text-slate-300 font-medium mt-0.5">Manufacturing Tolerance</p>
            </div>
            <div className="px-2">
              <p className="text-xl sm:text-2xl font-extrabold font-mono text-white">14+ Categories</p>
              <p className="text-xs text-slate-300 font-medium mt-0.5">Precision Cutting Tools</p>
            </div>
            <div className="px-2">
              <p className="text-xl sm:text-2xl font-extrabold font-mono text-white">500+ Machine Shops</p>
              <p className="text-xs text-slate-300 font-medium mt-0.5">Serviced Across India</p>
            </div>
            <div className="px-2">
              <p className="text-xl sm:text-2xl font-extrabold font-mono text-amber-400">24-48 Hours</p>
              <p className="text-xs text-slate-300 font-medium mt-0.5">Rapid Resharpening</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
