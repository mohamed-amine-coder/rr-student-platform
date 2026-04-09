import React from 'react';
import { Sparkles } from 'lucide-react';

const BlockAnalogy = ({ content }) => {
  return (
    <div className="bg-white border-2 border-green-500 border-b-[6px] rounded-3xl p-6 md:p-8 mb-8 relative group">
      
      {/* RR Branding */}
      <div className="absolute top-4 left-5 text-green-600 font-black text-xs tracking-tighter select-none">RR</div>
      
      <div className="flex flex-col items-center text-center">
        {/* Icon Header */}
        <div className="flex items-center gap-2 mb-4 bg-green-50 px-4 py-1.5 rounded-full border border-green-100">
          <Sparkles size={14} className="text-green-500" />
          <span className="font-black text-[10px] text-green-600 uppercase tracking-widest">
            مثال باش تبان الفكرة
          </span>
        </div>

        {/* Content - دابا ولا بنفس الخط ديال المقدمة تماماً */}
        <p className="font-bold text-lg md:text-xl text-slate-700 leading-relaxed px-2">
          {content}
        </p>
        
      </div>
    </div>
  );
};

export default BlockAnalogy;