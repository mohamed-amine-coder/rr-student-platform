import React from 'react';
import { AlertCircle, Sparkles } from 'lucide-react';
import { PROBLEMS, SOLUTIONS } from './landingData';
import ComparisonItem from '../ui/ComparisonItem';

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-20 px-6 bg-white relative">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">
        
        {/* صندوق المشاكل (The Pain) */}
        <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-white p-2.5 rounded-2xl shadow-sm text-red-500">
              <AlertCircle size={24} />
            </div>
            <h3 className="font-black text-xl text-slate-800 tracking-tight">المعاناة مع الـ Polycope</h3>
          </div>
          
          <ul className="space-y-6">
            {PROBLEMS.map((text, i) => (
              <ComparisonItem key={i} text={text} type="problem" />
            ))}
          </ul>
        </div>

        {/* صندوق الحل (The Dream) */}
        <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900 border-4 border-yellow-400 shadow-2xl shadow-yellow-200 relative overflow-hidden">
          {/* خلفية مزخرفة خفيفة */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -z-0"></div>
          
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="bg-yellow-400 p-2.5 rounded-2xl text-slate-900">
              <Sparkles size={24} fill="currentColor" />
            </div>
            <h3 className="font-black text-xl text-white tracking-tight">الراحة مع RR STUDENT</h3>
          </div>
          
          <ul className="space-y-6 relative z-10">
            {SOLUTIONS.map((text, i) => (
              <ComparisonItem key={i} text={text} type="solution" />
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;