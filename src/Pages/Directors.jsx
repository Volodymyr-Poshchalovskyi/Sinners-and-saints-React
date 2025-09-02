import React, { useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import VideoContainer from '../Components/VideoContainer';
import PreloaderBanner from '../Components/PreloaderBanner';
import ScrollProgressBar from '../Components/ScrollProgressBar';
import { useAnimation } from '../context/AnimationContext';
import { directorsData } from '../Data/DirectorsData'; // Перевірте правильність цього шляху

const nameAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Directors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isPreloaderActive, setIsPreloaderActive } = useAnimation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isPreloaderActive ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isPreloaderActive]);

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
          
          {/* 👇 ОСЬ ВИПРАВЛЕННЯ: Беремо перше відео з масиву 'videos' */}
          <VideoContainer videoSrc={director.videos[0].src} />

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-end p-4">
            <Link to={`/directors/${director.slug}`} className="text-center">
              <motion.h2
                className="text-white text-4xl sm:text-5xl md:text-6xl font-chanel font-semibold uppercase pb-16"
                variants={nameAnimation}
                initial="hidden"
                animate={index === 0 && !isPreloaderActive ? 'visible' : undefined}
                whileInView={index > 0 ? 'visible' : undefined}
                viewport={{ once: true, amount: 0.5 }}
              >
                {director.name}
              </motion.h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Directors;