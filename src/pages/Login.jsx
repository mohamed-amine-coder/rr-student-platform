// import React, { useState } from 'react';
// import { auth, googleProvider, db } from '../../firebase'; 
// import { signInWithPopup } from 'firebase/auth';
// import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
// import { useNavigate } from 'react-router-dom'; // للتنقل للصفحة الرئيسية
// import { Microscope, Dna, GraduationCap, Loader2, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';

// const Login = () => {
//   const navigate = useNavigate();
  
//   // حالات الصفحة (States) للتحكم في الديناميكية
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [error, setError] = useState(null);
//   const [userData, setUserData] = useState(null);

//   const handleGoogleLogin = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;
//       setUserData(user);

//       // 1. التعامل مع Firestore
//       const userRef = doc(db, "users", user.uid);
//       const userSnap = await getDoc(userRef);

//       if (!userSnap.exists()) {
//         // إنشاء ملف جديد
//         await setDoc(userRef, {
//           uid: user.uid,
//           displayName: user.displayName,
//           email: user.email,
//           photoURL: user.photoURL,
//           role: "student",
//           subscriptions: {},
//           createdAt: serverTimestamp(),
//           lastActive: serverTimestamp()
//         });
//       } else {
//         // تحديث تاريخ الدخول
//         await setDoc(userRef, { lastActive: serverTimestamp() }, { merge: true });
//       }

//       // 2. نجاح العملية
//       setIsLoading(false);
//       setIsSuccess(true); // هنا غيتبدل الشكل ديال الصفحة

//     } catch (err) {
//       console.error("Login Error:", err);
//       setError("وقع مشكل فالاتصال، عاود حاول مرة أخرى.");
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-tajawal">
      
//       <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 transition-all duration-500">
        
//         {/* --- الجزء العلوي: الهوية البصرية (ثابت) --- */}
//         <div className="bg-slate-900 p-10 text-center relative overflow-hidden">
//           {/* خلفية جمالية */}
//           <div className="absolute top-0 right-0 p-4 opacity-5">
//             <Dna size={120} className="text-white rotate-12" />
//           </div>
          
//           <div className="relative z-10">
//             <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-2xl mb-4 rotate-3 shadow-lg shadow-yellow-400/20">
//               <Microscope size={40} className="text-slate-900 -rotate-3" />
//             </div>
//             <h1 className="text-3xl font-black text-white tracking-tight">RR STUDENT</h1>
//             <p className="text-slate-400 mt-2 font-medium text-sm">المعلومة بلغتنا</p>
//           </div>
//         </div>

//         {/* --- الجزء السفلي: متغير حسب الحالة --- */}
//         <div className="p-10 text-center min-h-[300px] flex flex-col justify-center">
          
//           {isSuccess ? (
//             /* ✅ حالة النجاح: ترحيب وزر العودة */
//             <div className="animate-fade-in space-y-6">
//               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce-slow">
//                 <CheckCircle2 size={32} strokeWidth={3} />
//               </div>
              
//               <div>
//                 <h2 className="text-2xl font-black text-slate-800">مرحباً بك {userData?.displayName?.split(' ')[0]}!</h2>
//                 <p className="text-slate-500 mt-2 font-medium">تم تسجيل الدخول بنجاح. حسابك جاهز.</p>
//               </div>

//               <button 
//                 onClick={() => navigate('/')}
//                 className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200 cursor-pointer"
//               >
//                  <ArrowRight size={20} />
//               </button>
//             </div>

//           ) : (
//             /* 🚪 حالة الدخول العادية */
//             <div className="space-y-8 animate-fade-in">
//               <div>
//                 <div className="inline-block p-3 bg-slate-50 rounded-full mb-4">
//                     <GraduationCap className="text-slate-400" size={30} />
//                 </div>
//                 <h2 className="text-xl font-bold text-slate-800">تسجيل الدخول</h2>
//                 {/* <p className="text-slate-500 text-sm mt-1">استعمل حساب Google الخاص بك للمتابعة</p> */}
//               </div>

