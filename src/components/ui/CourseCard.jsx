// // 1. هنا فين كان المشكل، خاص نزيدو Layers
// import { BookOpen, HelpCircle, ChevronLeft, Sparkles, Layers } from 'lucide-react'; 
// import { Link } from 'react-router-dom';

// const CourseCard = ({ id, title, price, chapters }) => {
//   const lessonsCount = chapters?.length || 0;
//   const freeChapters = chapters?.filter(ch => ch.isFree).length || 0;

//   return (
//     <Link 
//       to={`/module/${id}`} 
//       className="group flex items-center bg-white border border-slate-100 p-4 rounded-3xl hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300"
//     >
//       {/* Icon Section */}
//       <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-yellow-400 transition-colors">
//         <BookOpen size={24} className="text-slate-300 group-hover:text-slate-900" />
//       </div>

//       {/* Info Section */}
//       <div className="flex-1 px-4 overflow-hidden text-right">
//         <h3 className="font-black text-slate-900 text-base truncate group-hover:text-yellow-600 transition-colors">
//           {title}
//         </h3>
//         <div className="flex items-center gap-3 mt-1 justify-start md:justify-end flex-row-reverse">
//           <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
//              فصول {lessonsCount} <Layers size={12} /> 
//           </span>
//           {freeChapters > 0 && (
//             <span className="text-[9px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
//               {freeChapters} فصول فابور ✅
//             </span>
//           )}
//         </div>
//       </div>

//       {/* Price & Action */}
//       <div className="text-left pl-2 border-r border-slate-50 flex flex-col items-end">
//         <span className="text-sm font-black text-slate-900">{price} DH</span>
//         <div className="mt-1 p-1.5 bg-slate-50 rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-all">
//           <ChevronLeft size={16}/>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default CourseCard;

import { BookOpen, ChevronLeft, Layers, Sparkles } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const CourseCard = ({ id, title, price, chapters }) => {
  const lessonsCount = chapters?.length || 0;
  const freeChapters = chapters?.filter(ch => ch.isFree).length || 0;

  return (
    <Link 
      to={`/module/${id}`} 
      className="group relative flex items-center bg-white border border-slate-900 p-4 rounded-3xl hover:border-yellow-400 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Icon Section - زدنا ليه شوية د الزواق */}
      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-yellow-400 transition-colors duration-300 shadow-inner">
        <BookOpen size={26} className="text-slate-400 group-hover:text-slate-900 transition-colors" />
      </div>

      {/* Info Section */}
      <div className="flex-1 px-5 overflow-hidden text-right">
        <h3 className="font-black text-slate-900 text-lg leading-tight truncate group-hover:text-yellow-600 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-end gap-3 mt-2">
          {/* Badge Free - زدنا ليه أيقونة Sparkles */}
          {freeChapters > 0 && (
            <span className="inline-flex items-center gap-1 text-[10px] font-black text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-100 animate-pulse">
              <Sparkles size={10} />
              {freeChapters} فابور
            </span>
          )}
          
          <span className="h-1 w-1 rounded-full bg-slate-300"></span>

          <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
             {lessonsCount} درس <Layers size={14} /> 
          </span>
        </div>
      </div>

      {/* Price & Action - كبرنا الثمن */}
      <div className="text-left pl-2 border-r border-slate-100 flex flex-col items-end gap-1">
        <span className="text-lg font-black text-slate-900 tracking-tight">{price} DH</span>
        <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
          <ChevronLeft size={18}/>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;