import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ isLoading = true, fadeOut = false, progress = 0 }) => {
  if (!isLoading) return null;

  return (
    <div
      className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}
      style={{ backgroundImage: 'url(/images/hero-bg/bg.jpg)' }}
    >
      <div className="loading-content">
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
          <p className="loading-text">Đang chuẩn bị... {progress}%</p>

          {/* Progress bar */}
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="progress-percentage">{progress}%</div>
          </div>

        </div>

        {/* Car Animation */}
        <div className="car-container">
          <svg className="car" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* Car body */}
            <ellipse cx="200" cy="120" rx="120" ry="35" fill="#e53e3e" />
            {/* Car roof */}
            <ellipse cx="200" cy="95" rx="80" ry="25" fill="#e53e3e" />
            {/* Front windshield */}
            <path d="M130 95 Q140 75 160 75 L240 75 Q260 75 270 95" fill="rgba(255,255,255,0.8)" stroke="#ddd" strokeWidth="1" />
            {/* Side windows */}
            <ellipse cx="150" cy="95" rx="20" ry="15" fill="rgba(255,255,255,0.7)" />
            <ellipse cx="250" cy="95" rx="20" ry="15" fill="rgba(255,255,255,0.7)" />
            {/* Car doors */}
            <line x1="120" y1="100" x2="120" y2="140" stroke="white" strokeWidth="2" />
            <line x1="200" y1="100" x2="200" y2="140" stroke="white" strokeWidth="2" />
            <line x1="280" y1="100" x2="280" y2="140" stroke="white" strokeWidth="2" />
            {/* Door handles */}
            <circle cx="110" cy="120" r="3" fill="white" />
            <circle cx="190" cy="120" r="3" fill="white" />
            <circle cx="210" cy="120" r="3" fill="white" />
            <circle cx="290" cy="120" r="3" fill="white" />
            {/* Heart on car */}
            <path d="M200 110 C195 105, 185 105, 185 115 C185 105, 175 105, 170 110 C170 120, 185 130, 185 130 C185 130, 200 120, 200 110 Z" fill="white" />
            {/* Front bumper */}
            <rect x="75" y="130" width="10" height="15" rx="5" fill="#c53030" />
            {/* Rear bumper */}
            <rect x="315" y="130" width="10" height="15" rx="5" fill="#c53030" />
            {/* Headlights */}
            <ellipse cx="85" cy="120" rx="8" ry="6" fill="#ffd700" />
            {/* Tail lights */}
            <ellipse cx="315" cy="120" rx="6" ry="4" fill="#ff4444" />
            {/* Wheels */}
            <circle cx="130" cy="155" r="25" fill="#2d3748" />
            <circle cx="130" cy="155" r="15" fill="white" />
            <circle cx="130" cy="155" r="8" fill="#e53e3e" />
            <circle cx="270" cy="155" r="25" fill="#2d3748" />
            <circle cx="270" cy="155" r="15" fill="white" />
            <circle cx="270" cy="155" r="8" fill="#e53e3e" />
            {/* License plate */}
            <rect x="180" y="140" width="40" height="12" rx="2" fill="white" stroke="#ccc" strokeWidth="1" />
            <text x="200" y="149" textAnchor="middle" fontSize="8" fill="#333">LOVE</text>
          </svg>

          {/* Flying hearts */}
          <div className="hearts-container">
            <div className="heart car-heart-1">♥</div>
            <div className="heart car-heart-2">♥</div>
            <div className="heart car-heart-3">♥</div>
            <div className="heart car-heart-4">♥</div>
            <div className="heart car-heart-5">♥</div>
            <div className="heart car-heart-6">♥</div>
            <div className="heart car-heart-7">♥</div>
            <div className="heart car-heart-8">♥</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;