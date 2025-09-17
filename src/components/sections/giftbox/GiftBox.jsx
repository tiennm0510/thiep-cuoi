import React from 'react';
import './GiftBox.css';
import weddingContent from '../../../config/content';

const GiftBox = () => {
  const { giftBox } = weddingContent;

  return (
    <section id="giftbox" className="giftbox section">
      <div className="container">
        <div className="giftbox-header">
          <div className="floral-decoration">
            <img src={giftBox.floral} alt="Floral decoration" />
          </div>
          <h2 className="section-title">{giftBox.title}</h2>
          <div className="divider"></div>
          <p className="section-subtitle">{giftBox.subtitle}</p>
        </div>

        <div className="giftbox-content">
          <div className="gift-cards">
            {/* QR Code cho chú rể */}
            <div className="gift-card groom-card">
              <h3 className="gift-card-title">{giftBox.groom.title}</h3>
              <div className="qr-code-container">
                <div className="qr-code">
                  <img src={giftBox.groom.qrCode} alt="QR Code chú rể" />
                </div>
              </div>
              <div className="bank-info">
                <p className="bank-name">
                  <strong>Ngân hàng:</strong> {giftBox.groom.bankName}
                </p>
                <p className="account-name">
                  <strong>Tên tài khoản:</strong> {giftBox.groom.accountName}
                </p>
                <p className="account-number">
                  <strong>Số tài khoản:</strong> {giftBox.groom.accountNumber}
                </p>
              </div>
            </div>

            {/* QR Code cho cô dâu */}
            <div className="gift-card bride-card">
              <h3 className="gift-card-title">{giftBox.bride.title}</h3>
              <div className="qr-code-container">
                <div className="qr-code">
                  <img src={giftBox.bride.qrCode} alt="QR Code cô dâu" />
                </div>
              </div>
              <div className="bank-info">
                <p className="bank-name">
                  <strong>Ngân hàng:</strong> {giftBox.bride.bankName}
                </p>
                <p className="account-name">
                  <strong>Tên tài khoản:</strong> {giftBox.bride.accountName}
                </p>
                <p className="account-number">
                  <strong>Số tài khoản:</strong> {giftBox.bride.accountNumber}
                </p>
              </div>
            </div>
          </div>

          <div className="giftbox-message">
            <div className="message-content">
              <p>{giftBox.message}</p>
              <div className="heart-decoration">💕</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftBox;