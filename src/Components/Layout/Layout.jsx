// src/Components/Layout/Layout.jsx

import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  // 1. Get the current location object
  const location = useLocation();

  // 2. Check if the current path is the main page ('/')
  const isMainPage = location.pathname === '/';

  return (
    <div className="min-h-screen dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main>{children}</main>
      
      {/* 3. Render the Footer only if it's NOT the main page */}
      {!isMainPage && <Footer />}
    </div>
  );
}