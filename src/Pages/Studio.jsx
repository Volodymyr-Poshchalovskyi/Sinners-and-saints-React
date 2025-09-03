// src/pages/Studio.js

import React, { useState } from 'react';
import TableTop from './TableTop';
import PostHouse from './PostHouse';

const studioData = {
  options: {
    'TABLE TOP STUDIO': 'TABLE TOP DIVISION',
    'POST HOUSE': 'POST HOUSE'
  }
};

const componentMap = {
  'TABLE TOP STUDIO': <TableTop />,
  'POST HOUSE': <PostHouse />
};

export default function Studio() {
  const [activeOption, setActiveOption] = useState(Object.keys(studioData.options)[0]);
  const displayText = studioData.options[activeOption];

  return (
    // 1. Основний контейнер тепер є flex-контейнером, що розташовує елементи в колонку.
    <div className="text-white bg-white h-screen flex flex-col">
      
      {/* 2. Банер тепер є першим елементом у flex-колонці. Він не буде розтягуватись. */}
      <header className="flex-shrink-0">
        <div className="bg-white w-full py-8 mt-28 flex justify-center">
          <div className="flex flex-col items-center text-center w-full px-8">
            <div className="flex justify-center space-x-8">
              {Object.keys(studioData.options).map(option => (
                <button
                  key={option}
                  onClick={() => setActiveOption(option)}
                  className={`relative text-2xl uppercase tracking-widest font-light transition-all duration-300 group ${activeOption === option ? 'text-black' : 'text-gray-400'}`}
                >
                  {option}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ease-in-out
                      ${activeOption === option ? 'w-full' : 'w-0'}`}
                  ></span>
                </button>
              ))}
            </div>
            
            <div className="w-full h-px bg-gray-200 my-6"></div>
            
            <p className="text-5xl font-semibold uppercase tracking-widest text-black">
                {displayText}
            </p>
            
          </div>
        </div>
      </header>
      
      {/* 3. Контейнер для компонентів йде наступним і займає весь залишковий простір. */}
      <main className="flex-grow min-h-0">
        {componentMap[activeOption]}
      </main>

    </div>
  );
}