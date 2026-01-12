export const LESSON_TEMPLATE = {
  id: "lesson-id-placeholder",
  title: "عنوان الدرس هنا",
  blocks: [
    // 1. Title (العنوان الرئيسي للفقرة)
    {
      type: "title",
      content: {
        number: "1-1",
        title_fr: "Titre en Français",
        title_ar: "العنوان بالدارجة"
      }
    },

    // 2. Introduction (المقدمة / Hook)
    {
      type: "introduction",
      content: {
        text: "نص المقدمة هنا..."
      }
    },

    // 3. Concept (شرح المفهوم العلمي)
    {
      type: "concept",
      content: {
        title_fr: "Concept Scientifique",
        explanation: "الشرح المبسط للمفهوم هنا...",
        keywords: ["Mot-clé 1", "Mot-clé 2"]
      }
    },

    // 4. Analogy (المثال التشبيهي)
    {
      type: "analogy",
      content: "نص المثال التشبيهي بالدارجة هنا (مثلا: الخلية بحال لوزين)..."
    },

    // 5. Image (الصورة)
    {
      type: "image",
      content: {
        src: "/path/to/image.jpg",
        caption: "تعليق توضيحي للصورة"
      }
    },

    // 6. Translation (المصطلحات / الديكسيونير)
    {
      type: "translation",
      content: {
        title: "ديكسيونير السيمو",
        terms: [
          { fr: "Terme Français", ar: "الشرح بالدارجة" },
          { fr: "Terme Français", ar: "الشرح بالدارجة" }
        ]
      }
    },

    // 7. Exam Trap (فخ الامتحان)
    {
      type: "exam_trap",
      content: {
        text: "رد البال من هاد القالب..."
      }
    },

    // 8. Comparison (المقارنة)
    {
      type: "comparison",
      content: {
        leftTitle: "Gauche (Ex: Procaryote)",
        rightTitle: "Droite (Ex: Eucaryote)",
        leftItems: [
          "نقطة 1",
          "نقطة 2"
        ],
        rightItems: [
          "نقطة 1",
          "نقطة 2"
        ]
      }
    },

    // 9. Advice (النصيحة الذهبية)
    {
      type: "advice",
      content: {
        title: "نصيحة",
        text: "نص النصيحة هنا..."
      }
    },

    // 10. Résumé (الملخص الأكاديمي)
    {
      type: "resume",
      content: {
        title_fr: "Résumé à retenir",
        explanation: "1. Point important.\n2. Point important.",
        keywords: ["Résumé", "Bio"]
      }
    },

    // 11. Audio (ملف صوتي)
    {
      type: "audio",
      content: {
        src: "/path/to/audio.mp3",
        title: "عنوان المقطع الصوتي",
        duration: "00:00"
      }
    },

    // 12. Quiz (كويز تفاعلي)
    {
      type: "quiz",
      content: {
        question: "سؤال الكويز هنا؟",
        options: [
          "اختيار 1",
          "اختيار 2",
          "اختيار 3",
          "اختيار 4"
        ],
        correctIndex: "ترتيب الجواب الصحيح", // رقم الجواب الصحيح (كيبدا من 0)
        explanation: "شرح علاش هذا هو الجواب الصحيح."
      }
    },

    // 13. Checklist (الخلاصة النهائية)
    {
      type: "checklist",
      content: {
        title: "خلاصة: شنو خاصك تعقل",
        items: [
          "خلاصة 1",
          "خلاصة 2",
          "خلاصة 3",
        ]
      }
    }
  ]
};