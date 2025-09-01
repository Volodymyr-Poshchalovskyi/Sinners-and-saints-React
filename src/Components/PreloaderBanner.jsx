import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PreloaderBanner({ title, description, onAnimationComplete }) {
  const titleWords = title ? title.split(' ') : [];
  const descriptionWords = description ? description.split(' ') : [];

  // Стан для запуску анімації зникнення всього банера
  const [startFadeOut, setStartFadeOut] = useState(false);
  // Стан для повного видалення компонента з DOM після анімації
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

  // Функція, яка запускається після завершення анімації тексту
  const handleTextAnimationComplete = () => {
    // Встановлюємо таймер на 4 секунди перед початком зникнення
    setTimeout(() => {
      setStartFadeOut(true);
    }, 4000);
  };

  // Якщо компонент має бути видалений, повертаємо null
  if (isUnmounted) {
    return null;
  }

  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 h-40 bg-white z-50 flex flex-col items-center justify-center p-4"
      // Початкова анімація не потрібна, банер одразу видимий
      initial={{ opacity: 1 }}
      // Анімуємо прозорість до 0, коли `startFadeOut` стає true
      animate={{ opacity: startFadeOut ? 0 : 1 }}
      transition={{ duration: 1 }} // Тривалість анімації зникнення
      // Ця функція викликається після завершення анімації зникнення
      onAnimationComplete={() => {
        if (startFadeOut) {
          setIsUnmounted(true); // Встановлюємо стан для видалення компонента
          if (onAnimationComplete) {
            onAnimationComplete(); // Викликаємо батьківську функцію, якщо вона є
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
        // Після завершення анімації опису викликаємо нашу функцію-тригер
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