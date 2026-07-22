import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, UserCheck, Wrench, Package } from 'lucide-react';
import companyData from '../data/company.json';

export default function AboutSection({ onOpenQuote }) {
  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden tech-grid-bg">
      
      {/* Radial Ambient Red Lighting Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-act-red/10 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Artwork / Story Card matching Hero right showcase card */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-slate-900/95 border border-slate-800/90 rounded-3xl p-6 shadow-2xl backdrop-blur-xl group hover:border-act-red/50 transition-all duration-300">
              
              {/* Actual Factory / Story Image */}
              <div className="relative h-56 w-full overflow-hidden rounded-2xl mb-5 border border-slate-800 bg-slate-950">
                <img 
                  src="/assets/images/our_story_1.jpeg" 
                  alt="ACT Manufacturing Facility Peenya Bangalore" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/src/assets/images/our_story_1.jpeg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-xs font-mono font-bold text-white bg-slate-900/95 px-3 py-1 rounded-lg border border-slate-700 backdrop-blur-md shadow-md">
                  Peenya 2nd Stage Plant
                </span>
              </div>

              <div className="relative bg-slate-950/80 rounded-2xl p-6 border border-slate-800/90 space-y-5 text-left">
                
                {/* Badge Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-2">
                    <UserCheck className="w-4 h-4 text-act-red" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Leadership & Vision</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    Est. 2016
                  </span>
                </div>

                {/* Story Block */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display text-white">
                    Founded by <span className="text-act-red">{companyData.founder}</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    ACT established its roots in Peenya 2nd Stage, Bangalore, with a clear mission: delivering precision-ground Carbide Round Tools with micrograin accuracy.
                  </p>
                </div>

                {/* Capability Badges */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                    <div className="text-[11px] text-slate-300 font-semibold mb-1 flex items-center gap-1">
                      <Wrench className="w-3.5 h-3.5 text-act-red" />
                      <span>Manufacturing</span>
                    </div>
                    <p className="text-xs text-white font-bold">Carbide Drills & Form Tools</p>
                  </div>
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                    <div className="text-[11px] text-slate-300 font-semibold mb-1 flex items-center gap-1">
                      <Package className="w-3.5 h-3.5 text-act-red" />
                      <span>Trading & Supply</span>
                    </div>
                    <p className="text-xs text-white font-bold">Tool Holders & Inserts</p>
                  </div>
                </div>

                {/* Footer Quote */}
                <div className="p-3 bg-act-navy/40 border border-act-navy rounded-xl text-xs text-slate-300 italic">
                  "Engineered for high MRR, zero chatter, and extended tool life under aggressive CNC feeds."
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Confident Company Overview & CTAs matching Hero left content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Badge matching Hero */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-200 shadow-lg backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-act-red animate-pulse"></span>
              <span className="text-slate-300">ABOUT AIM CUTTING TOOLS (ACT)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
              Bangalore's Trusted Partner for High-Performance <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-act-red via-red-500 to-amber-500">
                Carbide Round Tools & CNC Tooling.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              AIM CUTTING TOOLS (ACT) specializes in manufacturing <strong className="text-white font-semibold">Solid Carbide Round Tools</strong> and supplying complete CNC tooling solutions — from custom form tool fabrication to in-house CNC resharpening & PVD re-coating in Peenya, Bangalore.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-start space-x-3 shadow-md backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-act-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Carbide Round Tools Specialist</h4>
                  <p className="text-xs text-slate-300">Solid Carbide Drills, Endmills, Ballnose Endmills, Reamers, Boring Bars, HoleMills, T-Slot Cutters, Radius & Lollipop Tools.</p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-start space-x-3 shadow-md backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-act-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Custom Form Tools Built to Requirement</h4>
                  <p className="text-xs text-slate-300">100% custom profile ground tools tailored to customer component drawings for single-pass machining.</p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-start space-x-3 shadow-md backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-act-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Complete Trading & VMC Accessories Portfolio</h4>
                  <p className="text-xs text-slate-300">Turning Tool Holders, Milling Cutters, Measuring Instruments (Calipers, Micrometers), Collets, BT/CAT Arbors, Inserts, Taps & Spares.</p>
                </div>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/about"
                className="px-8 py-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-base font-bold rounded-xl transition-all shadow-xl shadow-act-red/25 hover:shadow-act-red/40 flex items-center justify-center space-x-3 group transform active:scale-95 cursor-pointer"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={onOpenQuote}
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-base font-semibold rounded-xl border border-slate-700/80 hover:border-slate-500 transition-all flex items-center justify-center space-x-2 text-center shadow-lg cursor-pointer"
              >
                <span>Inquire Manufacturing Capability</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
