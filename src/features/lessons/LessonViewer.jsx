
// import React, { useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { ALL_LESSONS } from '../../data/lessonsIndex';
// import { ChevronRight, ChevronLeft, RotateCcw, X } from 'lucide-react';

// // Import Components (Clean & Organized)
// import BlockIntro from './components/BlockIntro';
// import BlockConcept from './components/BlockConcept';
// import BlockAnalogy from './components/BlockAnalogy'; // New!
// import BlockTrap from './components/BlockTrap';
// import BlockAdvice from './components/BlockAdvice';
// import BlockImage from './components/BlockImage';
// import BlockComparison from './components/BlockComparison';
// import BlockTranslation from './components/BlockTranslation';
// import BlockQuiz from './components/BlockQuiz';
// import BlockChecklist from './components/BlockChecklist';

// const LessonViewer = () => {
//   const navigate = useNavigate(); // <-- هادي هي الساروت باش تحرك بين الصفحات
//   const { id } = useParams();
//   const lesson = ALL_LESSONS[id];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Handle Loading/Error
//   if (!lesson) return (
//     <div className="h-screen flex items-center justify-center font-bold text-slate-400 bg-[#F0F4F8]">
//       الدرس غير موجود أو الرابط خطأ
//     </div>
//   );

//   const totalBlocks = lesson.blocks.length;
//   const currentBlock = lesson.blocks[currentIndex];
//   const progress = ((currentIndex + 1) / totalBlocks) * 100;

//   // Navigation Logic
//   const handleNext = () => {
//     if (currentIndex < totalBlocks - 1) setCurrentIndex(prev => prev + 1);
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
//   };

// return (
//     <div className="h-screen w-full bg-[#f8f8f0] font-tajawal flex flex-col overflow-hidden selection:bg-yellow-200">
      
//       {/* HEADER (بسيط ونقي) */}
//       <div className="h-20 px-4 md:px-8 flex items-center justify-between shrink-0 bg-white border-b-2 border-slate-200">
//         <Link to="/" className="text-slate-400 hover:bg-slate-100 p-3 rounded-2xl transition-all">
//           <X size={24} strokeWidth={2.5} />
//         </Link>
        
//         <div className="flex-1 max-w-2xl mx-6">
//             <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden">
//                 <div 
//                     className="h-full bg-[#58CC02] rounded-full transition-all duration-500 ease-out shadow-[0_2px_0_#46a302]"
//                     style={{ width: `${progress}%` }}
//                 />
//             </div>
//         </div>
//         <div className="w-10"></div>
//       </div>

//       {/* CONTENT AREA */}
//       <div className="flex-1 overflow-y-auto flex flex-col items-center p-4 relative custom-scrollbar">
//         <div className="w-full max-w-2xl my-auto py-8">
//             <div key={currentIndex} className="animate-in fade-in slide-in-from-bottom-6 duration-300">
//                 {/* هنا المكونات غايتحطو ديريكت حيت هما ديجا عندهم "الستايل د البطاقة" */}
//                 {(() => {
//                     switch (currentBlock.type) {
//                         case 'introduction': return <BlockIntro text={currentBlock.content.text} />;
//                         case 'concept': return <BlockConcept title_fr={currentBlock.content.title_fr} explanation={currentBlock.content.explanation} keywords={currentBlock.content.keywords} />;
//                         case 'analogy': return <BlockAnalogy content={currentBlock.content} />;
//                         case 'exam_trap': return <BlockTrap text={currentBlock.content.text} />;
//                         case 'advice': return <BlockAdvice text={currentBlock.content.text} title={currentBlock.content.title} />;
//                         case 'comparison': return <BlockComparison leftTitle={currentBlock.content.leftTitle} rightTitle={currentBlock.content.rightTitle} leftItems={currentBlock.content.leftItems} rightItems={currentBlock.content.rightItems} />;
//                         case 'checklist': return <BlockChecklist title={currentBlock.content.title} items={currentBlock.content.items} />;
//                         case 'image': return <BlockImage src={currentBlock.content.src} caption={currentBlock.content.caption} />;
//                         case 'translation': return <BlockTranslation title={currentBlock.content.title} terms={currentBlock.content.terms} />;
//                         case 'quiz': return <div className="dir-rtl"><BlockQuiz question={currentBlock.content.question} options={currentBlock.content.options} correctIndex={currentBlock.content.correctIndex} explanation={currentBlock.content.explanation} /></div>;
//                         default: return <div>ماتبقاش غا كتمرر 😁 حاول تكتب ملاحظات فشي ورقة ولا فشي دفتر</div>;
//                     }
//                 })()}
//             </div>
//         </div>
//       </div>

