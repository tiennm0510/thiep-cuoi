import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import Header from './components/shared/header/Header';
import Hero from './components/sections/hero/Hero';
import Couple from './components/sections/couple/Couple';
import LoveStory from './components/sections/story/LoveStory';
import WeddingEvents from './components/sections/events/WeddingEvents';
import GiftBox from './components/sections/giftbox/GiftBox';
import RSVP from './components/sections/rsvp/RSVP';
import Footer from './components/shared/footer/Footer';
import FloatingFlowers from './components/shared/ui/FloatingFlowers';
import LoadingScreen from './components/shared/loading/LoadingScreen';
import ComponentLoading from './components/shared/loading/ComponentLoading';

// Lazy load heavy components
const PhotoGallery = React.lazy(() => import('./components/sections/gallery/PhotoGallery'));
const MusicPlayer = React.lazy(() => import('./components/shared/ui/MusicPlayer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setFadeOut(true); // Bắt đầu fade out loading

      // Sau khi fade out xong, ẩn loading và hiện content
      setTimeout(() => {
        setIsLoading(false);
        setShowContent(true);
      }, 500); // 500ms cho fade out
    }, 5000); // 8 seconds loading (3 seconds longer)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <LoadingScreen isLoading={isLoading} fadeOut={fadeOut} />

      {!isLoading && (
        <Suspense fallback={<ComponentLoading message="Đang tải nhạc..." />}>
          <MusicPlayer />
        </Suspense>
      )}
      {!isLoading && <FloatingFlowers />}

      {!isLoading && (
        <div className={`main-content ${showContent ? 'fade-in' : ''}`}>
          <Header />
          <Hero />
          <Couple />
          <WeddingEvents />
          <LoveStory />
          <Suspense fallback={<ComponentLoading message="Đang tải thư viện ảnh..." />}>
            <PhotoGallery />
          </Suspense>
          <GiftBox />
          <RSVP />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;