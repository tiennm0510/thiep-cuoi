import React from 'react';
import './LoveStory.css';

const LoveStory = () => {
  const stories = [
    {
      id: 1,
      title: "Bạn có tin vào tình yêu online không?",
      date: "December 12 2015",
      content: "Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình.",
      image: "/images/story1.jpg"
    },
    {
      id: 2,
      title: "Lời tỏ tình dễ thương^^",
      date: "August 04 2016",
      content: "Ngày ấy, tôi 21! Một mình giữa phố thị nấp tập. Mỗi chiều cuối tuần thường chạy xe vòng quanh qua những con phố, len lỏi trong từng dòng người tấp nập. Hay thậm chí là ghé vào một quán cà phê ven đường để ngồi đó và cảm nhận về cuộc sống của riêng mình. Đôi khi lạc lõng và hơi cô đơn. Nhưng rồi một ngày đẹp trời, người con trai ấy xuất hiện, nắm tay rồi thủ thỉ vào tai: \"Hy vọng sau này anh được làm những điều ấy cùng em\".",
      image: "/images/story2.jpg"
    },
    {
      id: 3,
      title: "Phút giây cầu hôn",
      date: "May 10 2018",
      content: "5 năm bên nhau không phải là quãng thời gian quá dài, nhưng đủ cho chúng ta nhận ra được rất nhiều điều. Yêu nhau, vun vén hạnh phúc và cùng nỗ lực vượt qua những khó khăn trong cuộc sống. Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang mới. Giây phút anh ngỏ lời \"Làm vợ anh nhé!\", em đã nguyện ý đời này, đi đâu cũng được, miễn là cùng anh.",
      image: "/images/story3.jpg"
    },
    {
      id: 4,
      title: "Ngày lễ đính hôn",
      date: "July 28 2018",
      content: "\"Tiếng trái tim đôi ta đập thật nhanh. Thì thầm lời yêu thương. Ngày tình về chung đôi...\" Sau bao nhiêu chờ đợi, cuối cùng ngày vui của chúng ta cũng tới rồi. Cảm ơn vì mình đã luôn là một phần trong cuộc sống của nhau. Em và anh không chỉ là người yêu mà chúng ta còn là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh và sau này sẽ là mẹ của các con anh.",
      image: "/images/story4.jpg"
    }
  ];

  return (
    <section id="story" className="love-story section">
      <div className="container">
        <h2 className="section-title">Chuyện tình yêu</h2>
        <div className="divider"></div>
        <p className="section-subtitle">
          Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho chuyến đi đáng giá.
        </p>
        
        <div className="timeline">
          {stories.map((story, index) => (
            <div key={story.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="story-image">
                  <img src={story.image} alt={story.title} />
                </div>
                <div className="story-text">
                  <h3 className="story-title">{story.title}</h3>
                  <p className="story-date">{story.date}</p>
                  <p className="story-content">{story.content}</p>
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