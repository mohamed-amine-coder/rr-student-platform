import React from 'react';
import { introData } from '../../data/semestre1/biologie-cellulaire/introduction';
import BlockIntro from './components/BlockIntro';

const LessonViewer = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-black mb-8 text-slate-900">{introData.title}</h1>

      {/* الحزام الناقل السحري */}
      {introData.blocks.map((block, index) => {
        
        // العامل (Switch) كيشوف النوع وكيعيط للماكينة المناسبة
        switch (block.type) {
          case 'introduction':
            // هنا كنمررو النص كـ Prop سميتها text
            return <BlockIntro key={index} text={block.content.text} />;
          
          case 'concept':
            // نقدروا نزيدو هنا BlockConcept من بعد
            return <div key={index}>Concept block goes here...</div>;
          
          default:
            return null;
        }
      })}
    </div>
  );
};

export default LessonViewer;