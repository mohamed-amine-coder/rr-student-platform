import React from 'react';
import { Lightbulb } from 'lucide-react';

const BlockConcept = ({ title_fr, explanation, keywords }) => {
  return (
    // التغيير: border-blue-500
    <div className="bg-white border-2 border-blue-500 border-b-[6px] rounded-3xl p-6 md:p-8 mb-6">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        {/* التغيير: text-blue-500 */}
        <Lightbulb className="text-blue-500" size={24} />
        {/* العنوان يبقى بارز (font-black) لأنه عنوان المفهوم */}
        <h3 className="font-black text-slate-700 text-xl md:text-2xl">{title_fr}</h3>
      </div>

      {/* المحتوى: هنا التغيير المهم لتوحيد الهوية */}
      {/* font-bold + text-slate-700 + text-xl */}
      <p className="text-slate-700 font-bold text-lg md:text-xl leading-relaxed mb-6">
        {explanation}
      </p>

      {/* Keywords Badge */}
      <div className="flex flex-wrap gap-2">
        {keywords.map((word, i) => (
          <span key={i} className="bg-blue-50 text-blue-600 text-xs font-black px-3 py-1.5 rounded-xl uppercase tracking-wide">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlockConcept;