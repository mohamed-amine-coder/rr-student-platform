import Image1 from "./images+audios/theorie-cellulaire-1.jpg";
import Image2 from "./images+audios/theorie-cellulaire-2.jpg";
import Image3 from "./images+audios/theorie-cellulaire-3.jpg";
import Image4 from "./images+audios/theorie-cellulaire-4.jpg";
export const S1_M1_L1 = {
  id: "1-1-theorie-cellulaire",
  title: "La Théorie Cellulaire - الدستور ديال البيولوجيا",
  blocks: [
    // --- 1. INTRO & HOOK ---
    {
      type: "title",
      content: {
        number: "1",
        title_fr: "La Théorie Cellulaire",
        title_ar: "الخلية هي 'الساس' ديال الحياة"
      }
    },
    {
      type: "introduction",
      content: {
        text: "السلام عليكم ومرحبا بيك فأول درس! 🎓🔥 واش فراسك بلي البيولوجيا كاملة واقفة على واحد الساس سميتو 'La Théorie Cellulaire'؟ قبل ما ندخلو فالتفاصيل المعقدة، خاصنا نفهمو القصة كيفاش بدات. كيفاش البشرية عرفات بلي حنا مصايبين من مربعات صغار؟ يلاه نفركعو الرمانة! 🚀"
      }
    },

    // --- 2. STEP 1: THE DISCOVERY (HOOKE) ---
    {
      type: "concept",
      content: {
        title_fr: "1665 : La découverte (Robert Hooke)",
        explanation: "البداية كانت مع واحد السيد سميتو **Robert Hooke**. خونا صايب ميكروسكوب بدائي ودار تحت منو طرف ديال الفرشي (**Liège**). شنو شاف؟ شاف بيوت صغار مسدودين كيشبهو لبيوت النحل، وسماهم: **Cellules** (غرف صغيرة).",
        keywords: ["Robert Hooke", "Liège", "Chambres"]
      }
    },
    {
      type: "image",
      content: {
        src: Image1,
        caption: "شوف هنا شنو شاف هوك: مربعات خاوية (حيت الفرشي ميت)، ولكن سماهم Cellules."
      }
    },

    // --- 3. STEP 2: STRUCTURE (SCHLEIDEN & SCHWANN) ---
    {
      type: "concept",
      content: {
        title_fr: "L'Unité Structurale (Schleiden & Schwann)",
        explanation: "نقزنا لـ 1838/1839. هنا جاو جوج علماء ألمان دارو ثورة. **Schleiden** (ديال النبات) و **Schwann** (ديال الحيوان). جمعو ريوسهم وخرجوا بقانون: 'ما يهمش واش نتا شجرة، مشة، ولا بنادم... الجسم ديالك راه كلو مبني من خلايا'.",
        keywords: ["Schleiden", "Schwann", "Tous les êtres vivants"]
      }
    },
    {
      type: "analogy",
      content: "تخايل معايا **Lego**. إيلا بغيتي تبني طيارة، ولا دار، ولا طوموبيل... شنو هي الحاجة المشتركة بيناتهم؟ هي ديك البياسة الصغيرة د الليكو. فالبيولوجيا، ديك البياسة هي **La Cellule**."
    },
    {
      type: "exam_trap",
      content: {
        text: "⚠️ **فخ كيطيحو فيه بزاف:** الخلية ماشي غير وحدة للبني (Structure) وصافي، راه هي أيضا وحدة للوظيفة (**Fonction**). يعني الخلية كتاكل، كتنفس، وكتلوح النفايات بحال كائن حي صغير."
      }
    },
    {
      type: "advice",
      content: {
        title: "Secret Pro Tip 🤫",
        text: "باش تعقل على شكون دار شنو: **Schleiden** فيه كلمة 'den' كتفكرك بـ 'Jardin' (نباتات 🌱). **Schwann** كتنطق بحال ( بحال صوت البطة 🦢 ) يعني حيوانات. و **Virchow** هو اللي 'Show' (شاف) ليهم الحقيقة ديال الانقسام."
      }
    },

    // --- 4. STEP 3: ORIGIN (VIRCHOW) ---
    {
      type: "title",
      content: {
        number: "?",
        title_fr: "L'Origine de la Cellule",
        title_ar: "منين كتجي الخلية؟"
      }
    },
    {
      type: "comparison",
      content: {
        leftTitle: "Génération Spontanée ❌",
        rightTitle: "Biogenèse (Virchow) ✅",
        leftItems: [
          "الحياة كتجي صدفة من المادة الميتة",
          "الدود كيخلق بوحدو فاللحم",
          "فكرة قديمة وغالطة"
        ],
        rightItems: [
          "الخلية كتجي من خلية قبل منها",
          "الحياة تتوارث عبر الانقسام",
          "Virchow (1855)"
        ]
      }
    },
    {
      type: "concept",
      content: {
        title_fr: "Omnis cellula e cellula",
        explanation: "فـ 1855، الطبيب **Virchow** حسم النقاش. قال ليهم: 'الخلية لا تخلق من العدم'. ضروري تكون عندنا **Cellule préexistante** (خلية سابقة) كتقاسم (**Division**) باش تعطينا خلايا جداد.",
        keywords: ["Virchow", "Division cellulaire", "Préexistante"]
      }
    },
    {
      type: "analogy",
      content: "فكر فـ **الرايب** البلدي. باش تصايب الرايب، خصك تزيد 'الزرريعة' (شوية من رايب قديم) فالحليب. ديك الزريعة فيها بكتيريا (خلايا) هي اللي كتقاسم وكتروب الحليب كامل. بلا 'زريعة' (خلية سابقة)، الحليب غايبقى غير حليب!"
    },

    // --- 5. RECAP & DICTIONARY ---
    {
      type: "resume",
      content: {
        title_fr: "Résumé Scientifique (Ce qu'il faut retenir)",
        explanation: "La Théorie Cellulaire repose sur 3 principes :\n1. Tout organisme vivant est composé d'une ou plusieurs cellules.\n2. La cellule est l'unité structurale et fonctionnelle du vivant.\n3. Toute cellule provient d'une autre cellule par division (Virchow).",
        keywords: ["Unité", "Structure", "Fonction", "Division"]
      }
    },
    {
      type: "image",
      content: {
        src: Image3,
        caption: "ملخص بصري للنظرية الخلوية."
      }
    },
    {
      type: "translation",
      content: {
        title: "Dico RR 📖",
        terms: [
          { fr: "Préexistante", ar: "سابقة (كانت موجودة قبل)" },
          { fr: "Spontanée", ar: "تلقائية (جات بوحدها صدفة)" },
          { fr: "Réfuter", ar: "دحض / نسف (بين بلي الفكرة غالطة)" }
        ]
      }
    },
    {
      type: "audio",
      content: {
        src: "/path/to/audio.mp3",
        title: "النظرية الخلوية باختصار (للمشتركين فقط)",
        duration: "04:00"
      }
    },

    // --- 6. QUIZ BATTLE (More Quizzes as requested) ---
    {
      type: "title",
      content: {
        number: "?",
        title_fr: "Quiz Time",
        title_ar: "واش شديتي شي حاجا ولا غير كتدوز؟"
      }
    },
    {
      type: "quiz",
      content: {
        question: "Question 1: Qui a dit que tous les ANIMAUX sont faits de cellules",
        options: [
          "Schleiden",
          "Schwann",
          "Virchow",
          "Hooke"
        ],
        correctIndex: 1,
        explanation: "برافو! Schwann (تفكرو بالبطة Swan 🦢) هو مول الحيوانات. Schleiden هو مول النباتات."
      }
    },
    {
      type: "quiz",
      content: {
        question: "Question 2: Que signifie => Omnis cellula e cellula",
        options: [
          "La cellule meurt après la division",
          "La cellule naît spontanément",
          "Toute cellule provient d'une cellule préexistante",
          "La cellule est composée d'atomes"
        ],
        correctIndex: 2,
        explanation: "هادي هي مقولة Virchow الشهيرة. كل خلية كتجي من وحدة كانت قبل منها."
      }
    },
    {
      type: "quiz",
      content: {
        question: "Question 3 (Piège): Est-ce que => la Génération Spontanée fait partie de la théorie cellulaire actuelle",
        options: [
          "Oui, c'est le principe de base",
          "Non, elle a été réfutée (annulée)",
          "Oui, mais seulement pour les virus",
          "Je ne sais pas"
        ],
        correctIndex: 1,
        explanation: "الله يرضي عليك! النظرية الخلوية جات باش **تنسف** (Réfuter) خرافة التوالد التلقائي."
      }
    },
    {
      type: "image",
      content: {
        src: Image4,
        caption: "ملخص بصري للنظرية الخلوية: 3 مبادئ أساسية."
      }
    },
    {
      type: "image",
      content: {
        src: Image2,
        caption: "ملخص بصري للنظرية الخلوية: 3 مبادئ أساسية."
      }
    },
    
    {
      type: "checklist",
      content: {
        title: "الخلاصة الشاملة: عقل على هادشي ومبروك عليك الدرس الأول 🎓",
        items: [
          "البداية كانت مع **Robert Hooke** (1665) اللي شاف 'Cellules' فميكروسكوب بدائي فالفرشي (Liège).",
          "العالمان **Schleiden** (نبات) و **Schwann** (حيوان) أسسو النظرية: كل كائن حي (Organisme vivant) مكون من خلايا.",
          "الخلية هي الوحدة البنيوية (**Unité structurale**) والوحدة الوظيفية (**Unité fonctionnelle**) للحياة.",
          "جا **Virchow** (1855) وحسم النقاش بمقولة: 'Omnis cellula e cellula' (كل خلية تأتي من خلية).",
          "الخلية لا تظهر من العدم، بل تأتي ضروري من **Cellule préexistante** (خلية سابقة) عن طريق الانقسام (**Division**).",
          "النظرية الخلوية نسفات خرافة 'التوالد الذاتي' (**Génération spontanée**) وأكدات بلي الحياة استمرار."
        ]
      }
    },
{
  type: "exam",
  content: {
    title: "Simulation d'Examen : La Théorie Cellulaire (10 QCM)",
    questions: [
      {
        text: "Qui a utilisé le terme 'Cellule' pour la première fois en 1665 ",
        options: [
          "Theodor Schwann",
          "Matthias Schleiden",
          "Robert Hooke",
          "Rudolf Virchow"
        ],
        correctIndex: 2
      },
      {
        text: "Matthias Schleiden (1838) a conclu que",
        options: [
          "Tous les animaux sont faits de cellules",
          "Toutes les plantes sont faites de cellules",
          "Les cellules proviennent de la génération spontanée",
          "Les virus sont des cellules"
        ],
        correctIndex: 1
      },
      {
        text: "Que signifie l'expression latine 'Omnis cellula e cellula' ",
        options: [
          "La cellule est petite",
          "Toute cellule meurt",
          "Toute cellule provient d'une cellule préexistante",
          "La cellule est l'unité de base"
        ],
        correctIndex: 2
      },
      {
        text: "La théorie cellulaire a permis de réfuter (rejeter) quelle ancienne théorie ",
        options: [
          "La théorie de l'évolution",
          "La génération spontanée",
          "La théorie atomique",
          "La gravitation universelle"
        ],
        correctIndex: 1
      },
      {
        text: "Lequel de ces scientifiques est associé à la biologie animale ",
        options: [
          "Schleiden",
          "Schwann",
          "Hooke",
          "Virchow"
        ],
        correctIndex: 1
      },
      {
        text: "Selon la théorie cellulaire, la cellule est définie comme :",
        options: [
          "L'unité structurale et fonctionnelle du vivant",
          "Une molécule chimique inerte",
          "Un assemblage aléatoire d'atomes",
          "Une structure visible uniquement à l'œil nu"
        ],
        correctIndex: 0
      },
      {
        text: "En quelle année Rudolf Virchow a-t-il complété la théorie cellulaire ",
        options: [
          "1665",
          "1839",
          "1855",
          "1950"
        ],
        correctIndex: 2
      },
      {
        text: "Qu'a réellement observé Robert Hooke dans le liège ",
        options: [
          "Des cellules vivantes en division",
          "Des noyaux cellulaires",
          "Des parois de cellules mortes (vides)",
          "Des bactéries"
        ],
        correctIndex: 2
      },
      {
        text: "Quelle affirmation est FAUSSE concernant la théorie cellulaire ",
        options: [
          "Tous les organismes vivants sont composés de cellules",
          "La cellule est l'unité de base de la vie",
          "Les cellules peuvent apparaître spontanément à partir de matière inerte",
          "Les cellules se forment par division cellulaire"
        ],
        correctIndex: 2
      },
      {
        text: "Les deux scientifiques considérés comme les fondateurs de la théorie cellulaire (unité de structure) sont :",
        options: [
          "Hooke et Pasteur",
          "Watson et Crick",
          "Schleiden et Schwann",
          "Virchow et Darwin"
        ],
        correctIndex: 2
      }
    ]
  }
}
  ]
};