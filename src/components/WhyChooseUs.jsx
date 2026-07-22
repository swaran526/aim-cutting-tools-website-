import React from 'react';
import { Factory, PenTool, Zap, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import companyData from '../data/company.json';

export default function WhyChooseUs({ onOpenQuote }) {
  const features = [
    {
      icon: Factory,
      title: "100% In-House CNC Manufacturing",
      desc: "Direct production of solid carbide round tools with precision sub-micron grain substrates and strict quality control."
    },
    {
      icon: PenTool,
      title: "Custom Form Tools to Spec",
      desc: "Tailor-made profile ground tools manufactured exactly to your component engineering drawing requirements."
    },
    {
      icon: Zap,
      title: "Rapid Dispatch & Low Downtime",
      desc: "Swift fabrication, in-stock standard endmills, and fast local dispatch to keep your CNC spindles running 24/7."
    },
    {
      icon: ShieldCheck,
      title: "Quality Resharpening & PVD Coating",
      desc: "Expert regrinding and advanced multi-layer TiAlN / AlTiN coatings to restore tool edges to original factory performance."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden tech-grid-bg">
      
      {/* Radial Ambient Red Lighting Glow */}
      <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-act-red/10 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Single Dominant Focal Showcase Card matching Hero right showcase card */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-slate-900/95 border border-slate-800/90 rounded-3xl p-8 shadow-2xl backdrop-blur-xl group hover:border-act-red/50 transition-all duration-300">
              
              {/* Top Accent Tag */}
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-act-red/15 border border-act-red/40 rounded-full text-xs font-bold text-act-red uppercase tracking-wider mb-6">
                <Award className="w-4 h-4 text-act-red" />
                <span>THE ACT ADVANTAGE</span>
              </div>

              {/* Dominant Headline */}
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight text-white mb-4">
                Why 500+ Machine Shops Trust ACT.
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Established in 2016 in Peenya 2nd Stage, Bangalore, we combine modern Swiss/German CNC grinding technology with rigorous inspection to deliver uncompromised tooling accuracy.
              </p>

              {/* Big Stat Box */}
              <div className="p-5 bg-slate-950/90 border border-slate-800 rounded-2xl mb-6 flex items-center justify-between shadow-inner">
                <div>
                  <p className="text-2xl font-extrabold font-mono text-act-red">±0.002 mm</p>
                  <p className="text-xs text-slate-300 font-medium">Shank & Flute Tolerance</p>
                </div>
                <div className="h-10 w-px bg-slate-800"></div>
                <div>
                  <p className="text-2xl font-extrabold font-mono text-emerald-400">★ {companyData.rating.score}</p>
                  <p className="text-xs text-slate-300 font-medium">Customer Satisfaction</p>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full py-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-base font-bold rounded-xl transition-all shadow-xl shadow-act-red/25 flex items-center justify-center space-x-2 cursor-pointer group-hover:shadow-act-red/40 transform active:scale-95"
              >
                <span>Partner With ACT Tooling</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

          {/* Right Column: Staggered Vertical Feature List */}
          <div className="lg:col-span-7 space-y-4">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 bg-slate-900/90 border border-slate-800/90 hover:border-act-red/50 rounded-2xl flex items-start space-x-5 transition-all duration-300 hover:-translate-x-1 hover:bg-slate-900 shadow-xl group backdrop-blur-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-act-red/10 border border-act-red/30 text-act-red flex items-center justify-center shrink-0 group-hover:bg-act-red group-hover:text-white transition-all duration-300 group-hover:scale-105">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 text-left">
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-act-red-light transition-colors">{item.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
