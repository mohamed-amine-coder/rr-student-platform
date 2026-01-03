import React, { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // زدنا هادي
import { NAV_LINKS } from './landingData'; // صححنا المسار

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo - رديناه Link باش يرجعنا لـ Home ديما */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="bg-yellow-400 p-1.5 rounded-lg shadow-sm shadow-yellow-200">
            <Zap size={20} fill="black" className="text-slate-900" />
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900">RR STUDENT</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500">
          {NAV_LINKS.map((link, i) => (
            <a key={i} href={link.href} className="hover:text-slate-900 transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-slate-900 text-white px-5 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-all">
            دخول
          </button>

          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu" // مزيانة للـ SEO و Accessibility
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-4 shadow-xl">
          {NAV_LINKS.map((link, i) => (
            <a 
              key={i} 
              href={link.href} 
              className="block text-sm font-bold text-slate-600 hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <hr className="border-slate-50" />
          <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-slate-200">
            دخول
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;