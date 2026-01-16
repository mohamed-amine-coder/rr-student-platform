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

  // {
  //   id: "bio-cell",
  //   title: "Biologie Cellulaire",
  //   description: "استكشاف الخلية: من الغشاء السيتوبلازمي حتى للنواة.",
  //   price: 39, // كنقترح 39 درهم للموديل (ثمن طاكوس) حسن من 19 درهم حيت القيمة طالعة
  //   chapters: [
  //     // =======================================================
  //     //  🟢 الدروس المجانية (The Hook) - خليناها كما هي
  //     // =======================================================
  //     {
  //       id: "introduction-générale-biologie-cellulaire",
  //       title: "مقدمة في شعبة البيولوجيا - نصائح، أفاق و تجربة الجامعة",
  //       isFree: true,
  //       quickInfo: "أشنو كتعرف على هاد الشعبة؟"
  //     },

  //     // =======================================================
  //     //  🔒 الدروس المدفوعة (The Full Value) - المنهج الجديد
  //     // =======================================================
      
  //     // --- Module 1 : Introduction & Organisation ---
  //     {
  //       id: "1-1-theorie-cellulaire",
  //       title: "1.1 La Théorie Cellulaire",
  //       isFree: true,
  //       quickInfo: "Schleiden, Schwann & Virchow"
  //     },
  //     {
  //       id: "1-2-definition-cellule",
  //       title: "1.2 Définition de la Cellule",
  //       isFree: false,
  //       quickInfo: "Métabolisme & Reproduction"
  //     },
  //     {
  //       id: "1-3-organisation-generale",
  //       title: "1.3 Organisation Générale",
  //       isFree: false,
  //       quickInfo: "Procaryote vs Eucaryote & Virus"
  //     },

  //     // --- Module 2 : Les Molécules (La Chimie de la vie) ---
  //     {
  //       id: "2-1-proteines",
  //       title: "2.1 Les Protéines",
  //       isFree: false,
  //       quickInfo: "Acides aminés & Structure 3D"
  //     },
  //     {
  //       id: "2-2-lipides",
  //       title: "2.2 Les Lipides",
  //       isFree: false,
  //       quickInfo: "Acides gras & Phospholipides"
  //     },
  //     {
  //       id: "2-3-glucides",
  //       title: "2.3 Les Glucides",
  //       isFree: false,
  //       quickInfo: "Oses, Amidon & Glycogène"
  //     },
  //     {
  //       id: "2-4-acides-nucleiques",
  //       title: "2.4 Les Acides Nucléiques",
  //       isFree: false,
  //       quickInfo: "ADN vs ARN & Nucléotides"
  //     },

  //     // --- Module 3 : Techniques d'étude ---
  //     {
  //       id: "3-1-microscopie",
  //       title: "3.1 La Microscopie",
  //       isFree: false,
  //       quickInfo: "Optique (MO) vs Électronique (MET/MEB)"
  //     },
  //     {
  //       id: "3-2-imagerie-preparation",
  //       title: "3.2 Imagerie & Préparation",
  //       isFree: false,
  //       quickInfo: "Coloration & Montage"
  //     },
  //     {
  //       id: "3-3-analyse-biochimique",
  //       title: "3.3 Analyse Biochimique",
  //       isFree: false,
  //       quickInfo: "Centrifugation & Pulse-Chasse"
  //     },

  //     // --- Module 4 : La Membrane Plasmique ---
  //     {
  //       id: "4-1-ultrastructure",
  //       title: "4.1 Ultrastructure Membranaire",
  //       isFree: false,
  //       quickInfo: "Mosaïque fluide & Glycocalyx"
  //     },
  //     {
  //       id: "4-2-proprietes-membrane",
  //       title: "4.2 Propriétés de la Membrane",
  //       isFree: false,
  //       quickInfo: "Fluidité & Asymétrie"
  //     },
  //     {
  //       id: "4-3-fonctions-membrane",
  //       title: "4.3 Fonctions de la Membrane",
  //       isFree: false,
  //       quickInfo: "Transport (Osmose) & Endocytose"
  //     },

  //     // --- Module 5 : Organites & Fonctionnement ---
  //     {
  //       id: "5-1-cytosquelette",
  //       title: "5.1 Le Cytosquelette",
  //       isFree: false,
  //       quickInfo: "Microtubules & Microfilaments"
  //     },
  //     {
  //       id: "5-2-systeme-endomembranaire",
  //       title: "5.2 Système Endomembranaire",
  //       isFree: false,
  //       quickInfo: "Réticulum & Golgi (Le Tri)"
  //     },
  //     {
  //       id: "5-3-digestion-cellulaire",
  //       title: "5.3 Digestion Cellulaire",
  //       isFree: false,
  //       quickInfo: "Lysosomes & Peroxysomes"
  //     },
  //     {
  //       id: "5-4-noyau-synthese",
  //       title: "5.4 Noyau & Synthèse Protéines",
  //       isFree: false,
  //       quickInfo: "Transcription & Traduction"
  //     },
  //     {
  //       id: "5-5-energie-mito-chloro",
  //       title: "5.5 Énergie (Mito & Chloro)",
  //       isFree: false,
  //       quickInfo: "Respiration (ATP) & Photosynthèse"
  //     },

  //     // --- Module 6 : Communication Cellulaire ---
  //     {
  //       id: "6-1-principes-base",
  //       title: "6.1 Principes de Communication",
  //       isFree: false,
  //       quickInfo: "Échanges & Régulation"
  //     },
  //     {
  //       id: "6-2-jonctions-cellulaires",
  //       title: "6.2 Jonctions Cellulaires",
  //       isFree: false,
  //       quickInfo: "Desmosomes & Gap Junctions"
  //     },
  //     {
  //       id: "6-3-messagers-chimiques",
  //       title: "6.3 Messagers Chimiques",
  //       isFree: false,
  //       quickInfo: "Hormones & Récepteurs"
  //     },
  //     // =======================================================
  //     //  🎁 BONUS: PACK EXAMS (امتحانات مصححة) - القيمة الحقيقية
  //     // =======================================================
  //     {
  //       id: "exam-normal-2024",
  //       title: "Correction Examen Normal 2024",
  //       isFree: false,
  //       quickInfo: "تصحيح مفصل + شرح القوالب"
  //     },
  //     {
  //       id: "exam-rattrapage-2023",
  //       title: "Correction Rattrapage 2023",
  //       isFree: false,
  //       quickInfo: "أصعب الأسئلة وكيفاش تجاوب عليها"
  //     },
  //     {
  //       id: "exam-blanc-rr",
  //       title: "Examen Blanc RR Student",
  //       isFree: false,
  //       quickInfo: "تست (Test) واش نتا واجد ولا لا؟"
  //     },
  //     {
  //       id: "qcm-pieges-frequents",
  //       title: "Top 50 QCM Pièges (الفخاخ)",
  //       isFree: false,
  //       quickInfo: "الأسئلة اللي كيطيحو فيها 90% د الطلبة"
  //     },
  //     {
  //       id: "exam-synthese-finale",
  //       title: "Grand Récapitulatif S1 (المراجعة النهائية)",
  //       isFree: false,
  //       quickInfo: "الزبدة ديال الموديل فشرح واحد"
  //     }
  //   ]
  // },
  {
  id: "bio-cell",
  title: "Biologie Cellulaire (S1)",
  description: "الموديل مفصل بـ 'الخشيبات': 87 فقرة قصيرة، كويزات، وامتحانات مصححة.",
  price: 49, // ✅ تم التعديل: يستاهل وزايد
  originalPrice: 199, // خلي الفرق كبير باش تبان الهمزة
  chapters: [
    // =======================================================
    // 🟢 MODULE 1 : BIOLOGIE CELLULAIRE (Intro)
    // =======================================================
    {
      id: "S1-M1-L0",
      title: "مقدمة في شعبة البيولوجيا - نصائح، أفاق و تجربة الجامعة",
      isFree: true,
      quickInfo: "أشنو كتعرف على هاد الشعبة؟"
    },
    // {
    //   id: "1-1-theorie-cellulaire",
    //   title: "1.1 La Théorie Cellulaire",
    //   isFree: true,
    //   type: 'lesson',
    //   quickInfo: "Schleiden, Schwann & Virchow"
    // },
    {
        id: "1-1-1",
        title: "1.1.1. Unité de structure et de fonction (Schleiden & Schwann)",
        isFree: true, // 🔒 بداية المدفوع
        type: 'lesson',
        quickInfo: "بداية النظرية الخلوية"
    },
    {
        id: "1-1-2",
        title: "1.1.2. Origine à partir d'une cellule préexistante (Virchow)",
        isFree: true,
        type: 'lesson',
        quickInfo: "الخلية تأتي من خلية"
    },
    {
        id: "1-1-3",
        title: "1.1.3. Réfutation de la génération spontanée",
        isFree: true,
        type: 'lesson',
        quickInfo: "باستور ضد التولد التلقائي"
    },
    {
        id: "1-2-1",
        title: "1.2.1. Système hautement organisé de molécules",
        isFree: true,
        type: 'lesson',
        quickInfo: "الماء والأملاح المعدنية"
    },
    {
        id: "1-2-2",
        title: "1.2.2. Le Métabolisme : utilisation de matière et d'énergie",
        isFree: true,
        type: 'lesson',
        quickInfo: "كيفاش الخلية كتاكل وتنتج"
    },
    {
        id: "1-2-3",
        title: "1.2.3. Capacités de développement, reproduction et adaptation",
        isFree: true,
        type: 'lesson',
        quickInfo: "خصائص الكائن الحي"
    },
    {
        id: "1-3-1",
        title: "1.3.1. Cellule Procaryote : Noyau non organisé",
        isFree: true,
        type: 'lesson',
        quickInfo: "بدائيات النواة (Bacteria)"
    },
    {
        id: "1-3-2",
        title: "1.3.2. Cellule Procaryote : Paroi et membrane",
        isFree: true,
        type: 'lesson',
        quickInfo: "الغشاء والجدار البكتيري"
    },
    {
        id: "1-3-3",
        title: "1.3.3. Cellule Eucaryote : Réseau membranaire",
        isFree: true,
        type: 'lesson',
        quickInfo: "حقيقيات النواة (Eucaryote)"
    },
    {
        id: "1-3-4",
        title: "1.3.4. Cellule Eucaryote : Cytosquelette et dimensions",
        isFree: true,
        type: 'lesson',
        quickInfo: "الحجم والهيكل الخلوي"
    },
    {
        id: "1-3-5",
        title: "1.3.5. Comparaison : Cellule animale vs végétale",
        isFree: true,
        type: 'lesson',
        quickInfo: "الفرق بين الحيوانية والنباتية"
    },
    {
        id: "1-3-6",
        title: "1.3.6. Les Virus : Particules acellulaires",
        isFree: true,
        type: 'lesson',
        quickInfo: "الفيروسات ودورة حياتها"
    },

    // =======================================================
    // 🔒 MODULE 2 : LES CONSTITUANTS CHIMIQUES
    // =======================================================
    {
        id: "2-1-1",
        title: "2.1.1. Acides aminés : structure (Radical, Amine...)",
        isFree: true,
        type: 'lesson',
        quickInfo: "تركيبة الأحماض الأمينية"
    },
    {
        id: "2-1-2",
        title: "2.1.2. Classification des Acides aminés",
        isFree: true,
        type: 'lesson',
        quickInfo: "Polaires, Aromatiques, etc."
    },
    {
        id: "2-1-3",
        title: "2.1.3. La liaison peptidique",
        isFree: true,
        type: 'lesson',
        quickInfo: "الرابطة بين الأحماض"
    },
    {
        id: "2-1-4",
        title: "2.1.4. Structure Primaire (Séquence)",
        isFree: true,
        type: 'lesson',
        quickInfo: "تسلسل الأحماض"
    },
    {
        id: "2-1-5",
        title: "2.1.5. Structure Secondaire (Hélice α, Feuillet β)",
        isFree: true,
        type: 'lesson',
        quickInfo: "الالتفاف الأولي"
    },
    {
        id: "2-1-6",
        title: "2.1.6. Structure Tertiaire (Repliement 3D)",
        isFree: true,
        type: 'lesson',
        quickInfo: "الشكل الثلاثي الأبعاد"
    },
    {
        id: "2-1-7",
        title: "2.1.7. Structure Quaternaire",
        isFree: true,
        type: 'lesson',
        quickInfo: "تجمع الوحدات (Monomères)"
    },
    {
        id: "2-1-8",
        title: "2.1.8. Liaisons stabilisatrices",
        isFree: true,
        type: 'lesson',
        quickInfo: "Ioniques, H, Hydrophobes, S-S"
    },
    {
        id: "2-1-9",
        title: "2.1.9. Fonctions des protéines",
        isFree: true,
        type: 'lesson',
        quickInfo: "Structurales vs Biologiques"
    },
    {
        id: "2-2-1",
        title: "2.2.1. Lipides simples : Glycérides, Stérides...",
        isFree: true,
        type: 'lesson',
        quickInfo: "الدهنيات البسيطة"
    },
    {
        id: "2-2-2",
        title: "2.2.2. Lipides complexes : Glycérophospholipides...",
        isFree: true,
        type: 'lesson',
        quickInfo: "الدهنيات المعقدة"
    },
    {
        id: "2-2-3",
        title: "2.2.3. Acides gras : Saturés vs Insaturés",
        isFree: true,
        type: 'lesson',
        quickInfo: "الفرق بين المشبعة وغير المشبعة"
    },
    {
        id: "2-2-4",
        title: "2.2.4. Amphipathie : Tête hydrophile / Queue hydrophobe",
        isFree: true,
        type: 'lesson',
        quickInfo: "القطبية واللاقطبية"
    },
    {
        id: "2-2-5",
        title: "2.2.5. Phospholipides : Base des membranes",
        isFree: true,
        type: 'lesson',
        quickInfo: "أساس الغشاء السيتوبلازمي"
    },
    {
        id: "2-3-1",
        title: "2.3.1. Les Oses : Aldoses vs Cétoses",
        isFree: true,
        type: 'lesson',
        quickInfo: "السكريات البسيطة"
    },
    {
        id: "2-3-2",
        title: "2.3.2. Exemples : Ribose, Glucose, Galactose...",
        isFree: true,
        type: 'lesson',
        quickInfo: "أمثلة مهمة"
    },
    {
        id: "2-3-3",
        title: "2.3.3. Disaccharides : Maltose, Lactose...",
        isFree: true,
        type: 'lesson',
        quickInfo: "السكريات الثنائية"
    },
    {
        id: "2-3-4",
        title: "2.3.4. Polyholosides de réserve : Amidon, Glycogène",
        isFree: true,
        type: 'lesson',
        quickInfo: "تخزين الطاقة"
    },
    {
        id: "2-3-5",
        title: "2.3.5. Polyholosides structuraux : Cellulose",
        isFree: true,
        type: 'lesson',
        quickInfo: "الجدار الخلوي النباتي"
    },
    {
        id: "2-3-6",
        title: "2.3.6. Rôles des glucides",
        isFree: true,
        type: 'lesson',
        quickInfo: "طاقة، بنية، تعرف"
    },
    {
        id: "2-4-1",
        title: "2.4.1. Structure du Nucléotide",
        isFree: true,
        type: 'lesson',
        quickInfo: "Base, Pentose, Phosphate"
    },
    {
        id: "2-4-2",
        title: "2.4.2. Bases Puriques vs Pyrimidiques",
        isFree: true,
        type: 'lesson',
        quickInfo: "A, G vs C, U, T"
    },
    {
        id: "2-4-3",
        title: "2.4.3. ADN : Double hélice & complémentarité",
        isFree: true,
        type: 'lesson',
        quickInfo: "A=T, G≡C"
    },
    {
        id: "2-4-4",
        title: "2.4.4. ARN : Structure monocaténaire",
        isFree: true,
        type: 'lesson',
        quickInfo: "شريط واحد"
    },
    {
        id: "2-4-5",
        title: "2.4.5. Types d'ARN : ARNm, ARNt, ARNr",
        isFree: true,
        type: 'lesson',
        quickInfo: "أنواع ARN ووظائفها"
    },

    // =======================================================
    // 🔒 MODULE 3 : MÉTHODES D'ÉTUDE
    // =======================================================
    {
        id: "3-1-1",
        title: "3.1.1. Microscope Optique (MO) : Principes",
        isFree: true,
        type: 'lesson',
        quickInfo: "المجهر الضوئي"
    },
    {
        id: "3-1-2",
        title: "3.1.2. Pouvoir séparateur et Résolution",
        isFree: true,
        type: 'lesson',
        quickInfo: "دقة الصورة"
    },
    {
        id: "3-1-3",
        title: "3.1.3. Microscope Électronique (MET et MEB)",
        isFree: true,
        type: 'lesson',
        quickInfo: "المجهر الإلكتروني النافذ والماسح"
    },
    {
        id: "3-2-1",
        title: "3.2.1. Coloration vitale (Rouge neutre)",
        isFree: true,
        type: 'lesson',
        quickInfo: "تلوين الخلايا الحية"
    },
    {
        id: "3-2-2",
        title: "3.2.2. Coloration fixatrice (Vert de méthyle)",
        isFree: true,
        type: 'lesson',
        quickInfo: "تلوين الخلايا الميتة"
    },
    {
        id: "3-2-3",
        title: "3.2.3. Montage lame/lamelle",
        isFree: true,
        type: 'lesson',
        quickInfo: "تحضير العينة"
    },
    {
        id: "3-3-1",
        title: "3.3.1. Broyage cellulaire (Mécanique vs Chimique)",
        isFree: true,
        type: 'lesson',
        quickInfo: "تفكيك الخلايا"
    },
    {
        id: "3-3-2",
        title: "3.3.2. Fractionnement par centrifugation",
        isFree: true,
        type: 'lesson',
        quickInfo: "فصل العضيات"
    },
    {
        id: "3-3-3",
        title: "3.3.3. Autoradiographie (Isotopes)",
        isFree: true,
        type: 'lesson',
        quickInfo: "التصوير الإشعاعي الذاتي"
    },
    {
        id: "3-3-4",
        title: "3.3.4. Expérience Pulse-Chasse",
        isFree: true,
        type: 'lesson',
        quickInfo: "تتبع المسار الديناميكي"
    },

    // =======================================================
    // 🔒 MODULE 4 : LA MEMBRANE PLASMIQUE
    // =======================================================
    {
        id: "4-1-1",
        title: "4.1.1. Modèle mosaïque fluide (Singer & Nicolson)",
        isFree: true,
        type: 'lesson',
        quickInfo: "النموذج الفسيفسائي المائع"
    },
    {
        id: "4-1-2",
        title: "4.1.2. Lipides membranaires",
        isFree: true,
        type: 'lesson',
        quickInfo: "Phospholipides & Cholestérol"
    },
    {
        id: "4-1-3",
        title: "4.1.3. Protéines : Intrinsèques vs Extrinsèques",
        isFree: true,
        type: 'lesson',
        quickInfo: "أنواع البروتينات الغشائية"
    },
    {
        id: "4-1-4",
        title: "4.1.4. Glucides : Glycocalyx",
        isFree: true,
        type: 'lesson',
        quickInfo: "دور الحماية والتعرف"
    },
    {
        id: "4-1-5",
        title: "4.1.5. Modèle d'étude : Le Globule Rouge",
        isFree: true,
        type: 'lesson',
        quickInfo: "لماذا الكرية الحمراء؟"
    },
    {
        id: "4-2-1",
        title: "4.2.1. Asymétrie membranaire",
        isFree: true,
        type: 'lesson',
        quickInfo: "اختلاف الطبقتين"
    },
    {
        id: "4-2-2",
        title: "4.2.2. Fluidité : Diffusion, Flip-flop...",
        isFree: true,
        type: 'lesson',
        quickInfo: "حركة الجزيئات"
    },
    {
        id: "4-2-3",
        title: "4.2.3. Cortex cellulaire (Spectrine, Ankyrine)",
        isFree: true,
        type: 'lesson',
        quickInfo: "دعامة الغشاء"
    },
    {
        id: "4-3-1",
        title: "4.3.1. Barrière sélective",
        isFree: true,
        type: 'lesson',
        quickInfo: "النفاذية الاختيارية"
    },
    {
        id: "4-3-2",
        title: "4.3.2. Transports : Endocytose/Exocytose",
        isFree: true,
        type: 'lesson',
        quickInfo: "النقل الحويصلي"
    },
    {
        id: "4-3-3",
        title: "4.3.3. Phagocytose",
        isFree: true,
        type: 'lesson',
        quickInfo: "البلعمة"
    },
    {
        id: "4-3-4",
        title: "4.3.4. Osmose : Turgescence, Plasmolyse...",
        isFree: true,
        type: 'lesson',
        quickInfo: "نقل الماء"
    },
    {
        id: "4-3-5",
        title: "4.3.5. Transduction d’énergie (Procaryotes)",
        isFree: true,
        type: 'lesson',
        quickInfo: "إنتاج الطاقة في الغشاء"
    },
    {
        id: "4-3-6",
        title: "4.3.6. Reconnaissance (Groupes sanguins)",
        isFree: true,
        type: 'lesson',
        quickInfo: "الفصائل الدموية"
    },

    // =======================================================
    // 🔒 MODULE 5 : ORGANITES ET FONCTIONS
    // =======================================================
    {
        id: "5-1-1",
        title: "5.1.1. Microfilaments (Kératine, Actine)",
        isFree: true,
        type: 'lesson',
        quickInfo: "الخيوط الدقيقة"
    },
    {
        id: "5-1-2",
        title: "5.1.2. Microtubules et Centrosome",
        isFree: true,
        type: 'lesson',
        quickInfo: "الأنيبيبات الدقيقة"
    },
    {
        id: "5-2-1",
        title: "5.2.1. REG : Synthèse des protéines",
        isFree: true,
        type: 'lesson',
        quickInfo: "الشبكة السيتوبلازمية المحببة"
    },
    {
        id: "5-2-2",
        title: "5.2.2. REL : Synthèse lipides, Détoxification",
        isFree: true,
        type: 'lesson',
        quickInfo: "الشبكة السيتوبلازمية الملساء"
    },
    {
        id: "5-2-3",
        title: "5.2.3. Appareil de Golgi : Structure",
        isFree: true,
        type: 'lesson',
        quickInfo: "Cis, Médiane, Trans"
    },
    {
        id: "5-2-4",
        title: "5.2.4. Golgi : Glycosylation, Sulfatation, Tri",
        isFree: true,
        type: 'lesson',
        quickInfo: "وظائف جهاز غولجي"
    },
    {
        id: "5-3-1",
        title: "5.3.1. Lysosomes : Hydrolases acides",
        isFree: true,
        type: 'lesson',
        quickInfo: "الهضم الخلوي"
    },
    {
        id: "5-3-2",
        title: "5.3.2. Hétérophagie vs Autophagie",
        isFree: true,
        type: 'lesson',
        quickInfo: "أنواع البلعمة"
    },
    {
        id: "5-3-3",
        title: "5.3.3. Peroxysomes : Catalases",
        isFree: true,
        type: 'lesson',
        quickInfo: "تفكيك الماء المؤكسج"
    },
    {
        id: "5-4-1",
        title: "5.4.1. Noyau : Enveloppe, Nucléole, Pore",
        isFree: true,
        type: 'lesson',
        quickInfo: "بنية النواة"
    },
    {
        id: "5-4-2",
        title: "5.4.2. Ribosomes",
        isFree: true,
        type: 'lesson',
        quickInfo: "مصانع البروتين"
    },
    {
        id: "5-4-3",
        title: "5.4.3. Transcription (ARNm, Épissage)",
        isFree: true,
        type: 'lesson',
        quickInfo: "الاستنساخ"
    },
    {
        id: "5-4-4",
        title: "5.4.4. Traduction (Initiation, Élongation, Fin)",
        isFree: true,
        type: 'lesson',
        quickInfo: "الترجمة"
    },
    {
        id: "5-5-1",
        title: "5.5.1. Mitochondrie : Structure",
        isFree: true,
        type: 'lesson',
        quickInfo: "الميتوكوندري"
    },
    {
        id: "5-5-2",
        title: "5.5.2. Respiration Cellulaire : Glycolyse, Krebs",
        isFree: true,
        type: 'lesson',
        quickInfo: "إنتاج ATP"
    },
    {
        id: "5-5-3",
        title: "5.5.3. Inhibiteurs (Cyanure...)",
        isFree: true,
        type: 'lesson',
        quickInfo: "مثبطات التنفس"
    },
    {
        id: "5-5-4",
        title: "5.5.4. Chloroplaste : Structure",
        isFree: true,
        type: 'lesson',
        quickInfo: "البلاستيدة الخضراء"
    },
    {
        id: "5-5-5",
        title: "5.5.5. Photosynthèse",
        isFree: true,
        type: 'lesson',
        quickInfo: "التركيب الضوئي"
    },

    // =======================================================
    // 🔒 MODULE 6 : COMMUNICATIONS CELLULAIRES
    // =======================================================
    {
        id: "6-1-1",
        title: "6.1.1. Échanges et Régulation",
        isFree: true,
        type: 'lesson',
        quickInfo: "مبادئ التواصل"
    },
    {
        id: "6-1-2",
        title: "6.1.2. Défense de l'organisme",
        isFree: true,
        type: 'lesson',
        quickInfo: "المناعة الخلوية"
    },
    {
        id: "6-2-1",
        title: "6.2.1. Jonctions imperméables (Occludens)",
        isFree: true,
        type: 'lesson',
        quickInfo: "الروابط المانعة"
    },
    {
        id: "6-2-2",
        title: "6.2.2. Jonctions d'ancrage (Adherens)",
        isFree: true,
        type: 'lesson',
        quickInfo: "الروابط المثبتة"
    },
    {
        id: "6-2-3",
        title: "6.2.3. Desmosomes (Macula adherens)",
        isFree: true,
        type: 'lesson',
        quickInfo: "الديسموزوم"
    },
    {
        id: "6-2-4",
        title: "6.2.4. Jonctions communicantes (Gap)",
        isFree: true,
        type: 'lesson',
        quickInfo: "الروابط التواصلية"
    },
    {
        id: "6-3-1",
        title: "6.3.1. Hormones Hydrophiles",
        isFree: true,
        type: 'lesson',
        quickInfo: "المستقبلات الغشائية"
    },
    {
        id: "6-3-2",
        title: "6.3.2. Hormones Hydrophobes",
        isFree: true,
        type: 'lesson',
        quickInfo: "المستقبلات الداخلية"
    },
    // =======================================================
    // 🏆 BONUS : PACK EXAMS FSSM (الضربة القاضية)
    // =======================================================
    {
      id: "exam-fssm-normal-2024",
      title: "📝 Examen Normal FSSM (Session 2023/2024)",
      isFree: true,
      type: 'exam',
      badge: "جديد",
      quickInfo: "تصحيح الامتحان الأخير (شرح الأخطاء الشائعة)"
    },
    {
      id: "exam-fssm-ratt-2023",
      title: "⚠️ Examen Rattrapage FSSM (Session 2023)",
      isFree: true,
      type: 'exam',
      badge: "مهم",
      quickInfo: "كيفاش تمنع الرات فآخر لحظة؟"
    },
    {
      id: "exam-qcm-repetitifs",
      title: "🔥 Top 50 QCMs (الأسئلة لي كتعاود فـ FSSM)",
      isFree: true,
      type: 'exam',
      badge: "حصري",
      quickInfo: "تجميعة أسئلة الامتحانات من 2019 لـ 2024"
    },
    {
      id: "exam-blanc-simulation",
      title: "🎯 Examen Blanc (Simulation FSSM)",
      isFree: true,
      type: 'exam',
      quickInfo: "تست (Test) واش نتا واجد ولا لا؟ (بنفس الصعوبة)"
    },
    {
      id: "exam-difficile-2018",
      title: "☠️ L'Examen le plus difficile (Session 2018)",
      isFree: true,
      type: 'exam',
      badge: "تحدي",
      quickInfo: "إلا جاوبتي على هذا، راك فاليديتي S1"
    },
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