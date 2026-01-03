export const introData = {
  id: "intro-bio",
  title: "Introduction Générale: عالم البيولوجيا",
  blocks: [
    {
      type: "introduction",
      content: {
        text: "مرحباً بيك فـ الجامعة! بزاف كيسحبو البيولوجيا هي غير 'الحفاظة' والرسم، ولكن هي فالحقيقة 'اللوجيك' باش خدامة الحياة. فهاد المقدمة غانبدلو النظرة ديالك على هاد الشعبة وغاتعرف شنو كيتسناك."
      }
    },
    {
      type: "image",
      content: {
        // ملاحظة: خاصك تكون حاط تصويرة سميتها biology-intro.jpg فـ مجلد public/assets/
        // أو دير رابط من الانترنيت للتجربة
        src: "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg", 
        caption: "البيولوجيا هي المفتاح باش نفهمو منين جينا وكيفاش جسمنا خدام"
      }
    },
    {
      type: "concept",
      content: {
        title_fr: "La Biologie (Définition)",
        explanation: "كلمة بيولوجيا مقسومة لجوج كلمات يونانية: Bios (الحياة) و Logos (العلم/الدراسة). يعني هي العلم اللي كيدرس الكائنات الحية من أصغر جزيئة (ADN) حتال أكبر نظام بيئي.",
        keywords: ["Bios", "Logos", "Science de la vie"]
      }
    },
        {
      type: "quiz",
      content: {
        question: "شنو هو الأصل اللغوي ديال كلمة 'Bios'؟",
        options: ["العلم (Science)", "الحياة (Vie)", "الأرض (Terre)", "الخلية (Cellule)"],
        correctIndex: 1, // الجواب الثاني هو الصحيح
        explanation: "برافو! Bios كتعني 'الحياة' باليونانية، و Logos كتعني 'العلم'."
      }
    },
    {
      type: "analogy",
      content: "تخيل البيولوجيا بحال شي 'ميكانيك' ديال الكائنات الحية. الميكانيسيان كيفهم فـ المطور والبياس، والبيولوجيست كيفهم فـ الخلايا والبروتينات."
    },
    {
      type: "exam_trap",
      content: {
        text: "رد بالك! البيولوجيا ماشي هي الطب. الطبيب كيعالج المرض، ولكن البيولوجيست هو اللي كيفهم كيفاش المرض كيوقع وكيفاش نصنعو ليه الدوا."
      }
    },
    {
      type: "concept",
      content: {
        title_fr: "Les Horizons (الآفاق)",
        explanation: "من غير التعليم، البيولوجيست مطلوب فـ: 1. الصناعة الدوائية (Industrie Pharmaceutique). 2. التحاليل الطبية (Laboratoires). 3. البيئة ومعالجة المياه (Traitement des eaux).",
        keywords: ["Recherche", "Industrie", "Laboratoire"]
      }
    },
    {
      type: "concept",
      content: {
        title_fr: "Les Horizons (الآفاق)",
        explanation: "من غير التعليم، البيولوجيست مطلوب فـ: 1. الصناعة الدوائية (Industrie Pharmaceutique). 2. التحاليل الطبية (Laboratoires). 3. البيئة ومعالجة المياه (Traitement des eaux).",
        keywords: ["Recherche", "Industrie", "Laboratoire"]
      }
    },
    {
      type: "quiz",
      content: {
        question: "شنو هو الأصل اللغوي ديال كلمة 'Bios'؟",
        options: ["العلم (Science)", "الحياة (Vie)", "الأرض (Terre)", "الخلية (Cellule)"],
        correctIndex: 1, // الجواب الثاني هو الصحيح
        explanation: "برافو! Bios كتعني 'الحياة' باليونانية، و Logos كتعني 'العلم'."
      }
    }
  ]
};