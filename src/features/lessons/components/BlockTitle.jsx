import React from 'react';

const BlockTitle = ({ block }) => {
  // كنجبدو المعلومات من الـ props
  const { number, title_fr, title_ar } = block.content;

  return (
    <div className="bg-white border-2 border-yellow-400 border-b-[6px] rounded-3xl p-5 md:p-6 mb-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 transform hover:-translate-y-1 transition-transform duration-300">
      
      {/* 1. خانة الرقم (Badge) */}
      <div className="shrink-0 bg-yellow-400 text-slate-900 font-black text-xl md:text-2xl px-5 py-3 rounded-2xl shadow-sm border-2 border-yellow-300 min-w-[80px] text-center">
        {number}
      </div>

      {/* 2. خانة العناوين */}
      <div className="flex-1 w-full">
        {/* العنوان الفرنسي (الرسمي) */}
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-1" dir="ltr">
          {title_fr}
        </h2>
        
        {/* العنوان العربي (الشرح) */}
        <h3 className="text-lg md:text-xl font-bold text-slate-500 font-tajawal" dir="rtl">
          {title_ar}
        </h3>
      </div>

    </div>
  );
};

export default BlockTitle;