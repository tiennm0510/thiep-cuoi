import { useState, useEffect } from 'react';

const usePreloader = (assets = [], timeoutMs = 10000) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isPreloading, setIsPreloading] = useState(true);
  const [preloadedAssets, setPreloadedAssets] = useState({});
  const [failedAssets, setFailedAssets] = useState([]);

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
      const failed = [];

      const updateProgress = () => {
        setLoadingProgress(Math.round((loadedCount / totalAssets) * 100));
      };

      const withTimeout = (promise, assetKey) => {
        return new Promise((resolve) => {
          const timer = setTimeout(() => {
            console.warn(`Timeout loading asset: ${assetKey}`);
            failed.push(assetKey);
            loadedCount++;
            updateProgress();
            resolve(null);
          }, timeoutMs);

          promise.finally(() => clearTimeout(timer)).then(resolve);
        });
      };

      const loadAsset = (asset) => {
        return new Promise((resolve, reject) => {
          if (asset.type === 'image') {
            const img = new Image();
            img.onload = () => {
              loadedAssets[asset.key] = img;
              loadedCount++;
              updateProgress();
              resolve(img);
            };
            img.onerror = () => {
              console.warn(`Failed to load image: ${asset.url}`);
              failed.push(asset.key);
              loadedCount++;
              updateProgress();
              resolve(null);
            };
            img.src = asset.url;
          } else if (asset.type === 'audio') {
            const audio = new Audio();
            audio.addEventListener('loadeddata', () => {
              loadedAssets[asset.key] = audio;
              loadedCount++;
              updateProgress();
              resolve(audio);
            });
            audio.addEventListener('error', () => {
              console.warn(`Failed to load audio: ${asset.url}`);
              failed.push(asset.key);
              loadedCount++;
              updateProgress();
              resolve(null);
            });
            audio.src = asset.url;
            audio.load();
          } else {
            // For other types like CSS, JS, etc.
            return withTimeout(
            fetch(asset.url)
              .then((res) => {
                if (!res.ok) throw new Error('Network error');
                loadedAssets[asset.key] = asset.url;
                loadedCount++;
                updateProgress();
                return asset.url;
              })
              .catch(() => {
                console.warn(`Failed to load asset: ${asset.url}`);
                failed.push(asset.key);
                loadedCount++;
                updateProgress();
                return null;
              }),
            asset.key
          );
          }
        });
      };

      // Load all assets in parallel
      await Promise.all(assets.map(loadAsset));

      // Đảm bảo cuối cùng luôn set 100%
      setLoadingProgress(100);
      setPreloadedAssets(loadedAssets);
      setFailedAssets(failed);
      setIsPreloading(false);
    };

    preloadAssets();
  }, [assets, timeoutMs]);

  return {
    loadingProgress,
    isPreloading,
    preloadedAssets,
    failedAssets,
  };
};

export default usePreloader;