import React from 'react';
import { AlertTriangle } from 'lucide-react';

const BlockTrap = ({ text }) => {
  return (
    <div className="bg-white border-2 border-rose-400 border-b-[6px] rounded-3xl p-6 md:p-8 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <AlertTriangle className="text-rose-500" size={24} />
        <h3 className="font-black text-rose-500 text-sm uppercase tracking-widest"> ركز معايا!</h3>
      </div>
      <p className="text-slate-700 font-bold text-lg leading-relaxed">
        {text}
      </p>
    </div>
  );
};
export default BlockTrap;