//               {/* إظهار الخطأ إن وجد */}
//               {error && (
//                 <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
//                   <AlertCircle size={16} /> {error}
//                 </div>
//               )}

//               <button 
//                 onClick={handleGoogleLogin}
//                 disabled={isLoading}
//                 className={`
//                   w-full flex items-center justify-center gap-3 border-2 border-slate-100 py-4 px-6 rounded-2xl font-bold text-slate-700 transition-all
//                   ${isLoading ? 'bg-slate-50 cursor-not-allowed opacity-70' : 'bg-white hover:bg-slate-50 hover:border-slate-200 active:scale-95 shadow-sm'}
//                 `}
//               >
//                 {isLoading ? (
//                   <>
//                     <Loader2 className="animate-spin text-slate-400" size={24} />
//                     <span className="text-slate-400">جاري الاتصال...</span>
//                   </>
//                 ) : (
//                   <>
//                     <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-6" alt="Google" />
//                     <span className='cursor-pointer'>متابعة باستخدام Google</span>
//                   </>
//                 )}
//               </button>
//             </div>
//           )}

//           {/* Footer Text */}
//           <div className="mt-auto pt-8">
//             <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
//               Secure Login • RR Student © 2026
//             </p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from 'react';
import { auth, googleProvider, db } from '../../firebase'; 
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { Microscope, Dna, GraduationCap, Loader2, AlertCircle } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  
  // ردينا القيمة الافتراضية true باش ميبانش الزر حتى نتأكدو من حالة المستخدم
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);

  // 1. التحقق واش الطالب ديجا مكونيكطي قبل ما نعرضو ليه زر الدخول
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/'); // يلا مكونيكطي، صيفطو للرئيسية مباشرة
      } else {
        setIsLoading(false); // يلا مامكونيكطيش، وقف التحميل وعرض زر الدخول
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // 2. التعامل مع Firestore
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          role: "student",
          subscriptions: {},
          createdAt: serverTimestamp(),
          lastActive: serverTimestamp()
        });
      } else {
        await setDoc(userRef, { lastActive: serverTimestamp() }, { merge: true });
      }

      // 3. التوجيه المباشر للرئيسية بمجرد نجاح العملية
      navigate('/');

    } catch (err) {
      console.error("Login Error:", err);
      setError("وقع مشكل فالاتصال، عاود حاول مرة أخرى.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-tajawal">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 transition-all duration-500">
        
        {/* --- الجزء العلوي: الهوية البصرية --- */}
        <div className="bg-slate-900 p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Dna size={120} className="text-white rotate-12" />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-2xl mb-4 rotate-3 shadow-lg shadow-yellow-400/20">
              <Microscope size={40} className="text-slate-900 -rotate-3" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">RR STUDENT</h1>
            <p className="text-slate-400 mt-2 font-medium text-sm">المعلومة بلغتنا</p>
          </div>
        </div>

        {/* --- الجزء السفلي: زر الدخول --- */}
        <div className="p-10 text-center min-h-[300px] flex flex-col justify-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="inline-block p-3 bg-slate-50 rounded-full mb-4">
                  <GraduationCap className="text-slate-400" size={30} />
              </div>
              <h2 className="text-xl font-bold text-slate-800">تسجيل الدخول</h2>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                <AlertCircle size={16} /> {error}
              </div>
            )}

            <button 
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className={`
                w-full flex items-center justify-center gap-3 border-2 border-slate-100 py-4 px-6 rounded-2xl font-bold text-slate-700 transition-all
                ${isLoading ? 'bg-slate-50 cursor-not-allowed opacity-70' : 'bg-white hover:bg-slate-50 hover:border-slate-200 active:scale-95 shadow-sm'}
              `}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin text-slate-400" size={24} />
                  <span className="text-slate-400">جاري التحميل...</span>
                </>
              ) : (
                <>
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-6" alt="Google" />
                  <span className='cursor-pointer'>متابعة باستخدام Google</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-auto pt-8">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
              Secure Login • RR Student © 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;