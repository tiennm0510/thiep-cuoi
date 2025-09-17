import React from 'react';
import './Footer.css';
import weddingContent from '../../../config/content';

const Footer = () => {
  const { footer, navigation, hero, couple } = weddingContent;

  return (
    <>
      {/* Thank you section */}
      <section className="thank-you-section">
        <div className="thank-you-content">
          <div className="couple-photos">
            <div className="photo-frame">
              <img src={couple.groom.image} alt={couple.groom.name} />
            </div>
            <div className="photo-frame main-photo">
              <img src="/images/couple-main.jpg" alt="Couple" />
            </div>
            <div className="photo-frame">
              <img src={couple.bride.image} alt={couple.bride.name} />
            </div>
          </div>
          <h1 className="thank-you-title">Thank you!</h1>
          <p className="thank-you-message">
            Cảm ơn bạn đã dành thời gian ghé thăm trang web cưới của chúng tôi!
          </p>
        </div>
      </section>

      {/* Footer truyền thống */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text footer-text-center">
              <h3>{couple.groom.fullName} & {couple.bride.fullName}</h3>
              <p>{hero.date}</p>
              <p className="footer-quote">
                {footer.message}
              </p>
            </div>

            <div className="footer-links footer-links-center">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <p>{footer.copyright}</p>
            {footer.socialLinks && footer.socialLinks.length > 0 && (
              <div className="social-links">
                {footer.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.platform}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;