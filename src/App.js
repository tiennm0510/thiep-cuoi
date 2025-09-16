import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/shared/header/Header';
import Hero from './components/sections/hero/Hero';
import Couple from './components/sections/couple/Couple';
import LoveStory from './components/sections/story/LoveStory';
import WeddingEvents from './components/sections/events/WeddingEvents';
import PhotoGallery from './components/sections/gallery/PhotoGallery';
import GiftBox from './components/sections/giftbox/GiftBox';
import RSVP from './components/sections/rsvp/RSVP';
import Footer from './components/shared/footer/Footer';
import MusicPlayer from './components/shared/ui/MusicPlayer';
import FloatingFlowers from './components/shared/ui/FloatingFlowers';
import LoadingScreen from './components/shared/loading/LoadingScreen';

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
    }, 8000); // 8 seconds loading (3 seconds longer)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <LoadingScreen isLoading={isLoading} fadeOut={fadeOut} />

      {!isLoading && <MusicPlayer />}
      {!isLoading && <FloatingFlowers />}

      {!isLoading && (
        <div className={`main-content ${showContent ? 'fade-in' : ''}`}>
          <Header />
          <Hero />
          <Couple />
          <LoveStory />
          <WeddingEvents />
          <PhotoGallery />
          <GiftBox />
          <RSVP />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;