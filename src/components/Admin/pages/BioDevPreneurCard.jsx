import * as htmlToImage from 'html-to-image';
import React, { useRef, useState } from 'react';
import { Dna, Terminal, TrendingUp, Code2, Fingerprint } from 'lucide-react';

const InstaBioDevGenerator = () => {
  const printRef = useRef();

  // State - إعدادات المحتوى
  const [title, setTitle] = useState("كيفاش البرمجة عاوناتني نفهم البيولوجيا؟");
  const [content, setContent] = useState("فاش بديت كنتعلم React، لاحظت بلي الخلية الحية كتشبه بزاف لـ Component. النواة هي الـ State، والميتوكوندري هي الـ Props لي كتدخل الطاقة... هاد النظرة بدلات طريقتي فالحفاظة.");
  const [postType, setPostType] = useState("💡 Mindset Shift"); // نوع البوست
  const [date, setDate] = useState("OCT 26, 2023");
  const [showCodeBlock, setShowCodeBlock] = useState(true); // إظهار/إخفاء بلوك الكود
  const [codeSnippet, setCodeSnippet] = useState(`// The Bio-Code Analogy\nconst Cell = ({ energy }) => {\n  if (!energy) return <Apoptosis />;\n  return <Life status="thriving" />;\n}`);

  const handleDownloadImage = async () => {
    try {
      const element = printRef.current;
      // جودة عالية جداً للإنستغرام
      const dataUrl = await htmlToImage.toPng(element, { quality: 1, pixelRatio: 4 });
      const link = document.createElement('a');
      link.download = `RR-InstaPost-${date}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col xl:flex-row p-8 gap-8 font-sans" dir="rtl">
      
      {/* ----------------- لوحة التحكم (Sidebar) ----------------- */}
      <div className="w-full xl:w-1/3 bg-[#0f172a] p-6 rounded-2xl shadow-xl border border-slate-800 text-right h-fit overflow-y-auto max-h-screen">
        <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-purple-400 flex items-center justify-end gap-2">
           <span>📱</span> إعدادات بوست إنستغرام
        </h3>
        
        <div className="space-y-4">
           {/* Post Info */}
           <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-400 mb-2 block">🏷️ نوع البوست</label>
                <select value={postType} onChange={(e) => setPostType(e.target.value)} className="w-full p-3 bg-[#1e293b] border border-slate-700 rounded-xl text-white text-sm">
                  <option value="💡 Mindset Shift">💡 Mindset Shift</option>
                  <option value="🧬 Bio-Hack">🧬 Bio-Hack</option>
                  <option value="💻 Dev Story">💻 Dev Story</option>
                  <option value="🚀 Startup Journey">🚀 Startup Journey</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 mb-2 block">📅 التاريخ</label>
                <input type="text" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-3 bg-[#1e293b] border border-slate-700 rounded-xl text-white text-sm text-left" dir="ltr"/>
              </div>
          </div>

          {/* Main Content */}
          <div>
             <label className="text-xs font-bold text-slate-400 mb-2 block">العنوان الرئيسي (Hook)</label>
             <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 bg-[#1e293b] border border-slate-700 rounded-xl text-white font-bold text-lg"/>
          </div>

          <div>
             <label className="text-xs font-bold text-slate-400 mb-2 block">الكابشن (Caption)</label>
             <textarea value={content} onChange={(e) => setContent(e.target.value)} rows="4" className="w-full p-3 bg-[#1e293b] border border-slate-700 rounded-xl text-white"/>
          </div>

          {/* Code Snippet Toggle */}
          <div className="flex items-center justify-between py-2 border-t border-slate-800 mt-4">
            <label className="text-sm font-bold text-slate-300">إظهار بلوك الكود؟</label>
            <input type="checkbox" checked={showCodeBlock} onChange={(e) => setShowCodeBlock(e.target.checked)} className="w-5 h-5 accent-[#fbbf24]"/>
          </div>
          
          {showCodeBlock && (
            <div>
                <label className="text-xs font-bold text-slate-400 mb-2 block text-left" dir="ltr">Code Snippet (Monospace)</label>
                <textarea value={codeSnippet} onChange={(e) => setCodeSnippet(e.target.value)} rows="5" className="w-full p-3 bg-[#020617] border border-slate-700 rounded-xl text-green-400 font-mono text-sm text-left" dir="ltr"/>
            </div>
          )}

          <button onClick={handleDownloadImage} className="w-full py-4 bg-gradient-to-r from-purple-600 to-[#fbbf24] text-white font-black text-lg rounded-xl hover:opacity-90 transition shadow-lg mt-4 flex justify-center gap-2">
            ✨ تحميل البوست (مربع)
          </button>
        </div>
      </div>

      {/* ----------------- منطقة العرض (SQUARE PREVIEW) ----------------- */}
      <div className="w-full xl:w-2/3 flex justify-center items-start bg-[#1e293b] rounded-3xl p-8 ltr overflow-auto border border-slate-700 min-h-[800px]">
        
        {/* --- THE INSTAGRAM SQUARE CARD (800x800) --- */}
        <div ref={printRef} className="w-[800px] h-[800px] relative overflow-hidden rounded-3xl shadow-2xl flex flex-col bg-[#020617]">
          
          {/* ================= BACKGROUND LAYERS (The Fusion) ================= */}
          <div className="absolute inset-0 pointer-events-none">
             {/* 1. Tech Layer: Circuit Pattern */}
             <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
             <CircuitPattern className="absolute top-0 right-0 text-blue-500/10 w-[400px] h-[400px]" />
             
             {/* 2. Bio Layer: DNA & Organic Glow */}
             <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-green-500/20 rounded-full filter blur-[120px] mix-blend-screen opacity-60"></div>
             <Dna className="absolute bottom-10 left-10 text-green-500/10 w-[300px] h-[300px] -rotate-12 opacity-30" />

             {/* 3. Biz Layer: Gold Glow & Growth */}
             <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#fbbf24]/20 rounded-full filter blur-[120px] mix-blend-screen opacity-60"></div>
             <TrendingUp className="absolute top-20 right-20 text-[#fbbf24]/10 w-[200px] h-[200px] opacity-30" />
          </div>

          {/* ================= FOREGROUND CONTENT ================= */}
          <div className="relative z-10 h-full flex flex-col p-10 justify-between" dir="rtl">

            {/* --- Header: Branding & Identity Tags --- */}
            <div className="flex justify-between items-start">
                {/* Brand Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#fbbf24] to-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
                        <span className="text-[#020617] text-xl font-black">RR</span>
                    </div>
                    <div>
                        <h2 className="text-white font-bold leading-none">RR CONCEPT</h2>
                        <p className="text-[#fbbf24] text-[10px] font-mono tracking-wider">Bio • Dev • Preneur</p>
                    </div>
                </div>

                {/* Identity Pills */}
                <div className="flex flex-col gap-2 items-end">
                     {/* Post Type Badge */}
                    <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/50 pl-3 pr-2 py-1 rounded-full backdrop-blur-md">
                         <span className="text-slate-300 text-xs font-bold">{postType}</span>
                         <Fingerprint size={14} className="text-purple-400" />
                    </div>
                     {/* Date */}
                    <p className="text-slate-500 text-xs font-mono">{date}</p>
                </div>
            </div>

            {/* --- Middle: Main Content --- */}
            <div className="flex-1 flex flex-col justify-center py-8">
                 {/* Title with Fusion Icon */}
                 <div className="mb-6 relative">
                    {/* Decorative Icon placed behind title */}
                    <div className="absolute -top-10 -right-10 opacity-20">
                        <Code2 size={100} className="text-blue-400" />
                    </div>
                    <h1 className="relative text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-lg">
                        {title}
                    </h1>
                    <div className="w-24 h-2 bg-gradient-to-r from-[#fbbf24] to-purple-500 rounded-full mt-4"></div>
                 </div>

                 {/* Body Text */}
                 <p className="text-xl text-slate-200 font-medium leading-relaxed max-w-[90%]">
                    {content}
                 </p>

                 {/* --- Optional: The "Hybrid" Code Block --- */}
                 {showCodeBlock && (
                    <div className="mt-8 relative group" dir="ltr">
                        {/* Fusion border effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-[#fbbf24] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                        
                        <div className="relative bg-[#0f172a]/90 backdrop-blur-xl border border-slate-700/50 p-5 rounded-2xl overflow-hidden font-mono text-sm">
                             {/* Header of the code block */}
                             <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800/50">
                                 <div className="flex space-x-2">
                                     <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                     <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                     <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                 </div>
                                 <div className="flex items-center gap-1 text-xs text-slate-400">
                                     <Terminal size={12} />
                                     <span>bio_algorithm.js</span>
                                 </div>
                             </div>
                             {/* The Code */}
                            <pre className="text-blue-300 whitespace-pre-wrap overflow-x-auto leading-loose">
                                <code>
                                    {codeSnippet.split('\n').map((line, i) => (
                                        <div key={i} className="flex">
                                            <span className="text-slate-600 select-none mr-4 w-6 text-right">{i+1}</span>
                                            <span dangerouslySetInnerHTML={{ __html: syntaxHighlight(line) }}></span>
                                        </div>
                                    ))}
                                </code>
                            </pre>
                        </div>
                    </div>
                 )}
            </div>

            {/* --- Footer: Handle --- */}
            <div className="flex justify-center items-center border-t border-slate-800/50 pt-4">
                <p className="text-slate-400 text-sm font-mono flex items-center gap-2">
                    <span className="text-[#fbbf24]">@</span>rr_concept
                    <span className="text-slate-600">|</span>
                    Building the Hybrid Future 🧬💻🚀
                </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

// SVG Component for circuit pattern (Decoration)
const CircuitPattern = ({ className }) => (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0V50H100V100H150V50H200" stroke="currentColor" strokeWidth="2"/>
        <path d="M250 100V150H300V100H350V0" stroke="currentColor" strokeWidth="2"/>
        <path d="M0 200H50V250H100V300H50V350H0" stroke="currentColor" strokeWidth="2"/>
        <path d="M400 200H350V250H300V300H350V350H400" stroke="currentColor" strokeWidth="2"/>
        <circle cx="100" cy="100" r="5" fill="currentColor"/>
        <circle cx="300" cy="100" r="5" fill="currentColor"/>
        <circle cx="100" cy="300" r="5" fill="currentColor"/>
        <circle cx="300" cy="300" r="5" fill="currentColor"/>
    </svg>
);

// دالة بسيطة جداً لتلوين الكود (Syntax Highlighting Simple)
// ملاحظة: في مشروع حقيقي استخدم مكتبة مثل Prism.js أو Highlight.js
const syntaxHighlight = (line) => {
    let highlighted = line
        .replace(/(\/\/.*)/g, '<span class="text-slate-500">$1</span>') // Comments
        .replace(/\b(const|let|var|if|return|function|class)\b/g, '<span class="text-purple-400 font-bold">$1</span>') // Keywords
        .replace(/\b(Cell|Apoptosis|Life)\b/g, '<span class="text-yellow-400 font-bold">$1</span>') // Components/Classes
        .replace(/(=>|\{|\}|\(|\)|=|<|>)/g, '<span class="text-slate-300">$1</span>') // Symbols
        .replace(/(".*")/g, '<span class="text-green-400">$1</span>'); // Strings
    return highlighted;
}

export default InstaBioDevGenerator;