import React, { useState, useEffect } from 'react';
import './PhotoGallery.css';
import weddingContent from '../../../config/content';

const PhotoGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showFullscreen, setShowFullscreen] = useState(false);

  const { photoGallery } = weddingContent;
  const galleryImages = photoGallery.photos;

  // Auto-play slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, galleryImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const openFullscreen = () => {
    setShowFullscreen(true);
    setIsAutoPlaying(false);
  };

  const closeFullscreen = () => {
    setShowFullscreen(false);
  };

  return (
    <section id="gallery" className="photo-gallery section">
      <div className="container">
        <h2 className="section-title">{photoGallery.title}</h2>
        <div className="divider"></div>
        <p className="section-subtitle">
          {photoGallery.subtitle}
        </p>

        <div className="slideshow-container">
          {/* Main slideshow */}
          <div className="slideshow-wrapper">
            <div
              className="slides-container"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={image.id} className="slide">
                  <img src={image.src} alt={image.alt} />
                  <div className="slide-overlay" onClick={openFullscreen}>
                    <div className="slide-icon">
                      <i className="fas fa-search-plus"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button className="slide-nav slide-prev" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="slide-nav slide-next" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>

            {/* Slide counter */}
            <div className="slide-counter">
              {currentSlide + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Controls */}
          <div className="slideshow-controls">
            <button
              className={`control-btn ${isAutoPlaying ? 'active' : ''}`}
              onClick={toggleAutoPlay}
              title={isAutoPlaying ? 'Dừng slideshow' : 'Phát slideshow'}
            >
              <i className={`fas ${isAutoPlaying ? 'fa-pause' : 'fa-play'}`}></i>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="slide-dots">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Thumbnail navigation */}
          <div className="thumbnail-nav">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen modal */}
      {showFullscreen && (
        <div className="fullscreen-modal" onClick={closeFullscreen}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeFullscreen}>
              <i className="fas fa-times"></i>
            </button>
            <div className="fullscreen-slideshow">
              <img
                src={galleryImages[currentSlide].src}
                alt={galleryImages[currentSlide].alt}
              />
              <button className="fullscreen-nav fullscreen-prev" onClick={prevSlide}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="fullscreen-nav fullscreen-next" onClick={nextSlide}>
                <i className="fas fa-chevron-right"></i>
              </button>
              <div className="fullscreen-counter">
                {currentSlide + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;