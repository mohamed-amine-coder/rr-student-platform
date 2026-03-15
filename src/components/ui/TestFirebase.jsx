import React, { useState, useEffect } from "react";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "././../../../firebase.js"; // تأكد من المسار ديال فايربيز عندك

const TestFirebase = () => {
  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(false);

  // هادا هو الدرس التجريبي لي غنصيفطوه لفايربيز
  const dummyLesson = {
    id: "test_lesson_1",
    title: "Introduction à la Biologie Cellulaire",
    blocks: [
      { type: "title", content: { number: "1", title_fr: "La Cellule", title_ar: "الخلية" } },
      { type: "introduction", content: { text: "هذا مجرد درس تجريبي باش نشوفو كيفاش فايربيز كيعرض البيانات." } },
      { type: "concept", content: { title_fr: "Définition", explanation: "الخلية هي الوحدة الأساسية البنيوية والوظيفية لجميع الكائنات الحية.", keywords: ["Cellule", "Unité", "Organisme"] } }
    ]
  };

  // دالة باش نرفعو الدرس لفايربيز
  const addLessonToFirebase = async () => {
    setLoading(true);
    try {
      await setDoc(doc(db, "lessons", dummyLesson.id), dummyLesson);
      alert("تمت إضافة الدرس بنجاح لفايربيز!");
      fetchLesson(); // نجبدو الدرس مباشرة من بعد ما نزيدوه
    } catch (error) {
      console.error("خطأ:", error);
    }
    setLoading(false);
  };

  // دالة باش نجبدو الدرس من فايربيز
  const fetchLesson = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, "lessons", "test_lesson_1");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLessonData(docSnap.data());
      } else {
        setLessonData(null);
      }
    } catch (error) {
      console.error("خطأ:", error);
    }
    setLoading(false);
  };

  // دالة باش نمسحو الدرس من فايربيز
  const deleteLesson = async () => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "lessons", "test_lesson_1"));
      alert("تم مسح الدرس من فايربيز!");
      setLessonData(null); // نحيدوه حتى من الشاشة
    } catch (error) {
      console.error("خطأ:", error);
    }
    setLoading(false);
  };

  // أول ما تفتح الصفحة، كنحاولو نجبدو الدرس إذا كان ديجا كاين
  useEffect(() => {
    fetchLesson();
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white rounded-xl shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">تجربة فايربيز</h1>
      
      <div className="flex gap-4 justify-center mb-8">
        <button 
          onClick={addLessonToFirebase} 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          1. إضافة الدرس التجريبي
        </button>
        <button 
          onClick={deleteLesson} 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          2. مسح الدرس التجريبي
        </button>
      </div>

      {loading && <p className="text-center text-gray-500">جاري التحميل...</p>}

      {/* هنا غنعرضو الدرس يلا كان كاين */}
      {lessonData && !loading && (
        <div className="border-t pt-6 mt-6">
          <h2 className="text-3xl font-bold text-center mb-8">{lessonData.title}</h2>
          
          <div className="space-y-6 text-right" dir="rtl">
            {lessonData.blocks.map((block, index) => {
              // كنستعملو switch باش نعرضو كل نوع ديال block بالشكل لي كيناسبو
              switch (block.type) {
                case "title":
                  return (
                    <h3 key={index} className="text-xl font-bold text-blue-800">
                      {block.content.number}- {block.content.title_ar} ({block.content.title_fr})
                    </h3>
                  );
                case "introduction":
                  return (
                    <p key={index} className="text-gray-700 bg-gray-50 p-4 rounded-lg border-r-4 border-blue-500">
                      {block.content.text}
                    </p>
                  );
                case "concept":
                  return (
                    <div key={index} className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-bold text-yellow-800 mb-2">{block.content.title_fr}</h4>
                      <p className="mb-2">{block.content.explanation}</p>
                      <div className="flex gap-2">
                        {block.content.keywords.map((kw, i) => (
                          <span key={i} className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestFirebase;