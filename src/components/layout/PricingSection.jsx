import React from 'react';
import { Sparkles, Users, User, ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react';
import { PRICING_DATA } from '../../data/landingData';

const HeroPricingSection = () => {
  return (
    <section className="py-8 px-4 md:px-6 font-tajawal" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        {/* Banner Container */}
        <div className="relative bg-slate-900 rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-slate-800 shadow-2xl shadow-yellow-400/10 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Right Side: Copy & Value Proposition */}
          <div className="flex-1 relative z-10 w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 px-4 py-2 rounded-full text-sm font-black mb-6">
              <Sparkles size={16} /> حصرياً لطلبة FSSM/FSR
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              {PRICING_DATA.title}
            </h2>
            
            <p className="text-slate-300 text-lg md:text-xl font-medium mb-8 leading-relaxed max-w-xl">
              {PRICING_DATA.description}
            </p>

            {/* Quick Features List */}
            <div className="space-y-3">
               <div className="flex items-center gap-3 text-slate-200 font-bold">
                  <div className="bg-slate-800 p-1.5 rounded-md"><CheckCircle2 size={18} className="text-yellow-400" /></div>
                  شرح الكور كامل مبسط بالدارجة
               </div>
               <div className="flex items-center gap-3 text-slate-200 font-bold">
                  <div className="bg-slate-800 p-1.5 rounded-md"><CheckCircle2 size={18} className="text-yellow-400" /></div>
                  تمارين TD وقوالب الامتحانات
               </div>
               <div className="flex items-center gap-3 text-slate-200 font-bold">
                  <div className="bg-slate-800 p-1.5 rounded-md"><CheckCircle2 size={18} className="text-yellow-400" /></div>
                  دليل حصري للـ TP (الملاحظة المجهرية)
               </div>
            </div>
          </div>

          {/* Left Side: Pricing Tickets */}
          <div className="w-full lg:w-[420px] relative z-10 flex flex-col gap-4">
            
            {/* 1. Duo Pack Ticket (The Main Highlight) */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-1 rounded-2xl shadow-xl shadow-yellow-400/20 transform md:scale-105 relative z-20">
               <div className="bg-slate-900 rounded-xl p-6 h-full relative overflow-hidden">
                  {/* Banner corner */}
                  <div className="absolute top-4 left-[-35px] -rotate-45 bg-yellow-400 text-slate-900 font-black text-[10px] py-1 px-10 uppercase tracking-widest">
                     Best Deal
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-4">
                    <div>
                      <h3 className="text-xl font-black text-yellow-400 flex items-center gap-2">
                        <Users size={20} /> {PRICING_DATA.group.title}
                      </h3>
                      <p className="text-slate-400 text-xs font-bold mt-1">{PRICING_DATA.group.info}</p>
                    </div>
                    <div className="text-left">
                      <span className="text-4xl font-black text-white">{PRICING_DATA.group.price}</span>
                      <span className="text-slate-400 text-sm font-bold ml-1">DH</span>
                      <div className="text-yellow-400/80 text-[10px] font-bold text-center leading-none mt-1">للمجموع بجوج</div>
                    </div>
                  </div>

                  <a 
                    href="https://wa.me/212718090887?text=سلام،%20بغيت%20نستافد%20من%20عرض%20Pack%20Duo%20ديال%20البيولوجيا" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-yellow-400 text-slate-900 rounded-lg font-black text-sm hover:bg-yellow-300 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} /> حجز العرض مع صاحبك دابا
                  </a>
               </div>
            </div>

            {/* 2. Solo Pack Ticket (Subtle Alternative) */}
            <div className="bg-slate-800/50 border border-slate-700 p-5 rounded-2xl flex items-center justify-between hover:bg-slate-800 transition-colors">
               <div className="flex items-center gap-3">
                 <div className="bg-slate-700/50 p-2 rounded-lg text-slate-400">
                    <User size={20} />
                 </div>
                 <div>
                    <h3 className="text-sm font-black text-slate-200">{PRICING_DATA.solo.title}</h3>
                    <p className="text-slate-400 text-[11px] font-bold">بواسطة حساب واحد</p>
                 </div>
               </div>
               <div className="text-left flex flex-col items-end">
                  <div className="flex items-baseline gap-1">
                     <span className="text-2xl font-black text-white">{PRICING_DATA.solo.price}</span>
                     <span className="text-slate-400 text-xs font-bold">DH</span>
                  </div>
                  <span className="text-slate-500 text-[10px] line-through font-bold">{PRICING_DATA.solo.originalPrice} DH</span>
               </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroPricingSection;