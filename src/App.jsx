// src/App.jsx

import { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import AppRouter from './Routes/Router';
import { AnimationProvider } from './context/AnimationContext';

// A component that scrolls the window to the top on route changes.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimationProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </AnimationProvider>
    </Router>
  );
}
