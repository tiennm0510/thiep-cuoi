import { useState, useEffect } from 'react';
import usePreloader from './usePreloader';
import weddingContent from '../config/content';

const useAppLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const { minLoadingTime, fadeOutDuration, assetsToPreload } = weddingContent.preloader;
  const { loadingProgress, isPreloading } = usePreloader(assetsToPreload);

  useEffect(() => {
    const startTime = Date.now();

    const checkCompletion = () => {
      const elapsedTime = Date.now() - startTime;
      const isMinTimeReached = elapsedTime >= minLoadingTime;

      if (!isPreloading && isMinTimeReached) {
        setFadeOut(true);

        setTimeout(() => {
          setIsLoading(false);
          setShowContent(true);
        }, fadeOutDuration);
      } else {
        setTimeout(checkCompletion, 100);
      }
    };

    checkCompletion();
  }, [isPreloading, minLoadingTime, fadeOutDuration]);

  return {
    isLoading,
    fadeOut,
    showContent,
    loadingProgress
  };
};

export default useAppLoader;