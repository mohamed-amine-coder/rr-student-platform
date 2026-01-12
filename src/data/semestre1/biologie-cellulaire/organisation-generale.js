import IMAGE1 from "/organisation-cellulaire.png";
export const S1_M1_L3 = {
  id: "organisation-generale",
  title: "1.3 Procaryote vs Eucaryote - الستوديو والفيلا",
  blocks: [
    {
      type: "introduction",
      content: {
        text: "وصلنا للدرس اللي كيطيح فـ 90% ديال الامتحانات! العلماء قسمو الخلايا لجوج عائلات كبار. وحدة 'درويشة' وقديمة، ووحدة 'مرفحة' ومتطورة. خاصك تخرج من هاد الفيديو كاطير فالفرق بيناتهم."
      }
    },
    {
      type: "concept",
      content: {
        title_fr: "Cellule Procaryote",
        explanation: "النوع الأول هو **Procaryote** (بحال البكتيريا). هاد الكلمة كتعني 'قبل النواة'. الميزة ديالها: ماعندهاش نواة حقيقية (Noyau) والـ ADN ديالها ملوح فالسيتوبلازم. [cite_start]وماعندهاش عضيات (Organites) بحال الميتوكوندري[cite: 5].",
        keywords: ["Procaryote", "Bactérie", "Pas de noyau"]
      }
    },
    {
      type: "analogy",
      content: "الـ Procaryote دايرة بحال **'ستوديو'** (Studio) ديال الطلبة. بيت واحد فيه الكوزينة والسرير والدوش. كلشي مخلط فبلاصة وحدة، ماكاينش لبيوت (Compartiments)."
    },
    {
      type: "concept",
      content: {
        title_fr: "Cellule Eucaryote",
        explanation: "النوع الثاني هو **Eucaryote** (بحالنا حنا، الحيوانات، والنباتات). [cite_start]هادي عندها **نواة حقيقية** (Vrai Noyau) فين مخبي الـ ADN، وعندها 'بيوت' لداخل (Organites) كل واحد وشنو كيدير[cite: 6].",
        keywords: ["Eucaryote", "Vrai noyau", "Compartimentation"]
      }
    },
    {
      type: "analogy",
      content: "الـ Eucaryote دايرة بحال **'فيلا'** (Villa) مقسمة. الوالد (ADN) عندو بيتو بوحدو (Noyau)، الكوزينة بوحدها (Mitochondrie)، والحمام بوحدو. هادشي كنسميوه **La Compartimentation**."
    },
    {
    type: "image",
    content: {
        src: IMAGE1, // سميها سمية باينة
        caption: "خطاطة ناضية: الفرق بين بدائية النواة وحقيقية النواة (حفظ الجدول!)."
    }
    },
    {
      type: "exam_trap",
      content: {
        text: "⚠️ رد البال: الفيروسات (Les Virus) ما هما Eucaryote ما هما Procaryote. هما **Acellulaires** (ماشي خلايا أصلاً). [cite_start]هما غير 'شفارة' (Parasites) كيحتاجو خلية باش يعيشو[cite: 7]."
      }
    },
    {
      type: "resume",
      content: {
        title_fr: "Résumé Scientifique (Comparaison)",
        explanation: "1. **Procaryote :** Pas de noyau, pas d'organites, petite taille (ex: Bactéries).\n2. **Eucaryote :** Vrai noyau, présence d'organites, compartimentation (ex: Animaux, Végétaux).\n3. **Virus :** Acellulaire, parasite obligatoire.",
        keywords: ["Comparaison", "Virus"]
      }
    },
    {
      type: "checklist",
      content: {
        title: "Checklist النجاح",
        items: [
          "فهمت بلي Procaryote = ستوديو (بدائية).",
          "فهمت بلي Eucaryote = فيلا (متطورة).",
          "عرفت بلي الفيروس ماشي خلية."
        ]
      }
    }
  ]
};