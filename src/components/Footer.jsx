import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import companyData from '../data/company.json';
import productsData from '../data/products.json';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-800/80 pt-12 sm:pt-16 pb-8 relative overflow-hidden tech-grid-bg">
      
      {/* Red Ambient Glow matching other sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-act-red/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 pb-12">
          
          {/* Column 1: Brand & Founder Info */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4 text-left">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <img 
                src="/assets/images/logo/logo.jpeg" 
                alt="AIM CUTTING TOOLS Logo" 
                className="h-10 sm:h-12 w-auto object-contain rounded-lg transition-transform group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/images/logo.png";
                }}
              />
              <span className="text-xl sm:text-2xl font-black font-display tracking-tight leading-none logo-text-gradient">
                AIM CUTTING TOOLS
              </span>
            </Link>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              {companyData.description}
            </p>

            {/* Founder Credit Badge */}
            <div className="flex items-center space-x-2 text-xs text-slate-300 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Founded in 2016 by <b className="text-white">{companyData.founder}</b></span>
            </div>
          </div>

          {/* Column 2: Quick Links & Sitemap */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Quick Sitemap
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link to="/" className="hover:text-act-red transition-colors inline-block">Home Page</Link></li>
              <li><Link to="/about" className="hover:text-act-red transition-colors inline-block">About ACT Company</Link></li>
              <li><Link to="/products" className="hover:text-act-red transition-colors inline-block">Products Catalog (14)</Link></li>
              <li><Link to="/services" className="hover:text-act-red transition-colors inline-block">Resharpening & Coating</Link></li>
              <li><Link to="/contact" className="hover:text-act-red transition-colors inline-block">Factory Location & Map</Link></li>
            </ul>
          </div>

          {/* Column 3: Flagship Tool Categories */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Tool Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {productsData.slice(0, 5).map(p => (
                <li key={p.id}>
                  <Link to={`/products/${p.slug}`} className="hover:text-act-red transition-colors flex items-center space-x-1 truncate">
                    <span>• {p.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="text-act-red font-bold hover:underline flex items-center space-x-1 pt-1 text-xs">
                  <span>Browse All 14 Categories →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Workshop Location & Contact */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Peenya Plant Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-act-red shrink-0 mt-0.5" />
                <span>{companyData.contact.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-act-red shrink-0" />
                <a href={`tel:${companyData.contact.phonePrimary}`} className="text-white hover:text-act-red font-semibold">{companyData.contact.phonePrimary}</a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-act-red shrink-0" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-act-red truncate">{companyData.contact.email}</a>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="w-full py-3 bg-act-red hover:bg-act-red-dark text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Get Custom Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-slate-400">
          <p>© {new Date().getFullYear()} AIM CUTTING TOOLS (ACT). All Rights Reserved. Peenya 2nd Stage, Bangalore.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400 font-medium">
            <span>ISO 9001 Certified Quality</span>
            <span>•</span>
            <span>Carbide Round Tools & CNC Accessories</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