//       {/* FOOTER (أزرار كبيرة بحال Duolingo) */}
//       <div className="h-24 px-4 border-t-2 border-slate-200 bg-white flex items-center justify-center shrink-0">
//         <div className="w-full max-w-2xl flex items-center justify-between gap-4">
//              {/* Previous Button (Secondary Style) */}
//             <button 
//                 onClick={handlePrev}
//                 disabled={currentIndex === 0}
//                 className={`
//                     h-12 md:h-14 px-6 rounded-2xl font-black text-sm md:text-base border-2 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all uppercase tracking-wider cursor-pointer
//                     ${currentIndex === 0 
//                         ? 'opacity-0 pointer-events-none' 
//                         : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-300'}
//                 `}
//             >
//                 سابق
//             </button>

//             {/* Next Button (Primary Style) */}
//             <button 
//                 onClick={currentIndex === totalBlocks - 1 ? () => navigate('/') : handleNext}
//                 className={`
//                     flex-1 h-12 md:h-14 rounded-2xl font-black text-sm md:text-base border-b-4 active:border-b-0 active:translate-y-[4px] transition-all uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer
//                     ${currentIndex === totalBlocks - 1 
//                         ? 'bg-[#58CC02] border-[#46a302] text-white hover:bg-[#46a302]' // Green for finish
//                         : 'bg-[#FFC800] border-[#E5A500] text-slate-900 hover:bg-[#FFB700]'} // Yellow for next
//                 `}
//             >
//                 {currentIndex === totalBlocks - 1 ? <span>إنهاء الدرس</span> : <span>تابـع</span>}
//             </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LessonViewer;

import React, { useState, useEffect } from 'react'; // ✅ added useEffect
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ALL_LESSONS } from '../../data/lessonsIndex';
import { X } from 'lucide-react';

// Import Components
import BlockIntro from './components/BlockIntro';
import BlockConcept from './components/BlockConcept';
import BlockAnalogy from './components/BlockAnalogy';
import BlockTrap from './components/BlockTrap';
import BlockAdvice from './components/BlockAdvice';
import BlockImage from './components/BlockImage';
import BlockComparison from './components/BlockComparison';
import BlockTranslation from './components/BlockTranslation';
import BlockQuiz from './components/BlockQuiz';
import BlockChecklist from './components/BlockChecklist';
import BlockAudio from './components/BlockAudio'; // ✅ New Import

