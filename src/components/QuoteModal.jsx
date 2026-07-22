import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, FileText, Wrench } from 'lucide-react';
import companyData from '../data/company.json';
import productsData from '../data/products.json';

export default function QuoteModal({ isOpen, onClose, selectedProduct = null }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    productCategory: selectedProduct ? selectedProduct.category : productsData[0].category,
    quantity: '10',
    specNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds on submission
    }, 3000);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-800/90 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-act-red/20 border border-act-red flex items-center justify-center text-act-red">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-white">Request a Tooling Quote</h3>
              <p className="text-xs text-slate-400">AIM CUTTING TOOLS • Peenya 2nd Stage, Bangalore</p>
            </div>
          </div>
          <button 
            onClick={resetForm}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-white font-display">Quote Request Received!</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-act-red">{formData.name}</span>. Our technical tooling team will review your specifications and contact you shortly.
              </p>
            </div>
            <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between"><span className="text-slate-400">Category:</span> <span className="text-white font-semibold">{formData.productCategory}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Phone:</span> <span className="text-white font-semibold">{formData.phone}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Email:</span> <span className="text-white font-semibold">{formData.email}</span></div>
            </div>
            <div className="pt-2">
              <button 
                onClick={resetForm}
                className="px-6 py-2.5 bg-act-red hover:bg-act-red-dark text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Close & Continue Browsing
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Full Name *</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-act-red focus:ring-1 focus:ring-act-red"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Company / Workshop Name</label>
                <input 
                  type="text"
                  placeholder="e.g. Precision Engineering Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-act-red focus:ring-1 focus:ring-act-red"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Phone Number *</label>
                <input 
                  type="tel"
                  required
                  placeholder="e.g. 9916479833"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-act-red focus:ring-1 focus:ring-act-red"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Email Address *</label>
                <input 
                  type="email"
                  required
                  placeholder="e.g. buyer@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-act-red focus:ring-1 focus:ring-act-red"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Tool Category *</label>
                <select 
                  value={formData.productCategory}
                  onChange={(e) => setFormData({...formData, productCategory: e.target.value})}
                  className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-act-red focus:ring-1 focus:ring-act-red"
                >
                  {productsData.map(p => (
                    <option key={p.id} value={p.category}>{p.category}</option>
                  ))}
                  <option value="Resharpening Service">Resharpening & Coating Service</option>
                  <option value="Custom Form Tool">Custom Form Tool (Drawing Attachment)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Estimated Quantity</label>
                <input 
                  type="text"
                  placeholder="e.g. 10 Pcs"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-act-red focus:ring-1 focus:ring-act-red"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Tool Specifications / Material / Tolerances</label>
              <textarea 
                rows="3"
                placeholder="Mention diameter, shank size, flutes, coating (AlTiN, TiAlN), workpiece material (e.g. SS304, Hardened Steel 55 HRC), or custom dimensions..."
                value={formData.specNotes}
                onChange={(e) => setFormData({...formData, specNotes: e.target.value})}
                className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-act-red focus:ring-1 focus:ring-act-red"
              ></textarea>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-800">
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-act-red" />
                <span>Need urgent assistance? Call: <b>{companyData.contact.phonePrimary}</b></span>
              </div>
              <button 
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white font-semibold rounded-lg transition-all shadow-lg shadow-act-red/25 flex items-center space-x-2 text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quote Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
