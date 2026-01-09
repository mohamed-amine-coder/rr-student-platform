import React, { useState } from 'react';
import { Zap, Menu, X, ArrowLeft, Sparkles } from 'lucide-react'; // حيدنا ClipboardList وبدلناها بـ Sparkles
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo - بسيط وواضح */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-slate-900 p-2 rounded-xl shadow-lg shadow-slate-200 group-hover:rotate-12 transition-transform duration-300">
            <Zap size={24} fill="#facc15" className="text-yellow-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">RR STUDENT</span>
            <span className="text-[10px] font-bold text-slate-400 tracking-widest">BIOLOGIE DARIJA</span>
          </div>
        </Link>

        {/* --- المساحة الوسطى خاوية دابا باش العين تمشي نيشان للزر --- */}

        {/* Actions - الزر "المغناطيس" */}
        <div className="flex items-center gap-4">
          
          {/* زر سطح المكتب (Desktop Button) - تصميم تسويقي هجومي */}
          <Link 
            to="/join-waitlist" 
            className="hidden md:flex group relative overflow-hidden bg-slate-900 text-white pl-6 pr-2 py-2 rounded-2xl items-center gap-4 shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-slate-900/40 hover:-translate-y-1 transition-all duration-300"
          >
            {/* الخلفية اللامعة المتحركة */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
            
            <div className="flex flex-col items-end z-20 py-1">
                <span className="font-bold text-sm leading-none mb-1">حجز مقعدي الآن</span>
                <span className="text-[10px] text-yellow-400 font-medium bg-white/10 px-2 py-0.5 rounded-full">
                    التسجيل مجاني 100%
                </span>
            </div>

            {/* الأيقونة داخل دائرة صفراء */}
            <div className="bg-yellow-400 text-slate-900 p-2.5 rounded-xl z-20 group-hover:scale-110 transition-transform">
                <ArrowLeft className="w-5 h-5 font-bold" strokeWidth={3} />
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - بسيط جداً */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 shadow-2xl animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-4">
            <p className="text-center text-slate-500 text-sm font-medium">
                مرحباً بك فـ RR STUDENT 👋 <br/>
                سجل دابا باش تكون من الأوائل.
            </p>
            
            <Link 
              to="/join-waitlist"
              className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg shadow-lg flex items-center justify-center gap-3 active:scale-95 transition-transform"
              onClick={() => setIsOpen(false)}
            >
              <span>اضغط هنا لحجز مقعدك</span>
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;