import React from 'react';
import { HeartHandshake } from 'lucide-react'; // أيقونة معبرة

const BlockAdvice = ({ text, title }) => {
  return (
    <div className="my-8 relative group">
      {/* الخلفية والحدود */}
      <div className="bg-purple-50 border-2 border-purple-100 rounded-3xl p-6 md:p-8 shadow-sm transition-all hover:shadow-md hover:border-purple-200">
        
        {/* الهيدر: الأيقونة والعنوان */}
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white p-2 rounded-xl shadow-sm border border-purple-50 text-purple-500">
            <HeartHandshake size={24} />
          </div>
          <h3 className="font-black text-purple-900 text-sm uppercase tracking-wider">
            {title || "نصيحة من القلب"} {/* عنوان افتراضي إيلا ما عطيتيهش */}
          </h3>
        </div>

        {/* محتوى النصيحة */}
        <p className="text-purple-950 font-medium text-lg leading-relaxed opacity-90">
          {text}
        </p>
      </div>

      {/* ديكور بسيط فالجناب (اختياري) */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-200 rounded-full opacity-50"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-100 rounded-full opacity-50"></div>
    </div>
  );
};

export default BlockAdvice;