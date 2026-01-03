import React from 'react';
import { Lightbulb } from 'lucide-react';

const BlockConcept = ({ title_fr, explanation, keywords }) => {
  return (
    <div className="my-8 bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
          <Lightbulb size={20} fill="currentColor" />
        </div>
        <h3 className="font-black text-xl text-slate-800 tracking-tight">{title_fr}</h3>
      </div>
      
      <p className="text-slate-600 leading-relaxed mb-4 font-medium">
        {explanation}
      </p>

      {/* الكلمات المفتاحية (Keywords) */}
      <div className="flex flex-wrap gap-2">
        {keywords.map((word, i) => (
          <span key={i} className="bg-slate-50 text-slate-400 text-[10px] font-black px-3 py-1 rounded-full uppercase">
            #{word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlockConcept;