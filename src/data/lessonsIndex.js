// // إضافة دروس أخرى هنا حسب الحاجة
// import { S1_M1_L0 } from './semestre1/biologie-cellulaire/introduction-générale-biologie-cellulaire';
// import { S1_M1_L1 } from './semestre1/biologie-cellulaire/la-theorie-cellulaire';
// import { S1_M1_L2 } from './semestre1/biologie-cellulaire/constituants-chimiques';

// export const ALL_LESSONS = {
//   "introduction-générale-biologie-cellulaire": S1_M1_L0,
//   "1-1-theorie-cellulaire": S1_M1_L1,
//   "constituants-chimiques": S1_M1_L2,
// };

// src/data/lessonsIndex.js

// 1. استيراد الدروس (تأكد من المسارات تكون صحيحة)
import { S1_M1_L0 } from './semestre1/biologie-cellulaire/introduction-générale-biologie-cellulaire';
import { S1_M1_L1 } from './semestre1/biologie-cellulaire/la-theorie-cellulaire';
import { S1_M1_L2 } from './semestre1/biologie-cellulaire/definition-cellule';
import { S1_M1_L3 } from './semestre1/biologie-cellulaire/organisation-generale';

// 2. تصدير القاموس الكامل (IDs خاصهم يكونو مطابقين لـ chapters فـ landingData.js)
export const ALL_LESSONS = {
  // المقدمة
  "introduction-générale-biologie-cellulaire": S1_M1_L0,
  
  // الدرس 1.1 (Théorie Cellulaire)
  "1-1-theorie-cellulaire": S1_M1_L1, 

  // الدرس 1.2 (Définition)
  "1-2-definition-cellule": S1_M1_L2, 

  // الدرس 1.3 (Organisation)
  "1-3-organisation-generale": S1_M1_L3,
};