import React from 'react';
import './Bridesmaids.css';
import weddingContent from '../../../config/content';

const Bridesmaids = () => {
  const { weddingParty } = weddingContent;

  return (
    <section id="bridesmaids" className="bridesmaids section">
      <div className="container">
        <h2 className="section-title">{weddingParty.title}</h2>
        <div className="divider"></div>
        <p className="section-subtitle">
          {weddingParty.subtitle}
        </p>

        <div className="bridal-party">
          <div className="party-section">
            <h3 className="party-title">Phù Dâu</h3>
            <div className="party-grid">
              {weddingParty.bridesmaids.map((person) => (
                <div key={person.id} className="party-member">
                  <div className="member-image">
                    <img src={person.image} alt={person.name} />
                  </div>
                  <div className="member-info">
                    <h4 className="member-name">{person.name}</h4>
                    <p className="member-role">{person.role}</p>
                    <p className="member-description">{person.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="party-section">
            <h3 className="party-title">Phù Rể</h3>
            <div className="party-grid">
              {weddingParty.groomsmen.map((person) => (
                <div key={person.id} className="party-member">
                  <div className="member-image">
                    <img src={person.image} alt={person.name} />
                  </div>
                  <div className="member-info">
                    <h4 className="member-name">{person.name}</h4>
                    <p className="member-role">{person.role}</p>
                    <p className="member-description">{person.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridesmaids;