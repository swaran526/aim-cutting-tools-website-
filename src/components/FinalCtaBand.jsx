import React from 'react';
import { Phone, Mail, ArrowRight, Wrench, MapPin } from 'lucide-react';
import companyData from '../data/company.json';

export default function FinalCtaBand({ onOpenQuote }) {
  return (
    <section className="w-full bg-slate-950 text-white py-16 sm:py-24 px-4 relative overflow-hidden border-t border-slate-800/80 tech-grid-bg">
      
      {/* Radial Ambient Red and Blue Lighting Glows matching Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-act-red/20 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
        
        {/* Trust Badge matching Hero */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-200 shadow-lg backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-act-red animate-pulse"></span>
          <span className="text-slate-300">PEENYA BANGALORE CUTTING TOOLS MANUFACTURER</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.15] tracking-tight max-w-4xl mx-auto text-white">
          Ready to Upgrade Your CNC Tooling Performance & <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-act-red via-red-500 to-amber-500">
            Cut Spindle Downtime?
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Get in touch with <strong className="text-white font-semibold">AIM CUTTING TOOLS (ACT)</strong> today for custom solid carbide round tools, resharpening services, or high-precision VMC tooling accessories.
        </p>

        {/* CTAs & Direct Hotline Buttons matching Hero buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          
          <a
            href={`tel:${companyData.contact.phonePrimary}`}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-base font-bold rounded-xl transition-all shadow-xl shadow-act-red/25 hover:shadow-act-red/40 flex items-center justify-center space-x-2 cursor-pointer transform active:scale-95"
          >
            <Phone className="w-5 h-5" />
            <span>Call: {companyData.contact.phonePrimary}</span>
          </a>

          <a
            href={`mailto:${companyData.contact.email}`}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-base font-semibold rounded-xl border border-slate-700/80 transition-all flex items-center justify-center space-x-2 shadow-lg"
          >
            <Mail className="w-5 h-5 text-act-red" />
            <span>Email Inquiry</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white text-base font-bold rounded-xl border border-slate-700 transition-all shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-5 h-5 text-act-red" />
          </button>

        </div>

        {/* Address Bar */}
        <div className="pt-4 text-xs text-slate-300 flex items-center justify-center space-x-2">
          <MapPin className="w-3.5 h-3.5 text-act-red" />
          <span>{companyData.contact.address}</span>
        </div>

      </div>
    </section>
  );
}
