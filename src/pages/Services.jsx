import React, { useState } from 'react';
import { RotateCcw, Wrench, Layers, CheckCircle2, ArrowRight, Phone, ShieldCheck, Award, Zap, Truck, SearchCheck, Clock, Sparkles, Send } from 'lucide-react';
import companyData from '../data/company.json';

export default function Services({ onOpenQuote }) {
  const [activeBeforeAfter, setActiveBeforeAfter] = useState('after');

  const pvdCoatings = [
    {
      name: "AlTiN",
      fullname: "Aluminum Titanium Nitride",
      bestFor: "Hardened Steels (up to 65 HRC), Mold & Die Steels",
      maxTemp: "900°C",
      benefit: "High thermal breakdown resistance for dry high-speed milling",
      badgeColor: "bg-act-red/10 text-act-red border-act-red/30",
    },
    {
      name: "TiAlN",
      fullname: "Titanium Aluminum Nitride",
      bestFor: "Stainless Steel, Mild Steel, Cast Iron & Alloy Steels",
      maxTemp: "800°C",
      benefit: "Versatile general-purpose protection with low edge build-up",
      badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    },
    {
      name: "nACo",
      fullname: "Nanocomposite AlTiN/Si3N4",
      bestFor: "Titanium Gr.5, Inconel 718, Superalloys & Stainless",
      maxTemp: "1100°C",
      benefit: "Nanocomposite extreme hardness (38 GPa) & extreme heat barrier",
      badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/30",
    },
    {
      name: "DLC",
      fullname: "Diamond-Like Carbon",
      bestFor: "Non-Ferrous Materials, Aluminum Alloys & Copper",
      maxTemp: "400°C",
      benefit: "Ultra-low friction (µ ≤ 0.1) preventing BUE & material galling",
      badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    },
  ];

  const processSteps = [
    {
      step: "01",
      icon: Truck,
      title: "Collect & Ship Batch",
      desc: "Send worn tools to Peenya workshop or schedule local pickup.",
    },
    {
      step: "02",
      icon: SearchCheck,
      title: "Inspection & Quote",
      desc: "Micro-inspection of flutes to issue fixed batch quote before grinding.",
    },
    {
      step: "03",
      icon: RotateCcw,
      title: "5-Axis Regrind & Coating",
      desc: "Precision CNC regrinding to ±0.002mm OEM geometry + PVD coating.",
    },
    {
      step: "04",
      icon: Clock,
      title: "Delivery in 24–48 Hrs",
      desc: "Quality-certified tool batch dispatched to your CNC shop floor.",
    },
  ];

  return (
    <div className="bg-slate-950 text-white font-sans min-h-screen tech-grid-bg relative overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative py-6 sm:py-8 bg-gradient-to-b from-slate-900 to-slate-950 bg-slate-950 border-b border-slate-800/80 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white max-w-4xl mx-auto">
            OEM-Quality Resharpening &amp; <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-act-red via-red-500 to-amber-500">
              Advanced PVD Coating Services
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Cut tooling replacement costs by up to <strong className="text-white">60%</strong> with 5-axis CNC grinding precision down to <strong className="text-act-red font-mono">±0.002 mm</strong>.
          </p>

          {/* CTAs */}
          <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-xs font-bold rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2 cursor-pointer transform active:scale-95 border-none"
            >
              <Wrench className="w-4 h-4 text-white" />
              <span>Request Servicing Quote</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            
            <a
              href={`tel:${companyData.contact.phonePrimary}`}
              className="w-full sm:w-auto px-6 py-3 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold rounded-xl border border-slate-700/80 hover:border-slate-500 transition-all flex items-center justify-center space-x-2 text-center shadow-md"
            >
              <Phone className="w-4 h-4 text-act-red shrink-0" />
              <span>Call: +91 {companyData.contact.phonePrimary}</span>
            </a>
          </div>

        </div>
      </section>

      {/* Transition Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-act-red/40 to-transparent"></div>

      {/* 2. Process Flow */}
      <section className="py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-xl sm:text-2xl font-extrabold font-display text-white">How Tool Servicing Works</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 relative overflow-hidden group hover:border-act-red/50 transition-all shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-act-red/10 border border-act-red/30 text-act-red flex items-center justify-center group-hover:bg-act-red group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-black font-mono text-slate-700 group-hover:text-act-red transition-colors">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      {/* 3. Core Services */}
      <section className="py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 text-left">
        
        {/* Service 01: Precision CNC Resharpening */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Micro-Inspection Scope */}
          <div className="lg:col-span-5 relative">
            <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl backdrop-blur-xl group hover:border-act-red/50 transition-all">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <RotateCcw className="w-4 h-4 text-act-red" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">Micro-Inspection</span>
                </div>
                <span className="text-xs font-mono font-bold text-act-red bg-act-red/10 px-2.5 py-0.5 rounded-full border border-act-red/30">
                  5-Axis CNC
                </span>
              </div>

              {/* Before/After Toggle */}
              <div className="relative bg-slate-950 rounded-xl p-3 border border-slate-800 text-center space-y-2">
                <div className="flex items-center justify-between bg-slate-900 rounded-lg p-1 border border-slate-800">
                  <button
                    onClick={() => setActiveBeforeAfter('before')}
                    className={`flex-1 py-1 text-xs font-bold rounded transition-all ${
                      activeBeforeAfter === 'before' 
                        ? 'bg-red-500/20 text-act-red border border-act-red/40' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Worn Edge (Before)
                  </button>
                  <button
                    onClick={() => setActiveBeforeAfter('after')}
                    className={`flex-1 py-1 text-xs font-bold rounded transition-all ${
                      activeBeforeAfter === 'after' 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    5-Axis Reground (After)
                  </button>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-left space-y-1.5">
                  {activeBeforeAfter === 'before' ? (
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Flute Edge Status:</span>
                        <span className="text-act-red font-bold">Chipped &amp; Flank Worn</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Estimated Runout:</span>
                        <span className="text-red-400 font-mono">≥ 0.015 mm</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Flute Edge Status:</span>
                        <span className="text-emerald-400 font-bold">100% Mirror Finish</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Grinding Tolerance:</span>
                        <span className="text-emerald-400 font-mono">±0.002 mm OEM Spec</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Technical Spec Summary */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-slate-950/90 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Tolerance</span>
                  <span className="font-mono font-bold text-act-red">±0.002 mm</span>
                </div>
                <div className="p-2.5 bg-slate-950/90 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block mb-0.5 font-sans">Quality</span>
                  <span className="font-bold text-white">Zoller Inspected</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xl sm:text-3xl font-extrabold font-display text-white">
              Precision CNC Resharpening
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              5-axis CNC regrinding for worn flutes, relief angles, and point geometries on Solid Carbide Drills, Endmills, and Reamers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-act-red shrink-0" />
                <span className="text-slate-200 font-medium">5-Axis Flute &amp; Relief Regrinding</span>
              </div>
              <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-act-red shrink-0" />
                <span className="text-slate-200 font-medium">Carbide Drill Point Thinning</span>
              </div>
              <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-act-red shrink-0" />
                <span className="text-slate-200 font-medium">Corner Radius Edge Honing</span>
              </div>
              <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-act-red shrink-0" />
                <span className="text-slate-200 font-medium">100% Zoller Inspection</span>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-xs font-bold rounded-lg shadow-md flex items-center space-x-2 cursor-pointer transform active:scale-95"
            >
              <span>Request Resharpening Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Service 02: Geometric Profile Reconstruction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-6 border-t border-slate-800/80">
          
          <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
            <h2 className="text-xl sm:text-3xl font-extrabold font-display text-white">
              Tool Profile Modification
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Damaged tool cut-offs, neck relief grinding, and custom step tool conversions for heavily worn tools.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-slate-200 font-medium">End Cut-off &amp; Face Recut</span>
              </div>
              <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-slate-200 font-medium">Custom Step Conversion</span>
              </div>
              <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-slate-200 font-medium">Neck Relief Grinding</span>
              </div>
              <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-slate-200 font-medium">Runout ≤ 0.003mm</span>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg border border-slate-700 flex items-center space-x-2 cursor-pointer transform active:scale-95"
            >
              <span>Inquire Profile Modification</span>
              <ArrowRight className="w-3.5 h-3.5 text-act-red" />
            </button>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl backdrop-blur-xl hover:border-amber-500/50 transition-all">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-white">Profile Modification Specs</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-slate-950/90 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Runout</span>
                  <span className="font-mono font-bold text-amber-400">≤ 0.003 mm</span>
                </div>
                <div className="p-2.5 bg-slate-950/90 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Quality</span>
                  <span className="font-bold text-white">Optical Inspected</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Service 03: Advanced PVD Hard Coatings */}
        <div className="pt-6 border-t border-slate-800/80 space-y-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-xl sm:text-3xl font-extrabold font-display text-white">
              Advanced PVD Hard Coatings
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              PVD thermal barrier coatings to increase tool micro-hardness (up to 38 GPa) and lower friction coefficients.
            </p>
          </div>

          {/* Structured PVD Coatings Comparison Table */}
          <div className="border border-slate-800 rounded-xl overflow-hidden shadow-xl bg-slate-900/90 backdrop-blur-xl">
            <div className="p-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs">
              <div className="flex items-center space-x-2">
                <Layers className="w-4 h-4 text-act-red" />
                <span className="font-bold font-display text-white">PVD Coating Specification Comparison</span>
              </div>
              <span className="font-mono text-slate-400 text-[11px]">Film Thickness: 2.0 – 4.0 µm</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950/80 text-slate-400 font-mono uppercase border-b border-slate-800 text-[11px]">
                  <tr>
                    <th className="py-2.5 px-3 font-bold text-white">Coating</th>
                    <th className="py-2.5 px-3 font-bold text-white">Best For</th>
                    <th className="py-2.5 px-3 font-bold text-white">Max Temp</th>
                    <th className="py-2.5 px-3 font-bold text-white">Key Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  {pvdCoatings.map((c, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-3 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold border ${c.badgeColor}`}>
                          {c.name}
                        </span>
                      </td>
                      <td className="py-3 px-3 font-medium text-slate-200">{c.bestFor}</td>
                      <td className="py-3 px-3 font-mono font-bold text-act-red whitespace-nowrap">{c.maxTemp}</td>
                      <td className="py-3 px-3 text-slate-300">{c.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </section>



    </div>
  );
}
