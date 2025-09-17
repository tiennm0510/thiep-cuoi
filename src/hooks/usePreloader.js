import { useState, useEffect } from 'react';

const usePreloader = (assets = []) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isPreloading, setIsPreloading] = useState(true);
  const [preloadedAssets, setPreloadedAssets] = useState({});

  useEffect(() => {
    if (assets.length === 0) {
      setIsPreloading(false);
      setLoadingProgress(100);
      return;
    }

    const preloadAssets = async () => {
      const totalAssets = assets.length;
      let loadedCount = 0;
      const loadedAssets = {};

      const loadAsset = (asset) => {
        return new Promise((resolve, reject) => {
          if (asset.type === 'image') {
            const img = new Image();
            img.onload = () => {
              loadedAssets[asset.key] = img;
              loadedCount++;
              setLoadingProgress(Math.round((loadedCount / totalAssets) * 100));
              resolve(img);
            };
            img.onerror = () => {
              console.warn(`Failed to load image: ${asset.url}`);
              loadedCount++;
              setLoadingProgress(Math.round((loadedCount / totalAssets) * 100));
              resolve(null);
            };
            img.src = asset.url;
          } else if (asset.type === 'audio') {
            const audio = new Audio();
            audio.addEventListener('canplaythrough', () => {
              loadedAssets[asset.key] = audio;
              loadedCount++;
              setLoadingProgress(Math.round((loadedCount / totalAssets) * 100));
              resolve(audio);
            });
            audio.addEventListener('error', () => {
              console.warn(`Failed to load audio: ${asset.url}`);
              loadedCount++;
              setLoadingProgress(Math.round((loadedCount / totalAssets) * 100));
              resolve(null);
            });
            audio.src = asset.url;
            audio.load();
          } else {
            // For other types like CSS, JS, etc.
            fetch(asset.url)
              .then(() => {
                loadedAssets[asset.key] = asset.url;
                loadedCount++;
                setLoadingProgress(Math.round((loadedCount / totalAssets) * 100));
                resolve(asset.url);
              })
              .catch(() => {
                console.warn(`Failed to load asset: ${asset.url}`);
                loadedCount++;
                setLoadingProgress(Math.round((loadedCount / totalAssets) * 100));
                resolve(null);
              });
          }
        });
      };

      // Load all assets in parallel
      await Promise.all(assets.map(loadAsset));

      setPreloadedAssets(loadedAssets);
      setIsPreloading(false);
    };

    preloadAssets();
  }, [assets]);

  return {
    loadingProgress,
    isPreloading,
    preloadedAssets
  };
};

export default usePreloader;