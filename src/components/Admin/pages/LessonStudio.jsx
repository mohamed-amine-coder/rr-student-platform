import React, { useState, useEffect } from 'react';
// زدت هنا deleteDoc
import { collection, getDocs, doc, getDoc, setDoc, updateDoc, arrayUnion, deleteDoc } from 'firebase/firestore';
import { db } from '../../../../firebase'; 
// زدت هنا أيقونة Trash2 ديال المسح
import { PenTool, Edit3, PlusCircle, Loader2, Trash2 } from 'lucide-react';

const LessonStudio = () => {
  // 1. الحالات الأساسية
  const [mode, setMode] = useState('add'); // 'add' = إضافة، 'edit' = تعديل
  const [modules, setModules] = useState([]);
  const [selectedModuleId, setSelectedModuleId] = useState('');
  const [loadingModules, setLoadingModules] = useState(true);
  
  // حالات خاصة بالتعديل
  const [moduleChapters, setModuleChapters] = useState([]); 
  const [selectedLessonId, setSelectedLessonId] = useState(''); 
  const [isLoadingLesson, setIsLoadingLesson] = useState(false);

  const [jsonInput, setJsonInput] = useState('');
  const [blocks, setBlocks] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  // 2. جلب الموديلات فالبداية
  useEffect(() => {
    const fetchModules = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'modules'));
        const modulesList = [];
        querySnapshot.forEach((doc) => {
          modulesList.push({ id: doc.id, title: doc.data().title || doc.id });
        });
        setModules(modulesList);
      } catch (error) {
        console.error("خطأ فجلب الموديلات:", error);
      } finally {
        setLoadingModules(false);
      }
    };
    fetchModules();
  }, []);

  // 3. ملي كتختار موديل
  useEffect(() => {
    if (selectedModuleId) {
      const fetchChapters = async () => {
        const modRef = doc(db, 'modules', selectedModuleId);
        const modSnap = await getDoc(modRef);
        if (modSnap.exists()) {
          setModuleChapters(modSnap.data().chapters || []);
        }
      };
      fetchChapters();
    }
    setJsonInput('');
    setBlocks([]);
    setSelectedLessonId('');
  }, [selectedModuleId]);

  // 4. ملي كتختار درس باش تعدلو
  useEffect(() => {
    if (mode === 'edit' && selectedLessonId) {
      const fetchLessonData = async () => {
        setIsLoadingLesson(true);
        try {
          const lessonRef = doc(db, 'modules', selectedModuleId, 'lessons', selectedLessonId);
          const lessonSnap = await getDoc(lessonRef);
          
          if (lessonSnap.exists()) {
            const data = lessonSnap.data();
            setJsonInput(JSON.stringify(data, null, 2));
            setBlocks(data.blocks || []);
          } else {
            alert("مالقيناش هاد الدرس فـ قاعدة البيانات!");
          }
        } catch (error) {
          console.error("خطأ فجلب الدرس:", error);
        } finally {
          setIsLoadingLesson(false);
        }
      };
      fetchLessonData();
    }
  }, [selectedLessonId, mode, selectedModuleId]);

  // 5. تحويل JSON
  const handleParseJSON = () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      if (parsedData.blocks && Array.isArray(parsedData.blocks)) {
        setBlocks(parsedData.blocks);
        alert("✅ تم تحويل الـ JSON بنجاح!");
      } else {
        alert("⚠️ الـ JSON ديالك مافيهش array سميتها blocks");
      }
    } catch (error) {
      alert("❌ كاين شي خطأ فـ الكود ديال JSON. تأكد من الفواصل والأقواس!");
    }
  };

  // 6. الحفظ لـ Firebase (إضافة/تعديل)
  const handleSaveToFirebase = async () => {
    if (!selectedModuleId || !jsonInput) {
      alert("عافاك ختار الموديل وتأكد بلي الـ JSON كاين!");
      return;
    }

    setIsSaving(true);
    try {
      const lessonData = JSON.parse(jsonInput);
      const lessonId = lessonData.id;

      if (!lessonId) {
        alert("❌ الكود ديال JSON خاص ضروري يكون فيه حقل 'id' ديال الدرس!");
        setIsSaving(false);
        return;
      }

      const formattedBlocks = lessonData.blocks.map(block => {
        if (block.content && typeof block.content === 'string') {
          return { type: block.type, text: block.content };
        } else if (block.content) {
          return { type: block.type, ...block.content };
        } else {
          return block; 
        }
      });

      const lessonRef = doc(db, 'modules', selectedModuleId, 'lessons', lessonId);
      await setDoc(lessonRef, {
        id: lessonId,
        title: lessonData.title || "درس بدون عنوان",
        isFree: lessonData.isFree || false,
        quickInfo: lessonData.quickInfo || "",
        releaseDate: lessonData.releaseDate || null,
        blocks: formattedBlocks
      });

      const moduleRef = doc(db, 'modules', selectedModuleId);
      
      if (mode === 'add') {
        await updateDoc(moduleRef, {
          chapters: arrayUnion({
            id: lessonId,
            title: lessonData.title || "درس بدون عنوان",
            type: "lesson",
            isFree: lessonData.isFree || false, 
            quickInfo: lessonData.quickInfo || "",
            releaseDate: lessonData.releaseDate || null
          })
        });
        alert("✅ مبروك! الدرس ترفع بنجاح 🚀");
        setJsonInput('');
        setBlocks([]);
      } else {
        const modSnap = await getDoc(moduleRef);
        const currentChapters = modSnap.data().chapters || [];
        const updatedChapters = currentChapters.map(ch => 
          ch.id === lessonId ? {
            ...ch,
            title: lessonData.title || "درس بدون عنوان",
            isFree: lessonData.isFree || false,
            quickInfo: lessonData.quickInfo || "",
            releaseDate: lessonData.releaseDate || null
          } : ch
        );
        await updateDoc(moduleRef, { chapters: updatedChapters });
        alert("✏️ تم تعديل وتحديث الدرس بنجاح!");
      }

    } catch (error) {
      console.error("خطأ في الحفظ:", error);
      alert("❌ وقع شي مشكل فالحفظ لفايرستور.");
    } finally {
      setIsSaving(false);
    }
  };

  // 7. دالة حذف الدرس الجديدة 🔥
  const handleDeleteLesson = async () => {
    if (!selectedModuleId || !selectedLessonId) {
      alert("عافاك ختار الدرس لي بغيتي تمسح!");
      return;
    }

    // تأكيد قبل الحذف باش ما يطيرش الدرس بالغلط
    const isConfirmed = window.confirm("⚠️ واش متأكد بغيتي تمسح هاد الدرس بصفة نهائية؟ هاد العملية مايمكنش تراجع عليها!");
    if (!isConfirmed) return;

    setIsSaving(true);
    try {
      // أ) مسح الدرس من جدول الدروس (Subcollection)
      const lessonRef = doc(db, 'modules', selectedModuleId, 'lessons', selectedLessonId);
      await deleteDoc(lessonRef);

      // ب) مسح الدرس من الفهرس (chapters) فالموديل
      const moduleRef = doc(db, 'modules', selectedModuleId);
      const modSnap = await getDoc(moduleRef);
      if (modSnap.exists()) {
        const currentChapters = modSnap.data().chapters || [];
        // كنخليو كاع الدروس من غير هادا لي مسحنا
        const updatedChapters = currentChapters.filter(ch => ch.id !== selectedLessonId);
        await updateDoc(moduleRef, { chapters: updatedChapters });
        
        // تحديث الواجهة باش يغبر الدرس من القائمة
        setModuleChapters(updatedChapters);
      }

      alert("🗑️ تم حذف الدرس بنجاح!");
      
      // تفريغ الخانات بعد الحذف
      setJsonInput('');
      setBlocks([]);
      setSelectedLessonId('');

    } catch (error) {
      console.error("خطأ في الحذف:", error);
      alert("❌ وقع شي مشكل فالحذف.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto font-tajawal dir-rtl pb-20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
            <PenTool size={28} />
          </div>
          <h1 className="text-3xl font-black text-slate-800">ستوديو الدروس</h1>
        </div>

        <div className="flex bg-slate-200 p-1 rounded-xl">
          <button 
            onClick={() => setMode('add')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${mode === 'add' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <PlusCircle size={18} /> إضافة جديد
          </button>
          <button 
            onClick={() => setMode('edit')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${mode === 'edit' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <Edit3 size={18} /> تعديل درس
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-bold text-slate-700 mb-2">ختار الموديل:</label>
          <select 
            value={selectedModuleId}
            onChange={(e) => setSelectedModuleId(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="" disabled>-- الموديل --</option>
            {modules.map((mod) => (
              <option key={mod.id} value={mod.id}>{mod.title}</option>
            ))}
          </select>
        </div>

        {mode === 'edit' && selectedModuleId && (
          <div className="flex-1">
            <label className="block text-sm font-bold text-slate-700 mb-2">ختار الدرس لتعديله:</label>
            <select 
              value={selectedLessonId}
              onChange={(e) => setSelectedLessonId(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="" disabled>-- الفهرس --</option>
              {moduleChapters.map((ch) => (
                <option key={ch.id} value={ch.id}>{ch.title}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6 relative">
        {isLoadingLesson && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center rounded-2xl z-10">
            <Loader2 className="animate-spin text-indigo-500" size={40} />
          </div>
        )}
        
        <label className="block text-sm font-bold text-slate-700 mb-2">
          {mode === 'add' ? 'لصق كود الـ JSON ديال الدرس الجديد هنا:' : 'عدل كود الـ JSON ديال الدرس هنا:'}
        </label>
        <textarea 
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          className="w-full h-80 p-4 rounded-xl border border-slate-300 bg-slate-50 font-mono text-sm outline-none focus:ring-2 focus:ring-indigo-400 text-left dir-ltr custom-scrollbar"
        />
        
        {/* --- هنا زدت زر الحذف حدا زر التحويل --- */}
        <div className="flex flex-col md:flex-row gap-3 mt-4">
          <button 
            onClick={handleParseJSON}
            className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all flex-1"
          >
            🔄 {mode === 'add' ? 'تحويل إلى بلوكات (Parse)' : 'تحديث المعاينة'}
          </button>
          
          {mode === 'edit' && selectedLessonId && (
            <button 
              onClick={handleDeleteLesson}
              disabled={isSaving}
              className="bg-red-50 text-red-600 border border-red-200 px-6 py-3 rounded-xl font-bold hover:bg-red-100 transition-all flex items-center justify-center gap-2 md:w-auto"
            >
              <Trash2 size={20} /> حذف الدرس
            </button>
          )}
        </div>
      </div>

      {blocks.length > 0 && (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <h2 className="text-xl font-black">👀 معاينة البلوكات ({blocks.length})</h2>
            
            <button 
              onClick={handleSaveToFirebase}
              disabled={isSaving}
              className={`px-8 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all
                ${isSaving ? 'bg-slate-400 cursor-not-allowed' : (mode === 'add' ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-200' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200')}
              `}
            >
              {isSaving ? <Loader2 className="animate-spin" size={20} /> : (mode === 'add' ? '💾 نشر الدرس الجديد' : '💾 حفظ التعديلات')}
            </button>
          </div>
          
          <div className="space-y-4">
            {blocks.map((block, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-black px-2 py-1 rounded mb-2 uppercase">
                  {block.type}
                </span>
                <pre className="text-xs text-slate-600 overflow-x-auto text-left dir-ltr custom-scrollbar">
                  {JSON.stringify(block, null, 2)}
                </pre>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonStudio;