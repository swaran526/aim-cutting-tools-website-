import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';
import { Search, Filter, Wrench, Package, Layers, ArrowRight } from 'lucide-react';

export default function ProductGrid({ onOpenQuote, limit = null, title = "Our CNC Product Taxonomy (14 Categories)", showFilters = true }) {
  const [activeType, setActiveType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = productsData.filter(p => {
    const matchesType = activeType === 'All' || p.type === activeType;
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesCategory && matchesSearch;
  });

  const displayProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section className="py-10 sm:py-16 bg-slate-950 text-slate-100 font-sans tech-grid-bg relative overflow-hidden">
      
      {/* Radial Ambient Red Lighting Glow matching other homepage sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-act-red/10 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center justify-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            {title}
          </h2>
          <p className="text-slate-300 text-sm mt-3 leading-relaxed max-w-2xl">
            From precision Solid Carbide Round Tools to VMC accessories, tool holders, and metrology instruments.
          </p>
        </div>

        {/* Search and Category Filters Bar */}
        {showFilters && (
          <div className="mb-8 p-4 bg-slate-900/90 border border-slate-800 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
            
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tools, reamers, endmills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-act-red focus:ring-1 focus:ring-act-red"
              />
            </div>

            {/* Category Select Dropdown */}
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <span className="text-xs text-slate-300 font-semibold flex items-center gap-1 whitespace-nowrap">
                <Filter className="w-3.5 h-3.5 text-act-red" />
                <span>Filter Category:</span>
              </span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-64 px-3 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-act-red"
              >
                <option value="All">All Categories</option>
                {productsData.map(p => (
                  <option key={p.id} value={p.category}>{p.category}</option>
                ))}
              </select>
            </div>

          </div>
        )}

        {/* Products Cards Grid */}
        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onOpenQuote={onOpenQuote} 
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
            <p className="text-slate-400 text-sm">No tool categories found matching your search term.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setActiveType('All');
              }}
              className="px-4 py-2 bg-act-red text-white text-xs font-bold rounded-lg"
            >
              Reset All Filters
            </button>
          </div>
        )}
        {limit && productsData.length > limit && (
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-base font-bold rounded-xl transition-all shadow-xl shadow-act-red/25 hover:shadow-act-red/40 transform active:scale-95 cursor-pointer"
            >
              <span>View More Products</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
