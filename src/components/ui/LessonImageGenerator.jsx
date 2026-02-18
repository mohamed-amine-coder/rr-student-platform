import React, { useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image';
import { jsPDF } from 'jspdf';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { 
  Trash2, Image as ImageIcon, Download, MoveUp, MoveDown, 
  Plus, X, FileJson, Layers, FileText, UploadCloud
} from 'lucide-react';

const StableLessonGenerator = () => {
  const slideRefs = useRef([]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [faculty, setFaculty] = useState("FSSM - Marrakech");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [jsonInput, setJsonInput] = useState("");
  const [slides, setSlides] = useState([{ id: 1, blocks: [] }]);

  // --- 1. خوارزمية التقسيم التلقائي الذكي ---
  const distributeBlocksToSlides = (blocks) => {
    const newSlides = [];
    let currentSlideBlocks = [];
    let currentHeightScore = 0;
    const MAX_SCORE = 400;

    blocks.forEach((block, index) => {
      let weight = 0;
      if (block.type === 'h1') weight = 150;
      else if (block.type === 'h2') weight = 80;
      else if (block.type === 'image') weight = 200;
      else if (block.type === 'p') weight = 50 + (block.content.length / 3);

      const isH1Start = block.type === 'h1' && index > 0;
      
      if ((currentHeightScore + weight > MAX_SCORE) || isH1Start) {
        if (currentSlideBlocks.length > 0) newSlides.push({ id: Date.now() + index, blocks: currentSlideBlocks });
        currentSlideBlocks = [block];
        currentHeightScore = weight;
      } else {
        currentSlideBlocks.push(block);
        currentHeightScore += weight;
      }
    });

    if (currentSlideBlocks.length > 0) newSlides.push({ id: Date.now() + 'last', blocks: currentSlideBlocks });
    return newSlides;
  };

  // --- 2. دالة تحميل PDF (آمنة من CORS) ---
  const handlePdfDownload = async () => {
    setIsGenerating(true);
    const baseName = generateFileName();
    
    try {
      const doc = new jsPDF({ orientation: 'portrait', unit: 'px', format: [1080, 1350] });

      for (let i = 0; i < slides.length; i++) {
        const element = slideRefs.current[i];
        if (element) {
          // استعملنا كاش (cache) وحيدنا الكروس أورجين باش نتفاداو المشاكل
          const dataUrl = await htmlToImage.toPng(element, { 
            quality: 1, 
            pixelRatio: 2,
            skipFonts: true // كيسرع العملية وكيقلل الأخطاء
          });
          
          doc.addImage(dataUrl, 'PNG', 0, 0, 1080, 1350);
          if (i < slides.length - 1) doc.addPage([1080, 1350]);
        }
      }
      doc.save(`${baseName}.pdf`);
    } catch (error) {
      console.error("PDF Error:", error);
      alert("وقع خطأ، غالباً بسبب صورة من رابط خارجي. استعمل صور من حاسوبك فقط.");
    } finally {
      setIsGenerating(false);
    }
  };

  // --- Helpers ---
  const handleSmartImport = () => {
    try {
      const cleanJson = jsonInput.replace(/```json/g, '').replace(/```/g, '').trim();
      const rawBlocks = JSON.parse(cleanJson);
      
      // هنا كنأكدو أن أي صورة جات فـ JSON كتجي خاوية باش نتا تعمرها من الحاسوب
      const processed = rawBlocks.map((b, i) => ({ 
        ...b, 
        id: Date.now() + i, 
        content: b.type === 'image' ? "" : (b.content || '') 
      }));

      const organized = distributeBlocksToSlides(processed);
      setSlides(organized);
      setActiveSlideIndex(0);
      setShowImport(false);
      setJsonInput("");
    } catch (e) { alert("كود JSON غير صحيح"); }
  };

  const generateFileName = () => {
    const h1 = slides.find(s => s.blocks.find(b => b.type === 'h1'))?.blocks.find(b => b.type === 'h1');
    return h1 ? h1.content.replace(/[^\w\s\u0600-\u06FF]/g, '').trim().replace(/\s+/g, '-') : "RR-Lesson";
  };

  const updateSlideBlocks = (idx, blocks) => {
    const newSlides = [...slides]; newSlides[idx].blocks = blocks; setSlides(newSlides);
  };

  const handleImgUpload = (blockId, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newBlocks = slides[activeSlideIndex].blocks.map(b => 
          b.id === blockId ? { ...b, content: reader.result } : b
        );
        updateSlideBlocks(activeSlideIndex, newBlocks);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-screen bg-[#020617] flex flex-col xl:flex-row font-sans overflow-hidden text-right" dir="rtl">
      
      {/* Sidebar المحرر */}
      <div className="w-full xl:w-[400px] bg-[#0f172a] border-l border-slate-800 flex flex-col h-full relative z-20 shadow-2xl">
        
        {showImport && (
          <div className="absolute inset-0 z-50 bg-[#0f172a]/95 backdrop-blur p-6 flex flex-col gap-4">
             <div className="flex justify-between items-center text-[#fbbf24]"><h3 className="font-bold">استيراد نص الدرس</h3><button onClick={()=>setShowImport(false)}><X/></button></div>
             <p className="text-[10px] text-slate-400">الصور سيتم تجاهلها في الرابط وتترك لك حرية رفعها من جهازك.</p>
             <textarea value={jsonInput} onChange={(e)=>setJsonInput(e.target.value)} className="flex-1 bg-slate-900 border border-slate-700 rounded p-2 text-xs font-mono text-green-400" placeholder='[{"type":"h1", "content":"..."}]'/>
             <button onClick={handleSmartImport} className="bg-[#fbbf24] text-black font-bold py-3 rounded-lg hover:bg-[#d9a41d]">🚀 تقسيم وتوزيع تلقائي</button>
          </div>
        )}

        <div className="p-4 border-b border-slate-800">
           <div className="flex justify-between items-center mb-4">
             <h2 className="text-[#fbbf24] font-bold flex items-center gap-2"><Layers size={18}/> {slides.length} شريحة</h2>
             <div className="flex gap-2">
                <button onClick={() => setShowImport(true)} className="p-2 bg-slate-800 rounded text-slate-400 hover:text-white border border-slate-700" title="Import JSON"><FileJson size={18}/></button>
                <button onClick={handlePdfDownload} disabled={isGenerating} className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded text-xs font-bold flex items-center gap-2 disabled:opacity-50">
                  {isGenerating ? 'جاري...' : <><FileText size={16}/> PDF</>}
                </button>
             </div>
           </div>

           {/* التنقل بين الشرائح */}
           <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar scrollbar-hide">
             {slides.map((_, idx) => (
               <button key={idx} onClick={() => setActiveSlideIndex(idx)} className={`flex-shrink-0 w-10 h-10 rounded-lg border-2 font-bold text-sm transition ${activeSlideIndex === idx ? 'border-[#fbbf24] bg-[#fbbf24]/10 text-[#fbbf24]' : 'border-slate-700 text-slate-500'}`}>{idx + 1}</button>
             ))}
             <button onClick={() => setSlides([...slides, {id: Date.now(), blocks: []}])} className="w-10 h-10 border-2 border-dashed border-slate-700 rounded-lg flex items-center justify-center text-slate-500 hover:text-white"><Plus/></button>
           </div>
        </div>

        {/* قائمة البلوكات */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
           {slides[activeSlideIndex]?.blocks.map((block, index) => (
             <div key={block.id} className="bg-[#1e293b] p-3 rounded-lg border border-slate-700 group relative">
               <div className="flex justify-between mb-2">
                 <span className="text-[10px] uppercase text-[#fbbf24] font-bold bg-[#fbbf24]/10 px-2 py-0.5 rounded">{block.type}</span>
                 <div className="flex gap-2">
                    <button onClick={()=>updateSlideBlocks(activeSlideIndex, slides[activeSlideIndex].blocks.filter(b=>b.id!==block.id))}><Trash2 size={14} className="text-red-400"/></button>
                 </div>
               </div>
               
               {block.type === 'image' ? (
                 <div className="flex flex-col gap-2">
                   {block.content && <img src={block.content} className="w-full h-20 object-cover rounded mb-2 border border-slate-600" alt="preview"/>}
                   <label className="flex items-center justify-center gap-2 bg-slate-800 border border-dashed border-slate-600 p-4 rounded cursor-pointer hover:bg-slate-700 transition">
                      <UploadCloud size={16} className="text-slate-400"/>
                      <span className="text-[10px] text-slate-300">اختر صورة من حاسوبك</span>
                      <input type="file" className="hidden" accept="image/*" onChange={(e)=>handleImgUpload(block.id, e)}/>
                   </label>
                 </div>
               ) : (
                 <textarea value={block.content} onChange={(e)=>{
                    const newBlocks = [...slides[activeSlideIndex].blocks]; newBlocks[index].content = e.target.value; updateSlideBlocks(activeSlideIndex, newBlocks);
                 }} className="w-full bg-slate-900 text-white text-sm p-2 rounded border border-slate-800 focus:border-[#fbbf24] outline-none" rows={block.type === 'p' ? 4 : 2}/>
               )}
             </div>
           ))}
        </div>
      </div>

      {/* منطقة المعاينة */}
      <div className="flex-1 bg-[#020617] p-8 overflow-y-auto custom-scrollbar flex flex-col items-center gap-12">
         {slides.map((slide, idx) => (
           <div key={slide.id} className="relative group origin-top scale-[0.4] sm:scale-[0.6] lg:scale-[0.7] mb-[-40%] sm:mb-[-25%] lg:mb-[-15%]">
              <div ref={el => slideRefs.current[idx] = el} 
                   className={`w-[1080px] h-[1350px] bg-gradient-to-b from-[#0f172a] to-[#1e293b] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative border-4 ${activeSlideIndex === idx ? 'border-[#fbbf24]' : 'border-slate-800'}`}
                   onClick={() => setActiveSlideIndex(idx)}>
                
                {/* Header */}
                <div className="h-32 px-10 flex justify-between items-center border-b border-slate-800/50 bg-[#0f172a]/40" dir="ltr">
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 bg-[#fbbf24] rounded-xl flex items-center justify-center shadow-lg"><span className="text-3xl">⚡</span></div>
                     <div><h1 className="text-white text-3xl font-black tracking-tighter">RR STUDENT</h1><span className="text-[#fbbf24] text-xs font-bold tracking-[0.3em] uppercase">Biology Darija</span></div>
                  </div>
                  <div className="px-5 py-2 rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 text-sm font-bold tracking-widest">{faculty}</div>
                </div>

                {/* Body Content */}
                <div className="flex-1 p-14 flex flex-col gap-8 justify-center" dir="rtl">
                   {slide.blocks.map(block => {
                     if (!block.content && block.type !== 'image') return null;
                     switch(block.type) {
                        case 'h1': return <h1 key={block.id} className="text-6xl font-black text-white leading-tight mb-4 text-center">{block.content}</h1>;
                        case 'h2': return <div key={block.id} className="flex items-center gap-4 mt-4"><span className="w-12 h-1 bg-[#fbbf24]"></span><h2 className="text-4xl font-bold text-[#fbbf24]">{block.content}</h2></div>;
                        case 'p': return <p key={block.id} className="text-3xl text-slate-300 font-medium leading-[1.8] text-justify whitespace-pre-wrap">{block.content}</p>;
                        case 'image': return block.content ? (
                          <img key={block.id} src={block.content} className="w-full rounded-2xl border-2 border-slate-700 shadow-2xl object-cover max-h-[600px]" alt="user-upload"/>
                        ) : (
                          <div key={block.id} className="w-full h-[300px] border-2 border-dashed border-slate-700 rounded-2xl flex items-center justify-center text-slate-600 bg-black/20">
                            [ يرجى رفع صورة من الحاسوب ]
                          </div>
                        );
                        default: return null;
                     }
                   })}
                </div>

                {/* Footer */}
                <div className="h-24 bg-[#020617] flex justify-between items-center px-10 border-t border-slate-800" dir="ltr">
                   <div className="flex gap-2">
                      {[...Array(slides.length)].map((_, i) => (
                        <div key={i} className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-[#fbbf24]' : 'w-2 bg-slate-700'}`}></div>
                      ))}
                   </div>
                   <div className="text-slate-500 font-mono text-xl">rr-student.web.app</div>
                </div>
              </div>
           </div>
         ))}
         <div className="h-64 w-full"></div>
      </div>
    </div>
  );
};

export default StableLessonGenerator;