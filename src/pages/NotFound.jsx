import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowRight, MapPinOff } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-tajawal dir-rtl text-center">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 animate-in zoom-in-95 duration-500">
        
        {/* أيقونة التلفان */}
        <div className="w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <MapPinOff size={48} strokeWidth={1.5} />
        </div>

        {/* العنوان */}
        <h1 className="text-7xl font-black text-slate-900 mb-2 tracking-tighter">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">توضرتي أ الساط؟ 🧭</h2>
        
        {/* رسالة مضحكة وخفيفة */}
        <p className="text-slate-500 mb-8 leading-relaxed font-medium">
          هاد الصفحة لي كتقلب عليها يا إما رجعات راتراباج، ولا بدلات لافاك، ولا أصلا ماعمرها كانت فـ RR STUDENT!
        </p>

        {/* الأزرار ديال الرجوع */}
        <div className="flex flex-col gap-3">
          <Link 
            to="/" 
            className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 w-full py-4 rounded-2xl font-black flex items-center justify-center gap-2 transition-all shadow-lg shadow-yellow-200/50"
          >
            <Home size={20} />
            رجع للصفحة الرئيسية
          </Link>
          
          <button 
            onClick={() => navigate(-1)}
            className="bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all border border-slate-200"
          >
            <ArrowRight size={20} />
            رجع منين جيتي
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFound;