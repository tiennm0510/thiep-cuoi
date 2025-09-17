import React, { useState, useRef, useEffect, useCallback } from 'react';
import './MusicPlayer.css';
import weddingContent from '../../../config/content';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Bắt đầu với auto-play
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const audioRef = useRef(null);

  const { playlist } = weddingContent.music;

  // Chỉ sử dụng audio player cho tất cả tracks

  const nextTrack = useCallback(() => {
    const next = (currentTrack + 1) % playlist.length;
    setCurrentTrack(next);
    // Giữ nguyên trạng thái phát để tiếp tục auto-play
  }, [currentTrack, playlist.length]);

  const prevTrack = useCallback(() => {
    const prev = currentTrack === 0 ? playlist.length - 1 : currentTrack - 1;
    setCurrentTrack(prev);
    // Giữ nguyên trạng thái phát để tiếp tục auto-play
  }, [currentTrack, playlist.length]);

  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        // Unmute when user first interacts
        if (!hasUserInteracted) {
          audio.muted = false;
          setHasUserInteracted(true);
        }
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying, hasUserInteracted]);

  // Auto-play effect khi component mount
  useEffect(() => {
    const handleFirstInteraction = () => {
      const audio = audioRef.current;
      if (audio && !hasUserInteracted) {
        audio.muted = false;
        setHasUserInteracted(true);

        // Ngay lập tức phát nhạc sau interaction đầu tiên
        if (isPlaying) {
          setTimeout(() => {
            audio.play().catch(err => {
              console.log('Auto-play prevented:', err);
              setIsPlaying(false);
            });
          }, 100);
        }
      }

      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    if (!hasUserInteracted) {
      document.addEventListener('click', handleFirstInteraction);
      document.addEventListener('keydown', handleFirstInteraction);
      document.addEventListener('scroll', handleFirstInteraction);
      document.addEventListener('touchstart', handleFirstInteraction);
    }

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isPlaying, hasUserInteracted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.muted = !hasUserInteracted;

      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      const handleEnded = () => nextTrack();
      const handleError = () => setHasError(true);

      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('error', handleError);

      // Auto-play logic với muted
      if (isPlaying) {
        if (hasUserInteracted) {
          // User đã tương tác, có thể phát với âm thanh
          audio.play().catch(err => {
            console.log('Play failed:', err);
            setIsPlaying(false);
          });
        } else {
          // Chưa có user interaction, phát muted
          audio.muted = true;
          audio.play().catch(err => {
            console.log('Muted autoplay failed:', err);
          });
        }
      }

      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('error', handleError);
      };
    }
  }, [volume, nextTrack, hasUserInteracted, isPlaying, currentTrack]);

  const selectTrack = useCallback((index) => {
    setCurrentTrack(index);
    // Giữ nguyên trạng thái phát khi user chọn bài từ playlist
  }, []);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (audio) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * duration;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (hasError) {
    return (
      <div className="music-player">
        <div className="player-container error">
          <div className="error-message">
            <p>🎵 Nhạc sẽ có sớm!</p>
            <small>Vui lòng thêm file nhạc vào thư mục /public/music/</small>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="music-player">
      {/* Audio player cho tất cả tracks */}
      <audio
        ref={audioRef}
        src={playlist[currentTrack].src}
        preload="metadata"
        muted
      />

      {/* Notification banner for unmuted audio */}
      {!hasUserInteracted && isPlaying && (
        <div className="audio-notification">
          <div className="notification-content">
            <i className="fas fa-volume-mute"></i>
            <span>Nhạc đang phát không tiếng. Click bất kỳ đâu để bật âm thanh!</span>
            <button
              className="notification-close"
              onClick={() => setHasUserInteracted(true)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}

      {!isExpanded ? (
        // Thu gọn - chỉ hiện biểu tượng
        <>
          <div className="collapsed-container">
            <div
              className="player-collapsed"
              onClick={() => setIsExpanded(true)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <div className="cover-display">
                <img
                  src={playlist[currentTrack].cover}
                  alt={playlist[currentTrack].title}
                  className={`cover-image ${isPlaying ? 'spinning' : ''}`}
                />
                <div className="cover-overlay">
                  <button
                    className="cover-play-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlayPause();
                    }}
                  >
                    <i className={`fas ${isPlaying ? (hasUserInteracted ? 'fa-pause' : 'fa-volume-mute') : 'fa-play'}`}></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Nút playlist bên ngoài */}
            <button
              className="external-playlist-btn"
              onClick={() => {
                setIsExpanded(true);
                setShowPlaylist(true);
              }}
              title="Danh sách nhạc"
            >
              <i className="fas fa-list"></i>
            </button>
          </div>

          {/* Tooltip hiển thị thông tin bài hát khi hover */}
          {showTooltip && (
            <div className="song-tooltip">
              <div className="tooltip-cover">
                <img src={playlist[currentTrack].cover} alt={playlist[currentTrack].title} />
              </div>
              <div className="tooltip-info">
                <h5>{playlist[currentTrack].title}</h5>
                <p>{playlist[currentTrack].artist}</p>
                <div className="tooltip-status">
                  {!hasUserInteracted && isPlaying ? '🔇 Click để bật âm thanh' :
                   isPlaying ? '♪ Đang phát' : '⏸ Tạm dừng'}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        // Mở rộng - hiện đầy đủ player
        <div className="player-container">
          <div className="player-header">
            <span className="player-title">
              <i className="fas fa-music"></i> Music Player
            </span>
            <button
              className="collapse-btn"
              onClick={() => setIsExpanded(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="player-main">
            <div className="track-info">
              <div className="track-cover">
                <img src={playlist[currentTrack].cover} alt={playlist[currentTrack].title} />
              </div>
              <div className="track-details">
                <h4 className="track-title">{playlist[currentTrack].title}</h4>
                <p className="track-artist">{playlist[currentTrack].artist}</p>
              </div>
            </div>

            <div className="player-controls">
              <button className="music-control-btn" onClick={prevTrack}>
                <i className="fas fa-step-backward"></i>
              </button>
              <button className="music-control-btn play-btn" onClick={togglePlayPause}>
                <i className={`fas ${isPlaying ? (hasUserInteracted ? 'fa-pause' : 'fa-volume-mute') : 'fa-play'}`}></i>
              </button>
              <button className="music-control-btn" onClick={nextTrack}>
                <i className="fas fa-step-forward"></i>
              </button>
              <button
                className="playlist-toggle-btn"
                onClick={() => setShowPlaylist(!showPlaylist)}
                title="Danh sách nhạc"
              >
                <i className="fas fa-list"></i>
              </button>
            </div>

            <div className="player-progress">
              <span className="time">{formatTime(currentTime)}</span>
              <div className="progress-bar" onClick={handleSeek}>
                <div
                  className="progress-fill"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
              </div>
              <span className="time">{formatTime(duration)}</span>
            </div>

            <div className="player-volume">
              <i className="fas fa-volume-up"></i>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
            </div>
          </div>

          {showPlaylist && (
            <div className="playlist">
              <div className="playlist-header">
                <h4>Playlist</h4>
                <button
                  className="playlist-close-btn"
                  onClick={() => setShowPlaylist(false)}
                  title="Đóng playlist"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="playlist-tracks">
                {playlist.map((track, index) => (
                  <div
                    key={track.id}
                    className={`playlist-item ${index === currentTrack ? 'active' : ''}`}
                    onClick={() => selectTrack(index)}
                  >
                    <img src={track.cover} alt={track.title} />
                    <div className="playlist-info">
                      <h5>{track.title}</h5>
                      <p>{track.artist}</p>
                    </div>
                    {index === currentTrack && isPlaying && (
                    <span className="playing">
                      <i className="fas fa-volume-up"></i>
                    </span>
                  )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;