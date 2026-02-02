import React, { useState, useEffect } from 'react';
import { db, auth } from '../../../firebase'; // تأكد زدنا auth
import { onAuthStateChanged } from 'firebase/auth'; // زدنا هادي للتحقق
import { useNavigate } from 'react-router-dom'; // زدنا هادي للطرد
import { collection, query, where, getDocs, doc, updateDoc, deleteField } from 'firebase/firestore';
import { COURSES } from '../layout/landingData'; 
import { Search, User, ShieldCheck, Zap, AlertCircle, CheckCircle2, Lock, Unlock, Calendar, Clock, Loader2 } from 'lucide-react';

const AdminDashboard = () => {
  // --- 1. إعدادات الأمان (Security Config) ---
  const ADMIN_EMAIL = "mohamedajimi66@gmail.com"; // 🔴 ضروري: كتب الإيميل ديالك هنا
  // ------------------------------------------

  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  
  // حالة التحقق من الأدمين
  const [isCheckingAdmin, setIsCheckingAdmin] = useState(true);
  const navigate = useNavigate();

  // 2. "البواب": التحقق من الهوية قبل عرض أي شيء
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === ADMIN_EMAIL) {
        // مسموح للدخول: هذا هو المدير
        setIsCheckingAdmin(false);
      } else {
        // ممنوع الدخول: طرد المستخدم للصفحة الرئيسية
        navigate("/"); 
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // دالة البحث عن الطالب (بقيت كما هي)
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setUserData(null);

    try {
      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setMessage({ type: 'error', text: 'ماكينش شي حساب بهاد الإيميل! تأكد عافاك.' });
      } else {
        const userDoc = querySnapshot.docs[0];
        setUserData({ id: userDoc.id, ...userDoc.data() });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ type: 'error', text: 'وقع شي مشكل فالسيرفر.' });
    }
    setLoading(false);
  };

  // دالة تفعيل/إلغاء الاشتراك (بقيت كما هي)
  const toggleSubscription = async (moduleId, currentStatus) => {
    if (!userData) return;
    const userRef = doc(db, "users", userData.id);
    const isActive = currentStatus === 'active';

    try {
      if (isActive) {
        await updateDoc(userRef, { [`subscriptions.${moduleId}`]: deleteField() });
        setMessage({ type: 'success', text: `تم إلغاء تفعيل ${moduleId} بنجاح` });
        const updatedSubs = { ...userData.subscriptions };
        delete updatedSubs[moduleId];
        setUserData({ ...userData, subscriptions: updatedSubs });
      } else {
        const now = new Date();
        const futureDate = new Date();
        futureDate.setMonth(now.getMonth() + 3);

        await updateDoc(userRef, {
          [`subscriptions.${moduleId}`]: {
            status: 'active',
            activatedAt: now.toISOString(),
            expiryDate: futureDate.toISOString()
          }
        });
        setMessage({ type: 'success', text: `تم تفعيل ${moduleId} لمدة 3 أشهر! 📅` });
        const updatedSubs = { ...userData.subscriptions };
        updatedSubs[moduleId] = { 
            status: 'active', 
            activatedAt: now.toISOString(),
            expiryDate: futureDate.toISOString()
        };
        setUserData({ ...userData, subscriptions: updatedSubs });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ type: 'error', text: 'فشل التحديث. عاود حاول.' });
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('fr-MA', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // --- شاشة الانتظار أثناء التحقق من الأدمين ---
  if (isCheckingAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
            <Loader2 className="animate-spin text-slate-900 mx-auto mb-4" size={40} />
            <p className="font-bold text-slate-500">جاري التحقق من الصلاحيات... 👮‍♂️</p>
        </div>
      </div>
    );
  }

  // --- المحتوى الرئيسي (لا يظهر إلا للأدمين) ---
  return (
    <div className="min-h-screen bg-slate-50 font-tajawal p-6 md:p-12">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-slate-900 rounded-2xl mb-4 shadow-xl shadow-slate-200">
          <ShieldCheck className="text-yellow-400" size={32} />
        </div>
        <h1 className="text-3xl font-black text-slate-900">غرفة التحكم - RR Admin 🕹️</h1>
        <p className="text-slate-500 font-medium mt-2">نظام إدارة الاشتراكات الذكي</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Search Section */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <User className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="email" 
                placeholder="كتب الإيميل ديال الطالب هنا..." 
                className="w-full pl-4 pr-12 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-yellow-400 font-bold text-slate-700 transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? 'جاري البحث...' : <><Search size={20} /> قلب عليه</>}
            </button>
          </form>

          {message && (
            <div className={`mt-4 p-4 rounded-xl flex items-center gap-3 font-bold text-sm ${message.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
              {message.type === 'error' ? <AlertCircle size={20} /> : <CheckCircle2 size={20} />}
              {message.text}
            </div>
          )}
        </div>

        {/* User Details & Actions */}
        {userData && (
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden animate-fade-in-up">
            <div className="bg-slate-900 p-8 text-white flex items-center gap-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 font-black text-2xl">
                {userData.displayName ? userData.displayName[0].toUpperCase() : 'U'}
              </div>
              <div>
                <h2 className="text-2xl font-black">{userData.displayName || 'بدون اسم'}</h2>
                <p className="text-slate-400 font-mono text-sm">{userData.email}</p>
                <div className="flex gap-4 mt-2">
                   <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-400 font-mono">UID: {userData.id}</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                <Zap className="text-yellow-500" /> إدارة الموديلات
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {COURSES.map((course) => {
                  const sub = userData.subscriptions?.[course.id];
                  const isActive = sub?.status === 'active';

                  return (
                    <div 
                      key={course.id} 
                      className={`
                        p-5 rounded-3xl border-2 transition-all flex flex-col justify-between gap-4
                        ${isActive ? 'border-green-400 bg-green-50/20' : 'border-slate-100 bg-slate-50 hover:border-slate-200'}
                      `}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <div className={`p-2.5 rounded-2xl ${isActive ? 'bg-green-100 text-green-600' : 'bg-white text-slate-400 shadow-sm'}`}>
                            {isActive ? <Unlock size={20} /> : <Lock size={20} />}
                            </div>
                            <div>
                            <h4 className="font-bold text-slate-800 text-lg leading-tight">{course.title}</h4>
                            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                                {isActive ? 'اشتراك نشط' : 'غير مشترك'}
                            </span>
                            </div>
                        </div>
                      </div>

                      {isActive && sub.expiryDate && (
                          <div className="bg-white/50 p-3 rounded-xl border border-green-100 flex items-center gap-2 text-xs font-bold text-green-700">
                              <Clock size={14} />
                              ينتهي في: {formatDate(sub.expiryDate)}
                          </div>
                      )}

                      <button
                        onClick={() => toggleSubscription(course.id, sub?.status)}
                        className={`
                          w-full py-3 rounded-xl font-black text-sm transition-all flex items-center justify-center gap-2
                          ${isActive 
                            ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                            : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200'}
                        `}
                      >
                        {isActive ? (
                            <>إلغاء الاشتراك</>
                        ) : (
                            <><Calendar size={16} /> تفعيل لمدة 3 أشهر</>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;