import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProductCard({ product, onOpenQuote }) {
  return (
    <div className="bg-slate-900 border border-slate-800/90 rounded-2xl overflow-hidden hover:border-act-red/60 hover:shadow-2xl hover:shadow-act-red/20 transition-all duration-300 flex flex-col group h-full shadow-xl shadow-black/50 hover:-translate-y-1">
      
      {/* Card Image Header */}
      <div className="relative bg-slate-950 p-6 flex items-center justify-center min-h-[220px] overflow-hidden border-b border-slate-800/80">
        
        {/* Background Grid Watermark */}
        <div className="absolute inset-0 opacity-10 tech-grid-bg"></div>

        {/* Product Image with Soft Shadow & Hover Zoom */}
        <img 
          src={product.image} 
          alt={`${product.name} - AIM CUTTING TOOLS`}
          className="w-full max-h-48 object-contain transform group-hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_10px_15px_rgba(227,30,36,0.15)]"
        />

        {/* Category Type Badge (Manufacturing vs Trading) */}
        <span className={`absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
          product.type === 'Manufacturing'
            ? 'bg-act-red/15 text-act-red border-act-red/40'
            : 'bg-amber-500/15 text-amber-400 border-amber-500/40'
        }`}>
          {product.type}
        </span>

        {/* Precision Micron Badge */}
        <span className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-200 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-700">
          ±0.002mm ISO H6
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          <h3 className="text-lg font-bold font-display text-white group-hover:text-act-red transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Key Specs Summary Pills */}
        {product.specs && (
          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[11px] space-y-1 text-slate-200">
            {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
              <div key={key} className="flex justify-between items-center">
                <span className="text-slate-300 font-medium">{key}:</span>
                <span className="font-semibold text-white truncate max-w-[150px]">{val}</span>
              </div>
            ))}
          </div>
        )}

        {/* Card Actions */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            to={`/products/${product.slug}`}
            className="flex-1 py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold rounded-lg transition-colors text-center flex items-center justify-center space-x-1"
          >
            <span>View Specs</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => onOpenQuote(product)}
            className="py-2.5 px-3.5 bg-act-red hover:bg-act-red-dark text-white text-xs font-bold rounded-lg transition-colors shadow-md shadow-act-red/20 flex items-center space-x-1"
          >
            <span>Enquire</span>
          </button>
        </div>

      </div>

    </div>
  );
}
