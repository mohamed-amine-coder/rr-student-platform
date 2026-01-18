// المسار: src/components/layout/landingData.js

// 🟢 استيراد البيانات من الملف الجديد
import { BIO_CELL_CHAPTERS } from '../../data/semestre1/biologie-cellulaire/lessons/biologieCellulaire';
import { BIO_ANIMALE_CHAPTERS } from '../../data/semestre2/biologie-animale/lessons/biologieAnimale'

export const PROBLEMS = [
  "فرنسية أكاديمية معقدة فـ كاع الموديلات",
  "رسومات بيض وكحل ماواضحاش فـ الدروس",
  "ضياع السوايع فـ Traduction ديال المصطلحات",
  "تشتت وستريس قبل أي امتحان بيولوجيا"
];

export const SOLUTIONS = [
  "شرح بالداريجة كأنك كتهضر مع صاحبك",
  "سكيتشنوتس ملونة جامعة الزبدة ديال المادة",
  "كويزات QCM بحال ديال الامتحانات الحقيقية",
  "منهجية ذكية باش تفهم وتفاليدي الموديلات"
];

export const COURSES = [
  // --- MODULE 1: BIOLOGIE CELLULAIRE (S1) ---
  {
    id: "bio-cell",
    title: "Biologie Cellulaire (S1)",
    description: "الموديل مفصل بـ 'الخشيبات': 87 فقرة قصيرة، كويزات، وامتحانات مصححة.",
    price: 49,
    originalPrice: 199,
    
    // 👇 تم استبدال القائمة الطويلة بالمتغير المستورد
    chapters: BIO_CELL_CHAPTERS 
  },

  // --- MODULE 2: EMBRYOLOGIE & HISTOLOGIE ---
  {
    id: "embryo-histo",
    title: "Embryologie & Histologie",
    description: "كيفاش كيتكون الجنين (Embryo) وشنو هي الأنسجة (Tissus) اللي فينا.",
    price: 59,
    chapters: [
      { 
        id: "gametogenese", 
        title: "دروس خاصة بالمشتركين", 
        isFree: false, 
        quickInfo: "الدروس"
      },
    ]
  },

  // --- MODULE 3: GÉOLOGIE GÉNÉRALE ---
  {
    id: "geologie",
    title: "Géologie Générale",
    description: "فهم كوكب الأرض: من الانفجار العظيم (Big Bang) حتى للبراكين.",
    price: 39,
    chapters: [
      { 
        id: "gametogenese", 
        title: "دروس خاصة بالمشتركين", 
        isFree: false, 
        quickInfo: "الدروس"
      },
    ]
  },

  // --- MODULE 4: MATHÉMATIQUES ---
  {
    id: "math-s1",
    title: "Mathématiques (S1)",
    description: "الماط اللي غاتحتاجو فـ البيولوجيا (Statistiques & Analyse).",
    price: 39,
    chapters: [
      { 
        id: "gametogenese", 
        title: "دروس خاصة بالمشتركين", 
        isFree: false, 
        quickInfo: "الدروس"
      },
    ]
  },

  // --- MODULE 5: CHIMIE GÉNÉRALE ---
  {
    id: "chimie-s1",
    title: "Chimie Générale",
    description: "بنية المادة (Atomistique) والتفاعلات الحرارية (Thermochimie).",
    price: 39,
    chapters: [
      { 
        id: "gametogenese", 
        title: "دروس خاصة بالمشتركين", 
        isFree: false, 
        quickInfo: "الدروس"
      },
    ]
  },

  // --- MODULE 6: PHYSIQUE I ---
  {
    id: "physique-s1",
    title: "Physique I (Optique & Thermo)",
    description: "الفيزياء الأساسية للبيولوجيست.",
    price: 39,
    chapters: [
      { 
        id: "gametogenese", 
        title: "دروس خاصة بالمشتركين", 
        isFree: false, 
        quickInfo: "الدروس"
      },
    ]
  },
  // --- MODULE 6: PHYSIQUE I ---
  {
    id: "biologie animale",
    title: "Biologie animale (test)",
    description: "الفيزياء الأساسية للبيولوجيست.",
    price: 39,
    chapters: BIO_ANIMALE_CHAPTERS,
  },
];

export const PRICING_DATA = {
  title: "استثمر فـ نجاحك اليوم",
  description: "اختار العرض اللي كيناسبك وتهنى من تعقيد البيولوجيا. كولشي مشروح بالداريجة وموجد ليك باش تنجح.",
  solo: {
    title: "الاشتراك الفردي",
    price: 149,
    originalPrice: 180,
    features: ["6 موديلات كاملين", "أكثر من 50 فصل", "كويزات تفاعلية"]
  },
  group: {
    title: "عرض الرفاق (Besties)",
    price: 129, // للواحد
    info: "إيلا جيتي نتا و 2 من صحابك",
    features: ["نفس مميزات الفردي", "حساب مستقل لكل واحد", "توفير 20 DH للواحد"]
  }
};

export const FOOTER_DATA = {
  developer: {
    name: "rr-studio-dev",
    status: "Available for projects",
    links: []
  },
  contributors: [
    { name: "Mr.Ahmed Salami", role: "Spécialiste Bio & Géo", verified: true },
    { name: "Mme. Sara Bounhar", role: "Consultante Pédagogique", verified: true },
    { name: "Youssef El Azouzi", role: "Correcteur de Contenu", verified: false }
  ],
  quickLinks: [
    { label: "الرئيسية", href: "/" },
    { label: "المواد الدراسية", href: "/#courses" },
  ]
};