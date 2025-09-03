// src/pages/Studio.js

import React, { useState } from 'react';
import VideoContainer from '../Components/VideoContainer';

const studioData = {
  video: {
    src: '/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4',
  },
  options: {
    'TABLE TOP STUDIO': 'TABLE TOP DIVISION',
    'POST HOUSE': 'POST HOUSE'
  },
  defaultText: 'DESIGNED FOR CREATIVE EXCELLENCE'
};

export default function Studio() {
  const [activeOption, setActiveOption] = useState(Object.keys(studioData.options)[0]);
  const shouldPlayVideo = true;

  const displayText = studioData.options[activeOption];

  return (
    <div className="bg-black text-white">
      <section className="relative w-full h-screen">
        <VideoContainer videoSrc={studioData.video.src} shouldPlay={shouldPlayVideo} />
        
        <div className="absolute inset-0 z-10 flex flex-col justify-start">
          
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

        </div>
      </section>
    </div>
  );
}