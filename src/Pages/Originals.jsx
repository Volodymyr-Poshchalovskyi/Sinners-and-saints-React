// src/pages/Originals.js

import React, { useLayoutEffect, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 1. Імпортуємо Link для кнопок
import { AnimatePresence } from 'framer-motion';
import PreloaderBanner from '../Components/PreloaderBanner';
import { useAnimation } from '../context/AnimationContext';
import VideoContainer from '../Components/VideoContainer';

// 2. Створюємо дані для наших двох відео
const originalsData = [
  {
    id: 1,
    title: 'SINNERS AND SAINTS SHOWREEL 2024',
    projectLink: '/projects/showreel-2024' // Приклад посилання
  },
  {
    id: 2,
    title: 'FEATURED FASHION FILM',
    projectLink: '/projects/fashion-film' // Приклад посилання
  }
];

// 3. Створюємо окремий компонент для оверлею, щоб не повторювати код
const VideoOverlay = ({ title, projectLink }) => {
  return (
    // Оверлей позиціонується абсолютно поверх відео
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center p-8 mb-8 text-white">
      <p className="text-lg font-light mb-4">{title}</p>
      <Link to={projectLink}>
        {/* 4. Кнопка з новим текстом і без іконки */}
        <button className="bg-white text-black py-3 px-6 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 hover:bg-opacity-80">
          See Project
        </button>
      </Link>
    </div>
  );
};


export default function Originals() {
  const { isPreloaderActive, setIsPreloaderActive } = useAnimation();
  const videoURL = "/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4";

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isPreloaderActive ? 'hidden' : '';
    if (!isPreloaderActive) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPreloaderActive]);

  const handleBannerAnimationComplete = () => {
    setIsPreloaderActive(false);
  };

  const bannerTitle = "VISIONARY STORYTELLERS. COMMERCIAL REBELLI. GLOBAL CREATORS.";
  const bannerDescription = "From award-winning filmmakers to fashion-forward image makers, our directors and hybrid talent deliver world-class content across commercials, music videos, branded series, and global campaigns.";

  return (
    <div>
      <AnimatePresence>
        {isPreloaderActive && (
          <PreloaderBanner
            onAnimationComplete={handleBannerAnimationComplete}
            title={bannerTitle}
            description={bannerDescription}
          />
        )}
      </AnimatePresence>

      <div className="flex flex-col">
        {/* Перший контейнер відео на весь екран */}
        <div className="relative w-full h-screen overflow-hidden">
          <VideoContainer
            videoSrc={videoURL}
            shouldPlay={!isPreloaderActive}
          />
          {/* 5. Додаємо оверлей з даними першого об'єкта */}
          <VideoOverlay 
            title={originalsData[0].title} 
            projectLink={originalsData[0].projectLink} 
          />
        </div>

        {/* Другий контейнер відео на весь екран */}
        <div className="relative w-full h-screen overflow-hidden">
          <VideoContainer
            videoSrc={videoURL} // Використовуємо те ж відео, як ви і просили
            shouldPlay={!isPreloaderActive}
          />
          {/* 5. Додаємо оверлей з даними другого об'єкта */}
          <VideoOverlay 
            title={originalsData[1].title} 
            projectLink={originalsData[1].projectLink} 
          />
        </div>
      </div>
    </div>
  );
}