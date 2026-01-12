// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { COURSES } from '../components/layout/landingData'; 
// import { PlayCircle, Lock, CheckCircle2, Sparkles, ArrowLeft, Layout, BookOpen } from 'lucide-react';

// const ModulePage = () => {
//   const { moduleId } = useParams();
//   const course = COURSES.find(c => c.id === moduleId);

//   if (!course) return (
//     <div className="min-h-screen flex items-center justify-center font-tajawal">
//       <div className="text-center">
//         <h1 className="text-2xl font-black text-slate-900">الموديل غير موجود 🛑</h1>
//         <Link to="/" className="text-yellow-600 font-bold mt-4 inline-block">الرجوع للرئيسية</Link>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] font-tajawal pb-20">
      
//       {/* --- 1. Hero Header (Premium Look) --- */}
//       <div className="relative bg-slate-900 pt-32 pb-24 px-6 overflow-hidden">
//         {/* Background Decorations */}
//         <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

//         <div className="max-w-4xl mx-auto relative z-10">
//           <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group">
//             <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
//             <span className="text-sm font-bold">الرجوع للموديلات</span>
//           </Link>
          
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
//             <div className="flex-1">
//               <span className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-3 py-1 rounded-lg text-[10px] font-black mb-4 uppercase tracking-wider">
//                 <Layout size={12} /> Semestre 1
//               </span>
//               <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
//                 {course.title}
//               </h1>
//               <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
//                 {course.description}
//               </p>
//             </div>
            
//             <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl text-center min-w-[180px]">
//               <span className="block text-slate-400 text-xs font-bold mb-1">الثمن الحالي</span>
//               <span className="block text-3xl font-black text-white">{course.price} DH</span>
//               <span className="text-[10px] text-yellow-400 font-black tracking-widest uppercase">Full Access</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- 2. Stats & Info Bar --- */}
//       <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
//         <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex flex-wrap items-center justify-around gap-4">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><BookOpen size={20}/></div>
//             <span className="text-sm font-black text-slate-700">{course.chapters.length} فصول</span>
//           </div>
//           <div className="w-px h-8 bg-slate-100 hidden md:block"></div>
//           {/* <div className="flex items-center gap-3">
//             <div className="p-2 bg-green-50 text-green-600 rounded-lg"><PlayCircle size={20}/></div>
//             <span className="text-sm font-black text-slate-700">دقة عالية 4K</span>
//           </div> */}
//           <div className="w-px h-8 bg-slate-100 hidden md:block"></div>
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Sparkles size={20}/></div>
//             <span className="text-sm font-black text-slate-700">جودة عالية</span>
//           </div>
//         </div>
//       </div>

//       {/* --- 3. Syllabus List --- */}
//       <div className="max-w-4xl mx-auto px-6 mt-12">
//         <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
//           محتوى الموديل <div className="h-px flex-grow bg-slate-200"></div>
//         </h2>

//         <div className="grid gap-4">
//           {course.chapters.map((chapter, index) => (
//             <div 
//               key={chapter.id} 
//               className={`
//                 group relative bg-white border border-slate-200 p-5 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300
//                 ${chapter.isFree ? 'hover:border-yellow-400 hover:shadow-xl' : 'opacity-80'}
//               `}
//             >
//               <div className="flex items-center gap-5 w-full md:w-auto">
//                 {/* Number or Icon */}
//                 <div className={`
//                   w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 font-black text-lg transition-colors
//                   ${chapter.isFree ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}
//                 `}>
//                   {index + 1}
//                 </div>
                
//                 <div>
//                   <h3 className="font-black text-slate-800 text-lg leading-tight group-hover:text-slate-900">
//                     {chapter.title}
//                   </h3>
//                   <div className="flex items-center gap-3 mt-2">
//                     <span className="flex items-center gap-1.5 bg-slate-50 text-slate-500 px-2.5 py-1 rounded-full text-[10px] font-black border border-slate-100">
//                       <Sparkles size={12} className="text-yellow-500" /> {chapter.quickInfo}
//                     </span>
//                     {chapter.isFree && (
//                       <span className="text-green-600 flex items-center gap-1 text-[10px] font-black bg-green-50 px-2.5 py-1 rounded-full border border-green-100 uppercase tracking-tighter">
//                         <CheckCircle2 size={12}/> متاح مجاناً
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Action Button */}
//               {chapter.isFree ? (
//                 <Link 
//                   to={`/lesson/${chapter.id}`} 
//                   className="w-full md:w-auto text-center bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-sm shadow-lg hover:bg-slate-800 hover:scale-[1.02] active:scale-95 transition-all"
//                 >
//                   بدا الدرس
//                 </Link>
//               ) : (
//                 <div className="w-full md:w-auto flex items-center justify-center gap-2 py-3 px-8 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 font-bold text-sm">
//                   <Lock size={16} /> خاص بالمشتركين
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* --- 4. Call to Action (The Sell) --- */}
//         <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 text-center relative overflow-hidden shadow-2xl">
//           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
//              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(250,204,21,1),transparent)]"></div>
//           </div>
          
//           <h2 className="text-3xl font-black text-white mb-4 relative z-10">
//             بغيتي تحل كاع الدروس فـ دقة وحدة؟
//           </h2>
//           <p className="text-slate-400 font-bold mb-8 relative z-10">
//             تخلص غير مرة وحدة واستافد من كاع الفصول، الكويزات، والدعم التقني طول السيمستر.
//           </p>
//           <button className="bg-yellow-400 text-slate-900 px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl shadow-yellow-400/20 relative z-10">
//              شري الباك كامل (149 DH)
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModulePage;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../components/layout/landingData'; 
import { PlayCircle, Lock, CheckCircle2, Sparkles, ArrowLeft, Layout, BookOpen, Trophy } from 'lucide-react';

const ModulePage = () => {
  const { moduleId } = useParams();
  const course = COURSES.find(c => c.id === moduleId);

  if (!course) return (
    <div className="min-h-screen flex items-center justify-center font-tajawal">
      <div className="text-center">
        <h1 className="text-2xl font-black text-slate-900">الموديل غير موجود 🛑</h1>
        <Link to="/" className="text-yellow-600 font-bold mt-4 inline-block">الرجوع للرئيسية</Link>
      </div>
    </div>
  );

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
                <Layout size={12} /> Semestre 1
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
                {course.description}
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl text-center min-w-[180px]">
              <span className="block text-slate-400 text-xs font-bold mb-1">الثمن الرمزي</span>
              <span className="block text-3xl font-black text-white">{course.price} DH</span>
              <span className="text-[10px] text-green-400 font-black tracking-widest uppercase">4 أشهر د القراية</span>
            </div>
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
            // Logic باش نعرفو واش هادا امتحان ولا درس عادي
            const isExam = chapter.id.startsWith('exam') || chapter.id.startsWith('qcm');

            return (
              <div 
                key={chapter.id} 
                className={`
                  group relative bg-white border border-slate-200 p-4 md:p-5 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300
                  ${chapter.isFree ? 'hover:border-green-400 hover:shadow-lg' : isExam ? 'hover:border-yellow-400 hover:shadow-lg' : 'opacity-90'}
                `}
              >
                <div className="flex items-center gap-5 w-full md:w-auto">
                  
                  {/* Icon Container (مكان الرقم) */}
                  <div className={`
                    w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-inner
                    ${chapter.isFree 
                        ? 'bg-green-100 text-green-600'  // أخضر إلا كان فابور
                        : isExam 
                            ? 'bg-yellow-100 text-yellow-600' // أصفر (كأس) إلا كان امتحان
                            : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600' // رمادي للدروس العادية
                    }
                  `}>
                    {/* اختيار الأيقونة حسب النوع */}
                    {isExam ? <Trophy size={24} strokeWidth={2.5} /> : <PlayCircle size={24} strokeWidth={2.5} />}
                  </div>
                  
                  <div>
                    <h3 className="font-black text-slate-800 text-lg leading-tight group-hover:text-slate-900">
                      {chapter.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="flex items-center gap-1.5 bg-slate-50 text-slate-500 px-2.5 py-1 rounded-full text-[10px] font-black border border-slate-100">
                        <Sparkles size={12} className={isExam ? "text-yellow-500" : "text-blue-500"} /> 
                        {chapter.quickInfo}
                      </span>
                      {chapter.isFree && (
                        <span className="text-green-600 flex items-center gap-1 text-[10px] font-black bg-green-50 px-2.5 py-1 rounded-full border border-green-100 uppercase tracking-tighter">
                          <CheckCircle2 size={12}/> متاح مجاناً
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                {chapter.isFree ? (
                  <Link 
                    to={`/lesson/${chapter.id}`} 
                    className="w-full md:w-auto text-center bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-sm shadow-lg hover:bg-slate-800 hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    بدا الدرس
                  </Link>
                ) : (
                  <div className="w-full md:w-auto flex items-center justify-center gap-2 py-3 px-8 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 font-bold text-sm">
                    <Lock size={16} /> خاص بالمشتركين
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* --- 4. Call to Action --- */}
        <div className="mt-16 bg-slate-900 rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-16 -mb-16"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white mb-4">
              بغيتي تضمن المونسيون؟ 🎓
            </h2>
            <p className="text-slate-400 font-bold mb-8 max-w-xl mx-auto">
              تسجل دابا فاللائحة باش نعلموك فاش نحلو التسجيل للكورس كامل (بثمن {course.price} درهم فقط).
            </p>
            
            <Link 
                to="/join-waitlist"
                className="inline-flex items-center gap-3 bg-yellow-400 text-slate-900 px-10 py-4 rounded-2xl font-black text-lg hover:bg-yellow-300 hover:scale-105 transition-all shadow-xl shadow-yellow-400/20"
            >
               <span>حجز مقعدي الآن (مجاناً)</span>
               <ArrowLeft size={20} strokeWidth={3} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulePage;