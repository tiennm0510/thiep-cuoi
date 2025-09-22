import { useRef } from 'react';
import './LoveStory.css';
import { loveStories } from '../../../config/content';

const LoveStory = () => {
  const timelineContainerRef = useRef(null);
  return (
    <section id="story" className="love-story section">
      <div className="container">
        <h2 className="section-title">{ loveStories.title }</h2>
        <div className="divider"></div>
        <p className="section-subtitle">
            {loveStories.subtitle}
        </p>
        
        <div className="timeline-view-container">
          <div className="timeline-wrapper">
            <div className="timeline" ref={timelineContainerRef}>
              {loveStories.timeline.map((story, index) => (
                <div key={story.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-content">
                    <div className="story-image">
                      <img src={`/images/story/${story.name}.jpg`} alt={story.title} loading="lazy" />
                    </div>
                    <div className="story-text">
                      <h3 className="story-title">{story.title}</h3>
                      <p className="story-date">{story.date}</p>
                      <p className="story-content">{story.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="timeline-scroll-controls">
            <button
              className="timeline-scroll-btn timeline-scroll-top"
              onClick={() => timelineContainerRef.current?.scrollTo({top: 0, behavior: 'smooth'})}
            >
              <i className="fas fa-chevron-up"></i>
            </button>
            <button
              className="timeline-scroll-btn timeline-scroll-bottom"
              onClick={() => {
                const container = timelineContainerRef.current;
                if (container) {
                  container.scrollTo({top: container.scrollHeight, behavior: 'smooth'});
                }
              }}
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>
        
        <div className="love-quote">
          <p>"...Tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm về cùng một hướng..."</p>
          <h3>--Forever one love--</h3>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;