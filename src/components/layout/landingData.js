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

// export const COURSES = [
//   // --- MODULE 1: BIOLOGIE CELLULAIRE (S1) ---
//   {
//     id: "bio-cell",
//     title: "Biologie Cellulaire (S1)",
//     description: "الموديل مفصل بـ 'الخشيبات': 87 فقرة قصيرة، كويزات، وامتحانات مصححة.",
//     price: 99,
//     originalPrice: 199,
    
//     // 👇 تم استبدال القائمة الطويلة بالمتغير المستورد
//     chapters: BIO_CELL_CHAPTERS ,
//   },

//   // --- MODULE 8: biologie animale ---
//   {
//     id: "biologie animale",
//     title: "Biologie animale (S2) ",
//     description: "تجربة فقط",
//     price: 99,
//     chapters: BIO_ANIMALE_CHAPTERS,
//   },
// ];

export const COURSES = [
  // --- MODULE 1: BIOLOGIE CELLULAIRE (S1) ---
  {
    id: "bio-cell",
    title: "Biologie Cellulaire (S1)",
    description: "الموديل مفصل بـ 'الخشيبات': 87 فقرة قصيرة، كويزات، وامتحانات مصححة.",
    price: 199,
    originalPrice: 199,
    chapters: BIO_CELL_CHAPTERS, 
  },

  // --- MODULE 8: BIOLOGIE ANIMALE ---
  {
    id: "biologie-animale",
    title: "Biologie animale (S2)",
    description: "دراسة وتصنيف الحيوانات.",
    price: 99,
    chapters: BIO_ANIMALE_CHAPTERS,
  },

  // --- MODULE 9: BIOLOGIE DES ORGANISMES VÉGÉTAUX ---
  {
    id: "bio-vegetale",
    title: "Biologie des végétaux (S2)",
    description: "دراسة النباتات: التصنيف، التكاثر، والبنيات.",
    price: 99,
    chapters: [],
  },

  // --- MODULE 10: GÉODYNAMIQUE EXTERNE ---
  {
    id: "geodynamique-externe",
    title: "Géodynamique externe (S2)",
    description: "ظواهر السطح: التعرية، النقل، والترسب.",
    price: 199,
    chapters: [],
  },

  // --- MODULE 11: GÉODYNAMIQUE INTERNE ---
  {
    id: "geodynamique-interne",
    title: "Géodynamique interne (S2)",
    description: "ظواهر الباطن: الزلازل، البراكين، وتكتونية الصفائح.",
    price: 199,
    chapters: [],
  },

  // --- MODULE 12: OPTIQUE - ÉLECTRICITÉ ---
  {
    id: "physique-s2",
    title: "Optique & Électricité (S2)",
    description: "مبادئ الفيزياء الأساسية المطبقة في البيولوجيا.",
    price: 259,
    chapters: [],
  },

  // --- MODULE 13: CHIMIE (SOLUTIONS / ORGANIQUE) ---
  {
    id: "chimie-s2",
    title: "Chimie des Solutions & Organique (S2)",
    description: "تفاعلات المحاليل والأسس الكيميائية للمادة العضوية.",
    price: 259,
    chapters: [],
  },

  // --- MODULE 14: DIGITAL SKILLS & IA ---
  {
    id: "digital-skills",
    title: "Digital Skills & IA (S2)",
    description: "المهارات الرقمية والذكاء الاصطناعي.",
    price: 259,
    chapters: [],
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