
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_LESSONS } from '../../data/lessonsIndex';
import { ChevronRight, ChevronLeft, RotateCcw, X, Sparkles } from 'lucide-react';

// Import Components
import BlockIntro from './components/BlockIntro';
import BlockConcept from './components/BlockConcept';
import BlockTrap from './components/BlockTrap';
import BlockAdvice from './components/BlockAdvice';
import BlockImage from './components/BlockImage';
import BlockComparison from './components/BlockComparison';
import BlockQuiz from './components/BlockQuiz';
import BlockChecklist from './components/BlockChecklist';

const LessonViewer = () => {
  const { id } = useParams();
  const lesson = ALL_LESSONS[id];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!lesson) return <div className="h-screen flex items-center justify-center font-bold text-slate-500">الدرس غير موجود</div>;

  const totalBlocks = lesson.blocks.length;
  const currentBlock = lesson.blocks[currentIndex];
  const progress = ((currentIndex + 1) / totalBlocks) * 100;

  const handleNext = () => {
    if (currentIndex < totalBlocks - 1) setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  return (
    // PARENT: شاد الشاشة كاملة (h-screen) ومقسم عموديا (flex-col)
    <div className="h-screen w-full bg-[#F0F4F8] font-tajawal flex flex-col overflow-hidden relative selection:bg-yellow-200">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-100/40 rounded-full blur-[80px] pointer-events-none" />

      {/* --- 1. HEADER (Fixed Height) --- */}
      {/* shrink-0: كيعني ممنوع يصغار واخا المحتوى يكثر */}
      <div className="h-16 px-4 md:px-6 flex items-center justify-between shrink-0 z-20 bg-white/60 backdrop-blur-md border-b border-white/50">
        <Link to="/" className="text-slate-400 hover:text-slate-800 transition-colors p-1">
          <X size={24} />
        </Link>
        
        {/* Progress Bar */}
        <div className="flex-1 max-w-lg mx-4 flex flex-col justify-center">
            <div className="flex justify-between text-[10px] font-black text-slate-500 px-1 uppercase tracking-wider mb-1">
                <span className="truncate max-w-[150px]">{lesson.title}</span>
                <span>{currentIndex + 1} / {totalBlocks}</span>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-yellow-400 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
        <div className="w-6"></div>
      </div>

      {/* --- 2. SCROLLABLE MIDDLE AREA --- */}
      {/* flex-1: خود المساحة اللي بقات كاملة */}
      {/* overflow-y-auto: إيلا الكويز طويل، سكرولي هنا لداخل فقط */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-4 relative z-10 custom-scrollbar">
        
        <div className="w-full max-w-3xl my-auto"> {/* my-auto: باش يجي فالوسط عموديا إيلا كان قصير */}
            <div 
                key={currentIndex} 
                className="animate-in fade-in zoom-in-95 duration-300 ease-out flex flex-col items-center text-center"
            >
                {(() => {
                    switch (currentBlock.type) {
                    
                    case 'introduction':
                        return (
                            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-black mb-4">بداية</span>
                                <BlockIntro text={currentBlock.content.text} />
                            </div>
                        );

                    case 'concept':
                        return (
                            <div className="w-full">
                                <BlockConcept 
                                    title_fr={currentBlock.content.title_fr}
                                    explanation={currentBlock.content.explanation}
                                    keywords={currentBlock.content.keywords}
                                />
                            </div>
                        );

                    case 'analogy':
                        return (
                            <div className="relative bg-amber-50 p-6 md:p-8 rounded-3xl border border-amber-100 shadow-sm max-w-2xl mx-auto transition-all hover:shadow-md hover:border-amber-200 overflow-hidden group">
                            
                            {/* --- الزوايا (Corners) --- */}
                            
                            {/* RR Branding - Top Left */}
                            <div className="absolute top-4 left-5 text-amber-900/10 font-black text-xs tracking-tighter select-none">
                                RR
                            </div>

                            {/* Confused Emoji - Top Right */}
                            <div className="absolute top-4 right-4 text-2xl opacity-50 rotate-12 group-hover:rotate-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 cursor-help" title="كيفاش؟">
                                😉
                            </div>

                            {/* --- المحتوى --- */}
                            <div className="flex flex-col items-center text-center mt-2">
                                
                                {/* الأيقونة والعنوان الصغير */}
                                <div className="flex items-center gap-2 mb-3 text-amber-600/80">
                                <Sparkles size={16} className="text-amber-500" />
                                <span className="font-bold text-[10px] uppercase tracking-widest">
                                    تبسيط للفهم
                                </span>
                                <Sparkles size={16} className="text-amber-500" />
                                </div>

                                {/* النص الرئيسي (كيوت وصغير) */}
                                <p className="font-bold text-lg md:text-xl text-slate-800 leading-relaxed px-4">
                                "{currentBlock.content}"
                                </p>
                                
                                {/* زخرفة صغيرة لتحت */}
                                <div className="mt-5 flex justify-center gap-1.5 opacity-40">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                                </div>
                            </div>
                            </div>
                        );

                    case 'exam_trap':
                        return <BlockTrap text={currentBlock.content.text} />;

                    case 'advice':
                        return (
                            <BlockAdvice 
                                text={currentBlock.content.text} 
                                title={currentBlock.content.title} // اختياري
                            />
                        );
                    
                    case 'comparison':
                        return (
                            <BlockComparison 
                            leftTitle={currentBlock.content.leftTitle}
                            rightTitle={currentBlock.content.rightTitle}
                            leftItems={currentBlock.content.leftItems}
                            rightItems={currentBlock.content.rightItems}
                            />
                        );
                        
                    case 'checklist':
                        return (
                            <BlockChecklist 
                            title={currentBlock.content.title}
                            items={currentBlock.content.items}
                            />
                        );

                    case 'image':
                        return (
                            <div className="w-full flex flex-col items-center">
                                {/* نقصت الارتفاع الأقصى للصورة باش ما تعمرش الشاشة */}
                                <div className="max-h-[45vh] overflow-hidden rounded-2xl shadow-md border-4 border-white bg-white">
                                    <img 
                                        src={currentBlock.content.src} 
                                        alt="Illustration" 
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <p className="mt-3 text-slate-500 font-bold text-sm bg-white/60 px-3 py-1 rounded-lg backdrop-blur-sm">
                                    {currentBlock.content.caption}
                                </p>
                            </div>
                        );

                    case 'quiz':
                        return (
                            <div className="w-full max-w-2xl text-right dir-rtl"> 
                                {/* Quiz Block */}
                                <BlockQuiz 
                                    question={currentBlock.content.question}
                                    options={currentBlock.content.options}
                                    correctIndex={currentBlock.content.correctIndex}
                                    explanation={currentBlock.content.explanation}
                                />
                            </div>
                        );

                    default:
                        return <div>Loading...</div>;
                    }
                })()}
            </div>
        </div>
      </div>

      {/* --- 3. FIXED FOOTER (Always Visible) --- */}
      {/* shrink-0: باش ما يتفعصش إيلا الكويز طويل */}
      <div className="h-20 px-4 md:px-6 flex items-center justify-center shrink-0 z-30 bg-white border-t border-slate-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
        <div className="w-full max-w-2xl grid grid-cols-2 gap-4">
            <button 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`
                    py-3 rounded-xl font-bold text-base border-2 border-slate-100 text-slate-500 bg-slate-50 transition-all flex items-center justify-center gap-2
                    ${currentIndex === 0 
                        ? 'opacity-0 pointer-events-none' 
                        : 'hover:bg-slate-100 hover:border-slate-200 active:scale-95'}
                `}
            >
                <ChevronRight size={20} />
                <span>سابق</span>
            </button>

            {currentIndex === totalBlocks - 1 ? (
                 <button 
                    className="py-3 rounded-xl font-black text-base bg-green-500 text-white shadow-lg shadow-green-100 hover:bg-green-600 active:scale-95 transition-all flex items-center justify-center gap-2"
                    onClick={() => alert('🎉 ساليتي الدرس!')}
                >
                    <RotateCcw size={20} /> <span>إنهاء</span>
                </button>
            ) : (
                <button 
                    onClick={handleNext}
                    className="py-3 rounded-xl font-black text-base bg-slate-900 text-white shadow-lg shadow-slate-200 hover:bg-slate-800 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                    <span>التالي</span> <ChevronLeft size={20} />
                </button>
            )}
        </div>
      </div>

    </div>
  );
};

export default LessonViewer;