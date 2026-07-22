import React, { useState } from 'react';
import { MessageSquare, X, Send, Phone, FileText, ChevronRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import companyData from '../data/company.json';
import productsData from '../data/products.json';

export default function ChatWidget({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: `Hello! Welcome to AIM CUTTING TOOLS (ACT). Select any precision tool below to inspect specs, tolerances, and get an instant quote:`,
      time: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [hasNotification, setHasNotification] = useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (hasNotification) setHasNotification(false);
  };

  const productList = Array.isArray(productsData) ? productsData : (productsData?.products || []);

  const handleSelectTool = (tool) => {
    setSelectedTool(tool);
    
    // Add user selection message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: `Inspecting ${tool.name}...`,
      time: 'Just now'
    };

    // Add agent tool detail card message
    const agentToolCard = {
      id: Date.now() + 1,
      sender: 'agent',
      isToolCard: true,
      tool: tool,
      time: 'Just now'
    };

    setMessages(prev => [...prev, userMsg, agentToolCard]);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: inputText,
      time: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    const currentInput = inputText;
    setInputText('');

    setTimeout(() => {
      const replyMsg = {
        id: Date.now() + 1,
        sender: 'agent',
        text: `Connecting your tooling inquiry with our Technical Sales Desk...`,
        time: 'Just now'
      };
      setMessages(prev => [...prev, replyMsg]);

      const encodedMsg = encodeURIComponent(`Hi ACT Tooling Support, I have an inquiry: ${currentInput}`);
      window.open(`https://wa.me/91${companyData.contact.phonePrimary}?text=${encodedMsg}`, '_blank');
    }, 1000);
  };

  const handleToolAction = (tool, actionType) => {
    if (actionType === 'quote') {
      onOpenQuote(tool);
      setIsOpen(false);
    } else if (actionType === 'whatsapp') {
      const msg = `Hi ACT Technical Sales, I would like a quote for ${tool.name} (Tolerances: ${tool.specs?.["Shank Tolerance"] || 'Micron H6'}, Material: ${tool.specs?.["Substrate Grade"] || 'Sub-micron Carbide'}).`;
      window.open(`https://wa.me/91${companyData.contact.phonePrimary}?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* Chat Window Panel */}
      {isOpen && (
        <div className="mb-4 w-[90vw] max-w-[360px] sm:w-[395px] bg-slate-900 border border-slate-700/90 rounded-3xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl animate-fade-in-scale">
          
          {/* Chat Header */}
          <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-3 text-left">
              <div className="relative">
                <img 
                  src="/assets/images/logo/logo.jpeg" 
                  alt="ACT Support Logo" 
                  className="w-10 h-10 rounded-xl object-contain bg-slate-900 p-1 border border-slate-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/images/logo.png";
                  }}
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-display flex items-center gap-1.5">
                  <span>ACT Tooling Desk</span>
                  <Sparkles className="w-3.5 h-3.5 text-act-red" />
                </h4>
                <p className="text-[11px] text-emerald-400 font-medium">Online • Interactive Specs & Quotes</p>
              </div>
            </div>

            <button 
              onClick={toggleChat}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Always-Visible Direct Actions Bar */}
          <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-950/95 border-b border-slate-800">
            <button
              onClick={() => { onOpenQuote(); setIsOpen(false); }}
              className="px-3 py-2 bg-act-red hover:bg-act-red-dark text-white font-extrabold text-[11px] rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Request Custom Tool</span>
            </button>

            <button
              onClick={() => { window.location.href = `tel:${companyData.contact.phonePrimary}`; }}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-[11px] rounded-xl border border-slate-700 shadow-md transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Contact</span>
            </button>
          </div>

          {/* Interactive Tool Category Selector Header Bar */}
          <div className="bg-slate-950/90 border-b border-slate-800 p-2.5">
            <label className="block text-[10px] uppercase tracking-wider font-extrabold text-slate-400 text-left mb-1.5 px-1">
              Select Tool Category to Inspect:
            </label>
            <select
              onChange={(e) => {
                const found = productList.find(p => p.id === e.target.value);
                if (found) handleSelectTool(found);
              }}
              value={selectedTool ? selectedTool.id : ''}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-slate-200 font-semibold focus:outline-none focus:border-act-red cursor-pointer"
            >
              <option value="" disabled>-- Click to Select a Tool --</option>
              {productList.map(tool => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} ({tool.category})
                </option>
              ))}
            </select>
          </div>

          {/* Messages Container */}
          <div className="p-4 flex-1 max-h-[300px] overflow-y-auto space-y-3 text-left text-xs bg-slate-950/60">
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                {msg.isToolCard ? (
                  /* Tool Specs Inspector Card */
                  <div className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-3.5 space-y-2.5 shadow-xl text-left my-1">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-xs font-extrabold text-white font-display flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-act-red" />
                        {msg.tool.name}
                      </span>
                      <span className="text-[10px] font-mono font-semibold bg-act-red/20 text-act-red border border-act-red/30 px-2 py-0.5 rounded-md">
                        {msg.tool.type || 'Precision Tool'}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {msg.tool.shortDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-1.5 text-[10px] bg-slate-950/80 p-2 rounded-xl border border-slate-800 font-mono">
                      <div>
                        <span className="text-slate-400 block">Tolerance:</span>
                        <span className="text-white font-bold">{msg.tool.specs?.["Shank Tolerance"] || '±0.002mm ISO H6'}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Material:</span>
                        <span className="text-amber-400 font-bold">{msg.tool.specs?.["Substrate Grade"] || 'Sub-micron Carbide'}</span>
                      </div>
                      <div className="col-span-2 pt-1 border-t border-slate-800/80">
                        <span className="text-slate-400 block">Coating:</span>
                        <span className="text-emerald-400 font-bold">{msg.tool.specs?.["Coating Options"] || 'AlTiN / TiAlN PVD'}</span>
                      </div>
                    </div>

                    {/* Action Buttons for Selected Tool */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => handleToolAction(msg.tool, 'quote')}
                        className="px-2.5 py-2 bg-act-red hover:bg-act-red-dark text-white font-bold text-[11px] rounded-xl transition-all shadow-md flex items-center justify-center space-x-1 cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Instant Quote</span>
                      </button>

                      <button
                        onClick={() => handleToolAction(msg.tool, 'whatsapp')}
                        className="px-2.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] rounded-xl transition-all shadow-md flex items-center justify-center space-x-1 cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp Specs</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Standard Chat Bubble */
                  <div 
                    className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-act-red text-white font-medium rounded-tr-none shadow-md'
                        : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                )}
                <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>
              </div>
            ))}

            {/* Quick Tool Selector Pills */}
            <div className="pt-2 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Popular Tool Specs:</p>
              <div className="flex flex-wrap gap-1.5">
                {productList.slice(0, 4).map(tool => (
                  <button
                    key={tool.id}
                    onClick={() => handleSelectTool(tool)}
                    className="px-2.5 py-1.5 bg-slate-800 hover:bg-act-red hover:text-white text-slate-200 text-[11px] font-medium rounded-xl border border-slate-700 transition-all flex items-center space-x-1 cursor-pointer"
                  >
                    <span>{tool.name}</span>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center space-x-2">
            <input 
              type="text"
              placeholder="Type custom specs or question..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-act-red focus:ring-1 focus:ring-act-red"
            />
            <button
              type="submit"
              className="p-2 bg-act-red hover:bg-act-red-dark text-white rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center cursor-pointer"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Action Toggle Button */}
      <button
        onClick={toggleChat}
        className="relative p-4 bg-gradient-to-r from-act-red to-act-red-dark hover:from-act-red-light hover:to-act-red text-white rounded-full shadow-2xl shadow-act-red/40 hover:shadow-act-red/60 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer group border border-red-400/40"
        aria-label="Open Live Chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}

        {/* Pulsing Outer Ring */}
        <span className="absolute -inset-1 rounded-full bg-act-red/30 animate-ping pointer-events-none"></span>

        {/* Unread Badge */}
        {!isOpen && hasNotification && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 text-slate-950 font-extrabold text-[10px] rounded-full border-2 border-slate-950 flex items-center justify-center shadow-md animate-bounce">
            1
          </span>
        )}
      </button>

    </div>
  );
}
