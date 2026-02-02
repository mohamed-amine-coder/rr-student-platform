
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../components/layout/landingData';
import { PlayCircle, Lock, CheckCircle2, Sparkles, ArrowLeft, Layout, BookOpen, Trophy, Loader2, Clock, CalendarDays } from 'lucide-react';

// استيراد أدوات Firebase
import { auth, db } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const ModulePage = () => {
  const { moduleId } = useParams();
  const course = COURSES.find(c => c.id === moduleId);

  // حالات الصفحة (States)
  const [userSubs, setUserSubs] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. مراقبة حالة الطالب وجلب اشتراكاته
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserSubs(userDoc.data().subscriptions || {});
          }
        } catch (error) {
          console.error("Error fetching subscriptions:", error);
        }
      } else {
        setUserSubs(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 2. دالة التحقق من الوقت (Drip Content Logic)
  const checkTimeLock = (releaseDateString) => {
    if (!releaseDateString) return false; // إلا ماكانش تاريخ، راه محلول
    const today = new Date();
    const releaseDate = new Date(releaseDateString);
    // مقارنة: إلا كان اليوم قبل من تاريخ الإطلاق، راه مبلوكي
    return today < releaseDate;
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('fr-MA', {
      day: 'numeric', month: 'long'
    });
  };

  // حالة الموديل غير موجود
  if (!course) return (
    <div className="min-h-screen flex items-center justify-center font-tajawal">
      <div className="text-center">
        <h1 className="text-2xl font-black text-slate-900">  ERROR 404 🛑</h1>
        <Link to="/" className="text-yellow-600 font-bold mt-4 inline-block">الرجوع للرئيسية</Link>
      </div>
    </div>
  );

  // حالة التحميل
  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <Loader2 className="animate-spin text-yellow-500" size={40} />
    </div>
  );

  // واش عندو اشتراك مفعل فهاد الموديل؟
  const isSubscribed = userSubs?.[moduleId]?.status === 'active';

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-tajawal pb-20">
      
      {/* --- 1. Hero Header --- */}
      <div className="relative bg-slate-900 pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/#courses" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold">الرجوع للموديلات</span>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-3 py-1 rounded-lg text-[10px] font-black mb-4 uppercase tracking-wider">
                <Layout size={12} /> Semestre {moduleId === 'bio-cell' ? '1' : '2'}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
                {course.description}
              </p>
            </div>
            
            {/* بطاقة الحالة */}
            {isSubscribed ? (
               <div className="bg-green-500/10 backdrop-blur-xl border border-green-500/20 p-6 rounded-3xl text-center min-w-[200px] animate-fade-in">
                 <span className="block text-green-400 text-xs font-bold mb-2 flex items-center justify-center gap-1">
                    <CheckCircle2 size={12} /> الاشتراك مفعل
                 </span>
                 <span className="block text-lg font-black text-white mb-1">
                   {userSubs[moduleId].expiryDate ? formatDate(userSubs[moduleId].expiryDate) : 'مفعل دائماً'}
                 </span>
               </div>
            ) : (
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl text-center min-w-[180px]">
                 <span className="block text-slate-400 text-xs font-bold mb-1">الثمن الرمزي</span>
                 <span className="block text-3xl font-black text-white">{course.price} DH</span>
                 <span className="text-[10px] text-green-400 font-black tracking-widest uppercase">دورة كاملة</span>
               </div>
            )}
          </div>
        </div>
      </div>

      {/* --- 2. Stats Bar --- */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex flex-wrap items-center justify-around gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><BookOpen size={20}/></div>
            <span className="text-sm font-black text-slate-700">{course.chapters.length} محتوى تعليمي</span>
          </div>
          <div className="w-px h-8 bg-slate-100 hidden md:block"></div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Sparkles size={20}/></div>
            <span className="text-sm font-black text-slate-700">شرح بالدارجة</span>
          </div>
        </div>
      </div>

      {/* --- 3. Unified Syllabus List --- */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
          البرنامج الدراسي (Programme) <div className="h-px flex-grow bg-slate-200"></div>
        </h2>

        <div className="grid gap-4">
          {course.chapters.map((chapter) => {
            const isExam = chapter.type === 'exam' || chapter.id.includes('exam') || chapter.id.includes('qcm');
            
            // 1. واش الدرس مجاني؟
            const isFree = chapter.isFree;

            // 2. واش الوقت مازال ما وصلش؟
            const isTimeLocked = checkTimeLock(chapter.releaseDate);

            // 3. الشروط باش يدخل: (يا إما فابور يا إما مخلص) و (الوقت يكون وصل)
            const canEnter = (isFree || isSubscribed) && !isTimeLocked;

            // --- منطق العرض (شنو نوريو للي ما غايدخلش) ---
            
            // الحالة 1: السيد ما مخلصش والدرس ماشي فابور => "قفل" (الأولوية للقفل)
            const showLock = !isFree && !isSubscribed;
            
            // الحالة 2: السيد عندو الحق (مخلص أو فابور) ولكن الوقت مازال => "ساعة"
            const showClock = !showLock && isTimeLocked;

            return (
              <div 
                key={chapter.id} 
                className={`
                  group relative bg-white border border-slate-200 p-4 md:p-5 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300
                  ${canEnter ? 'hover:border-green-400 hover:shadow-lg' : 'opacity-90 bg-slate-50'}
                `}
              >
                <div className="flex items-center gap-5 w-full md:w-auto">
                  
                  {/* Icon Box */}
                  <div className={`
                    w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-inner
                    ${canEnter
                        ? isExam ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                        : showClock ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-400'
                    }
                  `}>
                    {showClock ? <Clock size={24} /> : 
                     showLock ? <Lock size={24} /> :
                     (isExam ? <Trophy size={24} /> : <PlayCircle size={24} />)}
                  </div>
                  
                  <div>
                    <h3 className="font-black text-slate-800 text-lg leading-tight group-hover:text-slate-900">
                      {chapter.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      
                      {chapter.badge && (
                         <span className="flex items-center gap-1 bg-red-500 text-white px-2 py-0.5 rounded-md text-[10px] font-black shadow-sm shadow-red-200">
                            <Sparkles size={10} /> {chapter.badge}
                         </span>
                      )}

                      <span className="text-slate-500 text-[11px] font-bold">
                        {chapter.quickInfo}
                      </span>

                      {/* إظهار التاريخ فقط للمشتركين اللي كيتسناو الوقت */}
                      {showClock && (
                        <span className="text-blue-600 flex items-center gap-1 text-[10px] font-black bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 uppercase tracking-tighter">
                          <CalendarDays size={12}/> {formatDate(chapter.releaseDate)}
                        </span>
                      )}

                      {/* إظهار "مجاني" فقط إذا كان مفتوح */}
                      {isFree && !showClock && (
                        <span className="text-green-600 flex items-center gap-1 text-[10px] font-black bg-green-50 px-2.5 py-1 rounded-full border border-green-100 uppercase tracking-tighter">
                          <CheckCircle2 size={12}/> متاح مجاناً
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Buttons Logic */}
                {canEnter ? (
                  <Link 
                    to={isExam ? `/exam/${chapter.id}` : `/lesson/${chapter.id}`}
                    className={`w-full md:w-auto text-center px-8 py-3 rounded-2xl font-black text-sm shadow-lg hover:scale-[1.02] active:scale-95 transition-all
                      ${isExam ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-slate-900 text-white hover:bg-slate-800'}
                    `}
                  >
                    {isExam ? 'ابدأ التحدي' : 'بدا الدرس'}
                  </Link>
                ) : (
                  // هنا فين طبقنا الشرط ديالك
                  showClock ? (
                     <div className="w-full md:w-auto flex items-center justify-center gap-2 py-3 px-8 rounded-2xl bg-blue-50 border border-blue-200 text-blue-500 font-bold text-sm cursor-not-allowed">
                       <Clock size={16} /> قريباً
                     </div>
                  ) : (
                    <div className="w-full md:w-auto flex items-center justify-center gap-2 py-3 px-8 rounded-2xl bg-slate-100 border border-slate-200 text-slate-400 font-bold text-sm">
                      <Lock size={16} /> خاص بالمشتركين
                    </div>
                  )
                )}
              </div>
            );
          })}
        </div>

        {/* --- 4. Call to Action --- */}
        {!isSubscribed && (
            <div className="mt-16 bg-slate-900 rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-black text-white mb-4">
                  بغيتي تضمن المونسيون؟ 🎓
                </h2>
                <p className="text-slate-400 font-bold mb-8 max-w-xl mx-auto">
                  اشترك دابا واستفد من جميع الدروس، التمارين، والامتحانات المصححة.
                </p>
                
                <Link 
                  to="/join-waitlist"
                  className="inline-flex items-center gap-3 bg-yellow-400 text-slate-900 px-10 py-4 rounded-2xl font-black text-lg hover:bg-yellow-300 hover:scale-105 transition-all shadow-xl shadow-yellow-400/20"
                >
                  <span>تسجل دابا</span>
                  <ArrowLeft size={20} strokeWidth={3} />
                </Link>
              </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default ModulePage;