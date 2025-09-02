// src/context/AnimationContext.js

import React, { createContext, useContext, useState } from 'react';

const AnimationContext = createContext(null);

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within a AnimationProvider');
  }
  return context;
};

export const AnimationProvider = ({ children }) => {
  // Змінюємо стан на більш відповідний нашому завданню
  const [isPreloaderActive, setIsPreloaderActive] = useState(true);

  const value = {
    isPreloaderActive,
    setIsPreloaderActive,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};