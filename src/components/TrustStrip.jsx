import React from 'react';
import { Calendar, Factory, RotateCcw, MapPin } from 'lucide-react';
import companyData from '../data/company.json';

export default function TrustStrip() {
  const trustBadges = [
    {
      icon: Calendar,
      title: "Since 2016",
      subtitle: `Founded by ${companyData.founder}`,
      detail: "Precision Tooling Excellence"
    },
    {
      icon: Factory,
      title: "Manufacturer + Trader",
      subtitle: "In-House Carbide Production",
      detail: "Complete Tooling Solutions"
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
    <section className="w-full bg-slate-950 border-y border-slate-800/80 py-7 relative z-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div 
                key={idx}
                className="p-5 bg-slate-900/95 border border-slate-200/80 rounded-[24px] flex items-center space-x-4 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-950/10 hover:-translate-y-0.5 transition-all duration-300 group shadow-xl backdrop-blur-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-act-red/5 border border-act-red/20 text-act-red flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-act-red group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-0.5 text-left">
                  <h4 className="text-base font-bold text-[#111827] font-display leading-tight">{badge.title}</h4>
                  <p className="text-xs font-semibold text-act-red">{badge.subtitle}</p>
                  <p className="text-[11px] text-[#111827]/70 font-medium">{badge.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
