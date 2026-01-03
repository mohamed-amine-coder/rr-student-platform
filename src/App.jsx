// import React from 'react';
// import { BookOpen, CheckCircle2, XCircle, Zap, ChevronLeft, AlertCircle, Sparkles, GraduationCap, PlayCircle } from 'lucide-react';

// // --- 1. DATA (البيانات) ---
// // هنا فين كتحكم فالمحتوى بلا ما تقيس التصميم

// const NAV_LINKS = [
//   { label: "علاش حنا؟", href: "#comparison" },
//   { label: "المواد", href: "#courses" },
//   { label: "الأثمنة", href: "#pricing" },
// ];

// const PROBLEMS = [
//   "فرنسية أكاديمية صعيبة فالفهم",
//   "رسومات بيض وكحل ماواضحاش",
//   "ضياع السوايع فـ Traduction",
//   "تشتت وستريس قبل الامتحان"
// ];

// const SOLUTIONS = [
//   "شرح بالداريجة كأنك كتهضر مع صاحبك",
//   "سكيتشنوتس ملونة جامعة الزبدة",
//   "كويزات QCM بحال ديال الامتحان",
//   "ثقة كاملة و Validé مضمونة"
// ];

// const COURSES = [
//   {
//     id: 1,
//     title: "Biologie Cellulaire",
//     lessons: 12,
//     quizzes: 50,
//     price: 30,
//     isNew: true,
//     // هنا فين غاتحط مسار الصورة ديالك من بعد
//     image: "/api/placeholder/400/300" 
//   },
//   {
//     id: 2,
//     title: "Géologie Générale",
//     lessons: 10,
//     quizzes: 40,
//     price: 30,
//     isNew: false,
//     image: "/api/placeholder/400/300"
//   },
//   {
//     id: 3,
//     title: "Chimie & Physique",
//     lessons: 15,
//     quizzes: 60,
//     price: 30,
//     isNew: false,
//     image: "/api/placeholder/400/300"
//   }
// ];

// // --- 2. COMPONENTS (المكونات) ---
// // هادو طروفة صغار كنركبوهم باش نصاوبو الصفحة

// const ComparisonItem = ({ text, type }) => {
//   const isProblem = type === 'problem';
//   return (
//     <li className={`flex items-center gap-3 text-sm font-medium ${isProblem ? 'text-slate-400' : 'text-slate-800 font-bold'}`}>
//       {isProblem ? <XCircle size={16} className="shrink-0" /> : <CheckCircle2 size={16} className="text-yellow-500 shrink-0" />}
//       <span className={isProblem ? "line-through decoration-slate-200" : ""}>{text}</span>
//     </li>
//   );
// };

// const CourseCard = ({ title, lessons, quizzes, price, image, isNew }) => (
//   <div className="group bg-white border border-slate-100 p-4 rounded-[2rem] hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 cursor-pointer flex flex-col h-full">
//     {/* Image Container */}
//     <div className="aspect-[4/3] bg-slate-50 rounded-[1.5rem] mb-6 relative overflow-hidden group-hover:bg-yellow-50 transition-colors">
//       {/* هنا الصورة الحقيقية */}
//       <img 
//         src={image} 
//         alt={title} 
//         className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
//       />
      
//       {/* Overlay Icon (Optional) */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <PlayCircle size={40} className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" fill="black"/>
//       </div>

//       {isNew && (
//         <span className="absolute top-4 right-4 bg-yellow-400 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full shadow-sm">
//           متاح الآن
//         </span>
//       )}
//     </div>

//     <div className="flex-1">
//         <h4 className="font-black text-lg mb-2 px-2 text-slate-900">{title}</h4>
//         <p className="text-slate-400 text-xs px-2 mb-6 font-medium">
//             {lessons} دروس مبسطة + {quizzes} سؤال QCM
//         </p>
//     </div>

//     <div className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl group-hover:bg-slate-900 transition-colors mt-auto">
//       <span className="font-black text-slate-900 group-hover:text-white transition-colors">{price} DH</span>
//       <button className="text-slate-400 group-hover:text-yellow-400 transition-colors">
//         <ChevronLeft size={20} />
//       </button>
//     </div>
//   </div>
// );

// // --- 3. MAIN PAGE (الصفحة الرئيسية) ---

// const LandingPage = () => {
//   return (
//     <div dir="rtl" className="min-h-screen bg-[#FCFCFC] text-slate-800 font-sans selection:bg-yellow-200">
      
//       {/* Navbar */}
//       <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100">
//         <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-2 cursor-pointer">
//             <div className="bg-yellow-400 p-1.5 rounded-lg shadow-sm shadow-yellow-200">
//               <Zap size={20} fill="black" className="text-slate-900" />
//             </div>
//             <span className="text-xl font-black tracking-tighter text-slate-900">RR STUDENT</span>
//           </div>
          
//           <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500">
//             {NAV_LINKS.map((link, i) => (
//               <a key={i} href={link.href} className="hover:text-slate-900 transition-colors">{link.label}</a>
//             ))}
//           </div>

//           <button className="bg-slate-900 text-white px-5 py-2 rounded-xl font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-slate-200">
//             دخول
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-12 pb-24 px-6 overflow-hidden">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
//           {/* Text Content */}
//           <div className="flex-1 text-center md:text-right z-10">
//             <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-slate-200">
//               <Sparkles size={12} className="text-yellow-500 fill-yellow-500"/> منصة طلبة S1 بالكلية السملالية
//             </div>
            
//             <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-6 text-slate-900 tracking-tight">
//               قرا بذكاء، <br/>ماشي بتمارة. <br/>
//               <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-yellow-600 relative">
//                 البيولوجيا بالداريجة.
//                 <svg className="absolute w-full h-3 -bottom-1 right-0 text-yellow-300 opacity-50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
//                     <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
//                 </svg>
//               </span>
//             </h1>
            
//             <p className="text-base text-slate-500 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
//               حولنا ليك الـ Polycopes المعقدة لسكيتشنوتس بصرية وشرح مبسط بالداريجة. 
//               كلشي واجد باش تفاليدي الـ S1 ديالك.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//               <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-2xl font-black shadow-lg shadow-yellow-200 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
//                 بدا أول درس فابور <ChevronLeft size={20}/>
//               </button>
//               <button className="bg-white border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all text-slate-600">
//                 شوف المنهجية
//               </button>
//             </div>
//           </div>

//           {/* Hero Character / Visual */}
//           <div className="flex-1 relative w-full max-w-md">
//             {/* الخلفية المزخرفة */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-yellow-200/40 to-slate-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
            
//             {/* Placeholder للشخصية (Mascot) */}
//             <div className="relative aspect-square bg-slate-50 border-4 border-white shadow-2xl shadow-slate-200 rounded-[3rem] overflow-hidden flex items-end justify-center">
//                 {/* هنا غاتحط صورة الشخصية ديالك بصيغة PNG (بدون خلفية) */}
//                 {/* <img src="/path-to-your-mascot.png" className="w-full h-auto object-contain" /> */}
                
//                 {/* Temporary Placeholder Visual */}
//                 <div className="text-center pb-12 opacity-30">
//                     <GraduationCap size={120} className="text-slate-900 mx-auto mb-4" />
//                     <span className="font-black text-2xl uppercase">Character Area</span>
//                 </div>

//                 {/* Floating Elements (Badges) */}
//                 <div className="absolute top-8 left-8 bg-white p-3 rounded-2xl shadow-lg flex items-center gap-2 animate-bounce">
//                     <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 size={16} className="text-green-600"/></div>
//                     <span className="text-xs font-bold">Validé S1</span>
//                 </div>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* Comparison Section */}
//       <section id="comparison" className="py-20 px-6 bg-white relative">
//         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">
          
//           {/* Problems */}
//           <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100">
//             <div className="flex items-center gap-3 mb-8">
//               <div className="bg-white p-2.5 rounded-2xl shadow-sm text-red-500">
//                 <AlertCircle size={24} />
//               </div>
//               <h3 className="font-black text-xl text-slate-800">المعاناة مع الـ Polycope</h3>
//             </div>
//             <ul className="space-y-6">
//               {PROBLEMS.map((text, i) => <ComparisonItem key={i} text={text} type="problem" />)}
//             </ul>
//           </div>

//           {/* Solutions */}
//           <div className="p-10 rounded-[2.5rem] bg-slate-900 border-4 border-yellow-400 shadow-2xl shadow-yellow-200 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -z-0"></div>
//             <div className="flex items-center gap-3 mb-8 relative z-10">
//               <div className="bg-yellow-400 p-2.5 rounded-2xl text-slate-900">
//                 <CheckCircle2 size={24} fill="white" className="text-slate-900"/>
//               </div>
//               <h3 className="font-black text-xl text-white">الراحة مع RR STUDENT</h3>
//             </div>
//             <ul className="space-y-6 relative z-10">
//               {SOLUTIONS.map((text, i) => (
//                   <li key={i} className="flex items-center gap-3 text-sm font-bold text-white">
//                     <div className="bg-slate-800 p-1 rounded-full"><CheckCircle2 size={14} className="text-yellow-400 shrink-0" /></div>
//                     <span>{text}</span>
//                   </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Courses Section */}
//       <section id="courses" className="py-24 px-6 max-w-6xl mx-auto">
//         <div className="flex items-end justify-between mb-12">
//           <div>
//             <h2 className="text-3xl font-black mb-2 text-slate-900">موديلات S1</h2>
//             <p className="text-slate-400 text-sm font-medium">اختار المادة اللي بغيتي تهنى منها اليوم.</p>
//           </div>
//           <div className="hidden md:flex bg-slate-100 p-1.5 rounded-2xl gap-1">
//              <div className="bg-white px-5 py-2 rounded-xl shadow-sm text-xs font-black text-slate-900 cursor-pointer">S1</div>
//              <div className="px-5 py-2 rounded-xl text-xs font-bold text-slate-400 cursor-not-allowed">S2 (قريباً)</div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {COURSES.map((course) => (
//             <CourseCard key={course.id} {...course} />
//           ))}
//         </div>
//       </section>

//       {/* Pricing CTA */}
//       <section id="pricing" className="py-20 px-6">
//         <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden group">
//           {/* Animated Background Elements */}
//           <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] group-hover:bg-yellow-500/20 transition-all duration-1000"></div>
//           <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full blur-[80px]"></div>
          
//           <GraduationCap className="mx-auto mb-6 text-yellow-400 relative z-10" size={56} />
//           <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10">وفّر فلوسك ووقتك</h2>
//           <p className="text-slate-400 mb-10 font-medium max-w-xl mx-auto relative z-10 text-lg">
//             خد الـ S1 كاملة بـ <span className="text-white font-black underline decoration-yellow-400">150 درهم</span> فقط عوض 210 درهم. <br/>
//             عرض محدود لأول 100 طالب.
//           </p>
//           <button className="relative z-10 bg-yellow-400 text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-yellow-400/20 active:scale-95">
//             شري الـ Bundle كاملة دابا
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 border-t border-slate-100 text-center bg-white">
//         <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
//           RR STUDENT — 2026
//         </p>
//         <p className="text-slate-300 text-[10px] font-medium">
//             Made with ❤️ in Marrakech
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

import React, { useState } from 'react';
import { BookOpen, AlertTriangle, Lightbulb, CheckCircle2, XCircle, ChevronLeft, ZoomIn } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* 1. THE DATA                                 */
/* -------------------------------------------------------------------------- */
const lessonData = {

  "id": "bio_cell_s1_proc_vs_euc",
  "title": "Biologie Cellulaire: Cellule Procaryote vs Eucaryote 🔬",
  "blocks": [
    {
      "id": "b1",
      "type": "introduction",
      "content": {
        "text": "هـانـيا لـخـوت! هـاد الـفـقـرة هـي الـسـاس ديـال الـبيـولـوجـيا. إلـا مـافـرقـتيـش بـيـن هـاد الـجـوج، غـادي تـحـصـل فـي الـمـوديـول كـامـل. الـقـضـية سـاهـلـة: واش كـايـن 'نـواة' مـنـظـمـة أولا لا! ⚠️"
      }
    },
    {
      "id": "b2",
      "type": "concept",
      "content": {
        "title_fr": "La différence entre Procaryote et Eucaryote",
      "explanation": "الـ **Procaryote** (بـدائـيـة الـنـواة) هـي واحـد الـخـلية صـغيـرة بـزاف (1 µm)[cite: 77]. [cite_start]مـا عـنـدهـاش **noyau organisé** [cite: 70] [cite_start]ومـا فـيـهـاش الـمـكـيـنـات لـدخـل (Absence de **mitochondries**, **RE**, **Golgi**)[cite: 71, 72, 73, 74]. [cite_start]أمـا الـ **Eucaryote** (حـقـيـقـية الـنـواة) راها كـبـيـرة (10 - 100 µm) [cite: 118] [cite_start]وعـنـدهـا **vrai noyau** [cite: 110] [cite_start]وشـبـكـة ديـال الـأغـشـيـة لـدخـل مـنـظـمـة لـيـنـا الـخـدمـة[cite: 111].",
        "keywords": ["Procaryote", "Eucaryote", "Noyau", "Organites"]
      }
    },
    {
      "id": "b3",
      "type": "analogy",
      "content": {
        "title": "مـثـال الـسـتـوديـو والـفـيـلا 🏠",
        "text": "الـ **Procaryote** بـحـال واحـد الـ **Studio** صـغـيـر: كـولـشي مـجـمـوع فـي بـلاصـة وحـدة (الـنـعـاس، الـكـوزيـنـة، الـصـالـون) بـدون فـواصـل[cite: 79]. [cite_start]لـكـن الـ **Eucaryote** بـحـال واحـد الـ **Villa** كـبـيـرة مـقـسـمـة لـبـيـوت: بـيـت الـنـعـاس (Noyau)، الـكـوزيـنـة (Mitochondrie)، والـبـيـت لـفـيـه الـتـرتـيـب والـتـوزيـع (Appareil de Golgi)[cite: 112, 113, 116]."
      }
    },
    {
      "id": "b4",
      "type": "image",
      "content": {
        "src": "https://placehold.co/600x400/png?text=Procaryote+vs+Eucaryote+Comparison",
        "caption": "رسم لـبـكـتيـريـا (Procaryote) صـغيـرة فـيـهـا غـيـر الـ ADN عـايـم [cite: 79][cite_start]، وحـداهـا خـليـة حـيـوانـية (Eucaryote) كـبـيـرة وعـامـرة بـالـأعـضـاء الـمـلـونـة لـدخـل[cite: 132]."
      }
    },
    {
      "id": "b5",
      "type": "exam_trap",
      "content": {
        "text": "⚠️ **فـخ الـإمـتـحـان:** رد بـالـك! بـزاف ديـال الـطـلـبـة كـيـسـحـاب لـيـهـم الـ **Procaryote** مـا فـيـهـا والـو. [cite_start]الـحـقـيـقـة أنـهـا عـنـدهـا **Ribosomes** بـحـالـهـا بـحـال الـ **Eucaryote**[cite: 79, 149]. الـفرق غـيـر أنـهـا مـا عـنـدهـاش عـضـيـات مـسـدودة بـالـغـشـاء بـحـال الـمـيـتـوكـونـدري."
      }
    },
    {
      "id": "b6",
      "type": "quiz",
      "content": {
        "question": "Lequel des éléments suivants est ABSENT chez une cellule Procaryote (comme E. coli) ?",
        "options": [
          { "id": 1, "text": "L'ADN", "isCorrect": false },
          { "id": 2, "text": "Les Ribosomes", "isCorrect": false },
          { "id": 3, "text": "L'Appareil de Golgi", "isCorrect": true }
        ],
        "explanation": "صـحـيـح! [cite_start]الـبـكـتيـريـا (Procaryote) مـا عـنـدهـاش الـأجـهـزة الـمـعـقـدة لـمـسـدودة بـالـغـشـاء بـحـال الـ Golgi[cite: 74]. [cite_start]لـكـن عـنـدهـا ADN و Ribosomes بـاش تـعـيـش[cite: 79]."
      }
    }
  ]
}

/* -------------------------------------------------------------------------- */
/* 2. SUB-COMPONENTS                               */
/* -------------------------------------------------------------------------- */

// 1. مقدمة
const BlockIntro = ({ data }) => (
  <div className="bg-slate-50 border-r-4 border-slate-900 p-6 rounded-l-xl mb-8">
    <div className="flex items-start gap-3">
      <BookOpen className="text-slate-900 mt-1 shrink-0" size={24} />
      <p className="text-lg text-slate-700 leading-relaxed font-medium">{data.text}</p>
    </div>
  </div>
);

// 2. شرح المفهوم
const BlockConcept = ({ data }) => (
  <div className="mb-10">
    <h3 className="text-2xl font-black text-slate-900 mb-3 font-sans tracking-tight">{data.title_fr}</h3>
    <p className="text-slate-600 text-lg leading-8 mb-4">{data.explanation}</p>
    <div className="flex gap-2 flex-wrap">
      {data.keywords.map((kw, i) => (
        <span key={i} className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">#{kw}</span>
      ))}
    </div>
  </div>
);

