"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff } from 'lucide-react';
import useVapi from '@/hooks/use-vapi';

const RadialCard: React.FC = () => {
  const { volumeLevel, isSessionActive, toggleCall } = useVapi();
  const [bars, setBars] = useState(Array(50).fill(0));

  const updateBars = useCallback((volume: number) => {
    setBars(bars.map(() => Math.random() * volume * 50));
  }, [bars]);

  const resetBars = useCallback(() => {
    setBars(Array(50).fill(0));
  }, []);

  useEffect(() => {
    if (isSessionActive) {
      updateBars(volumeLevel);
    } else {
      resetBars();
    }
  }, [volumeLevel, isSessionActive, updateBars, resetBars]);

  return (
    <div className='border text-center justify-items-center p-4 rounded-2xl'>
      <div className="flex items-center justify-center h-full relative" style={{ width: '300px', height: '300px' }}>
        {isSessionActive ? 
          <MicOff
            size={24}
            className="text-black dark:text-white"
            onClick={() => toggleCall()}
            style={{ cursor: 'pointer', zIndex: 10 }}
          />
          :
          <Mic
            size={28}
            className="text-black dark:text-white"
            onClick={() => toggleCall()}
            style={{ cursor: 'pointer', zIndex: 10 }}
          />
        }
        <svg width="100%" height="100%" viewBox="0 0 300 300" style={{ position: 'absolute', top: 0, left: 0 }}>
          {bars.map((height, index) => {
            const angle = (index / bars.length) * 360;
            const radians = (angle * Math.PI) / 180;
            const x1 = 150 + Math.cos(radians) * 50;
            const y1 = 150 + Math.sin(radians) * 50;
            const x2 = 150 + Math.cos(radians) * (100 + height);
            const y2 = 150 + Math.sin(radians) * (100 + height);

            return (
              <motion.line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#c33764"
                strokeWidth="2"
                opacity="0.7"
                initial={{ x2: x1, y2: y1 }}
                animate={{ x2, y2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            );
          })}
        </svg>
        <span className="absolute top-48 w-[calc(100%-70%)] h-[calc(100%-70%)] bg-primary blur-[120px]"></span>
      </div>
      <span className='text-sm text-gray-500'>Try asking: &apos;Tell me about AiroDental&apos;s AI solutions&apos; or &apos;How can AI help my dental practice?&apos;</span>
    </div>
  );
};

export default RadialCard; 