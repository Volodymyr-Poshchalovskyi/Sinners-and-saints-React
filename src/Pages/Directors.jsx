import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import VideoContainer from '../Components/VideoContainer';
import PreloaderBanner from '../Components/PreloaderBanner'; // Імпорт залишається

// Повний список режисерів
const directorsData = [
    { name: 'SUPERNOVA', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'CHRISTOPHER SIMS', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'Antony hoffman', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'MATTIA BENNETTI', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'ELI SVERDLOV', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'REMY CAYUELA', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'VIVIENNE AND TAMAS', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'LORENZO CISI', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'WE ARE THE ZELLER', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'BEEDY', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'Jean Claude THIBAUT', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
];

const textAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

function Directors() {
    
  useEffect(() => {
    // Ця логіка залишається без змін
    const htmlElement = document.documentElement;
    htmlElement.classList.add('scroll-snap-enabled');
    return () => {
      htmlElement.classList.remove('scroll-snap-enabled');
    };
  }, []);

  // 1. Визначаємо тексти для банера
  const bannerTitle = "VISIONARY STORYTELLERS. COMMERCIAL REBELS. GLOBAL CREATORS.";
  const bannerDescription = "From award-winning filmmakers to fashion-forward image makers, our directors and hybrid talent deliver world-class content across commercials, music videos, branded series, and global campaigns.";

  return (
    <div className="bg-black">
      {/* 2. Передаємо тексти в компонент банера через пропси */}
      <PreloaderBanner title={bannerTitle} description={bannerDescription} />
      
      {directorsData.map((director, index) => (
        <div key={index} className="relative w-full h-screen snap-start">
          
          <VideoContainer videoSrc={director.videoSrc} />

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-end p-4">
            <motion.h2
              className="text-white text-4xl sm:text-5xl md:text-6xl font-chanel font-semibold uppercase pb-16 text-center"
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {director.name}
            </motion.h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Directors;