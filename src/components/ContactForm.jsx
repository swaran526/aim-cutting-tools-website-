import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, Building, MessageSquare, Wrench } from 'lucide-react';
import companyData from '../data/company.json';
import productsData from '../data/products.json';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    interest: 'Solid Carbide Drills',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      
      {submitted ? (
        <div className="py-12 text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-display text-white">Enquiry Submitted Successfully!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Thank you, <span className="text-act-red font-bold">{formData.name}</span>. Our technical tooling specialist in Peenya, Bangalore will get back to you within 2 business hours.
            </p>
          </div>
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-left max-w-md mx-auto space-y-1.5 text-slate-300">
            <p><b>Product Interest:</b> {formData.interest}</p>
            <p><b>Phone:</b> {formData.phone}</p>
            <p><b>Email:</b> {formData.email}</p>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 bg-act-red text-white text-xs font-bold rounded-lg hover:bg-act-red-dark transition-colors"
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          
          <div className="space-y-1 border-b border-slate-800 pb-4">
            <h3 className="text-2xl font-bold font-display text-white flex items-center gap-2">
              <Wrench className="w-5 h-5 text-act-red" />
              <span>Send Tooling Inquiry</span>
            </h3>
            <p className="text-xs text-slate-400">Fill out your component or tooling requirements for instant quotation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">Full Name *</label>
              <input 
                type="text"
                required
                placeholder="e.g. Anand Sharma"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-act-red focus:ring-1 focus:ring-act-red"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">Company Name</label>
              <input 
                type="text"
                placeholder="e.g. Apex Precision Tools"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-act-red focus:ring-1 focus:ring-act-red"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">Phone Number *</label>
              <input 
                type="tel"
                required
                placeholder="e.g. 9916479833"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-act-red focus:ring-1 focus:ring-act-red"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">Email Address *</label>
              <input 
                type="email"
                required
                placeholder="e.g. purchase@company.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-act-red focus:ring-1 focus:ring-act-red"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">Product Category / Service *</label>
            <select
              value={formData.interest}
              onChange={(e) => setFormData({...formData, interest: e.target.value})}
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-act-red"
            >
              {productsData.map(p => (
                <option key={p.id} value={p.category}>{p.category}</option>
              ))}
              <option value="Resharpening & Coating Service">Resharpening & Coating Service</option>
              <option value="Custom Form Tool">Custom Form Tool (Built to Spec)</option>
              <option value="General Technical Inquiry">General Technical Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">Tool Specifications / Quantity / Message</label>
            <textarea
              rows="4"
              placeholder="Provide tool dimensions, quantities, target workpiece material (Steel, Stainless, Aluminum), or specific drawing requirements..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-act-red focus:ring-1 focus:ring-act-red"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white font-bold rounded-xl transition-all shadow-lg shadow-act-red/20 flex items-center justify-center space-x-2 text-sm uppercase tracking-wider"
          >
            <Send className="w-4 h-4" />
            <span>Submit Tooling Inquiry</span>
          </button>

        </form>
      )}

    </div>
  );
}
