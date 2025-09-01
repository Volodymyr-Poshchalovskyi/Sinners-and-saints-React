import React from 'react';
import { motion } from 'framer-motion';
import VideoContainer from '../Components/VideoContainer';

function Main() {
  const videoPath = '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4';

  const mainText = "WHERE CULTURE, COMMERCE AND CINEMA COLLIDE.";
  const subText = "A BOUTIQUE CREATIVE STUDIO AND PRODUCTION COMPANY CRAFTING BOLD CONTENT WITH THE WORLD'S MOST EXCITING TALENT.";

  const wordsMain = mainText.split(" ");
  const wordsSub = subText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full h-screen text-white">
      <VideoContainer videoSrc={videoPath} />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
        {/* Анімація основного заголовка */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl max-w-4xl leading-tight font-chanel font-semibold"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {wordsMain.map((word, i) => (
            <motion.span
              key={word + i}
              variants={wordVariants}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <div className="my-8"></div>

        {/* Анімація підзаголовка - ЗМІНЕНО ТУТ */}
        <motion.p
          // Збільшено розміри шрифту та додано font-bold
          className="text-xl sm:text-2xl md:text-3xl mt-4 max-w-3xl leading-relaxed font-chanel font-bold"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {wordsSub.map((word, i) => (
            <motion.span
              key={word + i}
              variants={wordVariants}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
}

export default Main;