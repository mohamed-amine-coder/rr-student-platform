export const NAV_LINKS = [
  { label: "علاش حنا؟", href: "#comparison" },
  { label: "المواد", href: "#courses" },
  { label: "الأثمنة", href: "#pricing" },
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
  {
    id: "bio-cell",
    title: "Biologie Cellulaire",
    lessons: 12,
    quizzes: 45,
    price: 49,
    image: "/assets/bio-cell.png", // حط تصويرة هنا من بعد
    tag: "Most Popular"
  },
  {
    id: "bio-animale",
    title: "Biologie Animale",
    lessons: 10,
    quizzes: 30,
    price: 49,
    image: "/assets/bio-animale.png",
    tag: "Updated"
  },
  {
    id: "histologie",
    title: "Histologie & Embryologie",
    lessons: 15,
    quizzes: 50,
    price: 49,
    image: "/assets/histo.png",
    tag: "Detailed"
  }
];

export const PRICING_DATA = {
  title: "وفّر وقتك وفلوسك",
  description: "خد الـ Pack كامل اللي كيجمع كاع موديلات السيمستر بـ ثمن حصري. عرض محدود للطلبة الأوائل.",
  price: 150,
  originalPrice: 210,
  features: [
    "Accès illimité لجميع الدروس",
    "Résumés SketchNotes قابلة للتحميل",
    "أكثر من 500 سؤال QCM مع التصحيح",
    "تحديثات دورية للمحتوى"
  ]
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