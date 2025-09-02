// src/Components/VideoContainer.js

import React, { useRef, useEffect } from 'react';

const VideoContainer = ({ videoSrc, shouldPlay }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (shouldPlay) {
        // Запускаємо відтворення, якщо shouldPlay є true
        // Використовуємо .catch() для обробки можливих помилок, наприклад, через політику браузера щодо автозапуску
        videoRef.current.play().catch(e => console.error("Video playback error:", e));
      } else {
        // Ставимо на паузу, якщо shouldPlay є false
        videoRef.current.pause();
      }
    }
  }, [shouldPlay]); // Цей ефект спрацьовує лише коли змінюється shouldPlay

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default VideoContainer;