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
    <section className="py-8 sm:py-12 bg-slate-950 text-white relative overflow-hidden tech-grid-bg">
      
      {/* Radial Ambient Red Lighting Glow */}
      <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-act-red/10 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Single Dominant Focal Showcase Card */}
          <div className="lg:col-span-5 relative flex flex-col h-full">
            <div className="relative bg-slate-900/95 border border-slate-800/80 rounded-[24px] p-6 sm:p-8 shadow-2xl backdrop-blur-xl group hover:border-act-red/40 transition-all duration-300 overflow-hidden flex-1 flex flex-col justify-between min-h-[480px]">
              
              {/* Technical / Factory Background Image Watermark */}
              <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <img 
                  src="/assets/images/our_story_1.jpeg" 
                  alt="AIM Cutting Tools Facility" 
                  className="w-full h-full object-cover transition-transform duration-700 transform scale-100 group-hover:scale-105 filter brightness-50"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/src/assets/images/our_story_1.jpeg";
                  }}
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 flex-1 flex flex-col justify-between h-full">
                
                <div className="space-y-4 text-left">
                  <div className="flex flex-wrap gap-2">
                    {/* Top Accent Tag */}
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-act-red/20 border border-act-red/35 rounded-full text-[10px] font-bold text-neutral-50 uppercase tracking-wider">
                      <Award className="w-4 h-4 text-act-red" />
                      <span>THE ACT ADVANTAGE</span>
                    </div>

                    {/* ISO Certification Tag */}
                    <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>ISO 9001:2015</span>
                    </div>
                  </div>

                  {/* Dominant Headline */}
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight text-neutral-50">
                    Why 500+ Machine Shops Trust ACT.
                  </h2>

                  <p className="text-neutral-200 text-sm leading-relaxed">
                    Established in 2016 in Peenya 2nd Stage, Bangalore, we combine modern Swiss/German CNC grinding technology with rigorous inspection to deliver uncompromised tooling accuracy.
                  </p>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="w-full py-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-base font-bold rounded-xl transition-all shadow-xl shadow-act-red/25 flex items-center justify-center space-x-2 cursor-pointer group-hover:shadow-act-red/40 transform active:scale-95 mt-6"
                >
                  <span>Partner With ACT Tooling</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>

            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 bg-slate-900/90 border border-slate-800/80 rounded-[20px] flex items-start space-x-5 transition-all duration-300 hover:-translate-x-1 hover:border-act-red/35 hover:shadow-xl hover:shadow-act-red/5 shadow-lg group backdrop-blur-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-act-red/10 border border-act-red/25 text-act-red flex items-center justify-center shrink-0 group-hover:bg-act-red group-hover:text-white transition-all duration-300 group-hover:scale-105">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 text-left">
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-act-red transition-colors">{item.title}</h3>
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
