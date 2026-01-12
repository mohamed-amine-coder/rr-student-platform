// export const NAV_LINKS = [
//   { label: "علاش حنا؟", href: "/#comparison" }, // زدنا / قبل #
//   { label: "المواد", href: "/#courses" },
//   { label: "الأثمنة", href: "/#pricing" },
// ];


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
    price: 39, // كنقترح 39 درهم للموديل (ثمن طاكوس) حسن من 19 درهم حيت القيمة طالعة
    chapters: [
      // =======================================================
      //  🟢 الدروس المجانية (The Hook) - خليناها كما هي
      // =======================================================
      {
        id: "introduction-générale-biologie-cellulaire",
        title: "مقدمة في شعبة البيولوجيا - نصائح، أفاق و تجربة الجامعة",
        isFree: true,
        quickInfo: "أشنو كتعرف على هاد الشعبة؟"
      },

      // =======================================================
      //  🔒 الدروس المدفوعة (The Full Value) - المنهج الجديد
      // =======================================================
      
      // --- Module 1 : Introduction & Organisation ---
      {
        id: "1-1-theorie-cellulaire",
        title: "1.1 La Théorie Cellulaire",
        isFree: true,
        quickInfo: "Schleiden, Schwann & Virchow"
      },
      {
        id: "1-2-definition-cellule",
        title: "1.2 Définition de la Cellule",
        isFree: false,
        quickInfo: "Métabolisme & Reproduction"
      },
      {
        id: "1-3-organisation-generale",
        title: "1.3 Organisation Générale",
        isFree: false,
        quickInfo: "Procaryote vs Eucaryote & Virus"
      },

      // --- Module 2 : Les Molécules (La Chimie de la vie) ---
      {
        id: "2-1-proteines",
        title: "2.1 Les Protéines",
        isFree: false,
        quickInfo: "Acides aminés & Structure 3D"
      },
      {
        id: "2-2-lipides",
        title: "2.2 Les Lipides",
        isFree: false,
        quickInfo: "Acides gras & Phospholipides"
      },
      {
        id: "2-3-glucides",
        title: "2.3 Les Glucides",
        isFree: false,
        quickInfo: "Oses, Amidon & Glycogène"
      },
      {
        id: "2-4-acides-nucleiques",
        title: "2.4 Les Acides Nucléiques",
        isFree: false,
        quickInfo: "ADN vs ARN & Nucléotides"
      },

      // --- Module 3 : Techniques d'étude ---
      {
        id: "3-1-microscopie",
        title: "3.1 La Microscopie",
        isFree: false,
        quickInfo: "Optique (MO) vs Électronique (MET/MEB)"
      },
      {
        id: "3-2-imagerie-preparation",
        title: "3.2 Imagerie & Préparation",
        isFree: false,
        quickInfo: "Coloration & Montage"
      },
      {
        id: "3-3-analyse-biochimique",
        title: "3.3 Analyse Biochimique",
        isFree: false,
        quickInfo: "Centrifugation & Pulse-Chasse"
      },

      // --- Module 4 : La Membrane Plasmique ---
      {
        id: "4-1-ultrastructure",
        title: "4.1 Ultrastructure Membranaire",
        isFree: false,
        quickInfo: "Mosaïque fluide & Glycocalyx"
      },
      {
        id: "4-2-proprietes-membrane",
        title: "4.2 Propriétés de la Membrane",
        isFree: false,
        quickInfo: "Fluidité & Asymétrie"
      },
      {
        id: "4-3-fonctions-membrane",
        title: "4.3 Fonctions de la Membrane",
        isFree: false,
        quickInfo: "Transport (Osmose) & Endocytose"
      },

      // --- Module 5 : Organites & Fonctionnement ---
      {
        id: "5-1-cytosquelette",
        title: "5.1 Le Cytosquelette",
        isFree: false,
        quickInfo: "Microtubules & Microfilaments"
      },
      {
        id: "5-2-systeme-endomembranaire",
        title: "5.2 Système Endomembranaire",
        isFree: false,
        quickInfo: "Réticulum & Golgi (Le Tri)"
      },
      {
        id: "5-3-digestion-cellulaire",
        title: "5.3 Digestion Cellulaire",
        isFree: false,
        quickInfo: "Lysosomes & Peroxysomes"
      },
      {
        id: "5-4-noyau-synthese",
        title: "5.4 Noyau & Synthèse Protéines",
        isFree: false,
        quickInfo: "Transcription & Traduction"
      },
      {
        id: "5-5-energie-mito-chloro",
        title: "5.5 Énergie (Mito & Chloro)",
        isFree: false,
        quickInfo: "Respiration (ATP) & Photosynthèse"
      },

      // --- Module 6 : Communication Cellulaire ---
      {
        id: "6-1-principes-base",
        title: "6.1 Principes de Communication",
        isFree: false,
        quickInfo: "Échanges & Régulation"
      },
      {
        id: "6-2-jonctions-cellulaires",
        title: "6.2 Jonctions Cellulaires",
        isFree: false,
        quickInfo: "Desmosomes & Gap Junctions"
      },
      {
        id: "6-3-messagers-chimiques",
        title: "6.3 Messagers Chimiques",
        isFree: false,
        quickInfo: "Hormones & Récepteurs"
      },
      // =======================================================
      //  🎁 BONUS: PACK EXAMS (امتحانات مصححة) - القيمة الحقيقية
      // =======================================================
      {
        id: "exam-normal-2024",
        title: "Correction Examen Normal 2024",
        isFree: false,
        quickInfo: "تصحيح مفصل + شرح القوالب"
      },
      {
        id: "exam-rattrapage-2023",
        title: "Correction Rattrapage 2023",
        isFree: false,
        quickInfo: "أصعب الأسئلة وكيفاش تجاوب عليها"
      },
      {
        id: "exam-blanc-rr",
        title: "Examen Blanc RR Student",
        isFree: false,
        quickInfo: "تست (Test) واش نتا واجد ولا لا؟"
      },
      {
        id: "qcm-pieges-frequents",
        title: "Top 50 QCM Pièges (الفخاخ)",
        isFree: false,
        quickInfo: "الأسئلة اللي كيطيحو فيها 90% د الطلبة"
      },
      {
        id: "exam-synthese-finale",
        title: "Grand Récapitulatif S1 (المراجعة النهائية)",
        isFree: false,
        quickInfo: "الزبدة ديال الموديل فشرح واحد"
      }
    ]
  },

  // --- MODULE 2: EMBRYOLOGIE & HISTOLOGIE ---
  {
    id: "embryo-histo",
    title: "Embryologie & Histologie",
    description: "كيفاش كيتكون الجنين (Embryo) وشنو هي الأنسجة (Tissus) اللي فينا.",
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
    // role: "Full-stack Developer",
    status: "Available for projects",
    links: [
      // { label: "LinkedIn", href: "#" },
      // { label: "GitHub", href: "#" },
      // { label: "Instagram", href: "#" },
      // { label: "Portfolio", href: "#" }
    ]
  },
  contributors: [
    { name: "Mr.Ahmed Salami", role: "Spécialiste Bio & Géo", verified: true },
    { name: "Mme. Sara Bounhar", role: "Consultante Pédagogique", verified: true },
    { name: "Youssef El Azouzi", role: "Correcteur de Contenu", verified: false }
  ],
  quickLinks: [
    { label: "الرئيسية", href: "/" },
    { label: "المواد الدراسية", href: "/#courses" },
    // { label: "الأسئلة الشائعة", href: "#faq" },
    // { label: "سياسة الخصوصية", href: "#privacy" }
  ]
};