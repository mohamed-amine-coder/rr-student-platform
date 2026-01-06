import React from 'react';
import { Sparkles } from 'lucide-react';

const BlockIntro = ({ text }) => {
  return (
    <div className="bg-white border-2 border-yellow-400 border-b-[6px] rounded-3xl p-6 md:p-8 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <Sparkles className="text-yellow-400" size={24} />
        <h3 className="font-black text-slate-400 text-sm uppercase tracking-widest">مقدمة</h3>
      </div>
      <p className="text-slate-700 font-bold text-lg md:text-xl leading-relaxed">
        {text}
      </p>
    </div>
  );
};
export default BlockIntro;