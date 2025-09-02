import React from 'react';
import { useParams, Link } from 'react-router-dom';
// 👇 ВИПРАВЛЕНИЙ ШЛЯХ: Переконайтесь, що він правильний для вашої структури
import { directorsData } from '../Data/DirectorsData'; 
import VideoContainer from './VideoContainer'; 

export default function DirectorPage() {
  const { directorSlug } = useParams();
  const director = directorsData.find(d => d.slug === directorSlug);

  if (!director) {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-chanel mb-4">Director Not Found</h2>
        <Link to="/directors" className="text-lg text-gray-400 hover:underline">
          Back to Directors List
        </Link>
      </div>
    );
  }

  // Використовуємо перше відео режисера як фон для головного екрану
  const backgroundVideo = director.videos[0]?.src;

  return (
    <div className="bg-black text-white">
      {/* Секція 1: Головний екран з відео-фоном (як на сторінці Directors) */}
      <section className="relative w-full h-screen">
        {backgroundVideo && <VideoContainer videoSrc={backgroundVideo} />}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-chanel font-semibold uppercase text-center">
            {director.name}
          </h1>
        </div>
        {/* Можна додати індикатор скролу вниз, якщо потрібно */}
      </section>

      {/* Секція 2: Блок з фото та описом */}
      <section className="w-full max-w-6xl mx-auto p-8 md:p-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Фото режисера */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img 
              src={director.photoSrc} 
              alt={director.name}
              className="w-full h-auto object-cover aspect-square" 
            />
          </div>
          {/* Опис */}
          <div className="w-full md:w-2/3">
            <p className="text-lg text-gray-300">
              {director.bio}
            </p>
          </div>
        </div>
      </section>
      
      {/* Секція 3: Галерея інших відео (за бажанням) */}
      <section className="w-full max-w-6xl mx-auto p-8 md:px-16">
         <h2 className="text-4xl font-chanel uppercase mb-8 border-b border-gray-700 pb-4">Works</h2>
         <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {director.videos.map((video, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold mb-3">{video.title}</h3>
                {/* Цей VideoContainer має бути іншим, не фоновим */}
                <div className="aspect-video relative">
                    <video controls src={video.src} className="w-full h-full object-cover"></video>
                </div>
              </div>
            ))}
         </main>
      </section>

      <footer className="text-center p-16">
        <Link to="/directors" className="text-lg text-gray-400 hover:underline">
          View All Directors
        </Link>
      </footer>
    </div>
  );
}