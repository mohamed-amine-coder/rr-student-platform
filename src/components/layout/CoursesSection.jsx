import React from 'react';
import { COURSES } from './landingData';
import CourseCard from '../ui/CourseCard';

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header ديال السيكشن */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div className="text-center md:text-right">
            <h2 className="text-3xl md:text-4xl font-black mb-3 text-slate-900 tracking-tight">
              موديلات البيولوجيا
            </h2>
            <p className="text-slate-400 font-medium max-w-md">
              اختار المادة اللي بغيتي تهنى منها اليوم. شرح مبسط وكويزات تطبيقية.
            </p>
          </div>
          
          {/* Tabs صغيرة (اختياري) باش السايت يبان احترافي */}
          <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1">
             <button className="bg-white px-6 py-2 rounded-xl shadow-sm text-xs font-black text-slate-900">الكل</button>
             <button className="px-6 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-not-allowed">قريباً</button>
          </div>
        </div>

        {/* الـ Grid اللي كيجمع الـ Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;