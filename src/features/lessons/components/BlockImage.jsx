import React from 'react';

const BlockImage = ({ src, caption }) => {
  return (
    <div className="my-8">
      <div className="overflow-hidden rounded-[2rem] border-4 border-slate-100 shadow-lg">
        <img 
          src={src} 
          alt={caption} 
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      {caption && (
        <p className="text-center text-slate-400 text-sm font-bold mt-3">
          📸 {caption}
        </p>
      )}
    </div>
  );
};

export default BlockImage;