import React from 'react';
import { GraduationCap, CheckCircle2, Sparkles } from 'lucide-react';
import { PRICING_DATA } from './landingData';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden group">
        
        {/* تأثيرات بصرية خلفية (Glow effect) */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] group-hover:bg-yellow-500/20 transition-all duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full blur-[80px]"></div>
        
        {/* أيقونة وسياق الكلام */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-yellow-400 p-4 rounded-3xl mb-6 text-slate-900 shadow-xl shadow-yellow-400/20">
            <GraduationCap size={40} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            {PRICING_DATA.title}
          </h2>
          
          <p className="text-slate-400 mb-10 font-medium max-w-xl mx-auto text-lg leading-relaxed">
            {PRICING_DATA.description}
          </p>

          {/* الثمن */}
          <div className="mb-10 inline-flex items-center gap-4 bg-slate-800/50 p-6 rounded-[2rem] border border-slate-700">
             <div className="text-right">
                <span className="block text-slate-500 text-sm line-through font-bold">{PRICING_DATA.originalPrice} DH</span>
                <span className="text-4xl md:text-5xl font-black text-yellow-400">{PRICING_DATA.price} <small className="text-lg">DH</small></span>
             </div>
             <div className="h-12 w-[1px] bg-slate-700 mx-2"></div>
             <div className="text-right space-y-1">
                {PRICING_DATA.features.slice(0, 2).map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-300">
                    <CheckCircle2 size={14} className="text-green-400" /> {feat}
                  </div>
                ))}
             </div>
          </div>

          {/* بوطونة الشراء */}
          <button className="relative z-10 bg-yellow-400 text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-yellow-400/20 active:scale-95 flex items-center gap-3">
            <Sparkles size={20} fill="currentColor"/>
            شري الـ Bundle كاملة دابا
          </button>
          
          <p className="mt-6 text-slate-500 text-xs font-bold uppercase tracking-widest">
            دفع آمن و Accès مدى الحياة
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;