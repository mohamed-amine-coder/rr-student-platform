// export const LESSON_TEMPLATE = {

//   id: "lesson-id-placeholder",
//   title: "عنوان الدرس هنا",
//   blocks: [
//     // 1. Title (العنوان الرئيسي للفقرة)
//     {
//       type: "title",
//       content: {
//         number: "1-1",
//         title_fr: "Titre en Français",
//         title_ar: "العنوان بالدارجة"
//       }
//     },

//     // 2. Introduction (المقدمة / Hook)
//     {
//       type: "introduction",
//       content: {
//         text: "نص المقدمة هنا..."
//       }
//     },

//     // 3. Concept (شرح المفهوم العلمي)
//     {
//       type: "concept",
//       content: {
//         title_fr: "Concept Scientifique",
//         explanation: "الشرح المبسط للمفهوم هنا...",
//         keywords: ["Mot-clé 1", "Mot-clé 2"]
//       }
//     },

//     // 4. Analogy (المثال التشبيهي)
//     {
//       type: "analogy",
//       content: "نص المثال التشبيهي بالدارجة هنا (مثلا: الخلية بحال لوزين)..."
//     },

//     // 5. Image (الصورة)
//     {
//       type: "image",
//       content: {
//         src: "/path/to/image.jpg",
//         caption: "تعليق توضيحي للصورة"
//       }
//     },

//     // 6. Translation (المصطلحات / الديكسيونير)
//     {
//       type: "translation",
//       content: {
//         title: "ديكسيونير السيمو",
//         terms: [
//           { fr: "Terme Français", ar: "الشرح بالدارجة" },
//           { fr: "Terme Français", ar: "الشرح بالدارجة" }
//         ]
//       }
//     },

//     // 7. Exam Trap (فخ الامتحان)
//     {
//       type: "exam_trap",
//       content: {
//         text: "رد البال من هاد القالب..."
//       }
//     },

//     // 8. Comparison (المقارنة)
//     {
//       type: "comparison",
//       content: {
//         leftTitle: "Gauche (Ex: Procaryote)",
//         rightTitle: "Droite (Ex: Eucaryote)",
//         leftItems: [
//           "نقطة 1",
//           "نقطة 2"
//         ],
//         rightItems: [
//           "نقطة 1",
//           "نقطة 2"
//         ]
//       }
//     },

//     // 9. Advice (النصيحة الذهبية)
//     {
//       type: "advice",
//       content: {
//         title: "نصيحة",
//         text: "نص النصيحة هنا..."
//       }
//     },

//     // 10. Résumé (الملخص الأكاديمي)
//     {
//       type: "resume",
//       content: {
//         title_fr: "Résumé à retenir",
//         explanation: "1. Point important.\n2. Point important.",
//         keywords: ["Résumé", "Bio"]
//       }
//     },

//     // 11. Audio (ملف صوتي)
//     {
//       type: "audio",
//       content: {
//         src: "/path/to/audio.mp3",
//         title: "عنوان المقطع الصوتي",
//         duration: "00:00"
//       }
//     },

//     // 12. Quiz (كويز تفاعلي)
//     {
//       type: "quiz",
//       content: {
//         question: "سؤال الكويز هنا؟",
//         options: [
//           "اختيار 1",
//           "اختيار 2",
//           "اختيار 3",
//           "اختيار 4"
//         ],
//         correctIndex: "ترتيب الجواب الصحيح", // رقم الجواب الصحيح (كيبدا من 0)
//         explanation: "شرح علاش هذا هو الجواب الصحيح."
//       }
//     },

