import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle } from 'lucide-react';

const BlockQuiz = ({ question, options, correctIndex, explanation }) => {
  const [selected, setSelected] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (index) => {
    if (!isSubmitted) setSelected(index);
  };

  const handleSubmit = () => {
    if (selected !== null) setIsSubmitted(true);
  };

  const isCorrect = selected === correctIndex;

  return (
    <div className="my-8 bg-slate-900 text-white p-6 rounded-[2rem] shadow-xl border-4 border-slate-800">
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="text-yellow-400" />
        <h3 className="font-bold text-lg">{question}</h3>
      </div>

      <div className="space-y-3">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`p-4 rounded-xl cursor-pointer font-medium transition-all border-2 ${
              selected === index
                ? 'bg-yellow-400 text-slate-900 border-yellow-400'
                : 'bg-slate-800 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {option}
          </div>
        ))}
      </div>

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className={`mt-6 w-full py-3 rounded-xl font-black transition-all ${
            selected === null 
              ? 'bg-slate-700 text-slate-500 cursor-not-allowed' 
              : 'bg-green-500 hover:bg-green-400 text-white shadow-lg shadow-green-900/20'
          }`}
        >
          تحقق من الجواب
        </button>
      ) : (
        <div className={`mt-6 p-4 rounded-xl flex items-start gap-3 ${isCorrect ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
          {isCorrect ? <CheckCircle2 className="shrink-0" /> : <XCircle className="shrink-0" />}
          <div>
            <p className="font-bold mb-1">{isCorrect ? "صحيح! تبارك الله عليك" : "خطأ، حاول مرة أخرى"}</p>
            <p className="text-sm text-slate-300">{explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockQuiz;