import React from 'react';
import { CheckCircle2, Sparkles, Users, Zap, ArrowRight } from 'lucide-react';
import { PRICING_DATA } from './landingData';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 px-6 bg-white font-tajawal">
      <div className="max-w-5xl mx-auto"> {/* نقصنا العرض الأقصى باش يجي مجموع */}
        
        {/* Header مصغر */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">
            {PRICING_DATA.title}
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto font-medium text-sm leading-relaxed">
            {PRICING_DATA.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"> {/* Gap صغير */}
          
          {/* 1. كارت الاشتراك الفردي (Compact) */}
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl hover:border-slate-200 transition-all flex flex-col justify-between">
             <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-slate-400 font-black text-[10px] uppercase tracking-widest block mb-1">Personal Pass</span>
                    <h3 className="text-xl font-black text-slate-900">{PRICING_DATA.solo.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 text-xs line-through font-bold block">{PRICING_DATA.solo.originalPrice} DH</span>
                    <span className="text-3xl font-black text-slate-900">{PRICING_DATA.solo.price}<small className="text-sm">DH</small></span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {PRICING_DATA.solo.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-600 font-bold text-xs">
                      <CheckCircle2 size={14} className="text-slate-300" /> {feat}
                    </div>
                  ))}
                </div>
             </div>

             <button className="w-full py-3 bg-white border border-slate-200 text-slate-900 rounded-xl font-black text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all flex items-center justify-center gap-2">
               اشترك بوحدك <ArrowRight size={16} />
             </button>
          </div>

          {/* 2. كارت عرض الرفاق (Compact & Highlighted) */}
          <div className="bg-slate-900 p-6 rounded-3xl relative overflow-hidden border-2 border-yellow-400 flex flex-col justify-between shadow-xl shadow-yellow-400/5 group">
             {/* Glow خفيف */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-[60px]"></div>
             
             <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                   <div>
                      <div className="inline-flex items-center gap-1 bg-yellow-400 text-slate-900 px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wide mb-2">
                        <Sparkles size={10} fill="currentColor" /> Best Deal
                      </div>
                      <h3 className="text-xl font-black text-white">{PRICING_DATA.group.title}</h3>
                      <p className="text-yellow-400/80 text-[10px] font-bold">{PRICING_DATA.group.info}</p>
                   </div>
                   <div className="text-right">
                      <span className="text-4xl font-black text-yellow-400">{PRICING_DATA.group.price}</span>
                      <div className="text-white text-[9px] font-bold uppercase leading-none opacity-60">DH / للواحد</div>
                   </div>
                </div>

                <div className="space-y-3 mb-6">
                   {PRICING_DATA.group.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300 font-bold text-xs">
                      <div className="bg-yellow-400/10 p-0.5 rounded">
                        <Users size={12} className="text-yellow-400" />
                      </div>
                      {feat}
                    </div>
                  ))}
                </div>
             </div>

             <button className="w-full py-3 bg-yellow-400 text-slate-900 rounded-xl font-black text-sm hover:translate-y-[-2px] transition-transform shadow-lg shadow-yellow-400/20 flex items-center justify-center gap-2 relative z-10">
               <Zap size={16} fill="currentColor" /> جيب صحابك واستافد
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;