import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, UserCheck, ArrowRight, ShieldCheck, MessageSquare } from 'lucide-react';
import companyData from '../data/company.json';
import FinalCtaBand from '../components/FinalCtaBand';

export default function Contact({ onOpenQuote }) {
  return (
    <div className="bg-slate-950 text-white font-sans tech-grid-bg relative overflow-hidden">

      {/* 1. Page Hero Banner matching Hero formula */}
      <section className="relative py-4 sm:py-6 bg-gradient-to-b from-slate-900 to-slate-950 bg-slate-950 border-b border-slate-800/80 text-center overflow-hidden">



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">


          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
            Connect With ACT. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-act-red via-red-500 to-amber-500">
              Get Tooling Support.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Our Bangalore team is standing by to support your custom tooling and resharpening requirements.
          </p>
        </div>
      </section>

      {/* Transition Device 1: Glowing Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-act-red/40 to-transparent"></div>

      {/* 2. Main Contact Info & Form Split Section */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">

          {/* Left Column: Direct Plant Contact Cards matching Hero showcase cards */}
          <div className="lg:col-span-5 text-left flex flex-col">

            <div className="bg-slate-900/95 border border-slate-800/90 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl group hover:border-act-red/50 transition-all duration-300 flex flex-col flex-1">

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-act-red" />
                  <span className="text-xs font-bold uppercase tracking-wider logo-text-gradient">Factory Desk &amp; Sales</span>
                </div>
                <span className="text-xs font-mono font-bold text-act-red bg-act-red/10 px-3 py-1 rounded-full border border-act-red/30">
                  ACT Bangalore
                </span>
              </div>

              <div className="flex flex-col justify-between flex-1 pt-3 gap-3">

                {/* Phone Contact Item */}
                <div className="p-3 bg-slate-950/90 rounded-2xl border border-slate-800 flex items-start space-x-3 shadow-inner">
                  <Phone className="w-5 h-5 text-act-red shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-sm mb-1">Direct Call & WhatsApp</p>
                    <p className="text-slate-300">Primary: <a href={`tel:${companyData.contact.phonePrimary}`} className="text-act-red font-mono font-bold hover:underline">{companyData.contact.phonePrimary}</a></p>
                    <p className="text-slate-300">Secondary: <a href={`tel:${companyData.contact.phoneSecondary}`} className="text-white font-mono font-bold hover:underline">{companyData.contact.phoneSecondary}</a></p>
                  </div>
                </div>

                {/* Email Contact Item */}
                <div className="p-3 bg-slate-950/90 rounded-2xl border border-slate-800 flex items-start space-x-3 shadow-inner">
                  <Mail className="w-5 h-5 text-act-red shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-sm mb-1">Email Inquiry Desk</p>
                    <a href={`mailto:${companyData.contact.email}`} className="text-act-red font-mono font-bold hover:underline">{companyData.contact.email}</a>
                    <p className="text-[11px] text-slate-400 mt-0.5">Send component drawings & CAD step files</p>
                  </div>
                </div>

                {/* Address Item */}
                <div className="p-3 bg-slate-950/90 rounded-2xl border border-slate-800 flex items-start space-x-3 shadow-inner">
                  <MapPin className="w-5 h-5 text-act-red shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-sm mb-1">Plant Address</p>
                    <p className="text-slate-300 leading-relaxed">{companyData.contact.address}</p>
                  </div>
                </div>

                {/* Hours Item */}
                <div className="p-3 bg-slate-950/90 rounded-2xl border border-slate-800 flex items-start space-x-3 shadow-inner">
                  <Clock className="w-5 h-5 text-act-red shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-sm mb-1">Working Hours</p>
                    <p className="text-slate-300">{companyData.contact.workingHours}</p>
                    <p className="text-emerald-600 font-semibold text-[11px] mt-0.5">Emergency Tooling Pickup Available</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 h-full flex flex-col">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Transition Device 2: Gradient Bleed Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-act-red/40 to-transparent"></div>

      {/* 3. Google Maps Embed Section */}
      <section className="py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">Find Our Workshop in Peenya 2nd Stage</h3>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Column: Map Embed */}
          <div className="industrial-card lg:h-[460px] h-64 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 relative">
            <iframe
              title="AIM CUTTING TOOLS Peenya Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.039247654321!2d77.5134!3d13.0321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzU1LjYiTiA3N8KwMzA0OC4yIkU!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right Column: Dispatch Details Card */}
          <div className="industrial-card lg:h-[460px] bg-slate-900/95 border border-slate-800/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl backdrop-blur-xl flex flex-col justify-between">

            {/* Header — exact match to left card header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-act-red" />
                <span className="text-xs font-bold uppercase tracking-wider logo-text-gradient">Location &amp; Dispatch</span>
              </div>
              <span className="text-xs font-mono font-bold text-act-red bg-act-red/10 px-3 py-1 rounded-full border border-act-red/30">
                Peenya 2nd Stage
              </span>
            </div>

            {/* Contact rows — exact same inner item classes as left card */}
            <div className="space-y-4 text-xs text-slate-300 flex-1">

              {/* Phone row */}
              <a
                href={`tel:${companyData.contact.phonePrimary}`}
                className="group p-4 bg-slate-950/90 rounded-2xl border border-slate-800 flex items-start space-x-3.5 shadow-inner hover:border-act-red/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: '0ms' }}
              >
                <Phone className="w-5 h-5 text-act-red shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="font-bold text-white text-sm mb-1">Direct Call &amp; WhatsApp</p>
                  <p className="text-act-red font-mono font-bold">{companyData.contact.phonePrimary}</p>
                </div>
              </a>

              {/* Email row */}
              <a
                href={`mailto:${companyData.contact.email}`}
                className="group p-4 bg-slate-950/90 rounded-2xl border border-slate-800 flex items-start space-x-3.5 shadow-inner hover:border-act-red/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: '80ms' }}
              >
                <Mail className="w-5 h-5 text-act-red shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="font-bold text-white text-sm mb-1">Email Inquiry Desk</p>
                  <p className="text-act-red font-mono font-bold">{companyData.contact.email}</p>
                </div>
              </a>

              {/* GPS row */}
              <a
                href={companyData.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-slate-950/90 rounded-2xl border border-slate-800 flex items-start space-x-3.5 shadow-inner hover:border-act-red/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: '160ms' }}
              >
                <MapPin className="w-5 h-5 text-act-red shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="font-bold text-white text-sm mb-1">GPS Coordinates</p>
                  <p className="text-act-red font-mono font-bold">13.0321° N, 77.5134° E</p>
                </div>
              </a>

            </div>

            {/* CTA Button — matches site's primary red gradient button style */}
            <div className="pt-5 border-t border-slate-800 mt-2">
              <a
                href={`https://wa.me/${companyData.contact.phonePrimary.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-sm font-bold rounded-xl transition-all shadow-xl shadow-act-red/25 hover:shadow-act-red/40 flex items-center justify-center space-x-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Dispatch</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Transition Device 3: Glowing Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-act-red/40 to-transparent"></div>

      {/* 4. Final Call-to-Action Banner */}
      <FinalCtaBand onOpenQuote={onOpenQuote} />

    </div>
  );
}
