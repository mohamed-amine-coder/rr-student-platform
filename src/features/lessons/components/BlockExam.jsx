import React, { useState } from 'react';
import { Trophy, CheckCircle2, XCircle, Skull, ArrowRight, RotateCcw, AlertTriangle } from 'lucide-react';

const BlockExam = ({ block }) => {
  const { title, questions } = block.content;
  
  // States
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({}); 
  const [mode, setMode] = useState('normal'); 
  const [isAnimating, setIsAnimating] = useState(false);

  // حساب النقطة
  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      const userAns = answers[idx];
      if (userAns === q.correctIndex) score += 1;
      else if (userAns !== undefined && mode === 'canadien') score -= 0.5;
    });
    return Math.max(0, score);
  };

  const handleSelect = (optionIndex) => {
    if (finished) return;
    setAnswers({ ...answers, [currentQ]: optionIndex });
  };

  // انتقال سلس بين الأسئلة
  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        setFinished(true);
      }
      setIsAnimating(false);
    }, 300); // 300ms matches CSS duration
  };

  const resetExam = () => {
    setFinished(false);
    setStarted(false);
    setCurrentQ(0);
    setAnswers({});
  };

  // --- 1. شاشة البداية (Start Screen) ---
  if (!started) {
    return (
      <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 my-8 text-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden group">
        {/* خلفية جمالية */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-slate-900"></div>
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-100/50 rounded-full blur-3xl pointer-events-none group-hover:bg-yellow-100/80 transition-all duration-700"></div>

        <div className="relative z-10">
            <div className="bg-gradient-to-br from-yellow-50 to-white w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-yellow-100 rotate-3 group-hover:rotate-6 transition-transform duration-500">
                <Trophy size={40} className="text-yellow-500 drop-shadow-sm" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">{title}</h2>
            <p className="text-slate-500 mb-10 font-medium leading-relaxed max-w-lg mx-auto text-lg">
                هاد الامتحان فيه <span className="text-slate-900 font-bold border-b-2 border-yellow-300">{questions.length} أسئلة</span>.
                <br />اختار النظام اللي بغيتي ودوز التيست.
            </p>

            {/* اختيار النظام (Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-xl mx-auto mb-10">
                {/* Normal Mode */}
                <button 
                    onClick={() => setMode('normal')}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-right cursor-pointer group/card ${
                        mode === 'normal' 
                        ? 'border-yellow-400 bg-yellow-50/80 shadow-lg scale-[1.02] ring-2 ring-yellow-400/20' 
                        : 'border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50 hover:-translate-y-1'
                    }`}
                >
                    <div className="flex justify-between items-start mb-3">
                        <span className="text-3xl filter grayscale group-hover/card:grayscale-0 transition-all">🙂</span>
                        {mode === 'normal' && <CheckCircle2 size={24} className="text-yellow-500 animate-in zoom-in spin-in-90 duration-300" />}
                    </div>
                    <h3 className="font-black text-slate-900 text-xl mb-1">عادي (Normal)</h3>
                    <p className="text-sm text-slate-500 font-medium">الجواب الغلط = <span className="font-bold">0 نقطة</span></p>
                </button>

                {/* Canadien Mode */}
                <button 
                    onClick={() => setMode('canadien')}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-right cursor-pointer group/card ${
                        mode === 'canadien' 
                        ? 'border-red-400 bg-red-50/80 shadow-lg scale-[1.02] ring-2 ring-red-400/20' 
                        : 'border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50 hover:-translate-y-1'
                    }`}
                >
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-3xl filter grayscale group-hover/card:grayscale-0 transition-all">💀</span>
                        {mode === 'canadien' && <CheckCircle2 size={24} className="text-red-500 animate-in zoom-in spin-in-90 duration-300" />}
                    </div>
                    <h3 className="font-black text-slate-900 text-xl mb-1">كندي (Canadien)</h3>
                    <p className="text-sm text-slate-500 font-medium">الجواب الغلط = <span className="font-bold text-red-500">-0.5 نقطة</span></p>
                </button>
            </div>

            <button 
                onClick={() => setStarted(true)} 
                className="w-full max-w-md bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-3 cursor-pointer mx-auto"
            >
                بدا الامتحان <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    );
  }

  // --- 3. شاشة النتيجة (Results Screen) ---
  if (finished) {
    const score = calculateScore();
    const maxScore = questions.length;
    const percentage = (score / maxScore) * 100;
    let feedbackColor = percentage >= 50 ? 'text-green-600' : 'text-red-500';

    return (
      <div className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 my-8 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Header النتيجة */}
        <div className="text-center mb-10 relative">
            <div className={`inline-flex flex-col items-center justify-center w-40 h-40 rounded-full border-[6px] ${percentage >= 50 ? 'border-green-100 bg-green-50' : 'border-red-100 bg-red-50'} mb-6 shadow-inner animate-in zoom-in duration-500`}>
                <span className="text-5xl font-black text-slate-900 tracking-tighter">{score}</span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">على {maxScore}</span>
            </div>
            
            <h3 className={`text-3xl font-black ${feedbackColor} mb-2`}>
                {percentage === 100 ? "ناضي كنادي! الأسطورة 👑" : percentage >= 50 ? "مزيان، راك غادي فالطريق 👍" : "كارثة! خاصك تعاود تراجع 🤕"}
            </h3>
            <p className="text-slate-500 font-medium">شوف التصحيح لتحت باش تعرف أغلاطك</p>
        </div>

        {/* لائحة التصحيح */}
        <div className="space-y-4 mb-8">
            {questions.map((q, qIdx) => {
                const isCorrect = answers[qIdx] === q.correctIndex;
                const userSkipped = answers[qIdx] === undefined;
                
                return (
                    <div key={qIdx} className={`p-5 rounded-2xl border-2 transition-all ${isCorrect ? 'bg-green-50/30 border-green-100' : 'bg-red-50/30 border-red-100'}`}>
                        <div className="flex gap-4 mb-3">
                            <div className={`mt-0.5 shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2 ${isCorrect ? 'bg-green-100 border-green-200 text-green-600' : 'bg-red-100 border-red-200 text-red-500'}`}>
                                {isCorrect ? <CheckCircle2 size={16}/> : <XCircle size={16}/>}
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-slate-800 text-base leading-relaxed mb-3">
                                    {q.text}
                                </p>
                                {!isCorrect && (
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm bg-white/60 p-3 rounded-lg border border-slate-100">
                                        <p className="text-slate-500">
                                            جوابك: <span className="font-bold text-red-500 line-through decoration-2 decoration-red-200">{userSkipped ? 'ماجاوبتيش' : q.options[answers[qIdx]]}</span>
                                        </p>
                                        <ArrowRight size={14} className="hidden md:block text-slate-300"/>
                                        <p className="text-slate-500">
                                            الصحيح: <span className="font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded">{q.options[q.correctIndex]}</span>
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        <button 
            onClick={resetExam} 
            className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
            <RotateCcw size={18} /> عاود الامتحان
        </button>
      </div>
    );
  }

  // --- 2. شاشة السؤال (Quiz Interface) ---
  const q = questions[currentQ];
  const progress = ((currentQ) / questions.length) * 100;

  return (
    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-10 my-8 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.08)] relative overflow-hidden">
      
      {/* Header المعلومات */}
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div className="flex items-center gap-3">
            <div className="text-xs font-black text-slate-500 bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
                السؤال {currentQ + 1} <span className="text-slate-300 mx-1">/</span> {questions.length}
            </div>
            {mode === 'canadien' && (
                <div className="flex items-center gap-1.5 bg-red-50 text-red-600 px-3 py-1.5 rounded-full border border-red-100 animate-pulse">
                    <Skull size={14}/>
                    <span className="text-[10px] font-bold uppercase tracking-wide">Canadien</span>
                </div>
            )}
        </div>
        
        {/* Progress Bar */}
        <div className="w-24 md:w-48 h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-50">
            <div 
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-700 ease-out rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)]" 
                style={{ width: `${Math.max(5, progress)}%` }} // Minimum width for visibility
            ></div>
        </div>
      </div>

      {/* منطقة السؤال مع Animation محسنة */}
      <div 
        key={currentQ} 
        className={`transition-all duration-300 ease-out transform ${
            isAnimating 
            ? 'opacity-0 -translate-x-4 blur-sm' 
            : 'opacity-100 translate-x-0 blur-0'
        }`}
      >
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-8 leading-relaxed">
            {q.text}
          </h3>

          <div className="space-y-3 mb-10">
            {q.options.map((opt, idx) => {
                const isSelected = answers[currentQ] === idx;
                return (
                    <button
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        className={`w-full text-right p-5 rounded-2xl border-2 font-medium transition-all duration-200 group flex items-center gap-4 cursor-pointer relative overflow-hidden ${
                            isSelected 
                            ? 'border-yellow-400 bg-yellow-50 text-slate-900 shadow-md scale-[1.01]' 
                            : 'border-slate-100 bg-white text-slate-600 hover:border-yellow-300 hover:bg-yellow-50/50 hover:pl-6'
                        }`}
                    >
                        {/* Radio Circle */}
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors duration-300 ${
                            isSelected ? 'border-yellow-500 bg-yellow-500' : 'border-slate-300 group-hover:border-yellow-400'
                        }`}>
                            <div className={`w-2.5 h-2.5 bg-white rounded-full transition-transform duration-200 ${isSelected ? 'scale-100' : 'scale-0'}`}></div>
                        </div>
                        
                        <span className={`text-base md:text-lg relative z-10 ${isSelected ? 'font-bold' : ''}`}>
                            {opt}
                        </span>
                        
                        {/* Background Decor on Hover */}
                        <div className={`absolute right-0 top-0 bottom-0 w-1 bg-yellow-400 transition-all duration-300 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                    </button>
                )
            })}
          </div>
      </div>

      {/* Footer الأزرار */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-50 relative z-10">
         <button 
            onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
            disabled={currentQ === 0}
            className="text-slate-400 font-bold text-sm disabled:opacity-0 hover:text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-all cursor-pointer"
         >
            رجوع
         </button>

         <button 
            onClick={handleNext}
            disabled={answers[currentQ] === undefined}
            className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-slate-900/10 disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed hover:-translate-y-1 hover:shadow-slate-900/20 active:scale-95 transition-all flex items-center gap-3 group cursor-pointer"
         >
            <span className="group-hover:mr-1 transition-all">
                {currentQ === questions.length - 1 ? 'إنهاء الامتحان' : 'السؤال التالي'}
            </span>
            <ArrowRight size={20} className="group-disabled:opacity-50" />
         </button>
      </div>

    </div>
  );
};

export default BlockExam;