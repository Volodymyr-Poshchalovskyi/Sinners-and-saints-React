// src/App.jsx

import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import AppRouter from './Routes/Router';

import  {AnimationProvider}  from './context/AnimationContext'; 

export default function App() {
  return (
    <Router>
      
      <AnimationProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </AnimationProvider>
    </Router>
  );
}