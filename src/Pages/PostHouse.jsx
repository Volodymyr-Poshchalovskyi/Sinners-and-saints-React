import React from 'react';
import { Link } from 'react-router-dom';
import VideoContainer from '../Components/VideoContainer'; // Переконайтесь, що шлях правильний

// URL вашого відео
const videoURL = "/video/SHOWREEL SINNERS AND SAINTS 2024_1.mp4";

const PostHouse = () => {
  return (
    // Залишено тільки останній блок, який займає всю висоту екрана
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
          POST HOUSE
        </h1>
        <Link to="/post-house-projects">
          <button className="bg-white text-black py-3 px-6 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 hover:bg-opacity-80">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostHouse;