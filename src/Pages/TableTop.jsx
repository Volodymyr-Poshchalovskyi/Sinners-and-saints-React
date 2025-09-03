import React from 'react';
import { Link } from 'react-router-dom';
import VideoContainer from '../Components/VideoContainer'; // Переконайтесь, що шлях правильний

// URL вашого відео, що буде використовуватись у всіх блоках
const videoURL = "/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4";

const TableTop = () => {
  return (
    // Головний контейнер, що впорядковує блоки по вертикалі
    <div className="w-full">
      
      {/* 1. Перший блок: відео без тексту */}
      <div className="relative w-full h-screen">
        <VideoContainer videoSrc={videoURL} shouldPlay={true} />
      </div>

      {/* 2. Другий блок: біла смуга зі зміненим текстом та стилем */}
      <div className="w-full h-[200px] bg-white flex items-center justify-center px-8">
        <p 
          className="
            text-base         
            text-black
            font-semibold
            uppercase
            text-center
          "
        >
          HERE WILL BE LITTLE INFORMATION ABOUT STUDIO SPACE AND ECT...
        </p>
      </div>

      {/* 3. Третій блок: відео з текстом та кнопкою */}
      <div className="relative w-full h-screen">
        <VideoContainer videoSrc={videoURL} shouldPlay={true} />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center p-8 mb-8 text-white">
          <h1 
            className="
              font-normal                                      
              text-[5rem]                                       
              leading-none                                      
              tracking-[-0.6rem]                                
              [text-shadow:0_0_6px_rgb(0_0_0_/_60%)]             
              mb-8                                              
              uppercase
            "
          >
            TABLE TOP DIVISION
          </h1>
          <Link to="/table-top-projects">
            <button className="bg-white text-black py-3 px-6 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 hover:bg-opacity-80">
              See More
            </button>
          </Link>
        </div>
      </div>

      {/* 4. Четвертий блок: відео з текстом та кнопкою (копія попереднього) */}
      <div className="relative w-full h-screen">
        <VideoContainer videoSrc={videoURL} shouldPlay={true} />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center p-8 mb-8 text-white">
          <h1 
            className="
              font-normal                                      
              text-[5rem]                                       
              leading-none                                      
              tracking-[-0.6rem]                                
              [text-shadow:0_0_6px_rgb(0_0_0_/_60%)]             
              mb-8                                              
              uppercase
            "
          >
            TABLE TOP DIVISION
          </h1>
          <Link to="/table-top-projects">
            <button className="bg-white text-black py-3 px-6 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 hover:bg-opacity-80">
              See More
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default TableTop;