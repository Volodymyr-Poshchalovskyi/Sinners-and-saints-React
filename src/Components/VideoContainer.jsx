import React from 'react';

const VideoContainer = ({ videoSrc, videoType = 'video/mp4' }) => {
  return (
    // Змінено 'fixed' на 'absolute' і прибрано '-z-10'
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <video
        autoPlay
        loop
        muted
        playsInline // Покращує роботу на мобільних
        className="object-cover w-full h-full"
      >
        <source src={videoSrc} type={videoType} />
        Ваш браузер не підтримує тег video.
      </video>
    </div>
  );
};

export default VideoContainer;