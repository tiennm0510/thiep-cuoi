import React, { useState, useEffect } from 'react';
import './Hero.css';
import weddingContent from '../../../config/content';

const Hero = () => {
  const { hero, backgroundImages, couple } = weddingContent;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer
  useEffect(() => {
    const weddingDate = new Date('2025-10-12T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="hero">
      <div className="hero-slideshow">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-center-only">
            <div className="wedding-info">
              <h1 className="hero-title">We're Getting Married</h1>
              <div className="couple-names">{couple.groom.name} & {couple.bride.name}</div>
              <p className="wedding-date">{hero.date}</p>

              {/* Countdown Timer */}
              <div className="countdown-container">
                <div className="countdown-timer">
                  <div className="countdown-item">
                    <div className="countdown-number">{timeLeft.days}</div>
                    <div className="countdown-label">Ngày</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-number">{timeLeft.hours}</div>
                    <div className="countdown-label">Giờ</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-number">{timeLeft.minutes}</div>
                    <div className="countdown-label">Phút</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-number">{timeLeft.seconds}</div>
                    <div className="countdown-label">Giây</div>
                  </div>
                </div>
              </div>

              <div className="hero-divider"></div>
              <p className="hero-quote">
                "Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần thiết cho chính bạn."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;