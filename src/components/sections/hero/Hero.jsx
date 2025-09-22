import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Hero.css';
import { hero, backgroundImages, couple } from '../../../config/content';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [imagesLoaded, setImagesLoaded] = useState({});
  const heroRef = useRef(null);
  const imageLoadingRefs = useRef(new Map());

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

  // Optimized background image loading
  const loadImage = useCallback((imageUrl, index) => {
    // Cancel previous loading for this index
    const existingImg = imageLoadingRefs.current.get(index);
    if (existingImg) {
      existingImg.onload = null;
      existingImg.onerror = null;
    }

    const img = new Image();
    imageLoadingRefs.current.set(index, img);

    img.onload = () => {
      setImagesLoaded(prev => ({ ...prev, [index]: true }));
      imageLoadingRefs.current.delete(index);
    };

    img.onerror = () => {
      imageLoadingRefs.current.delete(index);
    };

    img.src = imageUrl;
  }, []);

  // Lazy load background images with progressive loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load first image immediately
            loadImage(backgroundImages[0], 0);

            // Load next image after first one loads
            setTimeout(() => {
              if (backgroundImages[1]) {
                loadImage(backgroundImages[1], 1);
              }
            }, 100);

            // Load remaining images with longer delays
            backgroundImages.forEach((imageUrl, index) => {
              if (index > 1) {
                setTimeout(() => {
                  loadImage(imageUrl, index);
                }, index * 800 + 500); // Increased delay for better performance
              }
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      // Cleanup all pending image loads
      imageLoadingRefs.current.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
      imageLoadingRefs.current.clear();

      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [backgroundImages, loadImage]);

  // Auto-advance slideshow only for loaded images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % backgroundImages.length;
        // Only advance if next image is loaded, otherwise stay on current
        return imagesLoaded[next] ? next : prev;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length, imagesLoaded]);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-slideshow">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''} ${imagesLoaded[index] ? 'loaded' : 'loading'}`}
            style={{
              backgroundImage: imagesLoaded[index] ? `url(${image})` : 'none',
              backgroundColor: !imagesLoaded[index] ? '#f5f5f5' : 'transparent'
            }}
          ></div>
        ))}
      </div>
      <div className="hero-overlay"></div>

      {/* Loading indicator for first image */}
      {!imagesLoaded[0] && (
        <div className="hero-loading">
          <div className="loading-spinner"></div>
        </div>
      )}

      <div className="hero-content">
        <div className="container">
          <div className="hero-center-only">
            <div className="wedding-info">
              <h1 className="hero-title">We're Getting Married</h1>
              <div className="couple-names">
                <span className="groom">{couple.groom.name}</span> 💕 <span className="bride">{couple.bride.name}</span>
              </div>
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