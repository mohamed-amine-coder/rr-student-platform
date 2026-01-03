// // import React from 'react';
// // import { useParams } from 'react-router-dom';
// // import { ALL_LESSONS } from '../../data/lessonsIndex';

// // // Import Components
// // import BlockIntro from './components/BlockIntro';
// // import BlockConcept from './components/BlockConcept';
// // import BlockTrap from './components/BlockTrap';
// // import BlockImage from './components/BlockImage'; // New
// // import BlockQuiz from './components/BlockQuiz';   // New

// // const LessonViewer = () => {
// //   const { id } = useParams();
// //   const lesson = ALL_LESSONS[id];

// //   if (!lesson) {
// //     return (
// //       <div className="p-10 text-center font-tajawal">
// //         <h1 className="text-2xl font-black text-red-500">هاد الدرس مازال ما واجدش!</h1>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="max-w-3xl mx-auto px-6 py-10 space-y-6 font-tajawal">
      
// //       {/* Header */}
// //       <header className="mb-8 text-center md:text-right">
// //         <span className="inline-block py-1 px-3 rounded-full bg-yellow-100 text-yellow-700 text-xs font-black mb-3">
// //           MODULE 1
// //         </span>
// //         <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
// //           {lesson.title}
// //         </h1>
// //       </header>

// //       {/* Blocks Rendering Engine */}
// //       {lesson.blocks.map((block, index) => {
// //         switch (block.type) {
          
// //           case 'introduction':
// //             return <BlockIntro key={index} text={block.content.text} />;
          
// //           case 'concept':
// //             return (
// //               <BlockConcept 
// //                 key={index} 
// //                 title_fr={block.content.title_fr}
// //                 explanation={block.content.explanation}
// //                 keywords={block.content.keywords}
// //               />
// //             );

// //           case 'analogy':
// //             return (
// //               <div key={index} className="bg-yellow-50 p-6 rounded-[2rem] border-r-4 border-yellow-400 font-bold italic text-yellow-900 shadow-sm my-6">
// //                 💡 فكرة للتبسيط: {block.content}
// //               </div>
// //             );

// //           case 'exam_trap':
// //              // تأكد بلي block.content.text حيت فالداتا درنا content: { text: "..." }
// //             return <BlockTrap key={index} text={block.content.text} />;

// //           // +++ NEW: IMAGE BLOCK +++
// //           case 'image':
// //             return (
// //               <BlockImage 
// //                 key={index} 
// //                 src={block.content.src} 
// //                 caption={block.content.caption} 
// //               />
// //             );

// //           // +++ NEW: QUIZ BLOCK +++
// //           case 'quiz':
// //             return (
// //               <BlockQuiz 
// //                 key={index}
// //                 question={block.content.question}
// //                 options={block.content.options}
// //                 correctIndex={block.content.correctIndex}
// //                 explanation={block.content.explanation}
// //               />
// //             );
          
// //           default:
// //             return <div key={index} className="text-slate-300 italic text-center text-sm py-4">نوع غير معروف: {block.type}</div>;
// //         }
// //       })}
      
// //       {/* Footer of the lesson */}
// //       <div className="mt-12 pt-8 border-t border-slate-100 text-center">
// //         <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform">
// //           الدرس الموالي 👈
// //         </button>
// //       </div>

// //     </div>
// //   );
// // };

// // export default LessonViewer;

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { ALL_LESSONS } from '../../data/lessonsIndex';
// import { ChevronRight, ChevronLeft, RotateCcw } from 'lucide-react';

// // Import Components
// import BlockIntro from './components/BlockIntro';
// import BlockConcept from './components/BlockConcept';
// import BlockTrap from './components/BlockTrap';
// import BlockImage from './components/BlockImage';
// import BlockQuiz from './components/BlockQuiz';

// const LessonViewer = () => {
//   const { id } = useParams();
//   const lesson = ALL_LESSONS[id];
  
//   // 1. هنا كنعرفو حنا فـ أي صفحة (كتبدا من 0)
//   const [currentIndex, setCurrentIndex] = useState(0);

//   if (!lesson) {
//     return <div className="p-10 text-center font-bold text-red-500">الدرس ما واجدش!</div>;
//   }

//   // عدد الصفحات الكلي
//   const totalBlocks = lesson.blocks.length;
//   // البلوك الحالي اللي خاصو يبان
//   const currentBlock = lesson.blocks[currentIndex];

//   // دالة باش نمشيو للقدام
//   const handleNext = () => {
//     if (currentIndex < totalBlocks - 1) {
//       setCurrentIndex(currentIndex + 1);
//       window.scrollTo(0, 0); // كنطلعو الفوق فاش كتقلب الصفحة
//     }
//   };