// 3. مثال بالداريجة (Analogy)
const BlockAnalogy = ({ data }) => (
  <div className="bg-yellow-100 p-6 rounded-3xl border-2 border-yellow-400 border-dashed mb-10 relative overflow-hidden">
    <div className="flex items-start gap-4 relative z-10">
      <div className="bg-yellow-400 p-2 rounded-full text-slate-900 shrink-0">
        <Lightbulb size={24} fill="white" />
      </div>
      <div>
        <h4 className="font-black text-slate-900 mb-2 text-lg">{data.title}</h4>
        <p className="text-slate-800 font-medium leading-relaxed">{data.text}</p>
      </div>
    </div>
  </div>
);

// 4. صورة
const BlockImage = ({ data }) => (
  <div className="mb-10 group cursor-pointer">
    <div className="bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 relative">
      <img src={data.src} alt={data.caption} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <ZoomIn size={20} />
      </div>
    </div>
    <p className="text-center text-sm text-slate-400 mt-3 font-bold italic">{data.caption}</p>
  </div>
);

// 5. فخ الامتحان
const BlockTrap = ({ data }) => (
  <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-10 flex gap-4 items-center">
    <div className="bg-red-500 text-white p-3 rounded-xl shrink-0 animate-pulse">
      <AlertTriangle size={28} />
    </div>
    <div>
      <h4 className="text-red-600 font-black text-sm uppercase mb-1 tracking-wider">⚠️ Exam Trap</h4>
      <p className="text-slate-700 font-bold">{data.text}</p>
    </div>
  </div>
);

// 6. كويز تفاعلي
const BlockQuiz = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (optionId) => {
    setSelected(optionId);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-slate-900 text-white p-8 rounded-[2rem] mb-12 shadow-2xl">
      <div className="flex items-center gap-2 text-yellow-400 mb-4 font-bold text-sm uppercase tracking-widest">
        <CheckCircle2 size={16} /> Test Rapide
      </div>
      <h3 className="text-xl font-bold mb-6 leading-relaxed">{data.question}</h3>
      
      <div className="space-y-3">
        {data.options.map((opt) => {
          let stateStyles = "bg-slate-800 border-slate-700 hover:bg-slate-700";
          if (isSubmitted) {
            if (opt.isCorrect) stateStyles = "bg-green-500 border-green-500 text-white";
            else if (selected === opt.id) stateStyles = "bg-red-500 border-red-500 text-white";
            else stateStyles = "bg-slate-800 border-slate-700 opacity-50";
          }

          return (
            <button
              key={opt.id}
              onClick={() => !isSubmitted && handleSubmit(opt.id)}
              disabled={isSubmitted}
              className={`w-full text-right p-4 rounded-xl border-2 font-bold transition-all flex justify-between items-center ${stateStyles}`}
            >
              <span>{opt.text}</span>
              {isSubmitted && opt.isCorrect && <CheckCircle2 />}
              {isSubmitted && selected === opt.id && !opt.isCorrect && <XCircle />}
            </button>
          );
        })}
      </div>

      {isSubmitted && (
        <div className={`mt-6 p-4 rounded-xl text-sm font-bold animate-fade-in ${selected === data.options.find(o=>o.isCorrect).id ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
          {data.explanation}
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

const LessonViewer = () => {
  const renderBlock = (block) => {
    switch (block.type) {
      case 'introduction': return <BlockIntro key={block.id} data={block.content} />;
      case 'concept': return <BlockConcept key={block.id} data={block.content} />;
      case 'analogy': return <BlockAnalogy key={block.id} data={block.content} />;
      case 'image': return <BlockImage key={block.id} data={block.content} />;
      case 'exam_trap': return <BlockTrap key={block.id} data={block.content} />;
      case 'quiz': return <BlockQuiz key={block.id} data={block.content} />;
      default: return null;
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      
      {/* Header Lesson */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100 px-6 py-4 flex items-center gap-4">
        <button className="bg-slate-100 p-2 rounded-full hover:bg-yellow-400 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <div>
           <span className="text-xs font-bold text-slate-400 uppercase">Biologie Cellulaire</span>
           <h1 className="text-lg font-black truncate">{lessonData.title}</h1>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        {lessonData.blocks.map(renderBlock)}
      </div>

    </div>
  );
};

export default LessonViewer;