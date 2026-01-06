import React from 'react';
import { Sparkles } from 'lucide-react';

const BlockAnalogy = ({ content }) => {
  return (
    <div className="bg-white border-2 border-amber-400 border-b-[6px] rounded-3xl p-6 md:p-8 mb-8 relative group">
      
      {/* RR Branding */}
      <div className="absolute top-4 left-5 text-blue-600 font-black text-xs tracking-tighter select-none">RR</div>
      
      <div className="flex flex-col items-center text-center">
        {/* Icon Header */}
        <div className="flex items-center gap-2 mb-4 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100">
          <Sparkles size={14} className="text-amber-500" />
          <span className="font-black text-[10px] text-amber-600 uppercase tracking-widest">
            تبسيط للفهم
          </span>
        </div>

        {/* Content */}
        <p className="font-black text-xl text-slate-800 leading-relaxed px-2">
          "{content}"
        </p>
        
        {/* Emoji Reaction */}
        <div className="mt-4 text-3xl hover:scale-125 transition-transform cursor-pointer grayscale hover:grayscale-0" title="فهمتي؟">
          😉
        </div>
      </div>
    </div>
  );
};

export default BlockAnalogy;