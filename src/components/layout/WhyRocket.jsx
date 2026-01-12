import React from 'react';
import { Rocket, FileX2, MonitorPlay, Users, Zap } from 'lucide-react';
import ROCKET_IMG from '/rr-student-sarokh.jpg'; // ⚠️ سمي الصورة ديالك هكا وحطها فـ public

const WhyRocket = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* العنوان الرئيسي: Gen Z Argument */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            حنا جيل <span className="text-yellow-500">Z</span> ... <br/>
             مايمكنش نقراو بطـريقة <span className="relative inline-block">
               1990 
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-500/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
            </span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            الأساتذة ديالنا (الله يجازيهم بخير) قراو فاش كان "الكتاب" هو المصدر الوحيد. <br className="hidden md:block"/>
            ولكن حنا دماغنا مولف على السرعة، الألوان، والتخيل. <br/>
            <span className="font-bold text-slate-900">البيولوجيا ماشي حفاظة ديال النصوص... البيولوجيا "شوف بعينك وفهم".</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* 1. الصورة (الصاروخ) */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-xl group">
            {/* تأثير الخلفية */}
            <div className="absolute inset-0 bg-yellow-400 rounded-[2rem] rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 group-hover:-translate-y-2">
              <img 
                src={ROCKET_IMG} 
                alt="RR Student Rocket vs Old System" 
                className="w-full h-auto object-cover"
              />
              
              {/* Badge عائم */}
              <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur shadow-lg p-1 rounded-xl flex items-center gap-3 border border-slate-100 max-w-[100px]">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Zap size={14} className="text-yellow-600 fill-yellow-600" />
                </div>
                {/* <div>
                  <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">السرعة</p>
                  <p className="text-sm font-black text-slate-800">سالي الموديل فـ 4 سوايع</p>
                </div> */}
              </div>
            </div>
          </div>

          {/* 2. الحجج (Cards) */}
          <div className="flex-1 space-y-6 w-full">
            
            {/* Card 1: Polycopes */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-yellow-200 transition-all group/card">
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-xl group-hover/card:bg-red-100 transition-colors">
                  <FileX2 size={28} className="text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">البوليكوب = مقبرة المعلومات</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    البيولوجيا علم "حي". الوراق الكحلة والبيضاء كتقتل المعلومة. نتا خاصك تشوف الرسومات <span className="font-bold text-slate-900">3D</span> باش تفهم الميكانيزم، ماشي غا تحفظ "Definitions" بالفرنسية وتمشي للامتحان "هادشي ماقيناهش هادشي ماقريناهش".
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Support Centers */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-yellow-200 transition-all group/card">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-xl group-hover/card:bg-blue-100 transition-colors">
                  <Users size={28} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">سوايع الدعم (لغة الأرقام)</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    فمراكز الدعم، نتا غالباً "Client رقم 55". القسم عامر، الصوت بعيد، وإيلا مافهمتيش كتحشم تسول. هنا نتا <span className="font-bold text-slate-900">VIP</span>، الدرس ديالك بوحدك، عاودو 100 مرة حتى تفهم.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Old Youtube */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-yellow-200 transition-all group/card">
              <div className="flex items-start gap-4">
                <div className="bg-purple-50 p-3 rounded-xl group-hover/card:bg-purple-100 transition-colors">
                  <MonitorPlay size={28} className="text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">اليوتيوب القديم</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                    السيناريو المعروف: كتلقى شرح ديال 2017، الصوت ضعيف، ومول القناة شرح <b>Chapitre 1</b> وحبس السلسلة حيت عيا. 
                    هنا عندك <span className="font-bold text-slate-900">Netflix ديال البيولوجيا</span>: الموديل كامل، منظم، وجودة تخليك تحل عينيك وتفهم بزز منك.
                    </p>
                </div>
              </div>
            </div>

            {/* الخلاصة
            <div className="mt-8 flex items-center gap-3 text-slate-500 bg-slate-50 px-4 py-3 rounded-lg border border-slate-200/60">
                <Zap size={20} className="text-yellow-500 fill-yellow-500 animate-pulse" />
                <p className="text-xs font-bold">خلاصة: RR Student صممها طالب بحالك، فاهم معاناتك.</p>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRocket;