import React from 'react';
import { HeartHandshake } from 'lucide-react';

const BlockAdvice = ({ text, title }) => {
  return (
    <div className="bg-white border-2 border-purple-400 border-b-[6px] rounded-3xl p-6 md:p-8 mb-8 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <HeartHandshake size={64} className="text-purple-500" />
      </div>

      <div className="flex items-center gap-3 mb-4 relative z-10">
        <div className="bg-purple-100 p-2 rounded-xl text-purple-600">
          <HeartHandshake size={24} />
        </div>
        <h3 className="font-black text-purple-600 text-sm uppercase tracking-widest">
          {title || "نصيحة أخوية"}
        </h3>
      </div>

      <p className="text-slate-700 font-bold text-lg leading-relaxed relative z-10">
        {text}
      </p>
    </div>
  );
};

export default BlockAdvice;