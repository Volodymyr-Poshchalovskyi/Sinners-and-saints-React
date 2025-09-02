import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

export default function Header() {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  
  // 1. Додаємо новий стан, щоб відстежувати позицію нагорі сторінки
  const [isAtTop, setIsAtTop] = useState(true);

  const [indicatorStyle, setIndicatorStyle] = useState({
    opacity: 0, left: 0, width: 0,
  });

  const location = useLocation();
  const isMainPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 2. Оновлюємо стан isAtTop при кожному скролі
      setIsAtTop(currentScrollY < 50); // Вважаємо верхом сторінки, якщо скрол менше 50px

      if (isMainPage) {
        setIsNavVisible(true);
        return;
      }
      
      setIsNavVisible(currentScrollY < lastScrollY.current || currentScrollY < 100);
      lastScrollY.current = currentScrollY;
    };

    // Встановлюємо початкове значення isAtTop при завантаженні
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMainPage]);

  const handleLinkMouseEnter = (e) => {
    const linkElement = e.currentTarget;
    setIndicatorStyle({
      opacity: 1, left: linkElement.offsetLeft, width: linkElement.offsetWidth,
    });
  };

  const handleNavMouseLeave = () => {
    setIndicatorStyle((prevStyle) => ({ ...prevStyle, opacity: 0 }));
  };

  // 3. Оновлюємо головну логіку видимості
  // Тепер хедер видимий, якщо:
  // - це головна сторінка, АБО
  // - на нього навели курсор, АБО
  // - навігація видима (скрол вгору) І при цьому ми НЕ на самому верху сторінки
  const isHeaderVisible = isMainPage ? true : isHeaderHovered;


  return (
    <header
      className="fixed top-0 left-0 w-full z-[1000]"
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => setIsHeaderHovered(false)}
    >
      <div
        className={`relative z-20 transition-colors duration-200 ${
          isHeaderVisible ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="w-full relative px-8 flex justify-center items-center transition-all duration-300 h-16">
          <div className="flex justify-center items-center h-full">
            <Link to="/" className="flex items-center h-full">
              <img
                src={isHeaderVisible ? sinnersLogoBlack : sinnersLogoWhite}
                alt="Sinners and Saints Logo"
                className="w-32 h-auto transition-all duration-300"
              />
            </Link>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-16">
            <Link
              to="/login"
              aria-label="Login"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                isHeaderVisible ? 'text-black hover:bg-gray-100' : 'text-white/80 hover:text-white'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
              </svg>
            </Link>
          </div>
        </div>

        <nav
          className={`w-full flex justify-center transition-all duration-300 ease-in-out overflow-hidden ${
            isNavVisible || isMainPage ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'
          }`}
          onMouseLeave={handleNavMouseLeave}
        >
          <div className="flex items-center gap-8 pb-4 pt-2 relative">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onMouseEnter={handleLinkMouseEnter}
                className={`py-2 px-3 text-xs font-semibold uppercase tracking-[0.15em] transition-opacity duration-200 ${
                  isHeaderVisible ? 'text-black opacity-100' : 'text-white opacity-0 pointer-events-none'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="absolute bottom-0 h-[3px] bg-black"
              style={{
                ...indicatorStyle,
                opacity: isHeaderVisible ? indicatorStyle.opacity : 0,
                transition: 'all 0.2s ease-in-out',
              }}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}