//     // 13. Checklist (الخلاصة النهائية)
//     {
//       type: "checklist",
//       content: {
//         title: "خلاصة: شنو خاصك تعقل",
//         items: [
//           "خلاصة 1",
//           "خلاصة 2",
//           "خلاصة 3",
//         ]
//       }
//     }
//   ]
// };
export const LessonTemplate = {
  id: "lesson-id",
  title: "Lesson Title",
  blocks: [
    // 1. Title Block (عنوان الفقرة)
    {
      type: "title",
      content: {
        number: "",
        title_fr: "",
        title_ar: ""
      }
    },

    // 2. Introduction Block (المقدمة)
    {
      type: "introduction",
      content: {
        text: ""
      }
    },

    // 3. Concept Block (شرح المفهوم العلمي)
    {
      type: "concept",
      content: {
        title_fr: "",
        explanation: "",
        keywords: []
      }
    },

    // 4. Image Block (الصورة)
    {
      type: "image",
      content: {
        src: "", // Variable or Path string
        caption: ""
      }
    },

    // 5. Analogy Block (التبسيط بالدارجة)
    {
      type: "analogy",
      content: ""
    },

    // 6. Exam Trap Block (فخ الامتحانات)
    {
      type: "exam_trap",
      content: {
        text: ""
      }
    },

    // 7. Advice Block (نصيحة للحفظ)
    {
      type: "advice",
      content: {
        title: "",
        text: ""
      }
    },

    // 8. Comparison Block (مقارنة)
    {
      type: "comparison",
      content: {
        leftTitle: "",
        rightTitle: "",
        leftItems: [],
        rightItems: []
      }
    },

    // 9. Resume Block (ملخص علمي بالفرنسية)
    {
      type: "resume",
      content: {
        title_fr: "",
        explanation: "",
        keywords: []
      }
    },

    // 10. Translation Block (المصطلحات)
    {
      type: "translation",
      content: {
        title: "",
        terms: [
          { fr: "", ar: "" },
          { fr: "", ar: "" }
        ]
      }
    },

    // 11. Audio Block (الملف الصوتي)
    {
      type: "audio",
      content: {
        src: "",
        title: "",
        duration: ""
      }
    },

    // 12. Quiz Block (سؤال كويز)
    {
      type: "quiz",
      content: {
        question: "",
        options: ["", "", "", ""],
        correctIndex: 0, // 0, 1, 2, or 3
        explanation: ""
      }
    },

    // 13. Checklist Block (الخلاصة النهائية)
    {
      type: "checklist",
      content: {
        title: "",
        items: []
      }
    },
    {
      type: "exam",
      content: {
        title: "Simulation d'Examen : La Théorie Cellulaire (10 QCM)",
        questions: [
          {
            text: "Qui a utilisé le terme 'Cellule' pour la première fois en 1665 ?",
            options: [
              "Theodor Schwann",
              "Matthias Schleiden",
              "Robert Hooke",
              "Rudolf Virchow"
            ],
            correctIndex: 2
          },
          {
            text: "Matthias Schleiden (1838) a conclu que :",
            options: [
              "Tous les animaux sont faits de cellules",
              "Toutes les plantes sont faites de cellules",
              "Les cellules proviennent de la génération spontanée",
              "Les virus sont des cellules"
            ],
            correctIndex: 1
          },
          {
            text: "Que signifie l'expression latine 'Omnis cellula e cellula' ?",
            options: [
              "La cellule est petite",
              "Toute cellule meurt",
              "Toute cellule provient d'une cellule préexistante",
              "La cellule est l'unité de base"
            ],
            correctIndex: 2
          },
          {
            text: "La théorie cellulaire a permis de réfuter (rejeter) quelle ancienne théorie ?",
            options: [
              "La théorie de l'évolution",
              "La génération spontanée",
              "La théorie atomique",
              "La gravitation universelle"
            ],
            correctIndex: 1
          },
          {
            text: "Lequel de ces scientifiques est associé à la biologie animale ?",
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
            text: "En quelle année Rudolf Virchow a-t-il complété la théorie cellulaire ?",
            options: [
              "1665",
              "1839",
              "1855",
              "1950"
            ],
            correctIndex: 2
          },
          {
            text: "Qu'a réellement observé Robert Hooke dans le liège ?",
            options: [
              "Des cellules vivantes en division",
              "Des noyaux cellulaires",
              "Des parois de cellules mortes (vides)",
              "Des bactéries"
            ],
            correctIndex: 2
          },
          {
            text: "Quelle affirmation est FAUSSE concernant la théorie cellulaire ?",
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
    },
  ]
};
