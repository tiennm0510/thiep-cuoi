// Basic service worker to handle navigation preload
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // Use the preload response if available
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }
          // Fallback to network
          return fetch(event.request);
        } catch (error) {
          // Fallback to network if preload fails
          return fetch(event.request);
        }
      })()
    );
  }
});