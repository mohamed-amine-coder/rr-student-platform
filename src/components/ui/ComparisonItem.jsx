import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const ComparisonItem = ({ text, type }) => {
  const isProblem = type === 'problem';
  
  return (
    <li className={`flex items-center gap-3 text-sm font-medium ${isProblem ? 'text-slate-400' : 'text-slate-100'}`}>
      {isProblem ? (
        <XCircle size={18} className="shrink-0 text-slate-300" />
      ) : (
        <CheckCircle2 size={18} className="text-yellow-400 shrink-0" />
      )}
      <span className={isProblem ? "line-through decoration-slate-200" : ""}>{text}</span>
    </li>
  );
};

export default ComparisonItem;