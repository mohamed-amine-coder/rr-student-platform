
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronLeft, CheckCircle2, TrendingUp } from 'lucide-react'; // زدت TrendingUp
import COMPARISON from '/rr-student-comparaison.jpg';

const HeroSection = () => {
  return (
    <section className="relative pt-12 pb-24 px-6 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* 1. الجانب النصي (يمين) */}
        <div className="flex-1 text-center md:text-right z-10">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-slate-200">
            <Sparkles size={12} className="text-yellow-500 fill-yellow-500"/> 
            منصة تعليمية بالداريجة المغربية
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-6 text-slate-900 tracking-tight">
              الدرس محفوض<br/>
                والراتراباج مرفوض. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-yellow-600 relative">
              البيولوجيا بالداريجة.
              <svg className="absolute w-full h-3 -bottom-1 right-0 text-yellow-300 opacity-50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-base text-slate-500 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
            حولنا ليك الـ Polycopes المعقدة لشروحات بصرية وشرح مبسط بالداريجة. 
            كلشي واجد باش تفاليدي الامتحانات ديالك.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/module/biologie animale">
              <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-2xl font-black shadow-lg shadow-yellow-200 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 w-full md:w-auto cursor-pointer">
                بدا أول درس فابور <ChevronLeft size={20}/>
              </button>
            </Link>
          </div>
        </div>

        {/* 2. الجانب البصري (يسار) */}
        <div className="flex-1 relative w-full max-w-md"> {/* تقدر تزيد max-w-lg باش تكبار شوية */}
            
            {/* الخلفية المزخرفة */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-yellow-200/40 to-slate-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
            
            {/* ✅ التغيير هنا: بدلت aspect-square بـ aspect-video */}
            <div className="relative aspect-video rounded-[2rem] overflow-hidden flex items-end justify-center group shadow-2xl">
                
                {/* الصورة */}
                <img 
                    src={COMPARISON}
                    alt="مقارنة بين الدراسة التقليدية ومنصة RR Student" 
                    className="w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-105" 
                />

                {/* Badge العلوي */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 px-3 rounded-xl shadow-lg flex items-center gap-2 animate-bounce z-20 border border-white/50">
                    <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 size={14} className="text-green-600"/></div>
                    <span className="text-[10px] font-bold text-slate-900">Beta 2026</span>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;