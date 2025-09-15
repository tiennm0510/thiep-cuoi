import React from 'react';
import './LoveStory.css';
import weddingContent from '../../../config/content'

const { loveStories } = weddingContent;

const LoveStory = () => {
  return (
    <section id="story" className="love-story section">
      <div className="container">
        <h2 className="section-title">{ loveStories.title }</h2>
        <div className="divider"></div>
        <p className="section-subtitle">
            {loveStories.subtitle}
        </p>
        
        <div className="timeline">
          {loveStories.timeline.map((story, index) => (
            <div key={story.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="story-image">
                  <img src={story.image} alt={story.title} />
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
        
        <div className="love-quote">
          <p>"...Tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm về cùng một hướng..."</p>
          <h3>--Forever one love--</h3>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;