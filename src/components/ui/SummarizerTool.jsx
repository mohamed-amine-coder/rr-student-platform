import React, { useState, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import html2canvas from 'html2canvas';

// ⚡ أيقونة البرق (SVG Component)
const LightningIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
  </svg>
);

function SummarizerTool() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const resultRef = useRef(null);

  // ⚠️ حط الساروت ديالك هنا
  const API_KEY = "AIzaSyBrJlr0xC5p9JyX76K9Ag5gWH5Bizdy9TA"; 

  const handleSummarize = async () => {
    if (!inputText) return;
    setLoading(true);
    setSummary('');

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

      const prompt = `
      تصرف كمساعد ذكي وسريع جداً (Flash) في منصة "RR STUDENT".
      المهمة: تلخيص هذا الدرس في البيولوجيا.
      
      التعليمات:
      // 1. ابدأ بعبارة: "⚡ Salam! Hani jit! Ha lkholassa dyal had lpartie:"
      // 2. استعمل عوارض (Bullet points) واضحة جداً.
      // 3. اللغة: فرنسية مبسطة (مع شرح مصطلحات صعبة بين قوسين).
      // 4. الأسلوب: مباشر، دقيق، وسهل للحفاظة.
      شرح ليا بالدارجة هاد
      
      النص: ${inputText}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      setSummary(response.text());
      
    } catch (error) {
      console.error(error);
      setSummary("Error: Verifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (resultRef.current) {
      const canvas = await html2canvas(resultRef.current, {
        scale: 3,
        backgroundColor: "#ffffff",
      });
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "RR_STUDENT_Flash_Summary.png";
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 p-6 flex flex-col items-center">
      
      {/* 1. Header Section */}
      <div className="text-center mb-8 max-w-2xl">
        <div className="inline-flex items-center justify-center p-3 bg-slate-900 rounded-full mb-4 shadow-lg ring-4 ring-yellow-400/30">
          <LightningIcon className="w-8 h-8 text-yellow-400" />
        </div>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">
          RR STUDENT <span className="text-yellow-500">FLASH</span>
        </h1>
        <p className="text-slate-600 text-lg">
          لخص الدروس الطويلة فثواني ⚡ | أداة مجانية لطلبة البيولوجيا
        </p>
      </div>

      {/* 2. Input Area */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-10">
        <div className="bg-slate-900 p-4 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-slate-400 text-xs font-mono">Input Source</span>
        </div>
        
        <textarea
          className="w-full h-48 p-6 text-slate-700 text-lg outline-none resize-none placeholder:text-slate-300"
          placeholder="Collez votre cours ici (Biologie Cellulaire, Embryologie...)"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button 
            onClick={handleSummarize}
            disabled={loading}
            className={`
              flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95
              ${loading 
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                : 'bg-yellow-400 text-slate-900 hover:bg-yellow-300 shadow-lg shadow-yellow-400/20'
              }
            `}
          >
            {loading ? (
              <>
                <span className="animate-spin">⚡</span> Traitement...
              </>
            ) : (
              <>
                Lancer le Flash ⚡
              </>
            )}
          </button>
        </div>
      </div>

      {/* 3. Output Card (The Sharable Image) */}
      {summary && (
        <div className="flex flex-col items-center gap-6 w-full max-w-2xl animate-fade-in-up">
          
          {/* هذه هي البطاقة التي سيتم تحميلها */}
          <div 
            ref={resultRef} 
            className="w-full bg-white p-8 rounded-none shadow-2xl relative overflow-hidden border-t-8 border-yellow-400"
          >
            {/* الخلفية الزخرفية */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-yellow-100 rounded-full blur-2xl opacity-50"></div>
            
            {/* Header Card */}
            <div className="flex justify-between items-start mb-6 border-b-2 border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="bg-slate-900 p-2 rounded-lg">
                  <LightningIcon className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-black text-xl text-slate-900 leading-none">RR STUDENT</h3>
                  <span className="text-xs font-bold text-yellow-600 tracking-widest uppercase">AI Summarizer</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-slate-400 text-xs font-mono">{new Date().toLocaleDateString()}</div>
                <div className="text-slate-900 font-bold text-sm">FSSM Biology</div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-slate max-w-none">
               {/* تنسيق النص */}
              <div 
                className="text-slate-700 leading-relaxed space-y-2 text-lg"
                dangerouslySetInnerHTML={{ 
                  __html: summary
                    .replace(/\*\*/g, '') 
                    .replace(/\*/g, '<span class="text-yellow-500 font-bold mr-2">⚡</span>') 
                    .replace(/\n/g, '<br/>')
                    .replace(/- /g, '') 
                }} 
              />
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center">
              <p className="text-slate-400 text-sm font-medium">
                Généré gratuitement par <span className="text-slate-900 font-bold">RR STUDENT AI</span>
              </p>
              <div className="bg-slate-100 px-3 py-1 rounded text-xs font-mono text-slate-500">
                www.rrstudent.com
              </div>
            </div>
          </div>

          {/* زر التحميل */}
          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors mb-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Télécharger l'image (HD)
          </button>

        </div>
      )}
    </div>
  );
}

export default SummarizerTool;