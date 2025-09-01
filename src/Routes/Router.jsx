// src/routes/router.jsx
import { Routes, Route } from 'react-router-dom';

// Імпортуємо всі ваші компоненти сторінок
import Assignment from '../Pages/Assignment';
import Directors from '../Pages/Directors';
import Feature from '../Pages/Feature';
import Main from '../Pages/Main';
import Management from '../Pages/Management';
import Originals from '../Pages/Originals';
import Production from '../Pages/Production';
import Studio from '../Pages/Studio';
import Team from '../Pages/Team';
import Login from '../Pages/Login';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/assignment" element={<Assignment />} />
      <Route path="/directors" element={<Directors />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="/management" element={<Management />} />
      <Route path="/originals" element={<Originals />} />
      <Route path="/production" element={<Production />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/team" element={<Team />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}