// src/data/lessonsIndex.js

// كنعيطو غير على "البكيّة" (Pack) كاملة ديال الموديل
import { BIO_CELL_LESSONS } from './semestre1/biologie-cellulaire/lessons/index';
import { BIO_ANIMALE } from './semestre2/biologie-animale/lessons/index';

export const ALL_LESSONS = {
  // كنفرتو البكية هنا باستعمال ... (Spread Operator)
  ...BIO_CELL_LESSONS,
  ...BIO_ANIMALE,
};