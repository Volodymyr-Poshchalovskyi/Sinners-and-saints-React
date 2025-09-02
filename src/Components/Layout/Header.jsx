import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimation } from '../../context/AnimationContext';
import sinnersLogoBlack from '../../assets/Logo/Sinners logo black.png';
import sinnersLogoWhite from '../../assets/Logo/Sinners logo white.png';

const navLinks = [
  { path: '/directors', label: 'Directors' },
  { path: '/originals', label: 'Originals' },
  { path: '/production', label: 'Production services' },
  { path: '/management', label: 'Management' },
  { path: '/assignment', label: 'On Assignment' },
  { path: '/feature', label: 'Feature Film Packaging' },
  { path: '/studio', label: 'Studio Lux' },
  { path: '/team', label: 'Team' },
];

const fadeAnimation = {
  duration: 0.8,
  ease: "easeInOut"
};

const headerVariants = {
  hidden: { backgroundColor: 'rgba(255, 255, 255, 0)' },
  visible: { backgroundColor: 'rgba(255, 255, 255, 1)' },
};

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const { isPreloaderActive } = useAnimation();
  const location = useLocation();

  // 1. Нова змінна для перевірки шляху
  const isSpecialPage = location.pathname === '/' || location.pathname.startsWith('/directors/');

  // 2. Оновлена умова для видимості хедера
  const isVisible = isHovered || isSpecialPage || (location.pathname === '/directors' && isPreloaderActive);
  
  // 3. Додаємо стан для стилів індикатора
  const [indicatorStyle, setIndicatorStyle] = useState({
    opacity: 0,
    left: 0,
    width: 0,
  });

  // 4. Функції для обробки наведення миші
  const handleLinkMouseEnter = (e) => {
    const linkElement = e.currentTarget;
    setIndicatorStyle({
      opacity: 1,
      left: linkElement.offsetLeft,
      width: linkElement.offsetWidth,
    });
  };

  const handleNavMouseLeave = () => {
    setIndicatorStyle((prevStyle) => ({ ...prevStyle, opacity: 0 }));
  };


  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-[1000]"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      variants={headerVariants}
      animate={isVisible ? 'visible' : 'hidden'}
      transition={fadeAnimation}
    >
      {/* Логотип */}
      <div className="w-full relative px-8 flex justify-center items-center h-16">
        <Link to="/" className="flex items-center h-full">
          <img
            src={isVisible ? sinnersLogoBlack : sinnersLogoWhite}
            alt="Sinners Logo"
            className="w-32 h-auto transition-opacity duration-300"
          />
        </Link>
      </div>

      {/* Навігація */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            className="w-full flex justify-center overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            // 5. Додаємо обробник, щоб ховати індикатор, коли миша йде з навігації
            onMouseLeave={handleNavMouseLeave}
          >
            {/* Додаємо 'relative', щоб позиціонувати індикатор відносно цього блоку */}
            <div className="flex items-center gap-8 pb-4 pt-2 relative">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  // 6. Додаємо обробник на кожне посилання
                  onMouseEnter={handleLinkMouseEnter}
                  className="py-2 px-3 text-xs font-semibold uppercase tracking-[0.15em] text-black"
                >
                  {link.label}
                </Link>
              ))}
              {/* 7. Сам елемент індикатора */}
              <div
                className="absolute bottom-0 h-[3px] bg-black"
                style={{
                  ...indicatorStyle,
                  transition: 'left 0.2s ease-out, width 0.2s ease-out, opacity 0.2s ease-out',
                }}
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}