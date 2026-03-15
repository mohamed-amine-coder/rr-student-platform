import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';

const LeadMagnetGeneratorJSON = () => {
  const previewRef = useRef(null);
  const [jsonInput, setJsonInput] = useState('');
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleParseJSON = () => {
    try {
      const data = JSON.parse(jsonInput);
      setParsedData(data);
      setError('');
    } catch (err) {
      setError('كاين شي خطأ فـ JSON ديالك. تأكد من الأقواس والفواصل.');
      setParsedData(null);
    }
  };

  const handleDownloadPDF = () => {
    if (!previewRef.current) return;
    setIsGenerating(true);

    const element = previewRef.current;
    
    const opt = {
      margin: 0,
      filename: parsedData?.title ? `${parsedData.title}.pdf` : 'RR-Student-Lesson.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 3, useCORS: true, logging: false },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save().then(() => {
      setIsGenerating(false);
    });
  };

  // المكونات بلمسة تعليمية حديثة
  const renderBlock = (block, index) => {
    switch (block.type) {
      case 'title':
        return (
          <div key={index} className="mb-8 pb-6 break-inside-avoid text-center" style={{ borderBottom: '3px dashed #cbd5e1' }}>
            <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-3" style={{ backgroundColor: '#facc15', color: '#0f172a' }}>
              الفصل {block.content.number}
            </span>
            <h1 className="text-3xl font-black mb-2" style={{ color: '#0f172a' }}>{block.content.title_ar}</h1>
            <h3 className="text-xl font-bold" style={{ color: '#64748b' }}>{block.content.title_fr}</h3>
          </div>
        );

      case 'introduction':
        return (
          <div key={index} className="mb-8 p-6 rounded-xl text-lg leading-relaxed break-inside-avoid font-medium" style={{ backgroundColor: '#f8fafc', color: '#334155', borderRight: '4px solid #94a3b8' }}>
            <span className="text-2xl mb-2 block">👋</span>
            {block.content.text}
          </div>
        );

      case 'concept':
        return (
          <div key={index} className="mb-6 p-6 rounded-xl shadow-sm break-inside-avoid" style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRight: '5px solid #facc15' }}>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: '#0f172a' }}>
              <span style={{ color: '#eab308' }}>📘</span> {block.content.title_fr}
            </h3>
            <p className="mb-4 text-base leading-relaxed" style={{ color: '#475569' }}>{block.content.explanation}</p>
            <div className="flex flex-wrap gap-2">
              {block.content.keywords.map((kw, i) => (
                <span key={i} className="px-3 py-1 text-xs rounded-full font-bold shadow-sm" style={{ backgroundColor: '#f1f5f9', color: '#334155', border: '1px solid #cbd5e1' }}>
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        );

      case 'image':
        return (
          <div key={index} className="mb-8 flex flex-col items-center break-inside-avoid p-4 rounded-xl" style={{ backgroundColor: '#f8fafc', border: '2px dashed #e2e8f0' }}>
            <img src={block.content.src} alt="شرح" className="max-w-full rounded-lg shadow-md" style={{ maxHeight: '350px' }} />
            {block.content.caption && (
              <p className="mt-3 text-sm text-center px-4 py-2 rounded-lg font-bold w-full" style={{ color: '#475569', backgroundColor: '#e2e8f0' }}>
                📸 {block.content.caption}
              </p>
            )}
          </div>
        );

      case 'exam_trap':
        return (
          <div key={index} className="mb-6 p-5 rounded-xl flex items-start gap-4 break-inside-avoid shadow-sm" style={{ backgroundColor: '#fef2f2', border: '2px solid #fca5a5' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#fee2e2' }}>
              <span className="text-2xl">🚨</span>
            </div>
            <div>
              <h4 className="font-black text-lg mb-1" style={{ color: '#991b1b' }}>فخ الامتحان (Piège d'examen)</h4>
              <p className="font-medium" style={{ color: '#7f1d1d' }}>{block.content.text}</p>
            </div>
          </div>
        );

      case 'advice':
        return (
          <div key={index} className="mb-6 p-5 rounded-xl flex items-start gap-4 break-inside-avoid shadow-sm" style={{ backgroundColor: '#f0fdf4', border: '2px solid #86efac' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#dcfce7' }}>
              <span className="text-2xl">💡</span>
            </div>
            <div>
              <h4 className="font-black text-lg mb-1" style={{ color: '#166534' }}>{block.content.title}</h4>
              <p className="font-medium" style={{ color: '#14532d' }}>{block.content.text}</p>
            </div>
          </div>
        );

      case 'quiz':
        return (
          <div key={index} className="mb-8 p-8 rounded-2xl break-inside-avoid shadow-lg relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
            <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full" style={{ backgroundColor: '#1e293b' }}></div>
            <div className="relative z-10">
              <div className="inline-block px-5 py-2 rounded-full font-black text-sm mb-5 shadow-md" style={{ backgroundColor: '#facc15', color: '#0f172a' }}>
                🎯 اختبر راسك دابا
              </div>
              <h3 className="text-xl font-bold mb-6 leading-relaxed" style={{ color: '#f8fafc' }}>{block.content.question}</h3>
              <div className="space-y-3">
                {block.content.options.map((opt, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl transition-all" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                    <div className="w-6 h-6 rounded-full flex-shrink-0" style={{ border: '2px solid #94a3b8' }}></div>
                    <span className="font-medium text-lg" style={{ color: '#cbd5e1' }}>{opt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'analogy':
        return (
          <div key={index} className="mb-6 p-6 rounded-xl break-inside-avoid flex gap-4 shadow-sm" style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRight: '5px solid #3b82f6' }}>
            <span className="text-4xl">🧠</span>
            <div>
              <h4 className="font-black text-lg mb-2" style={{ color: '#1e40af' }}>تخيل معايا (Analogie)</h4>
              <p className="leading-relaxed font-medium" style={{ color: '#1e3a8a' }}>{block.content.text}</p>
            </div>
          </div>
        );

      case 'comparison':
        return (
          <div key={index} className="mb-8 break-inside-avoid shadow-sm rounded-xl overflow-hidden" style={{ border: '1px solid #cbd5e1' }}>
            <div className="flex font-black text-lg p-2" style={{ backgroundColor: '#f1f5f9', color: '#0f172a' }}>
              <div className="w-1/2 p-3 text-center" style={{ borderLeft: '2px solid #cbd5e1' }}>{block.content.leftTitle}</div>
              <div className="w-1/2 p-3 text-center">{block.content.rightTitle}</div>
            </div>
            <div className="flex" style={{ backgroundColor: '#ffffff' }}>
              <div className="w-1/2 p-5" style={{ borderLeft: '2px solid #e2e8f0' }}>
                <ul className="list-disc list-outside ml-4 space-y-3 font-medium" style={{ color: '#475569' }}>
                  {block.content.leftItems.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="w-1/2 p-5">
                <ul className="list-disc list-outside ml-4 space-y-3 font-medium" style={{ color: '#475569' }}>
                  {block.content.rightItems.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'resume':
        return (
          <div key={index} className="mb-8 p-6 rounded-2xl break-inside-avoid shadow-sm" style={{ backgroundColor: '#f8fafc', border: '2px solid #cbd5e1' }}>
            <h3 className="text-xl font-black mb-4 flex items-center gap-2" style={{ color: '#0f172a' }}>
              <span className="text-2xl">📝</span> {block.content.title_fr}
            </h3>
            <p className="mb-4 font-medium leading-relaxed" style={{ color: '#334155' }}>{block.content.explanation}</p>
          </div>
        );

      case 'translation':
        return (
          <div key={index} className="mb-8 break-inside-avoid bg-white p-6 rounded-xl shadow-sm" style={{ border: '1px solid #e2e8f0' }}>
            <h3 className="text-lg font-black inline-block pb-2 mb-4" style={{ color: '#0f172a', borderBottom: '3px solid #facc15' }}>
              🌍 {block.content.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {block.content.terms.map((term, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1' }}>
                  <span className="font-black text-sm" dir="ltr" style={{ color: '#0f172a' }}>{term.fr}</span>
                  <span className="font-bold text-sm" style={{ color: '#64748b' }}>{term.ar}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'checklist':
        return (
          <div key={index} className="mb-8 p-6 rounded-xl break-inside-avoid shadow-sm" style={{ backgroundColor: '#ffffff', border: '2px solid #10b981' }}>
            <h3 className="text-lg font-black mb-4 flex items-center gap-2" style={{ color: '#065f46' }}>
              <span className="text-2xl">✅</span> {block.content.title}
            </h3>
            <ul className="space-y-3">
              {block.content.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-bold" style={{ color: '#064e3b' }}>
                  <span className="mt-1 flex-shrink-0" style={{ color: '#10b981' }}>✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans" dir="rtl">
      
      {/* القسم د اليسار (لوحة التحكم) */}
      <div className="w-full md:w-1/3 p-6 bg-white border-l border-slate-200 shadow-xl flex flex-col z-10">
        <h2 className="text-2xl font-black text-slate-900 mb-2">🚀 RR STUDENT صانع الدروس</h2>
        <p className="text-slate-500 mb-6 text-sm font-medium">لصق كود الـ JSON ديال الدرس هنا باش تشوف السحر:</p>
        
        <textarea
          className="w-full flex-grow p-4 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-yellow-100 focus:border-yellow-400 outline-none transition-all resize-none text-left font-mono text-sm shadow-inner"
          dir="ltr"
          placeholder='{"title": "الدرس الأول", "blocks": [...] }'
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
        />
        
        {error && <p className="text-red-500 text-sm mt-3 font-bold bg-red-50 p-3 rounded-lg border border-red-200">❌ {error}</p>}
        
        <div className="flex gap-3 mt-5">
          <button
            onClick={handleParseJSON}
            className="flex-1 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-black rounded-xl transition-all border border-slate-300 shadow-sm"
          >
            🔄 تحديث المعاينة
          </button>
          <button
            onClick={handleDownloadPDF}
            disabled={isGenerating || !parsedData}
            className="flex-1 py-4 bg-slate-900 hover:bg-slate-800 text-yellow-400 font-black rounded-xl transition-all disabled:opacity-50 shadow-md flex justify-center items-center gap-2"
          >
            {isGenerating ? 'جاري التحميل...' : '📥 حمل الـ PDF'}
          </button>
        </div>
      </div>

      {/* قسم المعاينة - هنا فين كيبان الديزاين الجديد */}
      <div className="w-full md:w-2/3 bg-slate-200 p-8 flex justify-center items-start overflow-y-auto max-h-screen">
        <div 
          ref={previewRef}
          className="relative shadow-2xl w-full flex flex-col"
          style={{ width: '210mm', minHeight: '297mm', maxWidth: '100%', backgroundColor: '#ffffff' }}
        >
          {/* Header */}
          <header className="px-10 py-8 flex items-center justify-between" style={{ backgroundColor: '#0f172a', borderBottom: '6px solid #facc15' }}>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg" style={{ border: '3px solid #facc15', backgroundColor: '#1e293b' }}>
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#facc15' }}>
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h1 className="text-3xl font-black tracking-wider" style={{ color: '#facc15' }}>RR STUDENT</h1>
            </div>
            {parsedData?.title && <span className="font-bold text-lg px-4 py-2 rounded-lg" style={{ color: '#f8fafc', backgroundColor: '#1e293b' }}>{parsedData.title}</span>}
          </header>

          {/* Main Content */}
          <main className="flex-grow p-12 pb-8">
            {parsedData ? (
              parsedData.blocks.map((block, index) => renderBlock(block, index))
            ) : (
              <div className="flex flex-col items-center justify-center h-full min-h-[500px]" style={{ color: '#94a3b8' }}>
                <span className="text-6xl mb-4 opacity-50">📄</span>
                <p className="font-bold text-lg">المعاينة غتبان هنا ملي تدخل الـ JSON</p>
              </div>
            )}
          </main>
          {/* التحديث الجديد للـ CTA: التسجيل القبلي */}
          <div className="mt-auto px-12 py-10 text-center break-inside-avoid" style={{ backgroundColor: '#facc15', borderTop: '4px solid #0f172a' }}>
            <h2 className="text-3xl font-black mb-4" style={{ color: '#0f172a' }}>
              🚀 بغيتي تفهم البيولوجيا بالداريجة وتضمن النقطة ديالك فـ S2؟
            </h2>
            <p className="text-lg font-bold mb-6" style={{ color: '#334155' }}>
              هادا غير ملخص صغير! منصة <span style={{ color: '#0f172a' }}>RR STUDENT</span> قريبة تفتح البيبان ديالها مجددا. دير التسجيل القبلي دابا باش تحجز بلاصتك وتكون من الأوائل لي غيستافدو.
            </p>
            <div className="inline-block px-8 py-4 rounded-xl font-black text-xl shadow-lg" style={{ backgroundColor: '#0f172a', color: '#facc15' }}>
              🔗 الرابط: rr-student.web.app
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetGeneratorJSON;