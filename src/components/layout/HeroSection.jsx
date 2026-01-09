import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronLeft, GraduationCap, CheckCircle2 } from 'lucide-react';
import Logo from '../../../public/logo.jpg'; // تأكد من السمية والمسار
import ModulePage from '../../pages/ModulePage';

const HeroSection = () => {
  return (
    <section className="relative pt-12 pb-24 px-6 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* 1. الجانب النصي (يمين) */}
        <div className="flex-1 text-center md:text-right z-10">
          {/* Badge صغير فوق العنوان */}
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-slate-200">
            <Sparkles size={12} className="text-yellow-500 fill-yellow-500"/> 
            منصة تعليمية بالداريجة المغربية
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-6 text-slate-900 tracking-tight">
              الدرس محفوض<br/>
                والراتراباج مرفوض. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-yellow-600 relative">
              البيولوجيا بالداريجة.
              {/* خط زوين تحت الكلمة */}
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
            <Link to="/module/bio-cell"> {/* هنا حددنا الموديل د البيولوجيا الخلوية */}
              <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-2xl font-black shadow-lg shadow-yellow-200 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 w-full md:w-auto cursor-pointer">
                بدا أول درس فابور <ChevronLeft size={20}/>
              </button>
            </Link>
            {/* <button className="bg-white border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all text-slate-600">
              شوف المنهجية
            </button> */}
          </div>
        </div>

        {/* 2. الجانب البصري (يسار) */}
        <div className="flex-1 relative w-full max-w-md">
            {/* الخلفية المزخرفة غاتبقى هي هي */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-yellow-200/40 to-slate-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
            
            <div className="relative aspect-square rounded-[3rem] overflow-hidden flex items-end justify-center">
                
                {/* --- تعويض الـ Placeholder بالصورة الحقيقية --- */}
                <img 
                    src={Logo}
                    alt="RR Student Mascot" 
                    className="w-full h-full object-contain z-10 drop-shadow-2xl" 
                />
                {/* ------------------------------------------- */}

                {/* الـ Badge اللي كيتحرك يبقى ديما الفوق */}
                <div className="absolute top-8 left-8 bg-white p-3 rounded-2xl shadow-lg flex items-center gap-2 animate-bounce z-20">
                    <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 size={16} className="text-green-600"/></div>
                    {/* <span className="text-xs font-bold text-slate-900 underline decoration-yellow-400">Validé les exames</span> */}
                    <span className="text-xs font-bold text-slate-900 underline decoration-yellow-400">Beta-version: 2025/2026</span>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;