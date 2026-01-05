import React from 'react';
import { Zap, Heart, Github, Linkedin, Instagram, ExternalLink, ShieldCheck, ArrowUpRight, CalendarClock, Users, Info } from 'lucide-react';
import { FOOTER_DATA } from './landingData';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-slate-100 pt-20 pb-10 px-6 overflow-hidden">
      {/* Aesthetic Background Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* 1. Brand and Description */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-slate-900 p-2 rounded-xl group-hover:bg-yellow-400 transition-colors duration-500">
              <Zap size={20} className="text-white group-hover:text-slate-900" fill="currentColor" />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900">RR STUDENT</span>
          </div>

          <div className="space-y-4">
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              أول منصة مغربية لتبسيط دروس شعبة البيولوجيا بالداريجة.
            </p>

            {/* Structured Info Points */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <CalendarClock size={16} className="text-blue-500 shrink-0" />
                <span>التسجيل يفتح <span className="font-bold text-slate-900">4 مرات</span> فقط في السنة.</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <Users size={16} className="text-green-500 shrink-0" />
                <span> لا نتجاوز <span className="font-bold text-slate-900">850 طالب</span> في كل دفعة من جميع كليات العلوم المغربية.</span>
              </div>

              <div className="bg-yellow-50 border border-yellow-100 p-2.5 rounded-xl flex items-start gap-2 text-[11px] text-yellow-800 font-bold mt-2 leading-tight">
                <Info size={14} className="text-yellow-600 shrink-0 mt-0.5" />
                <span>لسنا معهد دعم، بل منصة "تعلم ذاتي" (Self-Learning Platform).</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h4 className="font-black text-slate-900 mb-6 text-xs uppercase tracking-[0.2em]">تصفح المنصة</h4>
          <ul className="space-y-4">
            {FOOTER_DATA.quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-slate-500 hover:text-slate-900 text-sm font-bold transition-all flex items-center gap-1 group">
                  {link.label}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Scientific Review */}
        <div>
          <h4 className="font-black text-slate-900 mb-6 text-xs uppercase tracking-[0.2em]">المراجعة العلمية</h4>
          <ul className="space-y-5">
            {FOOTER_DATA.contributors.map((person, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1">
                  {person.verified ? <ShieldCheck size={16} className="text-blue-500" /> : <div className="w-4 h-4 rounded-full bg-slate-100"></div>}
                </div>
                <div>
                  <span className="block text-slate-800 font-bold text-sm leading-none mb-1">
                    {person.name}
                  </span>
                  <span className="text-slate-400 text-[11px] font-medium">{person.role}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Developer Contact */}
        <div className="bg-yellow-400 p-6 rounded-[2rem] border border-slate-100 self-start">
          <h4 className="font-black text-slate-900 mb-4 text-xs uppercase tracking-widest text-center">Design & Dev</h4>
          <div className="text-center space-y-4">
            <p className="text-slate-900 text-sm font-bold leading-tight">
               تم تطوير المنصة برمجيا بواسطة<br/>
               <span className="block mt-1 text-slate-800 opacity-80">{FOOTER_DATA.developer.name}</span>
               <span className="text-[10px] uppercase opacity-60 block">{FOOTER_DATA.developer.role}</span>
            </p>
            <div className="flex justify-center gap-3">
              {FOOTER_DATA.developer.links.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href} 
                  className="p-2 bg-white rounded-2xl text-slate-400 hover:text-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  {link.label === "LinkedIn" && <Linkedin size={20} />}
                  {link.label === "GitHub" && <Github size={20} />}
                  {link.label === "Instagram" && <Instagram size={20} />}
                  {link.label === "Portfolio" && <ExternalLink size={20} />}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;