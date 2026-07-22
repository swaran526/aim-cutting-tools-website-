import React from 'react';
import { Shield, Award, Users, CheckCircle2, Factory, Calendar, MapPin, ArrowRight, UserCheck, Phone } from 'lucide-react';
import companyData from '../data/company.json';

export default function About({ onOpenQuote }) {
  const storyImages = [
    { src: "/assets/images/our_story_1.jpeg", alt: "CNC Tool Grinding Workshop Peenya" },
    { src: "/assets/images/our_story_2.png", alt: "Solid Carbide Flute Inspection" },
    { src: "/assets/images/our_story_3.jpeg", alt: "Micrograin Substrates & Raw Stock" },
    { src: "/assets/images/our_story_4.jpeg", alt: "PVD Coating Chamber Operations" }
  ];

  const coreValues = [
    {
      icon: Award,
      title: "Sub-Micron Precision Guarantee",
      desc: "Every solid carbide tool produced undergoes optical profile projector & laser micrometer inspection with shank tolerance guaranteed to ±0.002mm ISO H6."
    },
    {
      icon: Factory,
      title: "Direct Peenya Manufacturing",
      desc: "No middleman markup. Designed, ground, and inspected inside our Peenya 2nd Stage plant, Bangalore."
    },
    {
      icon: Users,
      title: "Customer-Centric Tool Engineering",
      desc: "Founded by Mr. Parashuram in 2016 to deliver quick custom blueprint form tools without long lead times."
    },
    {
      icon: Shield,
      title: "100% Quality Assurance",
      desc: "Full traceablity from premium K40/MG10 carbide rod stock to final PVD coating and packaging."
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans tech-grid-bg relative overflow-hidden">
      
      {/* 1. Page Hero Banner matching Hero formula */}
      <section className="relative py-16 sm:py-24 bg-slate-950 border-b border-slate-800/80 text-center overflow-hidden">
        
        {/* Radial Ambient Red and Blue Lighting Glows matching Hero */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-act-red/20 rounded-full filter blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-200 shadow-lg backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-act-red animate-pulse"></span>
            <span className="text-slate-300">EST. 2016 • PEENYA 2ND STAGE, BANGALORE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
            Engineering Precision Carbide Tools <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-act-red via-red-500 to-amber-500">
              For India's Machine Shops.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Learn about AIM CUTTING TOOLS (ACT), our founder <strong className="text-white font-semibold">{companyData.founder}</strong>, and our commitment to high-precision CNC tooling solutions in Bangalore.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-base font-bold rounded-xl transition-all shadow-xl shadow-act-red/25 flex items-center justify-center space-x-3 cursor-pointer group transform active:scale-95"
            >
              <span>Partner With ACT Tooling</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Transition Device 1: Glowing Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-act-red/40 to-transparent"></div>

      {/* 2. Company Story Split Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Founder & Plant Story matching Hero right card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-slate-900/95 border border-slate-800/90 rounded-3xl p-8 space-y-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-act-red/50 transition-all duration-300 text-left">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-2">
                  <UserCheck className="w-5 h-5 text-act-red" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Founder & Managing Director</span>
                </div>
                <span className="text-xs font-mono font-bold text-act-red bg-act-red/10 px-3 py-1 rounded-full border border-act-red/30">
                  Est. 2016
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-display text-white">
                  {companyData.founder}
                </h3>
                <p className="text-xs font-semibold text-act-red">Founder & Tooling Specialist</p>
                <p className="text-xs text-slate-300 leading-relaxed pt-2">
                  Founded ACT in 2016 with a singular vision: empowering Indian automotive, aerospace, and general engineering machine shops with world-class Solid Carbide Round Tools built locally in Bangalore.
                </p>
              </div>

              <div className="p-4 bg-slate-950/90 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-2 shadow-inner">
                <div className="flex justify-between items-center"><span className="text-slate-300">Plant Location:</span> <span className="text-white font-semibold">Peenya 2nd Stage, Bangalore</span></div>
                <div className="flex justify-between items-center"><span className="text-slate-300">Core Expertise:</span> <span className="text-act-red font-mono font-bold">Carbide Drills, Endmills, Form Tools</span></div>
              </div>

            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-200 shadow-lg backdrop-blur-md">
              <Calendar className="w-4 h-4 text-act-red" />
              <span>OUR 8-YEAR JOURNEY (2016 - PRESENT)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
              Built on Precision, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-act-red via-red-500 to-amber-500">
                Driven by Customer Trust.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              From our facility in Peenya 2nd Stage, AIM CUTTING TOOLS (ACT) has grown into a key supplier of precision solid carbide cutting tools. We specialize in both high-volume manufacturing of standard endmills and custom profile ground form tools tailored to complex engineering blueprints.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-start space-x-3 shadow-md">
                <CheckCircle2 className="w-5 h-5 text-act-red shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Carbide Round Tools Focus</p>
                  <p className="text-[11px] text-slate-300">Drills, Reamers, Endmills, Ballnose Cutters & HoleMills</p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-start space-x-3 shadow-md">
                <CheckCircle2 className="w-5 h-5 text-act-red shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Complete Tool Servicing</p>
                  <p className="text-[11px] text-slate-300">5-Axis CNC regrinding & PVD hard recoating</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Transition Device 2: Gradient Bleed Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

      {/* 3. Factory Photo Gallery Grid matching Hero showcase style */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-8">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-200 shadow-lg backdrop-blur-md">
            <Factory className="w-4 h-4 text-act-red" />
            <span>INSIDE OUR PEENYA WORKSHOP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Manufacturing & Inspection Gallery
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Real photos from our CNC grinding facility, quality control inspection desk, and rod inventory inside Peenya 2nd Stage, Bangalore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {storyImages.map((img, i) => (
            <div 
              key={i} 
              className="bg-slate-900/95 border border-slate-800/90 rounded-2xl overflow-hidden shadow-2xl group hover:border-act-red/50 transition-all duration-300"
            >
              <div className="h-48 w-full bg-slate-950 overflow-hidden relative">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `/src${img.src}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>
              <div className="p-4 bg-slate-900/90 text-left">
                <p className="text-xs font-bold text-slate-200 group-hover:text-act-red transition-colors">{img.alt}</p>
                <p className="text-[10px] font-mono text-slate-400 mt-0.5">ACT Peenya Plant</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Transition Device 3: Glowing Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-act-red/40 to-transparent"></div>

      {/* 4. Core Values 4-Card Grid matching Hero style */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Our Core Quality Commitments
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            The principles that guide our CNC tool manufacturing, resharpening, and customer partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/95 border border-slate-800/90 rounded-3xl p-6 space-y-4 shadow-2xl backdrop-blur-xl group hover:border-act-red/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-act-red/10 border border-act-red/30 text-act-red flex items-center justify-center group-hover:bg-act-red group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white font-display">{val.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
