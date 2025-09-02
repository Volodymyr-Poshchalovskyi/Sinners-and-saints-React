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

  const isSpecialPage =
    location.pathname === '/' ||
    location.pathname.startsWith('/directors/') ||
    location.pathname === '/login';

  const isVisible =
    isHovered || isSpecialPage || (location.pathname === '/directors' && isPreloaderActive);

  const [indicatorStyle, setIndicatorStyle] = useState({
    opacity: 0,
    left: 0,
    width: 0,
  });

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
      {/* Обгортка для центрованого вмісту */}
      <div className="w-full relative px-8 flex justify-center items-center h-16">
        {/* Логотип по центру */}
        <Link to="/" className="flex items-center h-full">
          <img
            src={isVisible ? sinnersLogoBlack : sinnersLogoWhite}
            alt="Sinners Logo"
            className="w-32 h-auto transition-opacity duration-300"
          />
        </Link>

        {/* Кнопка логіну */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="absolute right-8 top-1/2 -translate-y-1/2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Link
                to="/login"
                aria-label="Login"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 text-black hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 🔥 Невидима зона для продовження hover */}
      <div className="absolute left-0 right-0 top-16 h-12" />

      {/* Навігація */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            className="w-full flex justify-center overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onMouseLeave={handleNavMouseLeave}
          >
            <div className="flex items-center gap-8 pb-4 pt-2 relative">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onMouseEnter={handleLinkMouseEnter}
                  className="py-2 px-3 text-xs font-semibold uppercase tracking-[0.15em] text-black"
                >
                  {link.label}
                </Link>
              ))}
              <div
                className="absolute bottom-0 h-[3px] bg-black"
                style={{
                  ...indicatorStyle,
                  transition:
                    'left 0.2s ease-out, width 0.2s ease-out, opacity 0.2s ease-out',
                }}
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
