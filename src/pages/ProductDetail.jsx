import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import { Send, ChevronRight, Phone, ArrowRight, Grid } from 'lucide-react';
import companyData from '../data/company.json';

export default function ProductDetail({ onOpenQuote }) {
  const { slug } = useParams();
  const product = productsData.find(p => p.slug === slug) || productsData[0];

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Filter 4 related products for the bottom "View More" grid
  const relatedProducts = productsData
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs Navigation */}
        <div className="flex flex-wrap items-center gap-y-1 space-x-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-white transition-colors">Products</Link>
          <span>/</span>
          <span className="text-act-red font-semibold">{product.name}</span>
        </div>

        {/* Product Overview Split Layout (Equal Heights) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Dominant Tool Image Showcase */}
          <div className="lg:col-span-6 h-full flex flex-col">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex-1 flex items-center justify-center min-h-[340px] sm:min-h-[380px] relative overflow-hidden group shadow-xl backdrop-blur-xl transition-all duration-300">
              <img 
                src={product.image} 
                alt={`${product.name} - ACT Carbide Tooling`}
                className="w-full max-h-72 sm:max-h-80 object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Specification & Quote Order */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4 text-left h-full">
            
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white">{product.name}</h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{product.fullDescription}</p>
            </div>

            {/* Recommended Workpiece Materials */}
            {product.applications && (
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Recommended Workpiece Materials:</span>
                <div className="flex flex-wrap gap-1.5">
                  {product.applications.map((app, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-semibold text-slate-200">
                      ✓ {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenQuote(product)}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white font-bold rounded-xl shadow-lg shadow-act-red/20 flex items-center justify-center space-x-2 text-xs uppercase tracking-wider cursor-pointer transition-all transform active:scale-95"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Request Custom Quote</span>
              </button>

              <Link
                to="/products"
                className="py-3 px-5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold rounded-xl border border-slate-700 text-xs text-center transition-all flex items-center justify-center space-x-1.5"
              >
                <Grid className="w-3.5 h-3.5 text-slate-400" />
                <span>Back to Catalog</span>
              </Link>
            </div>

            {/* Direct Workshop Contact Line */}
            <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-md text-left">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-act-red shrink-0" />
                <span>Peenya Sales Hotline: <a href={`tel:${companyData.contact.phonePrimary}`} className="text-act-red font-bold hover:underline">{companyData.contact.phonePrimary}</a></span>
              </div>
              <a href={`tel:${companyData.contact.phonePrimary}`} className="text-act-red font-bold hover:underline flex items-center gap-1">
                <span>Call Direct</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Glowing Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-8"></div>

        {/* Bottom Section: Explore Other Products Grid */}
        <div className="space-y-6 pt-2">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-extrabold font-display text-white">
                Explore Other Precision Tools
              </h2>
              <p className="text-xs text-slate-400">
                Discover more high-performance Solid Carbide cutting tools and CNC tooling accessories.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-act-red font-bold text-xs rounded-xl border border-slate-800 transition-all hover:border-act-red/50 shadow-md shrink-0"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4 Related Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedProducts.map((p) => (
              <ProductCard 
                key={p.id} 
                product={p} 
                onOpenQuote={onOpenQuote} 
              />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
