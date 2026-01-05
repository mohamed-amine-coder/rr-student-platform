import React, { useState } from 'react';
import { Check, ListTodo, PartyPopper } from 'lucide-react';

const BlockChecklist = ({ title, items }) => {
  // state باش نعرفو شكون مكوشي
  const [checkedState, setCheckedState] = useState(
    new Array(items.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  // حساب النسبة المئوية
  const totalChecked = checkedState.filter(Boolean).length;
  const progress = Math.round((totalChecked / items.length) * 100);
  const isComplete = progress === 100;

  return (
    <div className="my-10 max-w-2xl mx-auto">
      <div className={`
        relative overflow-hidden rounded-[2rem] border-2 transition-all duration-500
        ${isComplete ? 'bg-green-50 border-green-200' : 'bg-white border-slate-100'}
      `}>
        
        {/* Header Section */}
        <div className="p-6 md:p-8 pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${isComplete ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                {isComplete ? <PartyPopper size={24} /> : <ListTodo size={24} />}
              </div>
              <h3 className="font-black text-slate-800 text-lg">
                {title || "واش شديتي معايا؟"}
              </h3>
            </div>
            <span className="font-bold text-sm text-slate-400">{progress}%</span>
          </div>

          {/* Progress Bar */}
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* List Items */}
        <div className="p-6 md:p-8 pt-0 space-y-3">
          {items.map((item, index) => (
            <div 
              key={index}
              onClick={() => handleOnChange(index)}
              className={`
                group flex items-center gap-4 p-4 rounded-2xl cursor-pointer border transition-all select-none
                ${checkedState[index] 
                  ? 'bg-green-500 border-green-500 text-white shadow-md shadow-green-200' 
                  : 'bg-slate-50 border-transparent text-slate-600 hover:bg-white hover:border-slate-200 hover:shadow-sm'}
              `}
            >
              {/* Checkbox Circle */}
              <div className={`
                w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all
                ${checkedState[index] ? 'border-white bg-white/20' : 'border-slate-300 group-hover:border-slate-400'}
              `}>
                {checkedState[index] && <Check size={14} strokeWidth={4} className="text-white" />}
              </div>

              {/* Text */}
              <span className={`font-bold text-sm md:text-base ${checkedState[index] ? 'line-through opacity-90' : ''}`}>
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Celebration Message (Hidden until 100%) */}
        {isComplete && (
          <div className="bg-green-100 p-3 text-center text-green-700 font-bold text-sm animate-in slide-in-from-bottom-2">
            🎉 برافو! راك ناضي، دوز للدرس الجاي وأنت مرتاح.
          </div>
        )}

      </div>
    </div>
  );
};

export default BlockChecklist;