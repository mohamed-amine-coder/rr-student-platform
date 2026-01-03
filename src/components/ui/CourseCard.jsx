import React from 'react';
import { BookOpen, HelpCircle, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ id, title, lessons, quizzes, price, tag }) => {
  return (
    <div className="group bg-white border border-slate-100 p-5 rounded-[2.5rem] hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 flex flex-col h-full">
      
      {/* 1. Image Placeholder (البلاصة فين غاتجي تصويرة المادة) */}
      <div className="aspect-video bg-slate-50 rounded-[2rem] mb-6 relative overflow-hidden group-hover:bg-yellow-50 transition-colors flex items-center justify-center">
        {tag && (
          <span className="absolute top-4 right-4 bg-yellow-400 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full shadow-sm z-10">
            {tag}
          </span>
        )}
        <div className="text-slate-200 group-hover:text-yellow-200 transition-colors">
          <BookOpen size={64} />
        </div>
      </div>

      {/* 2. Content */}
      <div className="flex-1 px-2">
        <h4 className="font-black text-xl mb-3 text-slate-900 group-hover:text-yellow-600 transition-colors">
          {title}
        </h4>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
            <BookOpen size={14} /> {lessons} دروس
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
            <HelpCircle size={14} /> {quizzes} QCM
          </div>
        </div>
      </div>

      {/* 3. Footer & Action */}
      <div className="flex items-center justify-between bg-slate-50 p-4 rounded-3xl group-hover:bg-slate-900 transition-all duration-300">
        <span className="font-black text-slate-900 group-hover:text-white text-lg">
          {price} <small className="text-[10px] opacity-60">DH</small>
        </span>
        
        {/* هاد الرابط هو اللي كيدي لـ LessonViewer */}
        <Link 
          to={`/lesson/${id}`}
          className="bg-white text-slate-900 p-2 rounded-2xl shadow-sm group-hover:bg-yellow-400 transition-colors"
        >
          <ChevronLeft size={20} />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;