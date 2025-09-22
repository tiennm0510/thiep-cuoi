import React from 'react';
import './Couple.css';
import { couple } from '../../../config/content';  

const Couple = () => {

  return (
    <section id="couple" className="couple section">
      <div className="container">
        <h2 className="section-title">Cặp đôi</h2>
        <div className="divider"></div>
        <p className="section-subtitle">
          Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần thiết cho chính bạn.
        </p>

        <div className="couple-content">
          <div className="couple-member groom">
            <div className="member-image">
              <img src={couple.groom.image} alt={`Chú rể - ${couple.groom.name}`} loading="lazy" />
            </div>
              <div className="member-info">
                <h3 className="member-role">Groom</h3>
                <h4 className="member-name">{couple.groom.fullName}</h4>
                <p className="member-description">Bố: {couple.groom.family.father}</p>
                <p className="member-description">Mẹ: {couple.groom.family.mother}</p>
              </div>
          </div>

            <div className="love-symbol">
                <div className="heart-icon">💕</div>
            </div>

            <div className="couple-member bride">
            <div className="member-image">
              <img src={couple.bride.image} alt={`Cô dâu - ${couple.bride.name}`} loading="lazy" />
            </div>
              <div className="member-info">
                <h3 className="member-role">Bride</h3>
                <h4 className="member-name">{couple.bride.fullName}</h4>
                <p className="member-description">Mẹ: {couple.bride.family.mother}</p>
              </div>
          </div>
        </div>

          {/* <div className="rsvp-button">
          <button className="btn">Xác nhận tham dự</button>
        </div> */}
      </div>
    </section>
  );
};

export default Couple;