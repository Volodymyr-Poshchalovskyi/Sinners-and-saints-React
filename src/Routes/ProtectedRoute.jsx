// /src/Routes/ProtectedRoute.js (трохи спрощено)
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ isAuth }) {
  if (!isAuth) {
    // Якщо не авторизований, перенаправляємо на сторінку логіну
    return <Navigate to="/login" replace />;
  }
  
  // Якщо авторизований, показуємо вкладений компонент (наприклад, AdminPanel)
  return <Outlet />;
}