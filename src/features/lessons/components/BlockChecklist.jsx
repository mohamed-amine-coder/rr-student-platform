import React, { useState } from 'react';
import { Check, ListTodo, PartyPopper } from 'lucide-react';

const BlockChecklist = ({ title, items }) => {
  const [checkedState, setCheckedState] = useState(new Array(items.length).fill(false));

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const totalChecked = checkedState.filter(Boolean).length;
  const progress = Math.round((totalChecked / items.length) * 100);
  const isComplete = progress === 100;

  return (
    <div className="bg-white border-2 border-green-500 border-b-[6px] rounded-3xl p-6 md:p-8 mb-8 transition-all">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl ${isComplete ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
            {isComplete ? <PartyPopper size={24} /> : <ListTodo size={24} />}
          </div>
          <h3 className="font-black text-slate-700 text-lg">
            {title || "Checklist"}
          </h3>
        </div>
        <span className="font-black text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
          {progress}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden mb-6">
        <div 
          className="h-full bg-green-500 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Items */}
      <div className="space-y-3">
        {items.map((item, index) => (
          <div 
            key={index}
            onClick={() => handleOnChange(index)}
            className={`
              group flex items-center gap-4 p-4 rounded-2xl cursor-pointer border-2 transition-all select-none
              ${checkedState[index] 
                ? 'bg-green-50 border-green-500 text-green-800 border-b-4 translate-y-[1px]' 
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 border-b-4 hover:-translate-y-[2px]'}
            `}
          >
            <div className={`
              w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all
              ${checkedState[index] ? 'border-green-600 bg-green-500' : 'border-slate-300 group-hover:border-slate-400'}
            `}>
              {checkedState[index] && <Check size={14} strokeWidth={4} className="text-white" />}
            </div>
            <span className={`font-bold text-sm md:text-base ${checkedState[index] ? 'line-through opacity-60' : ''}`}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockChecklist;