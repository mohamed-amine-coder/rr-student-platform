import React from 'react';
import { AlertTriangle } from 'lucide-react';

const BlockTrap = ({ text }) => {
  return (
    <div className="my-6 bg-red-50 border-2 border-dashed border-red-200 p-5 rounded-3xl flex items-start gap-4 animate-in fade-in zoom-in duration-500">
      <div className="bg-red-500 text-white p-2 rounded-xl shrink-0 animate-pulse">
        <AlertTriangle size={20} />
      </div>
      <div>
        <h4 className="font-black text-red-600 text-sm mb-1 uppercase tracking-tighter">رد بالـك فـ الامتحان!</h4>
        <p className="text-red-900/80 font-bold text-sm leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

export default BlockTrap;