import React, { useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoContainer from '../Components/VideoContainer';
import PreloaderBanner from '../Components/PreloaderBanner';
import ScrollProgressBar from '../Components/ScrollProgressBar';
import { useAnimation } from '../context/AnimationContext';

// Повний список режисерів
const directorsData = [
    { name: 'SUPERNOVA', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'CHRISTOPHER SIMS', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'ANTONY HOFFMAN', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'MATTIA BENNETTI', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'ELI SVERDLOV', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'REMY CAYUELA', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'VIVIENNE AND TAMAS', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'LORENZO CISI', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'WE ARE THE ZELLERS', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'BEEDY', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' },
    { name: 'JEAN CLAUDE THIBAUT', videoSrc: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4' }
];

const nameAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Directors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isPreloaderActive, setIsPreloaderActive } = useAnimation();

  // Гарантовано скролимо наверх при завантаженні
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Керуємо блокуванням скролу
  useEffect(() => {
    document.body.style.overflow = isPreloaderActive ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isPreloaderActive]);

  // Керуємо скрол-снепом та індексом
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.add('scroll-snap-enabled');
    
    const handleScroll = () => {
      if (isPreloaderActive) return;
      const newIndex = Math.round(window.scrollY / window.innerHeight);
      setCurrentIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      htmlElement.classList.remove('scroll-snap-enabled');
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPreloaderActive]);

  const handleBannerAnimationComplete = () => {
    setIsPreloaderActive(false);
  };

  // Повні тексти для банера
  const bannerTitle = "VISIONARY STORYTELLERS. COMMERCIAL REBELS. GLOBAL CREATORS.";
  const bannerDescription = "From award-winning filmmakers to fashion-forward image makers, our directors and hybrid talent deliver world-class content across commercials, music videos, branded series, and global campaigns.";

  return (
    <div className="bg-black">
      <AnimatePresence>
        {isPreloaderActive && (
          <PreloaderBanner
            onAnimationComplete={handleBannerAnimationComplete}
            title={bannerTitle}
            description={bannerDescription}
          />
        )}
      </AnimatePresence>
      
      {!isPreloaderActive && <ScrollProgressBar currentIndex={currentIndex} totalItems={directorsData.length} />}

      {directorsData.map((director, index) => (
        <div key={director.name} className="relative w-full h-screen snap-start">
          <VideoContainer videoSrc={director.videoSrc} />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-end p-4">
            <motion.h2
              className="text-white text-4xl sm:text-5xl md:text-6xl font-chanel font-semibold uppercase pb-16 text-center"
              variants={nameAnimation}
              initial="hidden"
              // Анімація для першого елемента залежить від прелоадера, для інших - від скролу
              animate={index === 0 && !isPreloaderActive ? 'visible' : undefined}
              whileInView={index > 0 ? 'visible' : undefined}
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