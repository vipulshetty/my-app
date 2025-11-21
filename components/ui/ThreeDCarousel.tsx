"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ThreeDCarousel = ({
  items,
  renderItem,
  autoPlay = true,
  interval = 5000,
}: {
  items: any[];
  renderItem: (item: any) => React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (autoPlay && !isPaused) {
      const timer = setInterval(handleNext, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, isPaused, handleNext]);

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto h-[600px] flex flex-col items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center perspective-1000">
        {items.map((item, index) => {
          const len = items.length;
          // Calculate shortest distance in circle
          let distance = (index - activeIndex + len) % len;
          if (distance > len / 2) distance -= len;
          
          const absDistance = Math.abs(distance);
          const isActive = distance === 0;
          
          // Only render visible items to improve performance if list is huge, 
          // but for portfolio it's fine to render all usually.
          // Let's hide items that are too far back
          if (absDistance > 2) return null;

          return (
            <motion.div
              key={index}
              className="absolute w-[90%] md:w-[800px] aspect-video cursor-pointer"
              initial={false}
              animate={{
                x: distance * 220, // Horizontal spacing
                scale: 1 - absDistance * 0.15, // Scale down
                rotateY: distance * -25, // Rotation
                opacity: 1 - absDistance * 0.3, // Fade out
                zIndex: 100 - absDistance, // Stacking order
                filter: isActive ? "blur(0px)" : "blur(2px)",
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={() => setActiveIndex(index)}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className={`w-full h-full ${isActive ? '' : 'pointer-events-none'}`}>
                {renderItem(item)}
              </div>
              {/* Overlay for non-active items */}
              {!isActive && (
                <div className="absolute inset-0 bg-black/60 rounded-2xl z-20 transition-colors duration-300" />
              )}
            </motion.div>
          );
        })}
      </div>
      
      <div className="flex gap-6 mt-8 z-50">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 backdrop-blur-sm"
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 backdrop-blur-sm"
          aria-label="Next project"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
