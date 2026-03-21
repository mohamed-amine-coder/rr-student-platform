import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate, Navigate } from 'react-router-dom';
import { LayoutDashboard, BookOpen, PenTool, LogOut, Settings, Users, Loader2 } from 'lucide-react';
// 👇 استيراد أدوات فايربيز لي غنحتاجو
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const AdminLayout = () => {
  const navigate = useNavigate();
  
  // 👇 حالات الحماية (Security States)
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  
  // حط الـ UID ديالك هنا لي اتفقنا عليه بلي هو ديال المدير
  const ADMIN_UID = "HtR42ySkZGPkUa2WVVxI6cVFLYk2";

  // هادي ليستة ديال الصفحات لي غتكون فالـ Sidebar
  const menuItems = [
    { name: 'الإحصائيات', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'إدارة الطلبة', path: '/admin/users', icon: <Users size={20} /> },
    { name: 'إدارة الموديلات', path: '/admin/modules', icon: <BookOpen size={20} /> },
    { name: 'ستوديو الدروس', path: '/admin/lesson-studio', icon: <PenTool size={20} /> },
    { name: 'ستوديو المنشورات', path: '/admin/instaBioDevGenerator', icon: <PenTool size={20} /> },
  ];

  // 👇 التحقق من الهوية أول ما كتحل الصفحة
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.uid === ADMIN_UID) {
        setIsAdmin(true); // السيد هو أمين، حل ليه الباب
      } else {
        setIsAdmin(false); // ماشي أمين، سد الباب
      }
      setIsCheckingAuth(false); // سالينا التفتيش
    });

    return () => unsubscribe();
  }, []);

  // دالة تسجيل الخروج ديال بصح
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate('/'); 
    } catch (error) {
      console.error("خطأ فـ تسجيل الخروج:", error);
    }
  };

  // ⏳ يلا كان الحارس عاد كيفتش، طلع ليه اللودينغ باش ما يبانش الديكور
  if (isCheckingAuth) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-50 font-tajawal">
        <Loader2 className="animate-spin text-yellow-500 mb-4" size={40} />
        <p className="text-slate-500 font-bold">جاري التحقق من الصلاحيات...</p>
      </div>
    );
  }

  // 🚫 يلا سالا التفتيش والسيد ماشي هو نتا، جرو ورميه للصفحة الرئيسية
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  // ✅ يلا كان كلشي هو هاداك (نتا لي داخل)، عاد بين لوحة التحكم
  return (
    <div className="flex h-screen bg-slate-50 font-tajawal dir-rtl overflow-hidden">
      
      {/* --- Sidebar (القائمة الجانبية) --- */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0 transition-all duration-300">
        {/* اللوغو أو اسم المنصة */}
        <div className="h-20 flex items-center justify-center border-b border-slate-800">
          <h2 className="text-2xl font-black tracking-wider text-yellow-400">
            RR <span className="text-white">STUDENT</span>
            <span className="block text-[10px] text-slate-400 text-center tracking-widest mt-1">ADMIN PANEL</span>
          </h2>
        </div>

        {/* روابط الصفحات */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-200
                ${isActive 
                  ? 'bg-yellow-400 text-slate-900 shadow-lg shadow-yellow-400/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
              `}
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* الإعدادات وتسجيل الخروج لتحت */}
        <div className="p-4 border-t border-slate-800 space-y-2">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all font-bold">
            <Settings size={20} />
            <span>الإعدادات</span>
          </button>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-500/10 transition-all font-bold"
          >
            <LogOut size={20} />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>

      {/* --- Main Content (المحتوى لي كيتبدل) --- */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Navbar علوية صغيرة */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <h1 className="text-xl font-black text-slate-800">لوحة التحكم</h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-black">
              A
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-bold text-slate-800">Amine</p>
              <p className="text-xs text-slate-500 font-bold">Super Admin</p>
            </div>
          </div>
        </header>

        {/* البلاصة فين غيبانو الصفحات (Dashboard, Studio...) */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 relative custom-scrollbar">
          {/* Outlet هو لي كيبدل المحتوى على حساب الرابط بلا ما يعاود يشعّل الصفحة كاملة */}
          <Outlet /> 
        </div>
      </main>

    </div>
  );
};

export default AdminLayout;