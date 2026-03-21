import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase'; 
import { BookOpen, Plus, Edit2, X, Loader2 } from 'lucide-react';

const ModulesManager = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // حالات الفورميلير
  const [isEditMode, setIsEditMode] = useState(false); // واش حنا فوضع التعديل؟
  
  const [moduleId, setModuleId] = useState(''); 
  const [moduleTitle, setModuleTitle] = useState(''); 
  const [moduleDesc, setModuleDesc] = useState(''); 
  const [modulePrice, setModulePrice] = useState('99'); 

  // جلب الموديلات
  const fetchModules = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'modules'));
      const modulesList = [];
      querySnapshot.forEach((doc) => {
        modulesList.push({ id: doc.id, ...doc.data() });
      });
      setModules(modulesList);
    } catch (error) {
      console.error("خطأ فجلب الموديلات:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModules();
  }, []);

  // ملي نكليكيو على زر التعديل فشي موديل
  const handleEditClick = (mod) => {
    setIsEditMode(true);
    setModuleId(mod.id);
    setModuleTitle(mod.title || '');
    setModuleDesc(mod.description || '');
    setModulePrice(mod.price || '99');
    
    // نطلعو الفوق باش تبان ليه الفورم
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // إلغاء التعديل والرجوع لوضع الإضافة
  const handleCancelEdit = () => {
    setIsEditMode(false);
    setModuleId('');
    setModuleTitle('');
    setModuleDesc('');
    setModulePrice('99');
  };

  // دالة الحفظ (كتجمع بين الإضافة والتعديل)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!moduleId || !moduleTitle) {
      alert("الـ ID والعنوان ضروريين!");
      return;
    }

    setIsSaving(true);
    try {
      if (isEditMode) {
        // --- حالة التعديل (Update) ---
        // ملاحظة: الـ ID مايمكنش يتبدل ففايربيز، كنبدلو غير المعلومات لداخل
        const moduleRef = doc(db, 'modules', moduleId);
        await updateDoc(moduleRef, {
          title: moduleTitle,
          description: moduleDesc,
          price: Number(modulePrice)
        });
        alert("✏️ تم تحديث معلومات الموديل بنجاح!");
      } else {
        // --- حالة الإضافة (Add New) ---
        const safeId = moduleId.trim().toLowerCase().replace(/\s+/g, '-');
        const moduleRef = doc(db, 'modules', safeId);
        await setDoc(moduleRef, {
          title: moduleTitle,
          description: moduleDesc,
          price: Number(modulePrice),
          chapters: [] // كنبداوه بفهرس خاوي
        });
        alert("✅ تم إضافة الموديل بنجاح!");
      }
      
      handleCancelEdit(); // كنفرغو الخانات
      fetchModules(); // كنجيبو الداتا الجديدة

    } catch (error) {
      console.error("Error saving module: ", error);
      alert("❌ وقع شي مشكل فالحفظ.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto font-tajawal dir-rtl pb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
          <BookOpen size={28} />
        </div>
        <h1 className="text-3xl font-black text-slate-800">إدارة الموديلات</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* --- الفورميلير لإضافة/تعديل موديل --- */}
        <div className={`md:col-span-1 bg-white p-6 rounded-2xl shadow-sm border-2 transition-colors h-fit ${isEditMode ? 'border-yellow-400' : 'border-slate-200'}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black flex items-center gap-2">
              {isEditMode ? <><Edit2 size={20} className="text-yellow-500" /> تعديل الموديل</> : <><Plus size={20} className="text-green-500" /> إضافة موديل</>}
            </h2>
            {isEditMode && (
              <button onClick={handleCancelEdit} className="text-slate-400 hover:text-red-500 p-1">
                <X size={20} />
              </button>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">الـ ID</label>
              <input 
                type="text" 
                placeholder="ex: bio-vegetale"
                value={moduleId}
                onChange={(e) => setModuleId(e.target.value)}
                disabled={isEditMode} // ماكنخليوهش يبدل الـ ID يلا كان كيعدل
                className={`w-full p-3 rounded-xl border outline-none dir-ltr text-left ${isEditMode ? 'bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed' : 'bg-white border-slate-300 focus:ring-2 focus:ring-blue-400'}`}
                required
              />
              {isEditMode && <p className="text-[10px] text-slate-400 mt-1">* لا يمكن تغيير المُعرف (ID) بعد الإنشاء.</p>}
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">العنوان</label>
              <input 
                type="text" 
                value={moduleTitle}
                onChange={(e) => setModuleTitle(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">الوصف</label>
              <textarea 
                value={moduleDesc}
                onChange={(e) => setModuleDesc(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-400 h-24 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">الثمن (درهم)</label>
              <input 
                type="number" 
                value={modulePrice}
                onChange={(e) => setModulePrice(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button 
              type="submit"
              disabled={isSaving}
              className={`w-full py-3 rounded-xl font-black flex items-center justify-center gap-2 transition-all text-white
                ${isSaving ? 'bg-slate-400' : (isEditMode ? 'bg-yellow-500 hover:bg-yellow-600 shadow-lg shadow-yellow-200' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200')}
              `}
            >
              {isSaving ? <Loader2 className="animate-spin" size={20} /> : (isEditMode ? '💾 حفظ التعديلات' : '➕ حفظ الموديل الجديد')}
            </button>
          </form>
        </div>

        {/* --- لائحة الموديلات الحالية --- */}
        <div className="md:col-span-2">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <Loader2 className="animate-spin text-blue-500" size={40} />
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {modules.map((mod) => (
                <div key={mod.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-400 transition-colors group relative">
                  
                  {/* زر التعديل السحري */}
                  <button 
                    onClick={() => handleEditClick(mod)}
                    className="absolute top-4 left-4 p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-yellow-100 hover:text-yellow-600 transition-colors"
                    title="تعديل الموديل"
                  >
                    <Edit2 size={16} />
                  </button>

                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-slate-100 text-slate-600 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider dir-ltr">
                      {mod.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-800 mb-2 pl-8">{mod.title}</h3>
                  <p className="text-sm text-slate-500 line-clamp-2">{mod.description || 'بدون وصف'}</p>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between font-bold">
                    <span className="text-xs text-slate-400">الدروس: {mod.chapters?.length || 0}</span>
                    <span className="text-green-600 text-sm">{mod.price} DH</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ModulesManager;