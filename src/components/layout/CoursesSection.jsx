import React from 'react';
import { COURSES } from './landingData';
import CourseCard from '../ui/CourseCard';
import { Sparkles } from 'lucide-react';

const CoursesSection = () => {
  return (
    <section id="courses" className="py-16 px-6 bg-white font-tajawal">
      <div className="max-w-5xl mx-auto">
        
        {/* Header: بسيط ومجموع */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-yellow-600 text-[10px] font-black uppercase tracking-widest mb-2">
              <Sparkles size={14} /> اختر الموديل
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
              Semestre 1 - BG (S1)
            </h2>
          </div>
          
          <div className="bg-slate-50 p-1 rounded-xl flex border border-slate-100 shrink-0">
             <button className="bg-white text-slate-900 px-4 py-1.5 rounded-lg shadow-sm text-[11px] font-black border border-slate-100">
               S1 SVTU
             </button>
             <button className="text-slate-400 px-4 py-1.5 text-[11px] font-bold cursor-not-allowed">
               قريباً S2
             </button>
          </div>
        </div>

        {/* الـ Grid: 2 فـ السطر فـ الشاشات الكبيرة والمتوسطة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COURSES.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* Footer صغير */}
        <div className="mt-12 text-center">
           <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
             جميع الدروس مراجعة من طرف مختصين بـ FSSM
           </p>
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;