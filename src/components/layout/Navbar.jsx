import React, { useState, useEffect } from 'react';
import { Zap, ArrowLeft, User, LogOut, Loader2, X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

// 1. استيراد أدوات Firebase
import { auth } from '../../../firebase'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // حالة التحكم في نافذة تأكيد الخروج
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // 2. تفعيل "الودينة"
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 3. دالة الخروج النهائية (تنفذ بعد التأكيد)
  const confirmLogout = async () => {
    try {
      await signOut(auth);
      setShowLogoutConfirm(false); // سد النافذة
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
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

          {/* 2. الجزء المتغير */}
          <div className="flex items-center gap-4">
            
            {loading ? (
               <Loader2 className="animate-spin text-slate-300" size={20} />
            ) : user ? (
              /* --- الحالة (A): المستخدم داخل ✅ --- */
              <div className="flex items-center gap-3 bg-slate-50 p-1.5 pr-4 rounded-2xl border border-slate-100 animate-fade-in">
                
                {/* معلومات المستخدم (الاسم + الإيميل) */}
                <div className="hidden md:flex flex-col items-end mr-1">
                  <span className="block text-xs font-black text-slate-700 leading-none truncate max-w-[150px]">
                      {user.displayName ? user.displayName : 'طالب مجتهد'}
                  </span>
                  <span className="block text-[10px] font-bold text-slate-400 truncate max-w-[150px] mt-0.5" title={user.email}>
                      {user.email}
                  </span>
                </div>
                
                {/* الأيقونة */}
                <div className="bg-slate-900 p-2 rounded-xl text-yellow-400 shadow-md shadow-slate-200">
                  <User size={18} />
                </div>
                
                {/* زر طلب الخروج (يفتح النافذة) */}
                <button 
                  onClick={() => setShowLogoutConfirm(true)} 
                  className="bg-white p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all border border-transparent hover:border-red-100 ml-1 group"
                  title="تسجيل الخروج"
                >
                  <LogOut size={18} className="group-hover:-translate-x-0.5 transition-transform cursor-pointer" />
                </button>
              </div>
            ) : (
              /* --- الحالة (B): المستخدم خارج ❌ --- */
              <div className="flex items-center gap-2 md:gap-3 animate-fade-in">
                <Link to="/login" className="text-sm font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors hidden md:block">
                  تسجيل الدخول
                </Link>

                <Link 
                  to="/join-waitlist" 
                  className="group relative overflow-hidden bg-yellow-400 text-slate-900 pl-4 pr-1.5 py-1.5 md:pl-5 md:pr-1.5 md:py-1.5 rounded-2xl flex items-center gap-2 md:gap-3 shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] active:scale-95 transition-all duration-300 border-2 border-yellow-300"
                >
                  <span className="font-black text-xs md:text-sm leading-tight tracking-tight whitespace-nowrap">
                    التسجيل القبلي
                  </span>
                  <div className="bg-slate-900 text-yellow-400 p-2 md:p-2 rounded-xl group-hover:rotate-45 transition-transform duration-300">
                    <ArrowLeft className="w-4 h-4" strokeWidth={3} />
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* --- نافذة تأكيد الخروج (Popup Modal) --- */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* الخلفية المضببة */}
          <div 
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity"
            onClick={() => setShowLogoutConfirm(false)}
          ></div>

          {/* محتوى النافذة */}
          <div className="relative bg-white rounded-[2rem] p-6 w-full max-w-sm shadow-2xl border border-slate-100 animate-scale-up">
            <div className="text-center">
              <div className="w-14 h-14 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer">
                <LogOut size={24} />
              </div>
              
              <h3 className="text-lg font-black text-slate-800 mb-2">بغيتي تخرج؟ 😢</h3>
              <p className="text-slate-500 text-sm font-medium mb-6">
                واش متأكد بغيتي تسجل الخروج من الحساب ديالك؟
              </p>

              <div className="flex gap-3">
                <button 
                  onClick={() => setShowLogoutConfirm(false)}
                  className="flex-1 py-3 rounded-xl font-bold text-slate-600 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <X size={18} />
                  لا، رجعني
                </button>
                
                <button 
                  onClick={confirmLogout}
                  className="flex-1 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-red-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-200 cursor-pointer"
                >
                  <Check size={18} />
                  اه، خرجني
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;