import React, { useEffect, useRef, useState } from 'react';
import { Activity } from 'lucide-react';

export const PerformanceMonitor: React.FC = () => {
  const [fps, setFps] = useState(60);
  const [frameTime, setFrameTime] = useState(16.6);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const updateLoop = () => {
      const now = performance.now();
      const delta = now - lastTimeRef.current;
      
      frameCountRef.current++;
      
      if (delta >= 500) { // Update display every 500ms
        const currentFps = (frameCountRef.current * 1000) / delta;
        setFps(Math.round(currentFps));
        setFrameTime(delta / frameCountRef.current);
        
        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }
      
      requestRef.current = requestAnimationFrame(updateLoop);
    };

    requestRef.current = requestAnimationFrame(updateLoop);
    
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const isStable = fps >= 55;
  const isCritical = fps < 30;

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-[9999] pointer-events-none select-none">
       <div className={`flex items-center gap-3 px-4 py-1.5 rounded-full border backdrop-blur-md shadow-lg ${
          isStable 
            ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400' 
            : isCritical 
            ? 'bg-rose-950/40 border-rose-500/30 text-rose-400'
            : 'bg-amber-950/40 border-amber-500/30 text-amber-400'
       }`}>
          <Activity className="w-3.5 h-3.5 opacity-70" />
          <span className="text-[10px] font-mono font-bold tracking-wider">
             FPS: {fps}
          </span>
          <span className="text-[10px] font-mono opacity-70">
             | {frameTime.toFixed(1)}ms
          </span>
       </div>
    </div>
  );
};
