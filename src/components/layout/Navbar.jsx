import React from 'react';
import { Zap, ArrowLeft } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* 1. Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
          <div className="bg-slate-900 p-1.5 md:p-2 rounded-xl shadow-lg shadow-slate-200 group-hover:rotate-12 transition-transform duration-300">
            <Zap size={20} fill="#facc15" className="text-yellow-400 md:w-6 md:h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-black tracking-tighter text-slate-900 leading-none">RR STUDENT</span>
            <span className="text-[8px] md:text-[10px] font-bold text-slate-400 tracking-widest hidden sm:block">BIOLOGIE DARIJA</span>
          </div>
        </Link>

        {/* 2. زر التسجيل (المعدل) */}
        <Link 
          to="/join-waitlist" 
          className="group relative overflow-hidden bg-yellow-400 text-slate-900 pl-4 pr-1.5 py-1.5 md:pl-5 md:pr-1.5 md:py-1.5 rounded-2xl flex items-center gap-2 md:gap-3 shadow-[0_0_15px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] hover:-translate-y-1 transition-all duration-300 border-2 border-yellow-300 active:scale-95"
        >
          {/* وميض دائم خفيف */}
          <div className="absolute inset-0 bg-white/20 animate-pulse z-0"></div>
          
          {/* لمعة كدوز مرة مرة */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10"></div>
          
          {/* --- التعديل هنا: النص والنقطة مجموعين --- */}
          <div className="flex flex-col items-end z-20">
              <span className="font-black text-xs md:text-sm leading-tight tracking-tight whitespace-nowrap flex items-center gap-2">
                  {/* النقطة الحمراء */}
                  <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-red-600"></span>
                  </span>
                  
                  {/* النص */}
                  التسجيل القبلي مفتوح
              </span>
          </div>
          {/* ------------------------------------- */}

          {/* الأيقونة */}
          <div className="bg-slate-900 text-yellow-400 p-2 md:p-2.5 rounded-xl z-20 group-hover:rotate-45 transition-transform duration-300">
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 font-bold" strokeWidth={3} />
          </div>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;