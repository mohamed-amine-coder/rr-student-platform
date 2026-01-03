import React from 'react';
import { Sparkles } from 'lucide-react';

// هاد المكون كياخد النص عبر الـ Props وكيلبسو الحوايج (Tailwind)
const BlockIntro = ({ text }) => {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-white p-6 rounded-3xl border-r-4 border-yellow-400 my-6 shadow-sm">
      <div className="flex items-center gap-2 mb-3 text-yellow-700">
        <Sparkles size={20} fill="currentColor" />
        <span className="font-black text-xs uppercase tracking-widest">Introduction Général</span>
      </div>
      <p className="text-slate-700 leading-relaxed font-bold text-lg">
        {text}
      </p>
    </div>
  );
};

export default BlockIntro;