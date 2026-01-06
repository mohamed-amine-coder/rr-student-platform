// export const NAV_LINKS = [
//   { label: "علاش حنا؟", href: "/#comparison" }, // زدنا / قبل #
//   { label: "المواد", href: "/#courses" },
//   { label: "الأثمنة", href: "/#pricing" },
// ];
export const NAV_LINKS = [
  { label: "التسجيل يفتح 4 مرات فقط في السنة، لا نتجاوز 850 طالب في كل دفعة من جميع كليات العلوم المغربية." },
];

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
  // --- MODULE 1: BIOLOGIE CELLULAIRE (أهم موديل) ---
  {
    id: "bio-cell",
    title: "Biologie Cellulaire",
    description: "استكشاف الخلية: من الغشاء السيتوبلازمي حتى للنواة.",
    price: 29, // ثمن رمزي
    chapters: [
      {
        id: "introduction-générale-biologie-cellulaire",
        title: "مقدمة في شعبة البيولوجيا - نصائح للنجاح",
        isFree: true, // ✅ خليناها فابور كـ مدخل
        quickInfo: " البيولوجيا الخلوية: شنو و علاش؟"
      },
      {
        id: "introduction-biologie-cellulaire",
        title: "Introduction à la biologie cellulaire",
        isFree: true, // ✅ خليناها فابور كـ مدخل
        quickInfo: "البدية د الخلية"
      },
      {
        id: "constituants-chimiques",
        title: "Constituants chimiques de la cellule",
        isFree: true, 
        quickInfo: "المكونات د الخلية (الماء، الأملاح...)"
      },
      {
        id: "microscopie-techniques",
        title: "La microscopie et techniques",
        isFree: false, // 🔒 هادي تقنية، نخليوها بالخلاص
        quickInfo: "كيفاش كنشوفو الخلية"
      },
      {
        id: "membrane-plasmique",
        title: "Membrane plasmique",
        isFree: false, // 🔥🔥 رديناها فابور (هادا هو الطعم الحقيقي)
        quickInfo: "الغلاف د الخلية (الفسيفساء السائلة)"
      },
      {
        id: "cytosquelette",
        title: "Cytosquelette",
        isFree: false,
        quickInfo: "العضم د الخلية"
      },
      {
        id: "systeme-endomembranaire",
        title: "Système endomembranaire",
        isFree: false,
        quickInfo: "لوزين د البروتين"
      },
      {
        id: "ribosomes-synthese-proteique",
        title: "Ribosomes et synthèse protéique",
        isFree: false,
        quickInfo: "صناعة د البروتينات"
      },
      {
        id: "peroxysomes",
        title: "Peroxysomes",
        isFree: false,
        quickInfo: "تصفية د السموم"
      },
      {
        id: "noyau-division-cellulaire",
        title: "Noyau et division cellulaire",
        isFree: false,
        quickInfo: "الخزنة ديال ADN"
      },
      {
        id: "mitochondries-energie",
        title: "Mitochondries et énergie",
        isFree: false,
        quickInfo: "لوزين د الطاقة (ATP)"
      },
      {
        id: "chloroplastes-photosynthese",
        title: "Chloroplastes et photosynthèse",
        isFree: false,
        quickInfo: "الماكلة بالضو"
      },
      {
        id: "communication-cellulaire",
        title: "Communication cellulaire",
        isFree: false,
        quickInfo: "الهضرة بين الخلايا"
      }
    ]
  },

  // --- MODULE 2: EMBRYOLOGIE & HISTOLOGIE ---
  {
    id: "embryo-histo",
    title: "Embryologie & Histologie",
    description: "كيفاش كيتكون الجنين (Embryo) وشنو هي الأنسجة (Tissus) اللي فينا.",
    price: 29,
    chapters: [
      {
        id: "introduction-générale-biologie-cellulaire",
        title: "مقدمة في شعبة البيولوجيا - نصائح للنجاح",
        isFree: true, // ✅ خليناها فابور كـ مدخل
        quickInfo: " البيولوجيا الخلوية: شنو و علاش؟"
      },
      { 
        id: "gametogenese", 
        title: "Partie 1: Gamétogenèse", 
        isFree: false, 
        quickInfo: "Spermatogenèse & Ovogenèse"
      },
      { 
        id: "fecondation", 
        title: "Partie 2: La Fécondation", 
        isFree: false, 
        quickInfo: "اللقاء بين البويضة والحيوان المنوي"
      },
      { 
        id: "semaines-dev", 
        title: "Partie 3: Développement Embryonnaire", 
        isFree: false, 
        quickInfo: "من الأسبوع 1 حتى لـ 4"
      },
      { 
        id: "tissus-epitheliaux", 
        title: "Histologie: Tissus Épithéliaux", 
        isFree: false, 
        quickInfo: "الجلد والأغشية"
      },
      { 
        id: "tissus-conjonctifs", 
        title: "Histologie: Tissus Conjonctifs", 
        isFree: false, 
        quickInfo: "الدم، العظم، والغضروف"
      }
    ]
  },

  // --- MODULE 3: GÉOLOGIE GÉNÉRALE ---
  {
    id: "geologie",
    title: "Géologie Générale",
    description: "فهم كوكب الأرض: من الانفجار العظيم (Big Bang) حتى للبراكين.",
    price: 29,
    chapters: [
      { 
        id: "cosmologie", 
        title: "Chapitre 1: Cosmologie & Terre", 
        isFree: false, 
        quickInfo: "النظام الشمسي وتكوين الأرض"
      },
      { 
        id: "structure-globe", 
        title: "Chapitre 2: Structure du Globe", 
        isFree: false, 
        quickInfo: "القشرة، الرداء، والنواة"
      },
      { 
        id: "tectonique", 
        title: "Chapitre 3: Tectonique des Plaques", 
        isFree: false, 
        quickInfo: "زحزحة القارات (Wegener)"
      },
      { 
        id: "magmatisme", 
        title: "Chapitre 4: Magmatisme & Roches", 
        isFree: false, 
        quickInfo: "البراكين والصخور الصهارية"
      },
      { 
        id: "sedimentologie", 
        title: "Chapitre 5: Sédimentologie", 
        isFree: false, 
        quickInfo: "دورة الصخور الرسوبية"
      }
    ]
  },

  // --- MODULE 4: MATHÉMATIQUES ---
  {
    id: "math-s1",
    title: "Mathématiques (S1)",
    description: "الماط اللي غاتحتاجو فـ البيولوجيا (Statistiques & Analyse).",
    price: 29,
    chapters: [
      { 
        id: "fonctions", 
        title: "Chapitre 1: Analyse & Fonctions", 
        isFree: false, 
        quickInfo: "Ln, Exp & Limites"
      },
      { 
        id: "calcul-integral", 
        title: "Chapitre 2: Calcul Intégral", 
        isFree: false, 
        quickInfo: "Les Primitives & Surface"
      },
      { 
        id: "equa-diff", 
        title: "Chapitre 3: Équations Différentielles", 
        isFree: false, 
        quickInfo: "معادلات من الدرجة 1 و 2"
      },
      { 
        id: "stat-desc", 
        title: "Chapitre 4: Statistique Descriptive", 
        isFree: false, 
        quickInfo: "Moyenne, Mode, Médiane"
      }
    ]
  },

  // --- MODULE 5: CHIMIE GÉNÉRALE ---
  {
    id: "chimie-s1",
    title: "Chimie Générale",
    description: "بنية المادة (Atomistique) والتفاعلات الحرارية (Thermochimie).",
    price: 29,
    chapters: [
      { 
        id: "atomistique", 
        title: "Partie 1: Atomistique", 
        isFree: false, 
        quickInfo: "الذرة، الإلكترونات، والجدول الدوري"
      },
      { 
        id: "liaisons", 
        title: "Partie 2: Liaisons Chimiques", 
        isFree: false, 
        quickInfo: "Lewis, VSEPR & Orbitales"
      },
      { 
        id: "thermo-1", 
        title: "Thermochimie: 1er Principe", 
        isFree: false, 
        quickInfo: "Enthalpie (H) & Chaleur (Q)"
      },
      { 
        id: "equilibres", 
        title: "Partie 4: Équilibres Chimiques", 
        isFree: false, 
        quickInfo: "Loi d'action de masse (Kc)"
      }
    ]
  },

  // --- MODULE 6: PHYSIQUE I ---
  {
    id: "physique-s1",
    title: "Physique I (Optique & Thermo)",
    description: "الفيزياء الأساسية للبيولوجيست.",
    price: 29,
    chapters: [
      { 
        id: "optique-geo", 
        title: "Partie 1: Optique Géométrique", 
        isFree: false, 
        quickInfo: "العدسات والمرايا (Lentilles)"
      },
      { 
        id: "microscope", 
        title: "Partie 2: L'Oeil & Microscope", 
        isFree: false, 
        quickInfo: "كيفاش كنشوفو الأشياء الصغيرة"
      },
      { 
        id: "thermo-phys", 
        title: "Partie 3: Thermodynamique", 
        isFree: false, 
        quickInfo: "الغازات المثالية (Gaz Parfaits)"
      }
    ]
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
    name: "rr-coder",
    role: "Full-stack Developer",
    status: "Available for projects",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Portfolio", href: "#" }
    ]
  },
  contributors: [
    { name: "Mr.Ahmed Salami", role: "Spécialiste Bio-Cellulaire", verified: true },
    { name: "Mme. Sarah Alami", role: "Consultante Pédagogique", verified: true },
    { name: "Youssef Benani", role: "Correcteur de Contenu", verified: false }
  ],
  quickLinks: [
    { label: "الرئيسية", href: "/" },
    { label: "المواد الدراسية", href: "#courses" },
    { label: "الأسئلة الشائعة", href: "#faq" },
    { label: "سياسة الخصوصية", href: "#privacy" }
  ]
};