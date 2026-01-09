import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle } from 'lucide-react';

const BlockQuiz = ({ question, options, correctIndex, explanation }) => {
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, correct, wrong

  const handleOptionClick = (index) => {
    if (status !== 'idle') return;

    setSelected(index);
    setStatus(index === correctIndex ? 'correct' : 'wrong');
  };

  // دالة كتحدد شكون اللي غايبقى يبان وشكون غايختفي
  const shouldShowOption = (index) => {
    if (status === 'idle') return true; // فالأول كلشي باين
    if (status === 'correct') return index === correctIndex; // إلا صحيح، خلي غير الصحيح
    if (status === 'wrong') return index === selected || index === correctIndex; // إلا غلط، خلي الغلط والصحيح
    return false;
  };

  return (
    <div className="bg-white border-2 border-indigo-100 border-b-[6px] rounded-3xl p-6 md:p-8 mb-6 relative overflow-hidden transition-all duration-500 ease-in-out">
      
      {/* ديكور الخلفية */}
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <HelpCircle size={100} />
      </div>

      <h3 className="font-black text-slate-700 text-xl mb-8 leading-tight relative z-10">
        {question}
      </h3>
      
      <div className="space-y-3 relative z-10 min-h-[100px]">
        {options.map((option, index) => {
          // 1. واش هاد الاختيار خاصو يبان؟
          if (!shouldShowOption(index)) return null;

          // 2. تحديد الستايل حسب الحالة
          let style = "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer";
          let icon = null;

          if (status !== 'idle') {
             // تجميد الحركة (Cursor default)
             style = "cursor-default";
             
             if (index === correctIndex) {
               style = "border-green-500 bg-green-50 text-green-700 font-black ring-1 ring-green-200";
               icon = <CheckCircle className="text-green-600" size={20} />;
             } else if (status === 'wrong' && index === selected) {
               style = "border-red-400 bg-red-50 text-red-600 font-medium opacity-80";
               icon = <XCircle className="text-red-500" size={20} />;
             }
          }

          return (
            <div
              key={index}
              onClick={() => handleOptionClick(index)}
              // تأثير Animation خفيف فاش كيطلعو لفوق (animate-in)
              className={`p-4 rounded-2xl border-2 font-bold text-lg flex justify-between items-center shadow-sm transition-all duration-300 animate-in fade-in slide-in-from-bottom-1 ${style}`}
            >
              <span>{option}</span>
              {icon}
            </div>
          );
        })}
      </div>

      {/* منطقة الشرح - كتظهر فمكان الاختيارات المختفية */}
      {status !== 'idle' && (
        <div className={`mt-6 p-6 rounded-2xl border-2 animate-in zoom-in-95 duration-300 ${status === 'correct' ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{status === 'correct' ? "🎉" : "💡"}</span>
            <div>
              <h4 className={`font-black text-lg ${status === 'correct' ? 'text-green-700' : 'text-red-700'}`}>
                {status === 'correct' ? "إجابة صحيحة!" : "تصحيح المعلومة:"}
              </h4>
            </div>
          </div>
          
          <p className="text-slate-700 font-bold text-base leading-relaxed opacity-90">
            {explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default BlockQuiz;