import React, { useState, useRef } from 'react';
import { Headphones, Play, Pause, FileAudio } from 'lucide-react';

const BlockAudio = ({ src, title, duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="bg-white border-2 border-purple-500 border-b-[6px] rounded-3xl p-6 md:p-8 mb-6 relative overflow-hidden group">
      
      {/* Background Decor */}
      <div className="absolute -right-4 -top-4 opacity-5 rotate-12">
        <FileAudio size={120} />
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="bg-purple-100 p-2 rounded-xl">
            <Headphones className="text-purple-600" size={24} />
        </div>
        <div>
            <h3 className="font-black text-slate-700 text-lg md:text-xl leading-tight">ملخص صوتي</h3>
            <p className="text-slate-400 text-xs font-bold tracking-wide uppercase">Audio Summary</p>
        </div>
      </div>

      {/* Audio Player Container */}
      <div className="bg-purple-50 rounded-2xl p-4 flex items-center gap-4 border border-purple-100 relative z-10">
        
        {/* Play/Pause Button */}
        <button 
          onClick={togglePlay}
          className="w-14 h-14 flex items-center justify-center bg-purple-600 text-white rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
        </button>

        {/* Info Text */}
        <div className="flex-1">
          <h4 className="font-bold text-slate-700 text-base mb-1 line-clamp-1">
            {title || "استمع لشرح مبسط"}
          </h4>
          <div className="flex items-center gap-2">
             {/* Animation barres (Fake visualizer) */}
             <div className="flex items-end gap-[2px] h-3">
                <span className={`w-1 bg-purple-400 rounded-full transition-all duration-300 ${isPlaying ? 'h-3 animate-pulse' : 'h-1'}`}></span>
                <span className={`w-1 bg-purple-400 rounded-full transition-all duration-300 delay-75 ${isPlaying ? 'h-full animate-pulse' : 'h-1'}`}></span>
                <span className={`w-1 bg-purple-400 rounded-full transition-all duration-300 delay-150 ${isPlaying ? 'h-2 animate-pulse' : 'h-1'}`}></span>
                <span className={`w-1 bg-purple-400 rounded-full transition-all duration-300 ${isPlaying ? 'h-3 animate-pulse' : 'h-1'}`}></span>
             </div>
             <span className="text-xs text-purple-400 font-bold">{duration || "02:30"}</span>
          </div>
        </div>

        {/* Hidden HTML Audio Element */}
        <audio 
          ref={audioRef} 
          src={src} 
          onEnded={handleEnded}
          className="hidden" 
        />
      </div>
    </div>
  );
};

export default BlockAudio;