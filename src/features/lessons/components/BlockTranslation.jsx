import React from 'react';
import { Languages, ArrowLeftRight } from 'lucide-react';

const BlockTranslation = ({ title, terms }) => {
  return (
    <div className="bg-white border-2 border-teal-500 border-b-[6px] rounded-3xl overflow-hidden mb-8">
      
      {/* Header */}
      <div className="bg-white p-5 border-b-2 border-slate-50 flex items-center gap-3">
        <div className="bg-teal-50 p-2 rounded-xl text-teal-600">
          <Languages size={20} />
        </div>
        <h3 className="font-black text-slate-700 text-sm uppercase tracking-wider">
          {title || "قاموس المصطلحات"}
        </h3>
      </div>

      {/* List */}
      <div className="divide-y divide-slate-100">
        {terms.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-5 hover:bg-slate-50 transition-colors">
            <span className="font-black text-slate-800 text-lg flex-1" dir="ltr">
              {item.fr}
            </span>
            
            <div className="bg-teal-50 text-teal-400 p-1.5 rounded-lg mx-2">
              <ArrowLeftRight size={14} />
            </div>
            
            <span className="font-bold text-teal-700 text-lg flex-1 text-right" dir="rtl">
              {item.ar}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockTranslation;