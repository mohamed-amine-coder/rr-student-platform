// import React from 'react';

// const BlockImage = ({ src, caption }) => {
//   return (
//     <div className="my-8">
//       <div className="overflow-hidden rounded-[2rem] border-4 border-slate-100 shadow-lg">
//         <img 
//           src={src} 
//           alt={caption} 
//           className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
//         />
//       </div>
//       {caption && (
//         <p className="text-center text-slate-400 text-sm font-bold mt-3">
//           📸 {caption}
//         </p>
//       )}
//     </div>
//   );
// };

// export default BlockImage;

import React from 'react';
import { Zap } from 'lucide-react'; // أيقونة باش تزيد الجمالية

const BlockImage = ({ src, caption }) => {
  return (
    <div className="my-8 group"> {/* group: باش نقدر نتحكم فالتأثيرات عند التحويم */}
      
      <div className="relative overflow-hidden rounded-[2rem] border-4 border-slate-100 shadow-lg">
        
        {/* 1. الصورة */}
        <img 
          src={src} 
          alt={caption} 
          // منع النقر بالزر الأيمن (Right Click)
          onContextMenu={(e) => e.preventDefault()} 
          className="w-full h-auto object-contain md:h-80 hover:scale-105 transition-transform duration-700 cursor-default"
        />

        {/* 2. العلامة المائية (Watermark) */}
        {/* absolute: باش تجي فوق الصورة */}
        {/* pointer-events-none: باش الكليك يدوز للصورة وما تحبسوش العلامة */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-white/90 pointer-events-none select-none">
          <Zap size={12} fill="currentColor" className="text-yellow-400" />
          <span className="text-[10px] font-black tracking-[0.15em] uppercase">
            RR STUDENT
          </span>
        </div>

        {/* اختياري: طبقة حماية إضافية (Overlay خفيف) */}
        {/* كتخلي الصورة تبان بروفيسيونيل وكتزيد تبرز العلامة */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      </div>

      {/* الكابشن (Caption) */}
      {caption && (
        <p className="text-center text-slate-400 text-sm font-bold mt-3">
          📸 {caption}
        </p>
      )}
    </div>
  );
};

export default BlockImage;