import React, { useState } from 'react';
import { RotateCcw, Wrench, Layers, ArrowRight, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';
import companyData from '../data/company.json';

export default function CapabilitiesSection({ onOpenQuote }) {
  const serviceSteps = [
    {
      id: "resharpening",
      step: "01",
      title: "Precision CNC Resharpening",
      subtitle: "Restore Original OEM Flute Geometry",
      description: "5-Axis CNC regrinding for all carbide drills, endmills, and reamers. We restore razor cutting edges to micron tolerances at up to 60% savings compared to new tool cost.",
      icon: RotateCcw,
      badge: "Save Up to 60% Tooling Budget",
      points: [
        "Restores original helix and relief angle specifications",
        "Sub-micron optical measurement & wheel inspection",
        "Edge prep & hone treatment to eliminate micro-chipping",
        "Fast 24-48 hour turnaround for local Peenya pickup"
      ],
      color: "from-act-red to-red-600"
    },
    {
      id: "reconditioning",
      step: "02",
      title: "Complete Tool Reconditioning",
      subtitle: "Geometric Repair & Flute Modification",
      description: "Complete repair of severely worn or chipped tools, relief angle re-engineering, neck diameter reduction, and flute length step modification tailored to specific component drawings.",
      icon: Wrench,
      badge: "Full Profile Geometry Restoration",
      points: [
        "Cut-off & re-gashing for chipped cutting tips",
        "Custom neck clearance grinding for deep pocketing",
        "Step drill & multi-stage chamfer modification",
        "100% runout verification (<0.003mm)"
      ],
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: "coating",
      step: "03",
      title: "Advanced PVD Hard Coating",
      subtitle: "AlTiN / TiAlN / nACo / DLC Coatings",
      description: "State-of-the-art PVD thermal barrier coatings engineered for high-speed dry machining in Hardened Steels (up to 65 HRC), Stainless Steel, Inconel, Titanium, and Aluminum.",
      icon: Layers,
      badge: "Extreme High-Heat & Abrasion Barrier",
      points: [
        "AlTiN Coating for Hardened Dies & Steels (>55 HRC)",
        "TiAlN Coating for Stainless & General Steel Milling",
        "nACo Nanocomposite for Titanium & Heat Resistant Alloys",
        "DLC Coating for High-Speed Frictionless Aluminum"
      ],
      color: "from-amber-500 to-act-red"
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const activeService = serviceSteps[activeTab];

  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white relative border-y border-slate-800/80 overflow-hidden tech-grid-bg">
      
      {/* Radial Ambient Red Lighting Glow */}
      <div className="absolute top-1/2 left-1/4 w-[550px] h-[550px] bg-act-red/10 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dominant Section Header matching Hero theme */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-200 shadow-lg backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-act-red animate-pulse"></span>
            <span className="text-slate-300">EXPERT TOOL RECONDITIONING PLANT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
            Resharpening, Reconditioning & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-act-red via-red-500 to-amber-500">
              PVD Multi-Layer Coating.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Maximize your tooling ROI. ACT provides end-to-end CNC regrinding and advanced multi-layer PVD recoating services for all Solid Carbide & HSS round tools.
          </p>
        </div>

        {/* Tab Navigation Selector matching Hero glass panel style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 max-w-3xl mx-auto">
          {serviceSteps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = idx === activeTab;
            return (
              <button
                key={step.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full sm:w-1/3 p-3.5 rounded-2xl border text-left transition-all duration-300 flex items-center space-x-3 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 border-act-red shadow-xl shadow-act-red/20 text-white'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isActive ? 'bg-act-red text-white' : 'bg-slate-800 text-slate-300'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-act-red">STEP {step.step}</p>
                  <p className="text-xs font-bold font-display text-slate-100 truncate">{step.title}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Service Display Panel matching Hero right card */}
        <div className="bg-slate-900/95 border border-slate-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Service Details Left */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="flex items-center space-x-3">
                <span className="text-xs font-bold uppercase tracking-wider text-act-red bg-act-red/10 px-3 py-1 rounded-md border border-act-red/30">
                  {activeService.subtitle}
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
                  {activeService.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                {activeService.title}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed font-normal">
                {activeService.description}
              </p>

              {/* Technical Points Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeService.points.map((pt, i) => (
                  <div key={i} className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 flex items-start space-x-2.5 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-act-red shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 font-medium">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-base font-bold rounded-xl transition-all shadow-xl shadow-act-red/25 flex items-center justify-center space-x-3 cursor-pointer group transform active:scale-95"
                >
                  <span>Book {activeService.title}</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={`tel:${companyData.contact.phonePrimary}`}
                  className="px-6 py-4 bg-slate-950 hover:bg-slate-800 text-slate-200 text-sm font-semibold rounded-xl border border-slate-700/80 transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Pickup Hotline: {companyData.contact.phonePrimary}</span>
                </a>
              </div>

            </div>

            {/* Service Visual Preview Right */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 bg-slate-950/90 border border-slate-800 rounded-2xl shadow-xl space-y-4 text-left backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold uppercase text-slate-300">Tool Regrind Standards</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-300">ISO 9001:2015</span>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-300">Runout Accuracy</span>
                    <span className="text-xs font-mono font-bold text-act-red">≤ 0.003 mm</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-300">Surface Roughness</span>
                    <span className="text-xs font-mono font-bold text-slate-200">Ra 0.1 µm Mirror</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-300">Standard Delivery</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">24 to 48 Hours</span>
                  </div>
                </div>

                <div className="p-3.5 bg-act-navy/40 border border-act-navy rounded-xl text-xs text-slate-300 leading-relaxed">
                  <strong>Note:</strong> We accept single batch trials and long-term shop maintenance contracts across Peenya 1st/2nd/3rd stage & Greater Bangalore.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
