import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './PhotoGallery.css';
import weddingContent from '../../../config/content';

const PhotoGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [viewMode, setViewMode] = useState('slideshow'); // 'slideshow' or 'grid'
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageOrientations, setImageOrientations] = useState({});
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [showVideo, setShowVideo] = useState(false);

  // Refs for DOM manipulation
  const gridContainerRef = useRef(null);
  const portalTargetRef = useRef(null);
  const imageLoadingRefs = useRef(new Map());
  const videoSectionRef = useRef(null);

  // Create portal target for modal using ref
  const getPortalTarget = useCallback(() => {
    if (!portalTargetRef.current) {
      const portalTarget = document.createElement('div');
      portalTarget.id = 'modal-portal';
      portalTarget.style.position = 'relative';
      portalTarget.style.zIndex = '9999';

      if (document.body) {
        document.body.appendChild(portalTarget);
        portalTargetRef.current = portalTarget;
      }
    }
    return portalTargetRef.current;
  }, []);

  const { photoGallery } = weddingContent;
  const total = photoGallery.total;

  // Optimized image orientation detection with cleanup
  const detectImageOrientation = useCallback((imageSrc, imageId) => {
    // Cancel previous loading for this image
    const existingImg = imageLoadingRefs.current.get(imageId);
    if (existingImg) {
      existingImg.onload = null;
      existingImg.onerror = null;
    }

    const img = new Image();
    imageLoadingRefs.current.set(imageId, img);

    img.onload = () => {
      const orientation = img.width > img.height ? 'landscape' : 'portrait';
      setImageOrientations(prev => ({
        ...prev,
        [imageId]: {
          orientation,
          aspectRatio: img.width / img.height,
          width: img.width,
          height: img.height
        }
      }));
      setLoadedImages(prev => new Set([...prev, imageId]));
      imageLoadingRefs.current.delete(imageId);
    };

    img.onerror = () => {
      imageLoadingRefs.current.delete(imageId);
    };

    img.src = imageSrc;
  }, []);

  // Auto-play slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, total]);

  // Load images progressively - only load visible and nearby images
  useEffect(() => {
    const loadImagesAround = (centerIndex, range = 2) => {
      const start = Math.max(1, centerIndex + 1 - range);
      const end = Math.min(total, centerIndex + 1 + range);

      for (let i = start; i <= end; i++) {
        if (!loadedImages.has(i)) {
          const imageSrc = photoGallery.photo_link + "/" + i + ".jpg";
          detectImageOrientation(imageSrc, i);
        }
      }
    };

    // Load current slide and nearby slides
    loadImagesAround(currentSlide);

    // In grid mode, load a few more images
    if (viewMode === 'grid') {
      loadImagesAround(currentSlide, 5);
    }
  }, [currentSlide, viewMode, total, photoGallery.photo_link, detectImageOrientation, loadedImages]);

  // Lazy load video when section becomes visible
  useEffect(() => {
    if (!videoSectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !showVideo) {
            setShowVideo(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(videoSectionRef.current);

    return () => {
      if (videoSectionRef.current) {
        observer.unobserve(videoSectionRef.current);
      }
    };
  }, [showVideo]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Cancel all pending image loads
      imageLoadingRefs.current.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
      imageLoadingRefs.current.clear();

      // Cleanup portal
      if (portalTargetRef.current && portalTargetRef.current.parentNode) {
        portalTargetRef.current.parentNode.removeChild(portalTargetRef.current);
        portalTargetRef.current = null;
      }
    };
  }, []);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + total) % total);
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

  const toggleViewMode = () => {
    setIsTransitioning(true);
    setIsAutoPlaying(false);

    setTimeout(() => {
      setViewMode(prev => prev === 'slideshow' ? 'grid' : 'slideshow');
      setIsTransitioning(false);
    }, 300);
  };

  const galleryImages = [];
  for (let i = 1; i <= total; i++) {
    galleryImages.push({
      id: i,
      src: photoGallery.photo_link + "/" + i + ".jpg",
      alt: "Ảnh Cưới " + i,
    })
  }

  return (
    <>
      <section id="gallery" className="photo-gallery section">
        <div className="container">
          <h2 className="section-title">{photoGallery.title}</h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            {photoGallery.subtitle}
          </p>

          <div className="gallery-container">
            {/* View Toggle */}
            <div className="view-controls">
              <button
                className={`view-toggle-btn ${viewMode === 'slideshow' ? 'active' : ''}`}
                onClick={toggleViewMode}
                title="Chế độ slideshow"
              >
                <i className="fas fa-images"></i>
              </button>
              <button
                className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={toggleViewMode}
                title="Chế độ lưới"
              >
                <i className="fas fa-th"></i>
              </button>
            </div>

            <div className="divider"></div>

            {viewMode === 'slideshow' ? (
              <div className={`slideshow-container ${isTransitioning ? 'transitioning' : ''}`}>
                {/* Main slideshow */}
                <div className={`slideshow-wrapper slideshow-${imageOrientations[galleryImages[currentSlide]?.id]?.orientation || 'unknown'}`}>
                  <div
                    className="slides-container"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {galleryImages.map((image) => {
                      const orientation = imageOrientations[image.id]?.orientation || 'unknown';
                      const aspectRatio = imageOrientations[image.id]?.aspectRatio || 1;

                      return (
                        <div
                          key={image.id}
                          className={`slide slide-${orientation}`}
                          data-aspect-ratio={aspectRatio}
                        >
                          <img src={image.src} alt={image.alt} loading="lazy" />
                          <div className="slide-overlay" onClick={openFullscreen}>
                            <div className="slide-icon">
                              <i className="fas fa-search-plus"></i>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
                    {currentSlide + 1} / {total}
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
                      <img src={image.src} alt={image.alt} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid-view-container">
                <div className={`grid-container ${isTransitioning ? 'transitioning' : ''}`} ref={gridContainerRef}>
                  <div className="grid-wrapper">
                    {galleryImages.map((image, index) => {
                      const orientation = imageOrientations[image.id]?.orientation || 'unknown';
                      const aspectRatio = imageOrientations[image.id]?.aspectRatio || 1;

                      return (
                        <div
                          key={image.id}
                          className={`grid-item grid-item-${orientation}`}
                          style={{
                            animationDelay: `${index * 0.1}s`
                          }}
                          data-aspect-ratio={aspectRatio}
                          onClick={() => {
                            setCurrentSlide(index);
                            openFullscreen();
                          }}
                        >
                          <img src={image.src} alt={image.alt} loading="lazy" />
                          <div className="grid-overlay">
                            <div className="grid-icon">
                              <i className="fas fa-search-plus"></i>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="scroll-controls">
                  <button
                    className="scroll-btn scroll-top"
                    onClick={() => gridContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <i className="fas fa-chevron-up"></i>
                  </button>
                  <button
                    className="scroll-btn scroll-bottom"
                    onClick={() => {
                      const container = gridContainerRef.current;
                      if (container) {
                        container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
                      }
                    }}
                  >
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="divider"></div>

          {/* YouTube Video Section */}
          <div className="video-section" ref={videoSectionRef}>
            <h3 className="video-title">Video Cưới</h3>
            <div className="divider"></div>
            <div className="video-container">
              {showVideo ? (
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/TipjV7EG4tQ?si=bZ52hLmV7-m9tr6C"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen>
                </iframe>
              ) : (
                <div className="video-placeholder">
                  <div className="video-placeholder-content">
                    <i className="fab fa-youtube"></i>
                    <p>Video đang tải...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen modal rendered via Portal at body level */}
      {showFullscreen && createPortal(
        <div className="fullscreen-modal" onClick={closeFullscreen}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeFullscreen}>
              <i className="fas fa-times"></i>
            </button>
            <div className="fullscreen-slideshow">
              <img
                src={galleryImages[currentSlide].src}
                alt={galleryImages[currentSlide].alt}
                loading="lazy"
              />
              <button className="fullscreen-nav fullscreen-prev" onClick={prevSlide}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="fullscreen-nav fullscreen-next" onClick={nextSlide}>
                <i className="fas fa-chevron-right"></i>
              </button>
              <div className="fullscreen-counter">
                {currentSlide + 1} / {total}
              </div>
            </div>
          </div>
        </div>,
        getPortalTarget()
      )}
    </>
  );
};

export default PhotoGallery;