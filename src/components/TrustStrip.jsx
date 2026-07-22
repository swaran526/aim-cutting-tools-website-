import React from 'react';
import { Calendar, Factory, RotateCcw, MapPin } from 'lucide-react';
import companyData from '../data/company.json';

export default function TrustStrip() {
  const trustBadges = [
    {
      icon: Calendar,
      title: "Since 2016",
      subtitle: `Founded by ${companyData.founder}`,
      detail: "8+ Years Tooling Excellence"
    },
    {
      icon: Factory,
      title: "Manufacturer + Trader",
      subtitle: "In-House Carbide Production",
      detail: "14+ Tooling Categories"
    },
    {
      icon: RotateCcw,
      title: "Resharpening & Coating",
      subtitle: "Full Reconditioning Center",
      detail: "TiAlN / AlTiN PVD Coatings"
    },
    {
      icon: MapPin,
      title: "Peenya, Bangalore Hub",
      subtitle: "Peenya 2nd Stage Plant",
      detail: "Direct Doorstep Delivery"
    }
  ];

  return (
    <section className="w-full bg-slate-950 border-y border-slate-800/80 py-10 relative z-20 tech-grid-bg overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-act-red/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div 
                key={idx}
                className="p-5 bg-slate-900/95 border border-slate-800/90 rounded-2xl flex items-center space-x-4 hover:border-act-red/60 hover:shadow-2xl hover:shadow-act-red/15 transition-all duration-300 group shadow-xl backdrop-blur-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-act-red/10 border border-act-red/30 text-act-red flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-act-red group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-0.5 text-left">
                  <h4 className="text-base font-bold text-white font-display leading-tight">{badge.title}</h4>
                  <p className="text-xs font-semibold text-act-red">{badge.subtitle}</p>
                  <p className="text-[11px] text-slate-300">{badge.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
