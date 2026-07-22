import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, UserCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import companyData from '../data/company.json';

export default function Contact() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans tech-grid-bg relative overflow-hidden">
      
      {/* 1. Page Hero Banner matching Hero formula */}
      <section className="relative py-16 sm:py-24 bg-slate-950 border-b border-slate-800/80 text-center overflow-hidden">
        
        {/* Radial Ambient Red and Blue Lighting Glows matching Hero */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-act-red/20 rounded-full filter blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-200 shadow-lg backdrop-blur-md whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-act-red animate-pulse"></span>
            <span className="text-slate-300">Contact Us</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
            Connect With AIM CUTTING TOOLS. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-act-red via-red-500 to-amber-500">
              Get Immediate Tooling Support.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Whether you need custom form tool drawings reviewed, resharpening pickup in Bangalore, or stock availability for VMC tool holders, our team is standing by.
          </p>
        </div>
      </section>

      {/* Transition Device 1: Glowing Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-act-red/40 to-transparent"></div>

      {/* 2. Main Contact Info & Form Split Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Plant Contact Cards matching Hero showcase cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="bg-slate-900/95 border border-slate-800/90 rounded-3xl p-8 space-y-6 shadow-2xl backdrop-blur-xl group hover:border-act-red/50 transition-all duration-300">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-act-red" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Factory Desk & Sales</span>
                </div>
                <span className="text-xs font-mono font-bold text-act-red bg-act-red/10 px-3 py-1 rounded-full border border-act-red/30">
                  ACT Bangalore
                </span>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                
                {/* Phone Contact Item */}
                <div className="p-4 bg-slate-950/90 rounded-2xl border border-slate-800 flex items-start space-x-3.5 shadow-inner">
                  <Phone className="w-5 h-5 text-act-red shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-sm mb-1">Direct Call & WhatsApp</p>
                    <p className="text-slate-300">Primary: <a href={`tel:${companyData.contact.phonePrimary}`} className="text-act-red font-mono font-bold hover:underline">{companyData.contact.phonePrimary}</a></p>
                    <p className="text-slate-300">Secondary: <a href={`tel:${companyData.contact.phoneSecondary}`} className="text-white font-mono font-bold hover:underline">{companyData.contact.phoneSecondary}</a></p>
                  </div>
                </div>

                {/* Email Contact Item */}
                <div className="p-4 bg-slate-950/90 rounded-2xl border border-slate-800 flex items-start space-x-3.5 shadow-inner">
                  <Mail className="w-5 h-5 text-act-red shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-sm mb-1">Email Inquiry Desk</p>
                    <a href={`mailto:${companyData.contact.email}`} className="text-act-red font-mono font-bold hover:underline">{companyData.contact.email}</a>
                    <p className="text-[11px] text-slate-400 mt-0.5">Send component drawings & CAD step files</p>
                  </div>
                </div>

                {/* Address Item */}
                <div className="p-4 bg-slate-950/90 rounded-2xl border border-slate-800 flex items-start space-x-3.5 shadow-inner">
                  <MapPin className="w-5 h-5 text-act-red shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-sm mb-1">Plant Address</p>
                    <p className="text-slate-300 leading-relaxed">{companyData.contact.address}</p>
                  </div>
                </div>

                {/* Hours Item */}
                <div className="p-4 bg-slate-950/90 rounded-2xl border border-slate-800 flex items-start space-x-3.5 shadow-inner">
                  <Clock className="w-5 h-5 text-act-red shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-sm mb-1">Working Hours</p>
                    <p className="text-slate-300">{companyData.contact.workingHours}</p>
                    <p className="text-emerald-400 font-semibold text-[11px] mt-0.5">Emergency Tooling Pickup Available</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Transition Device 2: Gradient Bleed Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-act-red/40 to-transparent"></div>

      {/* 3. Google Maps Embed Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-act-red">FACTORY LOCATION</span>
            <h3 className="text-2xl font-bold font-display text-white">Find Our Workshop in Peenya 2nd Stage</h3>
          </div>
          <a
            href={companyData.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold rounded-xl border border-slate-700 transition-all flex items-center space-x-2 shadow-md"
          >
            <MapPin className="w-4 h-4 text-act-red" />
            <span>Open in Google Maps</span>
          </a>
        </div>

        <div className="w-full h-96 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 relative">
          <iframe 
            title="AIM CUTTING TOOLS Peenya Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.039247654321!2d77.5134!3d13.0321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzU1LjYiTiA3N8KwMzA0OC4yIkU!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) invert(0.92)' }} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
