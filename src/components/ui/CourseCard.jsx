
// import { BookOpen, ChevronLeft, Layers, Sparkles, Lock, Clock } from 'lucide-react'; 
// import { Link } from 'react-router-dom';

// const CourseCard = ({ id, title, price, chapters }) => {
//   const lessonsCount = chapters?.length || 0;
//   const freeChapters = chapters?.filter(ch => ch.isFree).length || 0;

//   return (
//     <Link 
//       to={`/module/${id}`} 
//       className="group relative flex items-center bg-white border border-slate-900 p-4 rounded-3xl hover:border-yellow-400 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 transform hover:-translate-y-1"
//     >
//       {/* Icon Section */}
//       <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-yellow-400 transition-colors duration-300 shadow-inner">
//         {lessonsCount === 0 ? (
//              <Lock size={26} className="text-slate-300" />
//         ) : (
//              <BookOpen size={26} className="text-slate-400 group-hover:text-slate-900 transition-colors" />
//         )}
//       </div>

//       {/* Info Section */}
//       <div className="flex-1 px-5 overflow-hidden text-right">
//         <h3 className="font-black text-slate-900 text-lg leading-tight truncate group-hover:text-yellow-600 transition-colors">
//           {title}
//         </h3>
        
//         <div className="flex items-center justify-end gap-3 mt-2">
//            {/* Badge Free (كيبان غير الى كانو الدروس) */}
//           {freeChapters > 0 && lessonsCount > 0 && (
//             <span className="inline-flex items-center gap-1 text-[10px] font-black text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-100 animate-pulse">
//               <Sparkles size={10} />
//               {freeChapters} فابور
//             </span>
//           )}
          
//           <span className="h-1 w-1 rounded-full bg-slate-300"></span>

//           {/* حالة الدروس */}
//           {lessonsCount === 0 ? (
//             <span className="text-xs font-bold text-red-400 flex items-center gap-1">
//               مغلق <Lock size={12} />
//             </span>
//           ) : (
//             <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
//                {lessonsCount} درس <Layers size={14} /> 
//             </span>
//           )}
//         </div>
//       </div>

//       {/* Price & Call to Action Section - التغيير الكبير هنا */}
//       <div className="text-left pl-2 border-r border-slate-100 flex flex-col items-end gap-2 min-w-[110px]">
//         <span className="text-lg font-black text-slate-900 tracking-tight">{price} DH</span>
        
//         {lessonsCount === 0 ? (
//           // الحالة 1: المقاعد ممتلئة -> تسجل في الانتظار
//           <div className="flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-xl text-[10px] font-bold border border-orange-200 whitespace-nowrap">
//             <span>تسجل في الانتظار</span>
//             <Clock size={12} />
//           </div>
//         ) : (
//           // الحالة 2: كاينين دروس -> اشترك الان
//           <div className="flex items-center gap-1 bg-slate-900 text-white px-3 py-1.5 rounded-xl text-[10px] font-bold group-hover:bg-yellow-400 group-hover:text-slate-900 transition-all duration-300 shadow-md whitespace-nowrap">
//             <span>بدا دبا</span>
//             <ChevronLeft size={14}/>
//           </div>
//         )}
//       </div>
//     </Link>
//   );
// };

// export default CourseCard;
import { BookOpen, ChevronLeft, Layers, Sparkles, Lock, Clock } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const CourseCard = ({ id, title, price, chapters }) => {
  const lessonsCount = chapters?.length || 0;
  const freeChapters = chapters?.filter(ch => ch.isFree).length || 0;

  return (
    <Link 
      to={`/module/${id}`} 
      className="group relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white border border-slate-200 p-4 rounded-3xl hover:border-yellow-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 gap-4 sm:gap-0"
    >
      
      {/* --- الجزء العلوي فالتليفون / الأيسر فالبيسي (الأيقونة والعنوان) --- */}
      <div className="flex items-center gap-4 flex-1">
        
        {/* Icon Section */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-yellow-400 transition-colors duration-300 shadow-inner">
          {lessonsCount === 0 ? (
             <Lock size={24} className="text-slate-300" />
          ) : (
             <BookOpen size={24} className="text-slate-400 group-hover:text-slate-900 transition-colors" />
          )}
        </div>

        {/* Info Section */}
        <div className="flex-1 overflow-hidden">
          {/* 🔥 التعديل المهم: حيدنا truncate ودرنا line-clamp-2 باش العنوان يبان كامل */}
          <h3 className="font-black text-slate-900 text-base sm:text-lg leading-tight line-clamp-2 group-hover:text-yellow-600 transition-colors">
            {title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {/* Badge Free */}
            {freeChapters > 0 && lessonsCount > 0 && (
              <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-black text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                <Sparkles size={10} />
                {freeChapters} فابور
              </span>
            )}
            
            {lessonsCount > 0 && <span className="hidden sm:block h-1 w-1 rounded-full bg-slate-300"></span>}

            {/* حالة الدروس */}
            {lessonsCount === 0 ? (
              <span className="text-xs font-bold text-red-400 flex items-center gap-1">
                مغلق <Lock size={12} />
              </span>
            ) : (
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                 {lessonsCount} درس <Layers size={14} /> 
              </span>
            )}
          </div>
        </div>
      </div>

      {/* --- الجزء السفلي فالتليفون / الأيمن فالبيسي (الثمن والزر) --- */}
      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 sm:pl-4 sm:border-r border-slate-100 sm:min-w-[110px] border-t sm:border-t-0 pt-3 sm:pt-0">
        
        <span className="text-lg font-black text-slate-900 tracking-tight">{price} DH</span>
        
        {lessonsCount === 0 ? (
          <div className="flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-xl text-[10px] font-bold border border-orange-200 whitespace-nowrap">
            <span>تسجل فلائحة الانتظار</span>
            <Clock size={12} />
          </div>
        ) : (
          <div className="flex items-center gap-1 bg-slate-900 text-white px-4 py-2 sm:py-1.5 rounded-xl text-[10px] font-bold group-hover:bg-yellow-400 group-hover:text-slate-900 transition-all duration-300 shadow-md whitespace-nowrap">
            <span>بدا دبا</span>
            <ChevronLeft size={14}/>
          </div>
        )}
      </div>

    </Link>
  );
};

export default CourseCard;