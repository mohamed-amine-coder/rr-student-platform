import React from 'react';

const BlockComparison = ({ leftTitle, rightTitle, leftItems, rightItems }) => {
  return (
    <div className="relative bg-white border-2 border-slate-300 border-b-[6px] rounded-3xl overflow-hidden mb-8">
      
      {/* VS Badge */}
      <div className="absolute top-[3.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="bg-slate-900 text-white text-[10px] font-black w-10 h-10 flex items-center justify-center rounded-full border-4 border-white shadow-sm">
          VS
        </div>
      </div>

      {/* Headers */}
      <div className="grid grid-cols-2 border-b-2 border-slate-100">
        <div className="bg-rose-50 p-5 text-center pt-6">
          <h3 className="font-black text-rose-500 text-sm md:text-base uppercase tracking-wider">{leftTitle}</h3>
        </div>
        <div className="bg-sky-50 p-5 text-center pt-6">
          <h3 className="font-black text-sky-500 text-sm md:text-base uppercase tracking-wider">{rightTitle}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-2 divide-x divide-x-reverse divide-slate-100">
        {/* Left */}
        <div className="p-4 md:p-6 space-y-4">
          {leftItems.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-300"></span>
              <p className="text-sm md:text-base text-slate-600 font-bold leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        {/* Right */}
        <div className="p-4 md:p-6 space-y-4">
          {rightItems.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-sky-300"></span>
              <p className="text-sm md:text-base text-slate-600 font-bold leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockComparison;