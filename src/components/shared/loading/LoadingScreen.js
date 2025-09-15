import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ isLoading, fadeOut }) => {
  if (!isLoading && !fadeOut) return null;

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        {/* Animated hearts */}
        <div className="loading-hearts">
          <div className="heart heart-1">💕</div>
          <div className="heart heart-2">💖</div>
          <div className="heart heart-3">💗</div>
        </div>

        {/* Main logo/text */}
        <div className="loading-logo">
          <h1 className="loading-title">Mạnh Tiến 💕 Linh Giang</h1>
          <p className="loading-subtitle">We're Getting Married!</p>
          <div className="loading-date">12 Tháng 10, 2025</div>
        </div>

        {/* Loading animation */}
        <div className="loading-animation">
          <div className="loading-ring">
            <div className="ring-segment"></div>
            <div className="ring-segment"></div>
            <div className="ring-segment"></div>
            <div className="ring-segment"></div>
          </div>
          <p className="loading-text">Đang chuẩn bị...</p>
        </div>

        {/* Floating flowers */}
        <div className="loading-flowers">
          <div className="flower flower-1">🌸</div>
          <div className="flower flower-2">🌺</div>
          <div className="flower flower-3">🌸</div>
          <div className="flower flower-4">🌼</div>
          <div className="flower flower-5">🌸</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;