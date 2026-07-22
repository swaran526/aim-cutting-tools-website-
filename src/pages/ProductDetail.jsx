import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { ArrowLeft, CheckCircle2, Shield, Wrench, Send, Award, FileText, ChevronRight, Phone } from 'lucide-react';
import companyData from '../data/company.json';

export default function ProductDetail({ onOpenQuote }) {
  const { slug } = useParams();
  const product = productsData.find(p => p.slug === slug) || productsData[0];

  const [activeImage, setActiveImage] = useState(product.image);

  return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumbs Navigation */}
        <div className="flex items-center space-x-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-white transition-colors">Products</Link>
          <span>/</span>
          <span className="text-act-red font-semibold">{product.name}</span>
        </div>

        {/* Product Overview Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Dominant Showcase Gallery */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex items-center justify-center min-h-[400px] relative overflow-hidden group shadow-2xl backdrop-blur-xl hover:border-act-red/50 transition-all duration-300">
              <img 
                src={activeImage} 
                alt={`${product.name} - ACT Carbide Tooling`}
                className="w-full max-h-80 object-contain filter drop-shadow-[0_20px_35px_rgba(227,30,36,0.3)] transform group-hover:scale-105 transition-transform duration-500"
              />
              
              <span className={`absolute top-4 left-4 text-xs font-mono font-bold uppercase px-3 py-1 rounded-md border ${
                product.type === 'Manufacturing' 
                  ? 'bg-act-red/20 text-act-red border-act-red/40' 
                  : 'bg-amber-500/20 text-amber-400 border-amber-500/40'
              }`}>
                {product.type} Category
              </span>

              <span className="absolute bottom-4 right-4 text-xs font-mono text-slate-300 bg-slate-950/90 px-3 py-1 rounded-lg border border-slate-800 shadow-md">
                ±0.002mm ISO H6
              </span>
            </div>

            {/* Thumbnail Gallery Strip */}
            <div className="flex items-center space-x-3 overflow-x-auto pb-2">
              <button 
                onClick={() => setActiveImage(product.image)}
                className="w-20 h-20 bg-slate-900 border-2 border-act-red rounded-2xl p-2 shrink-0 overflow-hidden shadow-md cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img src={product.image} alt="Thumbnail Primary" className="w-full h-full object-contain" />
              </button>
            </div>

          </div>

          {/* Right Column: Specification & Quote Order */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-act-red/10 border border-act-red/30 rounded-full text-xs font-bold uppercase tracking-wider text-act-red">
                <span>CATEGORY: {product.category}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white">{product.name}</h1>
              <p className="text-slate-300 text-sm leading-relaxed">{product.fullDescription}</p>
            </div>

            {/* Recommended Workpiece Materials */}
            {product.applications && (
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recommended Workpiece Materials:</span>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-semibold text-slate-200">
                      ✓ {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Specs Table */}
            {product.specs && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white font-display uppercase tracking-wider flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-act-red" />
                  <span>Technical Engineering Specifications</span>
                </h3>

                <div className="border border-slate-800 rounded-2xl overflow-hidden text-xs shadow-lg">
                  {Object.entries(product.specs).map(([key, val], idx) => (
                    <div 
                      key={key} 
                      className={`flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 p-3.5 ${
                        idx % 2 === 0 ? 'bg-slate-900' : 'bg-slate-950'
                      }`}
                    >
                      <span className="text-slate-400 font-semibold">{key}</span>
                      <span className="text-white font-mono font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onOpenQuote(product)}
                className="flex-1 py-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white font-bold rounded-xl shadow-xl shadow-act-red/25 flex items-center justify-center space-x-2 text-sm cursor-pointer transition-all transform active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Request Custom Quote for {product.name}</span>
              </button>

              <Link
                to="/products"
                className="py-4 px-6 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold rounded-xl border border-slate-700 text-sm text-center transition-all"
              >
                Back to Catalog
              </Link>
            </div>

            {/* Direct Workshop Contact Line */}
            <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl text-xs text-slate-300 flex items-center justify-between shadow-md">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-act-red" />
                <span>Peenya Sales Hotline: <strong className="text-white">{companyData.contact.phonePrimary}</strong></span>
              </div>
              <a href={`tel:${companyData.contact.phonePrimary}`} className="text-act-red font-bold hover:underline">Call Direct →</a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
