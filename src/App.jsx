import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';

import ChatWidget from './components/ChatWidget';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null);

  const handleOpenQuote = (product = null) => {
    setQuoteProduct(product);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteProduct(null);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-act-red selection:text-white">
        
        <Header onOpenQuote={() => handleOpenQuote(null)} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenQuote={handleOpenQuote} />} />
            <Route path="/about" element={<About onOpenQuote={handleOpenQuote} />} />
            <Route path="/products" element={<Products onOpenQuote={handleOpenQuote} />} />
            <Route path="/products/:slug" element={<ProductDetail onOpenQuote={handleOpenQuote} />} />
            <Route path="/services" element={<Services onOpenQuote={handleOpenQuote} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home onOpenQuote={handleOpenQuote} />} />
          </Routes>
        </main>

        <Footer onOpenQuote={() => handleOpenQuote(null)} />

        <QuoteModal 
          isOpen={isQuoteOpen} 
          onClose={handleCloseQuote} 
          selectedProduct={quoteProduct} 
        />

        <ChatWidget onOpenQuote={() => handleOpenQuote(null)} />

      </div>
    </BrowserRouter>
  );
}
