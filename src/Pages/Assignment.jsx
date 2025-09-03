// src/pages/Assignment.js

import React, { useLayoutEffect, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import PreloaderBanner from '../Components/PreloaderBanner'; // Перевірте шлях
import { useAnimation } from '../context/AnimationContext';   // Перевірте шлях

export default function Assignment() {
    const { isPreloaderActive, setIsPreloaderActive } = useAnimation();

    // Скрол до верху при завантаженні
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Блокування скролу тіла документа
    useEffect(() => {
        document.body.style.overflow = isPreloaderActive ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isPreloaderActive]);

    // Функція, що викликається після завершення анімації
    const handleBannerAnimationComplete = () => {
        setIsPreloaderActive(false);
    };

    // Текст для банера
    const bannerTitle = "VISIONARY STORYTELLERS. COMMERCIAL REBELS. GLOBAL CREATORS.";
    const bannerDescription = "From award-winning filmmakers to fashion-forward image makers, our directors and hybrid talent deliver world-class content across commercials, music videos, branded series, and global campaigns.";

    return (
        <div className="bg-black text-white min-h-screen">
            <AnimatePresence>
                {isPreloaderActive && (
                    <PreloaderBanner
                        onAnimationComplete={handleBannerAnimationComplete}
                        title={bannerTitle}
                        description={bannerDescription}
                    />
                )}
            </AnimatePresence>

            {/* Основний контент сторінки */}
            {!isPreloaderActive && (
                <div className="p-8 text-2xl">
                    <h1>On Assignment Page</h1>
                </div>
            )}
        </div>
    );
}