//   // دالة باش نرجعو للوراء
//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//       window.scrollTo(0, 0);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto px-6 py-8 font-tajawal min-h-screen flex flex-col">
      
//       {/* --- Header & Progress Bar --- */}
//       <div className="mb-8">
//         <h1 className="text-xl font-black text-slate-900 text-center mb-4">
//           {lesson.title}
//         </h1>
        
//         {/* شريط التقدم (Progress Bar) */}
//         <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2 dir-ltr">
//           <div 
//             className="bg-yellow-400 h-2.5 rounded-full transition-all duration-500" 
//             style={{ width: `${((currentIndex + 1) / totalBlocks) * 100}%` }}
//           ></div>
//         </div>
//         <div className="flex justify-between text-xs font-bold text-slate-400 px-1">
//           <span>شريحة {currentIndex + 1} من {totalBlocks}</span>
//           <span>{Math.round(((currentIndex + 1) / totalBlocks) * 100)}%</span>
//         </div>
//       </div>

//       {/* --- المحتوى المتغير (The Slide) --- */}
//       <div className="flex-grow flex flex-col justify-center animate-in fade-in slide-in-from-bottom-4 duration-500 key={currentIndex}">
//         {(() => {
//           switch (currentBlock.type) {
//             case 'introduction':
//               return <BlockIntro text={currentBlock.content.text} />;
//             case 'concept':
//               return (
//                 <BlockConcept 
//                   title_fr={currentBlock.content.title_fr}
//                   explanation={currentBlock.content.explanation}
//                   keywords={currentBlock.content.keywords}
//                 />
//               );
//             case 'analogy':
//               return (
//                 <div className="bg-yellow-50 p-8 rounded-[2rem] border-r-8 border-yellow-400 font-bold text-xl italic text-yellow-900 shadow-sm leading-relaxed">
//                   💡 {currentBlock.content}
//                 </div>
//               );
//             case 'exam_trap':
//               return <BlockTrap text={currentBlock.content.text} />;
//             case 'image':
//               return <BlockImage src={currentBlock.content.src} caption={currentBlock.content.caption} />;
//             case 'quiz':
//               return (
//                 <BlockQuiz 
//                   question={currentBlock.content.question}
//                   options={currentBlock.content.options}
//                   correctIndex={currentBlock.content.correctIndex}
//                   explanation={currentBlock.content.explanation}
//                 />
//               );
//             default:
//               return <div>نوع غير معروف</div>;
//           }
//         })()}
//       </div>

//       {/* --- أزرار التحكم (Navigation Buttons) --- */}
//       <div className="mt-8 flex items-center justify-between gap-4">
        
//         {/* زر الرجوع (كيبان غير إيلا ما كناش فالصفحة الأولى) */}
//         <button 
//           onClick={handlePrev}
//           disabled={currentIndex === 0}
//           className={`flex-1 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
//             currentIndex === 0 
//               ? 'opacity-0 pointer-events-none' 
//               : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
//           }`}
//         >
//           <ChevronRight size={20} /> السابق
//         </button>

//         {/* زر التقدم (أو إنهاء الدرس) */}
//         {currentIndex === totalBlocks - 1 ? (
//           <button 
//             className="flex-1 py-4 rounded-2xl font-black bg-green-500 text-white shadow-lg shadow-green-200 hover:scale-105 transition-transform flex items-center justify-center gap-2"
//             onClick={() => alert('مبروك! ساليتي الدرس 🥳')}
//           >
//             <RotateCcw size={20} /> ساليت الدرس
//           </button>
//         ) : (
//           <button 
//             onClick={handleNext}
//             className="flex-1 py-4 rounded-2xl font-black bg-slate-900 text-white shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
//           >
//             التالي <ChevronLeft size={20} />
//           </button>
//         )}

//       </div>
//     </div>
//   );
// };

// export default LessonViewer;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_LESSONS } from '../../data/lessonsIndex';
import { ChevronRight, ChevronLeft, RotateCcw, Home, Sparkles } from 'lucide-react';

// Import Components
import BlockIntro from './components/BlockIntro';
import BlockConcept from './components/BlockConcept';
import BlockTrap from './components/BlockTrap';
import BlockImage from './components/BlockImage';
import BlockQuiz from './components/BlockQuiz';

const LessonViewer = () => {
  const { id } = useParams();
  const lesson = ALL_LESSONS[id];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next'); // باش نعرفو اتجاه الانيميشن

  // Scroll to top smooth فاش كتبدل الشريحة
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 font-tajawal">
        <h1 className="text-3xl font-black text-slate-900 mb-2">الدرس مفقود 🛑</h1>
        <p className="text-slate-500 mb-6">تأكد من الرابط ولا ارجع للصفحة الرئيسية</p>
        <Link to="/" className="px-6 py-3 bg-yellow-400 text-slate-900 rounded-xl font-bold hover:scale-105 transition-transform">
          الرجوع للرئيسية
        </Link>
      </div>
    );
  }

  const totalBlocks = lesson.blocks.length;
  const currentBlock = lesson.blocks[currentIndex];
  const progress = ((currentIndex + 1) / totalBlocks) * 100;

  const handleNext = () => {
    if (currentIndex < totalBlocks - 1) {
      setDirection('next');
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection('prev');
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-tajawal overflow-hidden relative">
      
      {/* --- الخلفية الجمالية (Ambient Background) --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-400/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 py-6 md:py-10 relative z-10 flex flex-col min-h-screen">
        
        {/* --- HEADER: Navigation & Progress --- */}
        <header className="mb-8 md:mb-12">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="p-3 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-slate-900 hover:shadow-lg transition-all">
              <Home size={20} />
            </Link>
            <div className="bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white shadow-sm">
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                MODULE 1 • {lesson.id.toUpperCase()}
              </span>
            </div>
            <div className="w-10"></div> {/* Spacer for balance */}
          </div>

          {/* Title & Progress */}
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 leading-tight drop-shadow-sm">
              {lesson.title}
            </h1>
            
            <div className="relative h-2 w-full bg-slate-200/60 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(250,204,21,0.5)]"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400 px-1">
              <span>البداية</span>
              <span>{Math.round(progress)}% مكتمل</span>
            </div>
          </div>
        </header>

        {/* --- MAIN CARD (The Stage) --- */}
        <main className="flex-grow perspective-1000">
          <div 
            key={currentIndex}
            className={`
              bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] 
              rounded-[2.5rem] p-6 md:p-10 min-h-[400px] flex flex-col justify-center relative overflow-hidden
              animate-in fade-in duration-500 fill-mode-forwards
              ${direction === 'next' ? 'slide-in-from-bottom-8' : 'slide-in-from-top-8'}
            `}
          >
            {/* Decoration Element */}
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <Sparkles size={100} />
            </div>

            {/* Content Switcher */}
            <div className="relative z-10">
              {(() => {
                switch (currentBlock.type) {
                  case 'introduction':
                    return <BlockIntro text={currentBlock.content.text} />;
                  case 'concept':
                    return (
                      <BlockConcept 
                        title_fr={currentBlock.content.title_fr}
                        explanation={currentBlock.content.explanation}
                        keywords={currentBlock.content.keywords}
                      />
                    );
                  case 'analogy':
                    return (
                      <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-[2rem] border-2 border-yellow-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400"></div>
                        <h4 className="font-black text-yellow-500 text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                          <Sparkles size={16} /> تبسيط ذكي
                        </h4>
                        <p className="font-bold text-xl md:text-2xl italic text-slate-800 leading-relaxed">
                          "{currentBlock.content}"
                        </p>
                      </div>
                    );
                  case 'exam_trap':
                    return <BlockTrap text={currentBlock.content.text} />;
                  case 'image':
                    return <BlockImage src={currentBlock.content.src} caption={currentBlock.content.caption} />;
                  case 'quiz':
                    return (
                      <BlockQuiz 
                        question={currentBlock.content.question}
                        options={currentBlock.content.options}
                        correctIndex={currentBlock.content.correctIndex}
                        explanation={currentBlock.content.explanation}
                      />
                    );
                  default:
                    return <div className="text-center text-slate-300">جاري تحميل المحتوى...</div>;
                }
              })()}
            </div>
          </div>
        </main>

        {/* --- CONTROLS (The Dashboard) --- */}
        <footer className="mt-8 grid grid-cols-2 gap-4">
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`
              group flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-slate-600 bg-white border border-slate-200 shadow-sm transition-all
              ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-50 hover:border-slate-300 hover:shadow-md active:scale-95'}
            `}
          >
            <ChevronRight size={20} className="group-hover:-translate-x-1 transition-transform" />
            السابق
          </button>

          {currentIndex === totalBlocks - 1 ? (
            <button 
              className="group flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-slate-900 bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-200 transition-all hover:scale-[1.02] hover:shadow-xl active:scale-95"
              onClick={() => alert('🎉 مبروك! راك ناضي. ساليتي الدرس.')}
            >
              <RotateCcw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
              إنهاء الدرس
            </button>
          ) : (
            <button 
              onClick={handleNext}
              className="group flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-white bg-slate-900 shadow-lg shadow-slate-200 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-95"
            >
              التالي
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
          )}
        </footer>

      </div>
    </div>
  );
};

export default LessonViewer;