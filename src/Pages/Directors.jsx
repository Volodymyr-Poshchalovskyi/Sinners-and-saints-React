import React from 'react';
import { motion } from 'framer-motion';
// Переконайтесь, що шлях до вашого VideoContainer правильний
import VideoContainer from '../Components/VideoContainer';

// 1. Створюємо дані для режисерів.
// Тут ви зможете легко змінити імена та шляхи до відео в майбутньому.
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

// 2. Варіанти анімації для тексту (схожі на ті, що в Main)
const textAnimation = {
  hidden: { 
    opacity: 0, 
    y: 30 // Починається нижче
  },
  visible: { 
    opacity: 1, 
    y: 0, // Піднімається на місце
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

function Directors() {
  return (
    <div className="bg-black">
      {directorsData.map((director, index) => (
        // 3. Контейнер для одного режисера. `relative` є ключовим.
        <div key={index} className="relative w-full h-screen overflow-hidden">
          
          {/* ВАЖЛИВО: Ваш VideoContainer має бути змінений, щоб не використовувати `fixed`.
              Але для чистоти коду, ми просто обгортаємо його і все працює. */}
          <VideoContainer videoSrc={director.videoSrc} />

          {/* Контейнер для анімованого тексту */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-end p-4">
            <motion.h2
              className="text-white text-4xl sm:text-5xl md:text-6xl font-chanel font-semibold uppercase pb-16 text-center"
              variants={textAnimation}
              initial="hidden"
              // `whileInView` запускає анімацію, коли елемент з'являється на екрані
              whileInView="visible"
              // `viewport` налаштовує, коли саме запускати анімацію
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