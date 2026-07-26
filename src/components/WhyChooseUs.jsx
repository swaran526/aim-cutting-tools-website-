import React from 'react';
import { Factory, PenTool, Zap, ShieldCheck, Award, ArrowRight } from 'lucide-react';

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
    <section className="py-8 sm:py-12 bg-slate-950 text-white relative overflow-hidden font-sans tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Animated Focal Advantage Card */}
          <div className="lg:col-span-5 relative flex flex-col h-full">
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden flex-1 flex flex-col justify-between min-h-[360px] sm:min-h-[420px] group hover:border-act-red/60 hover:shadow-act-red/10 transition-all duration-500">
              
              {/* Animated Background Image Watermark */}
              <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <img 
                  src="/assets/images/our_story_1.png" 
                  alt="AIM Cutting Tools Facility" 
                  className="w-full h-full object-cover opacity-30 filter brightness-75 transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/images/logo.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 flex-1 flex flex-col justify-between h-full space-y-6">
                
                <div className="space-y-4 text-left">
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-act-red/20 border border-act-red/40 rounded-full text-[10px] font-bold text-act-red uppercase tracking-wider shadow-sm">
                      <Award className="w-3.5 h-3.5 text-act-red animate-pulse" />
                      <span>THE ACT ADVANTAGE</span>
                    </div>

                    <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>ISO 9001:2015</span>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold font-display leading-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 transition-all">
                    Why 500+ Machine Shops Trust ACT.
                  </h2>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Established in 2016 in Peenya 2nd Stage, Bangalore, we combine modern Swiss/German CNC grinding technology with rigorous inspection to deliver uncompromised tooling accuracy.
                  </p>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-xs uppercase tracking-wider font-bold rounded-xl transition-all shadow-lg shadow-act-red/20 flex items-center justify-center space-x-2 cursor-pointer transform active:scale-95 border-none group/btn"
                >
                  <span>Partner With ACT Tooling</span>
                  <ArrowRight className="w-4 h-4 text-white transform group-hover/btn:translate-x-1 transition-transform" />
                </button>

              </div>

            </div>
          </div>

          {/* Right Column: Animated Feature Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-4 sm:p-5 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-start space-x-4 transition-all duration-300 hover:border-act-red/50 hover:shadow-xl hover:shadow-act-red/10 hover:-translate-x-1 group text-left backdrop-blur-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-act-red/10 border border-act-red/30 text-act-red flex items-center justify-center shrink-0 group-hover:bg-act-red group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-bold font-display text-white group-hover:text-act-red transition-colors">{item.title}</h3>
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
