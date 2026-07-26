import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Shield, CheckCircle2, ChevronLeft, ChevronRight, Award, Phone, Zap } from 'lucide-react';
import companyData from '../data/company.json';
import productsData from '../data/products.json';

export default function Hero({ onOpenQuote }) {
  // All products in hero showcase
  const flagshipTools = productsData;
  const [activeSlide, setActiveSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % flagshipTools.length);
        setFade(true);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, [flagshipTools.length]);

  const currentTool = flagshipTools[activeSlide];

  return (
    <section className="relative w-full min-h-[75vh] bg-gradient-to-b from-slate-900 to-slate-950 bg-slate-950 text-slate-100 overflow-hidden flex flex-col justify-center">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-6 sm:pb-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          {/* Hero Left Copy Content */}
          <div className="lg:col-span-6 space-y-6 text-left flex flex-col justify-between">

            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-200 shadow-lg backdrop-blur-md self-start max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="w-2.5 h-2.5 rounded-full bg-act-red animate-pulse shrink-0"></span>
              <span className="text-slate-300 truncate">EST. 2016 • PEENYA 2ND STAGE, BANGALORE</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight sm:leading-[1.18] tracking-tight">
              <span className="text-brand-red inline sm:block">
                Precision Engineered
              </span>{" "}
              <br className="hidden sm:inline" />
              <span className="text-brand-gradient inline sm:inline-block py-0.5">
                Solid Carbide Cutting Tools
              </span>{" "}
              <br className="hidden sm:inline" />
              <span className="text-brand-blue inline sm:block">
                for High-Performance Manufacturing.
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

            {/* CTA Buttons & Sales Info Grouped */}
            <div className="space-y-4 pt-1">
              {/* Action CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-base font-bold rounded-xl transition-all shadow-xl shadow-act-red/25 hover:shadow-act-red/40 flex items-center justify-center space-x-3 group transform active:scale-95 cursor-pointer"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <Link
                  to="/products"
                  className="px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white text-base font-semibold rounded-xl border border-slate-700/80 hover:border-slate-500 transition-all flex items-center justify-center space-x-2 text-center shadow-lg transform active:scale-95 cursor-pointer"
                >
                  <span>Explore Catalog</span>
                </Link>
              </div>

              {/* Quick Sales Contact Line */}
              <div className="text-xs text-slate-300 flex flex-wrap items-center gap-y-1 gap-x-4 pt-0.5">
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

          </div>

          {/* Hero Right Interactive Showcase Card */}
          <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[540px] lg:h-full flex flex-col group/card">

            {/* Soft Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-act-red/10 to-blue-500/10 rounded-[28px] blur-xl opacity-60 transition duration-1000"></div>

            {/* Card Frame - Full Screen Image & Overlay text */}
            <div className="relative bg-slate-900/95 border border-slate-200/80 rounded-[24px] shadow-2xl shadow-slate-950/15 backdrop-blur-xl overflow-hidden h-full flex flex-col justify-end">

              {/* Product Preview Image - full size */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={currentTool.image}
                  alt={currentTool.name}
                  className={`w-full h-full ${currentTool.slug === 'adjustable-boring-tool' || currentTool.imageFit === 'cover' ? 'object-cover' : 'object-contain'} transition-all duration-300 transform scale-100 group-hover/card:scale-105 filter drop-shadow-xl`}
                  style={{ opacity: fade ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                />

                {/* Lighter bottom-only gradient overlay to keep image clear and text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
              </div>

              {/* Product Info Overlayed over the Image */}
              <div className="relative p-6 sm:p-8 space-y-2 z-10 text-left">
                <h3 className="text-xl sm:text-2xl font-black text-white font-display leading-tight">
                  {currentTool.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  {currentTool.shortDescription}
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>



    </section>
  );
}
