import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const location = useLocation();
  const shouldHideFooter = location.pathname === '/' || location.pathname === '/login';

  return (
    // 1. Додаємо flex та flex-col, щоб елементи стали в колонку
    <div className="min-h-screen dark:bg-gray-900 text-black dark:text-white flex flex-col">
      <Header />
      {/* 2. Додаємо flex-grow, щоб цей блок зайняв увесь доступний простір */}
      <main className="flex-grow">{children}</main>
      
      {!shouldHideFooter && <Footer />}
    </div>
  );
}