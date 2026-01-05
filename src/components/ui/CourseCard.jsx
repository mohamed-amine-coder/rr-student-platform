// 1. هنا فين كان المشكل، خاص نزيدو Layers
import { BookOpen, HelpCircle, ChevronLeft, Sparkles, Layers } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const CourseCard = ({ id, title, price, chapters }) => {
  const lessonsCount = chapters?.length || 0;
  const freeChapters = chapters?.filter(ch => ch.isFree).length || 0;

  return (
    <Link 
      to={`/module/${id}`} 
      className="group flex items-center bg-white border border-slate-100 p-4 rounded-3xl hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300"
    >
      {/* Icon Section */}
      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-yellow-400 transition-colors">
        <BookOpen size={24} className="text-slate-300 group-hover:text-slate-900" />
      </div>

      {/* Info Section */}
      <div className="flex-1 px-4 overflow-hidden text-right">
        <h3 className="font-black text-slate-900 text-base truncate group-hover:text-yellow-600 transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-3 mt-1 justify-start md:justify-end flex-row-reverse">
          <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
             فصول {lessonsCount} <Layers size={12} /> 
          </span>
          {freeChapters > 0 && (
            <span className="text-[9px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
              {freeChapters} فصول فابور ✅
            </span>
          )}
        </div>
      </div>

      {/* Price & Action */}
      <div className="text-left pl-2 border-r border-slate-50 flex flex-col items-end">
        <span className="text-sm font-black text-slate-900">{price} DH</span>
        <div className="mt-1 p-1.5 bg-slate-50 rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-all">
          <ChevronLeft size={16}/>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;