import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, ShieldCheck, ChevronRight, Clock } from 'lucide-react';
import companyData from '../data/company.json';

export default function Header({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About ACT', path: '/about' },
    { name: 'Products & Tools', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact & Location', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full font-sans transition-all duration-300">
      
      {/* Top Announcement Strip */}
      <div className="bg-slate-950 border-b border-slate-800 text-xs py-2 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          
          <div className="flex items-center space-x-6 overflow-x-auto whitespace-nowrap">
            <span className="flex items-center space-x-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-act-red shrink-0" />
              <span>{companyData.contact.area}, Bangalore - 560058</span>
            </span>
            <span className="hidden sm:flex items-center space-x-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-act-red shrink-0" />
              <span>{companyData.contact.workingHours}</span>
            </span>
            <span className="flex items-center space-x-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Est. 2016 • Founder: {companyData.founder}</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${companyData.contact.phonePrimary}`} 
              className="flex items-center space-x-1.5 text-white hover:text-act-red transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-act-red" />
              <span>{companyData.contact.phonePrimary}</span>
            </a>
            <span className="text-slate-500">|</span>
            <a 
              href={`tel:${companyData.contact.phoneSecondary}`} 
              className="hidden sm:flex items-center space-x-1.5 text-slate-300 hover:text-act-red transition-colors"
            >
              <span>{companyData.contact.phoneSecondary}</span>
            </a>
            <span className="hidden sm:inline text-slate-500">|</span>
            <a 
              href={`mailto:${companyData.contact.email}`} 
              className="hidden md:flex items-center space-x-1.5 text-slate-300 hover:text-act-red transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-act-red" />
              <span>{companyData.contact.email}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-2.5' 
          : 'bg-slate-900 border-b border-slate-800/80 py-2.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Company Name Brand Link */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <img 
              src="/assets/images/logo/logo.jpeg" 
              alt="AIM CUTTING TOOLS Logo" 
              className="h-8 sm:h-12 w-auto object-contain rounded-lg transition-transform group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/assets/images/logo.png";
              }}
            />
            <span className="text-base sm:text-2xl font-black font-display tracking-tight leading-none whitespace-nowrap logo-text-gradient">
              AIM CUTTING TOOLS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative ${
                  isActive(link.path)
                    ? 'text-white font-semibold bg-slate-800/80'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-act-red rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-act-red/20 hover:shadow-act-red/35 cursor-pointer flex items-center space-x-1.5 transform active:scale-95"
            >
              <span>Instant Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-slate-800 text-slate-200 rounded-lg hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-white font-bold bg-act-red/20 border border-act-red/40'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 bg-act-red text-white text-xs font-bold rounded-xl shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Request Custom Quote</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>

    </header>
  );
}
