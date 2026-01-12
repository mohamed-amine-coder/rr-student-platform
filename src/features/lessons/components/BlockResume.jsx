import React from 'react';
import { Scroll, Bookmark, CheckCircle2 } from 'lucide-react';

const BlockResume = ({ content }) => {
  // تقسيم النص لأسطر
  const points = content.explanation ? content.explanation.split('\n').filter(p => p.trim() !== "") : [];

  return (
    // ✅ التغيير المهم هنا: dir="ltr" و text-left و font-sans
    <div className="my-8 relative font-sans text-left" dir="ltr">
      
      {/* البادج الفوقاني */}
      <div className="absolute -top-3 right-6 z-10">
        <span className="bg-yellow-400 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full shadow-sm flex items-center gap-1 uppercase tracking-wider">
          <Scroll size={12} /> À Retenir <span className="font-tajawal">(للحفظ)</span>
        </span>
      </div>

      <div className="bg-[#FFFBEB] border-2 border-yellow-200 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-[0_4px_20px_-10px_rgba(251,191,36,0.3)]">
        
        {/* خلفية جمالية */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-10 -mt-10"></div>

        <div className="relative z-10">
          {/* العنوان */}
          <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2 border-b border-yellow-200/50 pb-4">
            <Bookmark className="text-yellow-600 fill-yellow-600" size={24} />
            {content.title_fr || "Résumé Scientifique"}
          </h3>

          {/* النقاط */}
          <div className="space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                 {/* الأيقونة */}
                 <div className="mt-1 shrink-0 text-yellow-600">
                    <CheckCircle2 size={18} />
                 </div>
                 {/* النص */}
                 <p className="text-slate-700 font-bold text-lg leading-relaxed">
                   {point.replace(/^\d+\.\s*/, '')}
                 </p>
              </div>
            ))}
          </div>

          {/* الكلمات المفتاحية */}
          {content.keywords && (
            <div className="mt-6 pt-4 border-t border-yellow-200/50 flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-black text-yellow-700 opacity-70 uppercase tracking-widest">Mots-clés :</span>
              {content.keywords.map((kw, i) => (
                <span key={i} className="bg-white text-slate-800 px-2 py-1 rounded-md text-xs font-bold border border-yellow-100 shadow-sm">
                  {kw}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlockResume;