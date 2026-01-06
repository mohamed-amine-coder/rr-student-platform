import React from 'react';
import { Lightbulb } from 'lucide-react';

const BlockConcept = ({ title_fr, explanation, keywords }) => {
  return (
    <div className="bg-white border-2 border-blue-400 border-b-[6px] rounded-3xl p-6 md:p-8 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <Lightbulb className="text-blue-400" size={24} />
        <h3 className="font-black text-slate-700 text-xl">{title_fr}</h3>
      </div>
      <p className="text-slate-600 font-medium text-lg leading-relaxed mb-6">
        {explanation}
      </p>
      <div className="flex flex-wrap gap-2">
        {keywords.map((word, i) => (
          <span key={i} className="bg-blue-50 text-blue-500 text-xs font-black px-3 py-1.5 rounded-xl uppercase">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};
export default BlockConcept;