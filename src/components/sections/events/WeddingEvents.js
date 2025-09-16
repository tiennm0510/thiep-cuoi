import React from 'react';
import './WeddingEvents.css';
import weddingContent from '../../../config/content';

const { mainWedding, eventsWedding } = weddingContent;


const WeddingEvents = () => {
  const addToCalendar = (event) => {
    const eventData = {
      name: `${event.title} (Đám cưới Mạnh Tiến và Linh Giang)`,
      description: "Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng tôi!. Thông tin chi tiết xem tại website: https://giangtien1011.iwedding.info",
      startDate: event.time.split(' ')[1],
      endDate: event.time.split(' ')[1],
      startTime: event.time.split(' ')[0] + ' ' + event.time.split(' ')[2],
      endTime: event.time.split(' ')[0] + ' ' + event.time.split(' ')[2],
      location: event.location,
      options: ["Apple", "Google", "iCal", "Microsoft365", "MicrosoftTeams", "Outlook.com", "Yahoo"],
      timeZone: "Asia/Ho_Chi_Minh",
      iCalFileName: "Reminder-Event",
      listStyle: "modal",
      label: "Thêm vào lịch",
      trigger: "click"
    };

    // This would integrate with a calendar library in a real implementation
    console.log('Add to calendar:', eventData);
    alert('Tính năng thêm vào lịch sẽ được tích hợp với thư viện calendar');
  };

  const openGoogleMaps = (event) => {
    if (event.mapUrl && event.mapUrl.trim() !== '') {
      // Sử dụng link Google Maps cụ thể nếu có
      window.open(event.mapUrl, '_blank');
    } else {
      // Fallback: search địa chỉ trên Google Maps
      const encodedLocation = encodeURIComponent(event.location);
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
      window.open(googleMapsUrl, '_blank');
    }
  };

  return (
    <section id="events" className="wedding-events section">
      <div className="container">
        <h2 className="section-title">Sự Kiện Cưới</h2>
        <div className="divider"></div>
        <p className="section-subtitle">
          Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí.
        </p>
        
        {/* Lễ thành hôn - riêng biệt */}
        <div className="main-wedding-section">
          <div className={`event-card ${mainWedding.type}`}>
            <div className="event-header">
              <h3 className="event-title">{mainWedding.title}</h3>
              <div className="event-time">{mainWedding.time}</div>
            </div>
            
            <div className="event-location">
              <div className="location-icon">⛪</div>
              <p>{mainWedding.location}</p>
            </div>
            
            <div className="event-actions">
              <button 
                className="btn btn-outline"
                onClick={() =>  addToCalendar(mainWedding)}
              >
                Thêm vào lịch
              </button>
              <button
                className="btn btn-outline"
                onClick={() => openGoogleMaps(mainWedding)}
              >
                Xem bản đồ
              </button>
            </div>
          </div>
        </div>

        {/* Tiệc cưới - một hàng */}
        <div className="reception-section">
          <h3 className="reception-title">Tiệc Cưới</h3>
          <div className="divider"></div>
          <div className="reception-grid">
            {eventsWedding.map((event) => (
              <div key={event.id} className={`event-card ${event.type}`}>
                <div className="event-header">
                  <h4 className="event-title">{event.title}</h4>
                  <div className="event-time">{event.time}</div>
                </div>
                
                <div className="event-location">
                  <div className="location-icon">🍽️</div>
                  <p>{event.location}</p>
                </div>
                
                <div className="event-actions">
                  <button 
                    className="btn btn-outline"
                    onClick={() => addToCalendar(event)}
                  >
                    Thêm vào lịch
                  </button>
                  <button
                    className="btn btn-outline"
                    onClick={() => openGoogleMaps(event)}
                  >
                    Xem bản đồ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingEvents;