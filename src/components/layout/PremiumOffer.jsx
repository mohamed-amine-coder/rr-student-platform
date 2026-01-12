import React from 'react';
import { ShieldCheck, Zap, MessageCircleQuestion } from 'lucide-react';

const PremiumOffer = () => {
  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* الكادر الرئيسي: تصميم نظيف ومحدد */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden relative">
          
          {/* شريط علوي ذهبي رقيق */}
          <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></div>

          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-100">
            
            {/* الجزء 1: الجودة (يسار فالـ PC) */}
            <div className="p-6 md:p-8 flex gap-4 hover:bg-slate-50/50 transition-colors">
              <div className="bg-yellow-50 p-2.5 rounded-lg h-fit shrink-0 border border-yellow-100">
                <Zap size={22} className="text-yellow-600 fill-yellow-600" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-800 mb-2">
                  كنفضلو 200 طالب كيقرا على 3000 فقط مسجل
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                  رفضنا الكمية باش نحافظو على الجودة. نتا هنا فـ <span className="text-yellow-700 font-bold bg-yellow-100 px-1.5 rounded text-[10px] uppercase tracking-wider border border-yellow-200">Zone VIP</span>. السيرفر ديالنا سريع والتركيز عليك نتا بوحدك.
                </p>
              </div>
            </div>

            {/* الجزء 2: التعديل (يمين فالـ PC) */}
            <div className="p-6 md:p-8 flex gap-4 hover:bg-slate-50/50 transition-colors">
              <div className="bg-blue-50 p-2.5 rounded-lg h-fit shrink-0 border border-blue-100">
                <MessageCircleQuestion size={22} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-800 mb-2">
                  خاصاك شي فقرة؟ نزيدوها ليك
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                  المنصة كتفصل على مقاسك. إيلا مالقيتيش شي شرح أو جاك صعيب، صيفط لينا وحنا <span className="text-blue-700 font-bold bg-blue-50 px-1 rounded text-[11px]">كنعدلوه فمدة وجيزة</span>. هدفنا هو تفهم 100%.
                </p>
              </div>
            </div>

          </div>

          {/* شريط الضمان السفلي (صغير وأنيق) */}
          <div className="bg-slate-50 border-t border-slate-100 py-3 px-6 flex items-center justify-center gap-2 text-center">
            <ShieldCheck size={16} className="text-green-500" />
            <p className="text-xs font-bold text-slate-500">
              ضمان الجودة: وفرنا ليك كلشي، غير قرا   .
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PremiumOffer;