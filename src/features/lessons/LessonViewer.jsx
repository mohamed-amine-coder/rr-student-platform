
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ALL_LESSONS } from '../../data/lessonsIndex'; // تأكد من المسار
import { COURSES } from '../../data/landingData'; // تأكد من المسار
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

// --- استيراد البلوكات (تأكد أنك أنشأت الملفات) ---
import BlockTitle from './components/BlockTitle';
import BlockIntro from './components/BlockIntro';
import BlockConcept from './components/BlockConcept';
import BlockResume from './components/BlockResume'; // ✅ المكون الجديد (الأصفر)
import BlockAnalogy from './components/BlockAnalogy';
import BlockTrap from './components/BlockTrap';
import BlockAdvice from './components/BlockAdvice';
import BlockImage from './components/BlockImage';
import BlockComparison from './components/BlockComparison';
import BlockTranslation from './components/BlockTranslation';
import BlockQuiz from './components/BlockQuiz';
import BlockChecklist from './components/BlockChecklist';
import BlockAudio from './components/BlockAudio'; // ✅ المكون الجديد (الصوت)
import BlockExam from './components/BlockExam';

const LessonViewer = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Lesson ID
  const lesson = ALL_LESSONS[id];
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- 1. التعامل مع الأخطاء ---
  if (!lesson) return (
    <div className="h-screen flex flex-col items-center justify-center font-tajawal bg-[#F0F4F8] text-slate-500">
      <p className="text-xl font-bold mb-4">هاد الدرس مازال ما واجدش أو الرابط غلط 🛑</p>
      <Link to="/" className="text-blue-600 hover:underline">الرجوع للرئيسية</Link>
    </div>
  );

  const totalBlocks = lesson.blocks.length;
  const currentBlock = lesson.blocks[currentIndex];
  const progress = ((currentIndex + 1) / totalBlocks) * 100;

  // --- 2. التنقل (Next / Prev) ---
  const handleNext = () => {
    if (currentIndex < totalBlocks - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // --- 3. الذكاء: شنو يوقع فاش يسالي الدرس؟ ---
  const handleFinish = () => {
    // كنقلبو على الموديل اللي فيه هاد الدرس
    const currentModule = COURSES.find(course => 
      course.chapters.some(ch => ch.id === id)
    );

    if (currentModule) {
      const chapters = currentModule.chapters;
      const currentChapterIndex = chapters.findIndex(ch => ch.id === id);
      const nextChapter = chapters[currentChapterIndex + 1];

      if (nextChapter) {
        // واش كاين درس موراه؟
        if (nextChapter.isFree) {
          // ✅ إيلا كان فابور: دوز ليه نيشان (Netflix Style)
          navigate(`/lesson/${nextChapter.id}`);
          setCurrentIndex(0); // صفر العداد للدرس الجديد
        } else {
          // 🔒 إيلا كان بالخلاص: هنا كنصيدوه! ديه لصفحة التسجيل
          // كنصيفطو معاه state باش نعرفو منين جا (اختياري)
          navigate('/join-waitlist', { state: { fromLesson: id } });
        }
      } else {
        // 🎉 سالا الموديل كامل: ديه للتسجيل باش يشري موديلات خرين
        navigate('/join-waitlist', { state: { finishedModule: true } });
      }
    } else {
      // احتياط: رجع للصفحة الرئيسية
      navigate('/');
    }
  };

  // --- 4. التحكم بالكيبورد (Accessibility) ---
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        if (currentIndex === totalBlocks - 1) {
          handleFinish(); // إنهاء أو انتقال
        } else {
          handleNext();
        }
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') handlePrev(); // اليسار للرجوع (Séquentiel)
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        if (currentIndex < totalBlocks - 1) handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, totalBlocks, id]); // id مهمة هنا باش يتجدد الـ effect فاش يتبدل الدرس

  // --- 5. الريندر (Render) ---
  return (
    <div className="h-screen w-full bg-[#f8f8f0] font-tajawal flex flex-col overflow-hidden selection:bg-yellow-200">
      
      {/* HEADER */}
      <div className="h-16 md:h-20 px-4 md:px-8 flex items-center justify-between shrink-0 bg-white border-b-2 border-slate-200 z-20 relative">
        <Link to="/" className="text-slate-400 hover:bg-slate-100 p-2 md:p-3 rounded-2xl transition-all">
          <X size={24} strokeWidth={2.5} />
        </Link>
        
        {/* Progress Bar */}
        <div className="flex-1 max-w-xl mx-4 md:mx-10">
            <div className="h-3 md:h-4 w-full bg-slate-200 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-[#58CC02] rounded-full transition-all duration-500 ease-out shadow-[0_2px_0_#46a302]"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
        
        <div className="w-10 hidden md:block"></div> {/* Space balancer */}
      </div>

      {/* CONTENT AREA (Scrollable) */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center p-4 md:p-6 relative custom-scrollbar bg-pattern">
        <div className="w-full max-w-2xl my-auto py-4 md:py-8 min-h-[50vh]">
            <div key={currentIndex} className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                {(() => {
                    // Switch Case لعرض البلوك المناسب
                    switch (currentBlock.type) {
                        case 'title': return <BlockTitle block={currentBlock} />;                        case 'introduction': return <BlockIntro text={currentBlock.content.text} />;
                        case 'concept': return <BlockConcept title_fr={currentBlock.content.title_fr} explanation={currentBlock.content.explanation} keywords={currentBlock.content.keywords} />;
                        case 'analogy': return <BlockAnalogy content={currentBlock.content} />;
                        case 'resume': return <BlockResume content={currentBlock.content} />; // ✅ الجديد
                        case 'exam_trap': return <BlockTrap text={currentBlock.content.text} />;
                        case 'advice': return <BlockAdvice text={currentBlock.content.text} title={currentBlock.content.title} />;
                        case 'comparison': return <BlockComparison leftTitle={currentBlock.content.leftTitle} rightTitle={currentBlock.content.rightTitle} leftItems={currentBlock.content.leftItems} rightItems={currentBlock.content.rightItems} />;
                        case 'checklist': return <BlockChecklist title={currentBlock.content.title} items={currentBlock.content.items} />;
                        case 'image': return <BlockImage src={currentBlock.content.src} caption={currentBlock.content.caption} />;
                        case 'translation': return <BlockTranslation title={currentBlock.content.title} terms={currentBlock.content.terms} />;
                        case 'quiz': return <div className="dir-rtl"><BlockQuiz question={currentBlock.content.question} options={currentBlock.content.options} correctIndex={currentBlock.content.correctIndex} explanation={currentBlock.content.explanation} /></div>;
                        case 'audio': return <BlockAudio src={currentBlock.content.src} title={currentBlock.content.title} duration={currentBlock.content.duration} />; // ✅ الجديد
                        case 'exam': return <BlockExam block={currentBlock} />; // ✅ الجديد
                        default: return <div className="text-center text-gray-400 py-10">جاري تحميل المحتوى... ⏳</div>;
                    }
                })()}
            </div>
        </div>
      </div>

      {/* FOOTER (Controls) */}
      <div className="h-auto py-4 px-4 border-t-2 border-slate-200 bg-white flex items-center justify-center shrink-0 z-20">
        <div className="w-full max-w-2xl flex items-center justify-between gap-3 md:gap-6">
             {/* زر السابق */}
            <button 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`
                    h-12 md:h-14 px-4 md:px-8 rounded-2xl font-black text-sm md:text-base border-2 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all uppercase tracking-wider flex items-center gap-2 cursor-pointer
                    ${currentIndex === 0 
                        ? 'opacity-0 pointer-events-none' 
                        : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-100'}
                `}
            >
                <ChevronRight size={20} /> {/* اتجاه العربية: يمين هو السابق */}
                <span className="hidden md:inline">السابق</span>
            </button>

            {/* زر التالي / إنهاء */}
            <button 
                onClick={currentIndex === totalBlocks - 1 ? handleFinish : handleNext}
                className={`
                    flex-1 h-12 md:h-14 rounded-2xl font-black text-sm md:text-lg border-b-4 active:border-b-0 active:translate-y-[4px] transition-all uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer
                    ${currentIndex === totalBlocks - 1 
                        ? 'bg-[#58CC02] border-[#46a302] text-white hover:bg-[#46a302] shadow-[#46a302]/20' // لون الإنهاء (أخضر)
                        : 'bg-[#FFC800] border-[#E5A500] text-slate-900 hover:bg-[#FFB700] shadow-[#E5A500]/20'} // لون التالي (أصفر)
                `}
            >
                {currentIndex === totalBlocks - 1 ? (
                    <>
                       <span>إنهاء الدرس</span>
                       <ChevronLeft size={24} />
                    </>
                ) : (
                    <>
                       <span>تابـع</span>
                       <ChevronLeft size={24} />
                    </>
                )}
            </button>
        </div>
      </div>
    </div>
  );
};

export default LessonViewer;