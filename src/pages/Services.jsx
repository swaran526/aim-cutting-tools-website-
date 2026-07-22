import React from 'react';
import { RotateCcw, Wrench, Layers, CheckCircle2, ArrowRight, Phone, ShieldCheck, Award, Zap } from 'lucide-react';
import companyData from '../data/company.json';

export default function Services({ onOpenQuote }) {
  return (
    <div className="bg-slate-950 text-white font-sans min-h-screen tech-grid-bg relative overflow-hidden">
      
      {/* 1. Hero Banner matching Hero section formula */}
      <section className="relative py-16 sm:py-24 bg-slate-950 border-b border-slate-800/80 text-center overflow-hidden">
        
        {/* Radial Ambient Red and Blue Lighting Glows matching Hero */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-act-red/20 rounded-full filter blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-200 shadow-lg backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-act-red animate-pulse"></span>
            <span className="text-slate-300">CARBIDE TOOL SERVICING & RECONDITIONING CENTER</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
            CNC Resharpening, Reconditioning & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-act-red via-red-500 to-amber-500">
              PVD Multi-Layer Coating.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Extend tooling life cycle, restore original flute geometries to OEM specifications, and reduce CNC tooling replacement budgets by up to 60% with ACT's Peenya servicing workshop.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-base font-bold rounded-xl transition-all shadow-xl shadow-act-red/25 hover:shadow-act-red/40 flex items-center justify-center space-x-3 cursor-pointer group transform active:scale-95"
            >
              <span>Book Tool Servicing Batch</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <a
              href={`tel:${companyData.contact.phonePrimary}`}
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-base font-semibold rounded-xl border border-slate-700/80 hover:border-slate-500 transition-all flex items-center justify-center space-x-2 text-center shadow-lg"
            >
              <Phone className="w-5 h-5 text-act-red" />
              <span>Workshop Desk: {companyData.contact.phonePrimary}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Transition Device 1: Glowing Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-act-red/40 to-transparent"></div>

      {/* 2. Service 1: Precision CNC Resharpening */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Card Left matching Hero showcase card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-slate-900/95 border border-slate-800/90 rounded-3xl p-8 space-y-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-act-red/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-act-red/10 border border-act-red/40 text-act-red flex items-center justify-center group-hover:bg-act-red group-hover:text-white transition-all">
                <RotateCcw className="w-8 h-8" />
              </div>

              <div className="space-y-2 text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-act-red">SERVICE 01</span>
                <h3 className="text-2xl font-bold font-display text-white">Precision CNC Resharpening</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Using 5-axis CNC tool grinding machinery, we regrind worn cutting edges on Solid Carbide Drills, Endmills, Reamers, and Step Cutters to exact original factory parameters.
                </p>
              </div>

              <div className="p-4 bg-slate-950/90 rounded-2xl border border-slate-800 text-xs space-y-2 text-left shadow-inner">
                <div className="flex justify-between items-center"><span className="text-slate-300">Target Tools:</span> <span className="text-white font-medium">Carbide Drills, Endmills, Reamers</span></div>
                <div className="flex justify-between items-center"><span className="text-slate-300">Grinding Tolerance:</span> <span className="text-act-red font-mono font-bold">±0.002mm OEM Spec</span></div>
              </div>
            </div>
          </div>

          {/* Copy Right matching Hero content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-200 shadow-lg backdrop-blur-md">
              <Award className="w-4 h-4 text-act-red" />
              <span>SAVE UP TO 60% TOOLING COSTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
              Restore Cutting Edge Sharpness & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-act-red via-red-500 to-amber-500">
                Reduce Spindle Load.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Dull cutting edges cause excessive machine spindle load, poor surface finish, and premature tool breakage. Our resharpening service restores concentricity, rake angles, and flute finish to OEM standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-start space-x-3 shadow-md backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-act-red shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 font-medium">5-Axis CNC Flute & Relief Angle Regrinding</span>
              </div>
              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-start space-x-3 shadow-md backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-act-red shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 font-medium">Point Angle Resharpening for Carbide Drills</span>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-base font-bold rounded-xl transition-all shadow-xl shadow-act-red/25 flex items-center space-x-3 cursor-pointer group transform active:scale-95"
            >
              <span>Book Resharpening Batch</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

      {/* Transition Device 2: Gradient Bleed Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

      {/* 3. Service 2: Tool Reconditioning */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Copy Left */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-200 shadow-lg backdrop-blur-md">
              <Wrench className="w-4 h-4 text-amber-400" />
              <span>GEOMETRIC PROFILE RESTORATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
              Complete Tool Reconditioning & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-act-red">
                Profile Modification.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              When tools suffer corner chipping or severe flank wear, simple regrinding isn't enough. Our complete reconditioning process includes cut-off of damaged sections, neck relief grinding, and custom step profiling.
            </p>

            <div className="space-y-3 pt-1">
              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center space-x-3 shadow-md">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">Cut-off damaged tool ends & recreate fresh cutting face geometry</span>
              </div>
              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center space-x-3 shadow-md">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">Modify endmill diameters or convert worn endmills into custom step tools</span>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-base font-bold rounded-xl transition-all shadow-xl shadow-act-red/25 flex items-center space-x-3 cursor-pointer group transform active:scale-95"
            >
              <span>Inquire Tool Reconditioning</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Card Right */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="bg-slate-900/95 border border-slate-800/90 rounded-3xl p-8 space-y-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300 text-left">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                <Wrench className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">SERVICE 02</span>
                <h3 className="text-2xl font-bold font-display text-white">Full Profile Reconstruction</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Extends tool life through structural regrinding, flute clearing, relief angle correction, and edge prep honing.
                </p>
              </div>

              <div className="p-4 bg-slate-950/90 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-2 shadow-inner">
                <div className="flex justify-between items-center"><span className="text-slate-300">Runout Standard:</span> <span className="text-amber-400 font-mono font-bold">≤ 0.003mm</span></div>
                <div className="flex justify-between items-center"><span className="text-slate-300">Turnaround:</span> <span className="text-white font-medium">24-48 Hours</span></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Transition Device 3: Glowing Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-act-red/40 to-transparent"></div>

      {/* 4. Service 3: PVD / CVD Multi-Layer Hard Coating */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12 relative z-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-200 shadow-lg backdrop-blur-md">
            <Layers className="w-4 h-4 text-act-red" />
            <span>SERVICE 03 • ADVANCED PVD HARD COATINGS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
            PVD Hard Coating Matrix <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-act-red via-red-500 to-amber-500">
              (TiAlN / AlTiN / nACo / DLC).
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We apply industry-standard Physical Vapor Deposition (PVD) thermal barrier coatings to enhance surface micro-hardness (up to 3500 HV) and lower coefficient of friction during high-speed dry machining.
          </p>
        </div>

        {/* 3-Card Coating Matrix matching Hero showcase cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <div className="bg-slate-900/95 border border-slate-800/90 rounded-3xl p-6 space-y-4 hover:border-act-red/50 transition-all duration-300 shadow-2xl backdrop-blur-xl group">
            <div className="w-12 h-12 rounded-xl bg-act-red/10 border border-act-red/30 text-act-red flex items-center justify-center group-hover:bg-act-red group-hover:text-white transition-all">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white font-display">AlTiN Coating</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Designed for high-heat milling of Hardened Steels up to 65 HRC. Withstands thermal breakdown up to 900°C.
            </p>
            <span className="inline-block text-[11px] font-mono text-act-red font-semibold bg-act-red/10 px-2.5 py-1 rounded">
              Max Temp: 900°C
            </span>
          </div>

          <div className="bg-slate-900/95 border border-slate-800/90 rounded-3xl p-6 space-y-4 hover:border-blue-500/50 transition-all duration-300 shadow-2xl backdrop-blur-xl group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white font-display">TiAlN Coating</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              General-purpose titanium aluminum nitride coating for Stainless Steel, Mild Steel, and Alloy machining.
            </p>
            <span className="inline-block text-[11px] font-mono text-blue-400 font-semibold bg-blue-500/10 px-2.5 py-1 rounded">
              General Purpose
            </span>
          </div>

          <div className="bg-slate-900/95 border border-slate-800/90 rounded-3xl p-6 space-y-4 hover:border-amber-500/50 transition-all duration-300 shadow-2xl backdrop-blur-xl group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
              <Layers className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white font-display">nACo & DLC Coating</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Nanocomposite nACo for Titanium & Inconel superalloys. DLC (Diamond-Like Carbon) for non-ferrous aluminum.
            </p>
            <span className="inline-block text-[11px] font-mono text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-1 rounded">
              Superalloys & Aluminum
            </span>
          </div>

        </div>

        <div className="pt-2 text-center">
          <button
            onClick={onOpenQuote}
            className="px-8 py-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-base font-bold rounded-xl transition-all shadow-xl shadow-act-red/25 flex items-center justify-center space-x-3 cursor-pointer group transform active:scale-95 mx-auto"
          >
            <span>Request Custom Coating Batch Quote</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

    </div>
  );
}
