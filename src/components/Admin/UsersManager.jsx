import React, { useState, useEffect } from 'react';
import { db, auth } from '../../../firebase'; 
import { onAuthStateChanged } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom'; 
import { collection, query, where, getDocs, doc, updateDoc, deleteField } from 'firebase/firestore';
import { Search, User, ShieldCheck, Zap, AlertCircle, CheckCircle2, Lock, Unlock, Calendar, Clock, Loader2, Users } from 'lucide-react';

const UsersManager = () => {
  // --- إعدادات الأمان ---
  const ADMIN_EMAIL = "team.rrplatform@gmail.com"; 
  // ----------------------

  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  
  const [courses, setCourses] = useState([]);
  const [isCheckingAdmin, setIsCheckingAdmin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === ADMIN_EMAIL) {
        setIsCheckingAdmin(false);
        fetchCourses(); 
      } else {
        navigate("/"); 
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const fetchCourses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'modules'));
      const coursesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCourses(coursesList);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

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

  if (isCheckingAdmin) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
            <Loader2 className="animate-spin text-indigo-500 mx-auto mb-4" size={40} />
            <p className="font-bold text-slate-500">جاري التحقق من الصلاحيات...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto font-tajawal dir-rtl pb-20">
      
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-slate-900 text-yellow-400 rounded-xl shadow-lg">
          <ShieldCheck size={28} />
        </div>
        <div>
          <h1 className="text-3xl font-black text-slate-800">إدارة الاشتراكات</h1>
          <p className="text-slate-500 font-bold text-sm">قلب على الطلبة وفعل ليهم الموديلات</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* --- البحث --- */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <User className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="email" 
                placeholder="كتب الإيميل ديال الطالب هنا..." 
                className="w-full pl-4 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 font-bold text-slate-700 transition-colors text-left dir-ltr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="bg-slate-900 text-white px-8 py-4 rounded-xl font-black hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50 min-w-[150px]"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <><Search size={20} /> بحث</>}
            </button>
          </form>

          {message && (
            <div className={`mt-4 p-4 rounded-xl flex items-center gap-3 font-bold text-sm animate-in fade-in ${message.type === 'error' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>
              {message.type === 'error' ? <AlertCircle size={20} /> : <CheckCircle2 size={20} />}
              {message.text}
            </div>
          )}
        </div>

        {/* --- النتيجة --- */}
        {userData && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-4">
            <div className="bg-slate-900 p-6 text-white flex items-center gap-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 font-black text-2xl shadow-lg shadow-yellow-400/20">
                {userData.displayName ? userData.displayName[0].toUpperCase() : 'S'}
              </div>
              <div>
                <h2 className="text-xl font-black">{userData.displayName || 'طالب بدون اسم'}</h2>
                <p className="text-slate-400 font-mono text-sm">{userData.email}</p>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                <Zap className="text-yellow-500" /> تفعيل الموديلات (3 أشهر)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.length === 0 ? (
                  <div className="col-span-2 text-center text-slate-500 py-4">جاري تحميل الموديلات...</div>
                ) : (
                  courses.map((course) => {
                    const sub = userData.subscriptions?.[course.id];
                    const isActive = sub?.status === 'active';

                    return (
                      <div key={course.id} className={`p-5 rounded-2xl border-2 transition-all flex flex-col justify-between gap-4 ${isActive ? 'border-green-400 bg-green-50/30' : 'border-slate-100 bg-slate-50'}`}>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                              <div className={`p-2.5 rounded-xl ${isActive ? 'bg-green-100 text-green-600' : 'bg-white text-slate-400 border border-slate-200'}`}>
                              {isActive ? <Unlock size={20} /> : <Lock size={20} />}
                              </div>
                              <div>
                              <h4 className="font-bold text-slate-800 text-base leading-tight">{course.title}</h4>
                              <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-green-600' : 'text-slate-400'}`}>
                                  {isActive ? 'اشتراك نشط' : 'غير مشترك'}
                              </span>
                              </div>
                          </div>
                        </div>

                        {isActive && sub.expiryDate && (
                            <div className="bg-white/80 p-3 rounded-xl border border-green-100 flex items-center gap-2 text-xs font-bold text-green-700">
                                <Clock size={14} /> ينتهي في: {formatDate(sub.expiryDate)}
                            </div>
                        )}

                        <button
                          onClick={() => toggleSubscription(course.id, sub?.status)}
                          className={`w-full py-3 rounded-xl font-black text-sm transition-all flex items-center justify-center gap-2 ${isActive ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200'}`}
                        >
                          {isActive ? <>إلغاء الاشتراك</> : <><Calendar size={16} /> تفعيل الموديل</>}
                        </button>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersManager;