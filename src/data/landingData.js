// المسار: landingData.js

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

export const PRICING_DATA = {
  title: "استثمر فنجاحك وفاليدي الموديل",
  description: "اختار العرض اللي كيناسبك وتهنى من الكور، الـ TD، والـ TP مجموعين فبلاصة وحدة بالدارجة.",
  solo: {
    title: "الاشتراك الفردي",
    price: 50,
    originalPrice: 100,
    features: ["الكور كامل مبسط بالدارجة", "تمارين الـ TD والفخاخ د الامتحان", "دليل الـ TP والملاحظة المجهرية"]
  },
  group: {
    title: "عرض الثنائي (فقط لأول 16 طالب من FSSM/FSR) ",
    price: 80, // الثمن الإجمالي لجوج د الناس
    info: "نتا وصاحبك (40 درهم للواحد)",
    features: ["نفس مميزات العرض الفردي", "حساب خاص ومستقل لكل واحد", "حنا نخلصو اقتطاع الإرسال د وفاكاش"]
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