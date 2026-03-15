import React, { useState, useRef } from 'react';
// حيدنا html2canvas وجبنا هادي
import { toPng } from 'html-to-image'; 

const PremiumInstaMaker = () => {
  const [title, setTitle] = useState('مستقبل البيو-أنفورماتيك 🧬');
  const [content, setContent] = useState('كيفاش الذكاء الاصطناعي غادي يبدل الطريقة باش كنفهمو الـ DNA والبروتينات في السنوات الجاية، وكيفاش البرمجة ولات أساسية فهاد المجال...');
  const [handle, setHandle] = useState('@syr.bioai');
  
  const postRef = useRef(null);

  const downloadPost = () => {
    if (postRef.current) {
      // pixelRatio: 3 كتعطينا نفس الجودة العالية لي هضرنا عليها (HD)
      toPng(postRef.current, { cacheBust: true, pixelRatio: 3 })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'premium-post.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error('وقع شي مشكل فاش بغينا نصاوبو التصويرة:', err);
        });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-gray-100 min-h-screen font-sans">
      
      {/* ⚙️ قسم الإعدادات (نفسو ماتبدلش) */}
      <div className="flex-1 bg-white p-6 rounded-2xl shadow-xl border border-gray-200 h-fit">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-right">لوحة التحكم 🎛️</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-right text-gray-600">العنوان:</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-right bg-gray-50"
            dir="rtl"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-right text-gray-600">المحتوى:</label>
          <textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-right resize-none bg-gray-50"
            dir="rtl"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2 text-right text-gray-600">يوزر انستغرام:</label>
          <input 
            type="text" 
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-left bg-gray-50"
            dir="ltr"
          />
        </div>

        <button 
          onClick={downloadPost}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
        >
          حمل المنشور 🚀
        </button>
      </div>

      {/* ✨ قسم المعاينة (نفسو ماتبدلش) */}
      <div className="flex-1 flex justify-center items-center">
        <div 
          ref={postRef}
          className="w-[500px] h-[500px] bg-[#0B0F19] p-6 relative overflow-hidden shadow-2xl flex items-center justify-center"
          dir="rtl"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-600 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

          <div className="relative z-10 w-full h-full border border-white/10 bg-white/5 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-sm">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              <span className="text-white/40 text-xs font-mono tracking-widest uppercase">AI & BIO</span>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-sm">
                {title}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed font-medium">
                {content}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-between items-center mt-4">
              <span className="text-white/60 font-mono text-sm font-medium tracking-wide">
                {handle}
              </span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default PremiumInstaMaker;