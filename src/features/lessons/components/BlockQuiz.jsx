import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

const BlockQuiz = ({ question, options, correctIndex, explanation }) => {
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, correct, wrong

  const handleCheck = () => {
    if (selected === null) return;
    setStatus(selected === correctIndex ? 'correct' : 'wrong');
  };

  return (
    <div className="bg-white border-2 border-slate-200 border-b-[6px] rounded-3xl p-6 md:p-8 mb-6">
      <h3 className="font-black text-slate-700 text-xl mb-6 leading-tight">
        {question}
      </h3>
      
      <div className="space-y-3">
        {options.map((option, index) => {
          let style = "border-slate-200 hover:bg-slate-50";
          if (selected === index) style = "border-blue-400 bg-blue-50 text-blue-600 border-b-4";
          if (status !== 'idle' && index === correctIndex) style = "border-green-500 bg-green-100 text-green-700";
          if (status === 'wrong' && selected === index) style = "border-red-500 bg-red-100 text-red-700";

          return (
            <div
              key={index}
              onClick={() => status === 'idle' && setSelected(index)}
              className={`p-4 rounded-2xl border-2 font-bold text-lg cursor-pointer transition-all ${style}`}
            >
              {option}
            </div>
          );
        })}
      </div>

      {status === 'idle' && (
        <button 
          onClick={handleCheck}
          className="w-full mt-6 py-3 bg-slate-900 text-white rounded-xl font-black border-b-4 border-slate-700 active:border-b-0 active:translate-y-[4px] transition-all"
        >
          تحقق
        </button>
      )}

      {status !== 'idle' && (
        <div className={`mt-6 p-4 rounded-2xl font-bold ${status === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {status === 'correct' ? "✅ برافو عليك!" : "❌ ماشي مشكل، حاول تفهم:"}
          <p className="text-sm font-medium mt-1 opacity-90">{explanation}</p>
        </div>
      )}
    </div>
  );
};
export default BlockQuiz;