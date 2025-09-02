import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { directorsData } from '../Data/DirectorsData'; 
import VideoContainer from './VideoContainer'; 
import Photo from '../assets/Photos/DirectorPhoto.png';

const nameAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function DirectorPage() {
  const { directorSlug } = useParams();
  const director = directorsData.find(d => d.slug === directorSlug);

  if (!director) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-chanel">Director Not Found</h2>
      </div>
    );
  }

  return (
    <div className="bg-black text-white">

      

      {/* Секція-банер з кнопкою та ім'ям режисера */}
      <section className="relative w-full h-screen">
  <VideoContainer videoSrc={director.videos[0]?.src} />
  <div className="absolute inset-0 z-10 flex flex-col justify-between">
    <div className="bg-white w-full py-16 mt-28">
      <div className="relative flex items-center justify-start px-8">
        {/* Оновлена кнопка "назад" */}
        <Link 
          to="/directors" 
          className="flex items-center justify-center w-12 h-12 border border-black text-black 
                     hover:bg-black hover:text-white transition-colors 
                     absolute left-8"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        {/* Ім'я режисера - центроване */}
        <h1 className="text-black text-5xl md:text-7xl font-chanel font-semibold uppercase text-center w-full">
          {director.name}
        </h1>
      </div>
    </div>
    
    <div className="text-white text-lg font-light mb-8 p-8 flex flex-col items-center text-center">
  <p className="mb-4">{director.videos[0]?.title}</p>
  <button className="bg-white text-black py-3 px-6 text-sm font-semibold uppercase tracking-wider transition-colors duration-300">
    <span className="flex items-center">
      {/* Оновлений значок */}
      <span className="text-xl mr-2">▶</span>
      EXPAND VIDEO
    </span>
  </button>
</div>

  </div>
</section>

      {/* --- */}

     

      {/* --- */}

      {/* Секція з фото та біографією */}
      <section className="w-full bg-white text-black py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center md:gap-16">
          <div className="w-full md:w-1/2 flex-shrink-0 mb-8 md:mb-0">
            <img 
              src={Photo} 
              alt={director.name} 
              className="w-full h-auto object-cover" 
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-semibold uppercase mb-4 text-center md:text-left">
              {director.name}
            </h2>
            <p className="text-sm leading-relaxed text-center md:text-left">
              {director.bio}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}