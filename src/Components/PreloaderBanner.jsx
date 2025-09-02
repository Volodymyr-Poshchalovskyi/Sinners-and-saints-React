import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Спільна конфігурація анімації для синхронізації
const fadeAnimation = {
  duration: 0.8,
  ease: "easeInOut"
};

export default function PreloaderBanner({ title, description, onAnimationComplete }) {
  const titleWords = title ? title.split(' ') : [];
  const descriptionWords = description ? description.split(' ') : [];
  const [startFadeOut, setStartFadeOut] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const descriptionContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, staggerChildren: 0.15 } },
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const handleTextAnimationComplete = () => {
    setTimeout(() => {
      setStartFadeOut(true);
    }, 4000); // Затримка перед зникненням
  };

  if (isUnmounted) {
    return null;
  }

  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 h-40 bg-white z-50 flex flex-col items-center justify-center p-4"
      initial={{ opacity: 1 }}
      animate={{ opacity: startFadeOut ? 0 : 1 }}
      transition={fadeAnimation}
      onAnimationComplete={() => {
        if (startFadeOut) {
          setIsUnmounted(true);
          if (onAnimationComplete) {
            onAnimationComplete();
          }
        }
      }}
    >
      <motion.h1 
        className="font-chanel font-semibold text-black text-2xl md:text-4xl text-center uppercase"
        variants={titleContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {titleWords.map((word, index) => (
          <motion.span key={index} variants={wordVariants} className="inline-block mr-3">
            {word}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p 
        className="font-chanel text-gray-700 text-base text-center max-w-5xl mt-4"
        variants={descriptionContainerVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={handleTextAnimationComplete}
      >
        {descriptionWords.map((word, index) => (
          <motion.span key={index} variants={wordVariants} className="inline-block mr-2">
            {word}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  );
}