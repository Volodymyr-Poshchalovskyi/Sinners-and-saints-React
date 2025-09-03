// src/pages/Originals.js

import React, { useLayoutEffect, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import PreloaderBanner from '../Components/PreloaderBanner'; // Make sure this path is correct
import { useAnimation } from '../context/AnimationContext'; // Make sure this path is correct

export default function Originals() {
  const { isPreloaderActive, setIsPreloaderActive } = useAnimation();

  // Scroll to top on component mount
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Disable body scroll when the preloader is active
  useEffect(() => {
    document.body.style.overflow = isPreloaderActive ? 'hidden' : '';
    // Cleanup function to re-enable scroll if component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPreloaderActive]);

  // Function to be called when the banner's animation completes
  const handleBannerAnimationComplete = () => {
    setIsPreloaderActive(false);
  };

  // The same text content for the banner
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

      {/* Main page content, rendered only after the preloader is gone */}
      {!isPreloaderActive && (
        <div className="p-8 text-2xl">
          <h1>Originals Page</h1>
          {/* Your other page content goes here */}
        </div>
      )}
    </div>
  );
}