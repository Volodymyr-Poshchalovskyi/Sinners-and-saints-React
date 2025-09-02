import React, { useState, useEffect } from 'react'; // Додано useState
import { motion } from 'framer-motion';
import VideoContainer from '../Components/VideoContainer';
import PreloaderBanner from '../Components/PreloaderBanner';
import ScrollProgressBar from '../Components/ScrollProgressBar'; 

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
  // 2. Створюємо стан для зберігання індексу поточного відео
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.add('scroll-snap-enabled');
    
    // 3. Функція, яка буде викликатись при скролі
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      // Визначаємо індекс, округлюючи позицію скролу, поділену на висоту екрана
      const newIndex = Math.round(window.scrollY / windowHeight);
      setCurrentIndex(newIndex);
    };

    // Додаємо слухача події скролу
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Прибираємо слухача при розмонтуванні компонента
    return () => {
      htmlElement.classList.remove('scroll-snap-enabled');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bannerTitle = "VISIONARY STORYTELLERS. COMMERCIAL REBELS. GLOBAL CREATORS.";
  const bannerDescription = "From award-winning filmmakers to fashion-forward image makers, our directors and hybrid talent deliver world-class content across commercials, music videos, branded series, and global campaigns.";

  return (
    <div className="bg-black">
      {/* 4. Рендеримо прогрес-бар і передаємо в нього потрібні пропси */}
      <ScrollProgressBar currentIndex={currentIndex} totalItems={directorsData.length} />

      
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