const LessonViewer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const lesson = ALL_LESSONS[id];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Loading/Error
  if (!lesson) return (
    <div className="h-screen flex items-center justify-center font-bold text-slate-400 bg-[#F0F4F8]">
      الدرس غير موجود أو الرابط خطأ
    </div>
  );

  const totalBlocks = lesson.blocks.length;
  const currentBlock = lesson.blocks[currentIndex];
  const progress = ((currentIndex + 1) / totalBlocks) * 100;

  // Navigation Logic
  const handleNext = () => {
    if (currentIndex < totalBlocks - 1) setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  // ✅ زر Enter: كود التحكم
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        if (currentIndex === totalBlocks - 1) {
          navigate('/'); // إنهاء الدرس
        } else {
          handleNext(); // التالي
        }
      }
      // اختياري: زر السهم اليسار للرجوع
      if (event.key === 'ArrowLeft') { 
        handlePrev(); 
      }
      // اختياري: زر السهم اليمين للتقدم
       if (event.key === 'ArrowRight') { 
        if (currentIndex < totalBlocks - 1) handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, totalBlocks, navigate]); // Dependencies مهمين باش يبقى عاقل على القيم

  return (
    <div className="h-screen w-full bg-[#f8f8f0] font-tajawal flex flex-col overflow-hidden selection:bg-yellow-200">
      
      {/* HEADER */}
      <div className="h-20 px-4 md:px-8 flex items-center justify-between shrink-0 bg-white border-b-2 border-slate-200">
        <Link to="/" className="text-slate-400 hover:bg-slate-100 p-3 rounded-2xl transition-all">
          <X size={24} strokeWidth={2.5} />
        </Link>
        
        <div className="flex-1 max-w-2xl mx-6">
            <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-[#58CC02] rounded-full transition-all duration-500 ease-out shadow-[0_2px_0_#46a302]"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
        <div className="w-10"></div>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center p-4 relative custom-scrollbar">
        <div className="w-full max-w-2xl my-auto py-8">
            <div key={currentIndex} className="animate-in fade-in slide-in-from-bottom-6 duration-300">
                {(() => {
                    switch (currentBlock.type) {
                        case 'introduction': return <BlockIntro text={currentBlock.content.text} />;
                        case 'concept': return <BlockConcept title_fr={currentBlock.content.title_fr} explanation={currentBlock.content.explanation} keywords={currentBlock.content.keywords} />;
                        case 'analogy': return <BlockAnalogy content={currentBlock.content} />;
                        case 'exam_trap': return <BlockTrap text={currentBlock.content.text} />;
                        case 'advice': return <BlockAdvice text={currentBlock.content.text} title={currentBlock.content.title} />;
                        case 'comparison': return <BlockComparison leftTitle={currentBlock.content.leftTitle} rightTitle={currentBlock.content.rightTitle} leftItems={currentBlock.content.leftItems} rightItems={currentBlock.content.rightItems} />;
                        case 'checklist': return <BlockChecklist title={currentBlock.content.title} items={currentBlock.content.items} />;
                        case 'image': return <BlockImage src={currentBlock.content.src} caption={currentBlock.content.caption} />;
                        case 'translation': return <BlockTranslation title={currentBlock.content.title} terms={currentBlock.content.terms} />;
                        case 'quiz': return <div className="dir-rtl"><BlockQuiz question={currentBlock.content.question} options={currentBlock.content.options} correctIndex={currentBlock.content.correctIndex} explanation={currentBlock.content.explanation} /></div>;
                        // ✅ إضافة نوع الصوت
                        case 'audio': return <BlockAudio src={currentBlock.content.src} title={currentBlock.content.title} duration={currentBlock.content.duration} />;
                        
                        default: return <div>ماتبقاش غا كتمرر 😁 حاول تكتب ملاحظات فشي ورقة ولا فشي دفتر</div>;
                    }
                })()}
            </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="h-24 px-4 border-t-2 border-slate-200 bg-white flex items-center justify-center shrink-0">
        <div className="w-full max-w-2xl flex items-center justify-between gap-4">
             {/* Previous Button */}
            <button 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`
                    h-12 md:h-14 px-6 rounded-2xl font-black text-sm md:text-base border-2 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all uppercase tracking-wider cursor-pointer
                    ${currentIndex === 0 
                        ? 'opacity-0 pointer-events-none' 
                        : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-300'}
                `}
            >
                سابق
            </button>

            {/* Next Button */}
            <button 
                onClick={currentIndex === totalBlocks - 1 ? () => navigate('/') : handleNext}
                className={`
                    flex-1 h-12 md:h-14 rounded-2xl font-black text-sm md:text-base border-b-4 active:border-b-0 active:translate-y-[4px] transition-all uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer
                    ${currentIndex === totalBlocks - 1 
                        ? 'bg-[#58CC02] border-[#46a302] text-white hover:bg-[#46a302]' // Green for finish
                        : 'bg-[#FFC800] border-[#E5A500] text-slate-900 hover:bg-[#FFB700]'} // Yellow for next
                `}
            >
                {currentIndex === totalBlocks - 1 ? <span>إنهاء الدرس</span> : <span>تابـع</span>}
            </button>
        </div>
      </div>
    </div>
  );
};

export default LessonViewer;