import React from 'react';

const BlockComparison = ({ leftTitle, rightTitle, leftItems, rightItems }) => {
  return (
    <div className="my-10 relative">
      
      {/* Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Headers Section */}
        <div className="grid grid-cols-2 divide-x divide-x-reverse divide-slate-100">
          <div className="bg-rose-50 p-4 text-center">
            <h3 className="font-black text-rose-600 text-sm md:text-base uppercase tracking-wider">{leftTitle}</h3>
          </div>
          <div className="bg-sky-50 p-4 text-center">
            <h3 className="font-black text-sky-600 text-sm md:text-base uppercase tracking-wider">{rightTitle}</h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-2 divide-x divide-x-reverse divide-slate-100">
          
          {/* Left Column */}
          <div className="p-4 md:p-6 space-y-4">
            {leftItems.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-rose-400"></span>
                <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="p-4 md:p-6 space-y-4">
            {rightItems.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-sky-400"></span>
                <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* VS Badge (Badge الوسطاني) */}
      <div className="absolute top-[48px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1.5 rounded-full shadow-sm border border-slate-100">
        <div className="bg-slate-900 text-white text-[10px] font-black w-8 h-8 flex items-center justify-center rounded-full">
          VS
        </div>
      </div>

    </div>
  );
};

export default BlockComparison;