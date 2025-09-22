import React, { Suspense } from 'react';
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
import useAppLoader from './hooks/useAppLoader';

// Lazy load heavy components
const PhotoGallery = React.lazy(() => import('./components/sections/gallery/PhotoGallery'));
const MusicPlayer = React.lazy(() => import('./components/shared/ui/MusicPlayer'));

function App() {
  const { isLoading, fadeOut, showContent, loadingProgress } = useAppLoader();

  return (
    <div className="App">
      <LoadingScreen isLoading={isLoading} fadeOut={fadeOut} progress={loadingProgress} />

      {!isLoading && (
        <Suspense fallback={<ComponentLoading message="Đang tải nhạc..." />}>
          <MusicPlayer />
        </Suspense>
      )}
      {!isLoading && <FloatingFlowers />}

      {!isLoading && <Header />}

      {!isLoading && (
        <div className={`main-content ${showContent ? 'fade-in' : ''}`}>
          <Hero />
          <Couple />
          <WeddingEvents />
          <LoveStory />
          <Suspense fallback={<ComponentLoading message="Đang tải thư viện ảnh..." />}>
            <PhotoGallery />
          </Suspense>
          <GiftBox />
          {/* <RSVP /> */}
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;