import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'; 
import { getAuth } from 'firebase/auth';
import { db } from '../../../firebase'; 
import { X, ChevronRight, ChevronLeft, Loader, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

// --- استيراد البلوكات ---
import BlockTitle from './components/BlockTitle';
import BlockIntro from './components/BlockIntro';
import BlockConcept from './components/BlockConcept';
import BlockResume from './components/BlockResume'; 
import BlockAnalogy from './components/BlockAnalogy';
import BlockTrap from './components/BlockTrap';
import BlockAdvice from './components/BlockAdvice';
import BlockImage from './components/BlockImage';
import BlockComparison from './components/BlockComparison';
import BlockTranslation from './components/BlockTranslation';
import BlockQuiz from './components/BlockQuiz';
import BlockChecklist from './components/BlockChecklist';
import BlockAudio from './components/BlockAudio'; 
import BlockExam from './components/BlockExam';

const LessonViewer = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Lesson ID

  // 1. الحالات
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [moduleId, setModuleId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);

  // 2. الحسابات 
  const totalBlocks = lesson?.blocks?.length || 0;
  const currentBlock = lesson?.blocks?.[currentIndex];
  const progress = totalBlocks > 0 ? ((currentIndex + 1) / totalBlocks) * 100 : 0;

  // 3. الفانكشنز ديال التنقل
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

  // 🔥 هنا فين درنا التعديل الجذري دالة الإنهاء مع الاحتفال
  const handleFinish = async () => {
    setIsFinishing(true); 
    try {
      if (moduleId) {
        const moduleRef = doc(db, 'modules', moduleId);
        const moduleSnap = await getDoc(moduleRef);
        
        if (moduleSnap.exists()) {
          const chapters = moduleSnap.data().chapters;
          const currentChapterIndex = chapters.findIndex(ch => ch.id === id);
          const nextChapter = chapters[currentChapterIndex + 1];

          if (nextChapter) {
            let hasAccess = nextChapter.isFree;

            if (!hasAccess) {
              const auth = getAuth();
              const user = auth.currentUser;

              if (user) {
                const userRef = doc(db, 'users', user.uid);
                const userSnap = await getDoc(userRef);
                
                if (userSnap.exists()) {
                  const userData = userSnap.data();
                  if (
                    userData.subscriptions && 
                    userData.subscriptions[moduleId] && 
                    userData.subscriptions[moduleId].status === 'active'
                  ) {
                    hasAccess = true;
                  }
                }
              }
            }

            if (hasAccess) {
              // 🎉 إطلاق الاحتفال العادي (سلا درس ودايز لدرس آخر)
              confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#FFC800', '#58CC02', '#3B82F6'] // ألوان المنصة
              });

              // كنتسناو 1.5 ثانية عاد كندووزوه باش يستمتع باللحظة
              setTimeout(() => {
                navigate(`/lesson/${nextChapter.id}`);
                setCurrentIndex(0);
                setIsFinishing(false); // كنرجعو البوطون للحالة الطبيعية
              }, 1500);

            } else {
              navigate('/join-waitlist', { state: { fromLesson: id } });
            }
          } else {
            // 🎉🎉 احتفال كبيييير حيت سالا الموديل كاامل!
            confetti({
              particleCount: 400, // وراق كثار
              spread: 120, // كيتشتت فكاع الشاشة
              origin: { y: 0.5 },
              colors: ['#FFC800', '#58CC02', '#3B82F6', '#EF4444', '#8B5CF6'] 
            });

            // كنتسناو 2 ثواني عاد كنديوه للصفحة ديال "مبروك ساليتي الموديل"
            setTimeout(() => {
              navigate('/join-waitlist', { state: { finishedModule: true } });
            }, 2000);
          }
        }
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error("خطأ:", error);
      navigate('/');
    }
    // حيدنا finally { setIsFinishing(false) } من هنا، حيت حطيناها لداخل مع setTimeout باش يبقى اللودينغ خدام وسط الاحتفال
  };

  // 4. جلب الداتا من فايرستور
  useEffect(() => {
    const fetchLessonData = async () => {
      setLoading(true);
      try {
        const modulesSnap = await getDocs(collection(db, 'modules'));
        let currentModuleId = null;

        modulesSnap.forEach((doc) => {
          const data = doc.data();
          if (data.chapters && data.chapters.some(ch => ch.id === id)) {
            currentModuleId = doc.id;
          }
        });

        if (currentModuleId) {
          setModuleId(currentModuleId); 
          const lessonRef = doc(db, 'modules', currentModuleId, 'lessons', id);
          const lessonSnap = await getDoc(lessonRef);

          if (lessonSnap.exists()) {
            setLesson(lessonSnap.data()); 
          } else {
            setLesson(null);
          }
        } else {
          setLesson(null); 
        }
      } catch (error) {
        console.error("خطأ في جلب الدرس:", error);
        setLesson(null);
      } finally {
        setLoading(false); 
      }
    };

    if (id) {
      fetchLessonData();
    }
  }, [id]);

  // 5. التحكم بالكيبورد
  useEffect(() => {
    if (loading || !lesson) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        if (currentIndex === totalBlocks - 1) {
          if (!isFinishing) handleFinish(); 
        } else {
          handleNext();
        }
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') handlePrev();
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        if (currentIndex < totalBlocks - 1) handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, totalBlocks, id, isFinishing, loading, lesson]);

  // --- 6. Early Returns ---
  if (loading) return (
    <div className="h-screen flex flex-col items-center justify-center font-tajawal bg-[#F0F4F8]">
      <Loader2 className="animate-spin text-yellow-500 mb-4" size={40} />
      <p className="text-slate-500 font-bold">جاري تحميل الدرس...</p>
    </div>
  );

  if (!lesson) return (
    <div className="h-screen flex flex-col items-center justify-center font-tajawal bg-[#F0F4F8] text-slate-500">
      <p className="text-xl font-bold mb-4">هاد الدرس مازال ما واجدش أو الرابط غلط 🛑</p>
      <Link to="/" className="text-blue-600 hover:underline">الرجوع للرئيسية</Link>
    </div>
  );

  // --- 7. الريندر (Render) النهائي ---
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
        
        <div className="w-10 hidden md:block"></div>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center p-4 md:p-6 relative custom-scrollbar bg-pattern">
        <div className="w-full max-w-2xl my-auto py-4 md:py-8 min-h-[50vh]">
            <div key={currentIndex} className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                {(() => {
                    if (!currentBlock) return null; 
                    
                    switch (currentBlock.type) {
                        case 'title': return <BlockTitle block={currentBlock} />;
                        case 'introduction': return <BlockIntro text={currentBlock.text} />;
                        case 'concept': return <BlockConcept title_fr={currentBlock.title_fr} explanation={currentBlock.explanation} keywords={currentBlock.keywords} />;
                        case 'analogy': return <BlockAnalogy content={currentBlock.text} />;
                        case 'resume': return <BlockResume content={currentBlock} />;
                        case 'exam_trap': return <BlockTrap text={currentBlock.text} />;
                        case 'advice': return <BlockAdvice text={currentBlock.text} title={currentBlock.title} />;
                        case 'comparison': return <BlockComparison leftTitle={currentBlock.leftTitle} rightTitle={currentBlock.rightTitle} leftItems={currentBlock.leftItems} rightItems={currentBlock.rightItems} />;
                        case 'checklist': return <BlockChecklist title={currentBlock.title} items={currentBlock.items} />;
                        case 'image': return <BlockImage src={currentBlock.src} caption={currentBlock.caption} />;
                        case 'translation': return <BlockTranslation title={currentBlock.title} terms={currentBlock.terms} />;
                        case 'quiz': return <div className="dir-rtl"><BlockQuiz question={currentBlock.question} options={currentBlock.options} correctIndex={currentBlock.correctIndex} explanation={currentBlock.explanation} /></div>;
                        case 'audio': return <BlockAudio src={currentBlock.src} title={currentBlock.title} duration={currentBlock.duration} />;
                        case 'exam': return <BlockExam block={currentBlock} />;
                        default: return <div className="text-center text-gray-400 py-10">محتوى غير مدعوم ⏳</div>;
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
                disabled={currentIndex === 0 || isFinishing}
                className={`
                    h-12 md:h-14 px-4 md:px-8 rounded-2xl font-black text-sm md:text-base border-2 border-b-4 active:border-b-2 active:translate-y-[2px] transition-all uppercase tracking-wider flex items-center gap-2 cursor-pointer
                    ${currentIndex === 0 
                        ? 'opacity-0 pointer-events-none' 
                        : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-100'}
                `}
            >
                <ChevronRight size={20} />
                <span className="hidden md:inline">السابق</span>
            </button>

            {/* زر التالي / إنهاء */}
            <button 
                onClick={currentIndex === totalBlocks - 1 ? handleFinish : handleNext}
                disabled={isFinishing}
                className={`
                    flex-1 h-12 md:h-14 rounded-2xl font-black text-sm md:text-lg border-b-4 active:border-b-0 active:translate-y-[4px] transition-all uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer
                    ${currentIndex === totalBlocks - 1 
                        ? 'bg-[#58CC02] border-[#46a302] text-white hover:bg-[#46a302] shadow-[#46a302]/20'
                        : 'bg-[#FFC800] border-[#E5A500] text-slate-900 hover:bg-[#FFB700] shadow-[#E5A500]/20'}
                    ${isFinishing ? 'opacity-80 pointer-events-none' : ''}
                `}
            >
                {isFinishing ? (
                    <Loader className="animate-spin" size={24} />
                ) : currentIndex === totalBlocks - 1 ? (
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