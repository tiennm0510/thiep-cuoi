import React, { useState } from 'react';
import './RSVP.css';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guestCount: 1,
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('RSVP Data:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        attendance: '',
        guestCount: 1,
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section className="rsvp section">
        <div className="container">
          <div className="rsvp-success">
            <h2 className="section-title">Cảm ơn bạn!</h2>
            <p>Chúng tôi đã nhận được xác nhận tham dự của bạn. Hẹn gặp lại trong ngày vui!</p>
            <div className="success-icon">💕</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="rsvp section">
      <div className="container">
        <h2 className="section-title">Lời chúc</h2>
        <div className="divider"></div>
        <p className="section-subtitle">
          Vui lòng xác nhận tham dự để chúng tôi có thể chuẩn bị tốt nhất cho ngày vui
        </p>
        
        <div className="rsvp-content">
          <div className="rsvp-form-container">
            <form className="rsvp-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Họ và tên *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Nhập email của bạn"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Số điện thoại</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Nhập số điện thoại của bạn"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="attendance">Bạn có tham dự không? *</label>
                <select
                  id="attendance"
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  required
                >
                  <option value="">Chọn tùy chọn</option>
                  <option value="yes">Có, tôi sẽ tham dự</option>
                  <option value="no">Không, tôi không thể tham dự</option>
                  <option value="maybe">Có thể</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="guestCount">Số lượng khách</label>
                <select
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                >
                  <option value={1}>1 người</option>
                  <option value={2}>2 người</option>
                  <option value={3}>3 người</option>
                  <option value={4}>4 người</option>
                  <option value={5}>5 người trở lên</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Lời nhắn gửi đến cặp đôi</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Gửi lời chúc mừng đến cặp đôi..."
                />
              </div>
              
              <button type="submit" className="btn rsvp-submit">
                Gửi xác nhận
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;