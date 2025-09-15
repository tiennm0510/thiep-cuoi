// Wedding Website Content Configuration
// Tập trung tất cả nội dung của website tại đây

const weddingContent = {
  // Thông tin cặp đôi
  couple: {
    groom: {
      name: "Mạnh Tiến",
      fullName: "Nguyễn Mạnh Tiến",
      description: "Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở Quận 1 thành phố Hồ Chí Minh. Là một người hiền lành và ít nói. Luôn coi trọng tình cảm và yêu thương gia đình. Với anh: \"Gia đình là điểm tựa vững chắc nhất và là bến đỗ bình yên không đâu sánh bằng đối với mỗi con người. Đó luôn là nơi tràn ngập tình yêu thương để ta trở về.\"",
      image: "/images/groom.jpg"
    },
    bride: {
      name: "Linh Giang",
      fullName: "Nguyễn Thị Linh Giang",
      description: "Cô gái đến từ xứ Huế mộng mơ, hiện đang sinh sống và làm việc tại Sài Gòn. Sau khi tốt nghiệp Học viện Báo chí và Tuyên truyền, quyết tâm theo đuổi đam mê làm phóng viên du lịch. Là một người hay cười nhưng lại sống nội tâm, thích đọc sách, trồng cây và yêu thiên nhiên. Ngoài ra còn rất thích vẽ vời, nuôi mèo và nuôi ước mơ có cho mình một vườn hồng khoe sắc.",
      image: "/images/bride.jpg"
    }
  },

  // Hero section
  hero: {
    title: "Nguyễn Mạnh Tiến & Nguyễn Thị Linh Giang",
    subtitle: "Chúng tôi sẽ kết hôn!",
    date: "12 Tháng 10, 2025",
    location: "Nhà hàng Golden Palace, TP.HCM",
    backgroundImage: "/images/hero-bg.jpg"
  },

  // Câu chuyện tình yêu
  loveStory: {
    title: "Câu Chuyện Tình Yêu",
    subtitle: "Hành trình từ khi gặp gỡ đến khi quyết định về chung một nhà",
    timeline: [
      {
        id: 1,
        date: "Tháng 3, 2020",
        title: "Lần đầu gặp gỡ",
        description: "Chúng tôi gặp nhau lần đầu tại một quán cà phê nhỏ trong khu phố cũ. Ánh mắt anh và nụ cười em đã tạo nên một khoảnh khắc đặc biệt.",
        image: "/images/story1.jpg"
      },
      {
        id: 2,
        date: "Tháng 8, 2020",
        title: "Hẹn hò đầu tiên",
        description: "Buổi hẹn đầu tiên tại công viên Tao Đàn, chúng tôi đã trò chuyện suốt cả ngày mà không cảm thấy mệt mỏi.",
        image: "/images/story2.jpg"
      },
      {
        id: 3,
        date: "Tháng 2, 2022",
        title: "Lời cầu hôn",
        description: "Trên bãi biển Vũng Tàu, dưới ánh hoàng hôn, anh đã quỳ xuống và cầu hôn em. Đó là khoảnh khắc hạnh phúc nhất trong đời em.",
        image: "/images/story3.jpg"
      },
      {
        id: 4,
        date: "Tháng 12, 2024",
        title: "Đám cưới",
        description: "Và bây giờ, chúng tôi sẽ chính thức trở thành vợ chồng, bước vào cuộc sống mới với nhiều yêu thương.",
        image: "/images/story4.jpg"
      }
    ]
  },

  // Sự kiện cưới
  weddingEvents: {
    title: "Sự Kiện Cưới",
    subtitle: "Những khoảnh khắc đặc biệt trong ngày trọng đại",
    events: [
      {
        id: 1,
        type: "Lễ ăn hỏi",
        date: "08:00 AM, 14/12/2024",
        location: "Nhà gái - 123 Đường ABC, Quận 1, TP.HCM",
        description: "Lễ ăn hỏi truyền thống theo phong tục Việt Nam",
        icon: "🏮"
      },
      {
        id: 2,
        type: "Lễ cưới",
        date: "10:00 AM, 15/12/2024",
        location: "Nhà thờ Đức Bà - 01 Công xã Paris, Quận 1, TP.HCM",
        description: "Lễ cưới trang trọng tại nhà thờ",
        icon: "💒"
      },
      {
        id: 3,
        type: "Tiệc cưới",
        date: "06:00 PM, 15/12/2024",
        location: "Nhà hàng Golden Palace - 456 Đường XYZ, Quận 3, TP.HCM",
        description: "Tiệc cưới ấm cúng cùng gia đình và bạn bè",
        icon: "🍽️"
      }
    ]
  },


  // Album ảnh cưới
  photoGallery: {
    title: "Album Ảnh Cưới",
    subtitle: "Những khoảnh khắc đẹp nhất của chúng tôi",
    photos: [
      { id: 1, src: "/images/gallery1.jpg", alt: "Ảnh cưới 1" },
      { id: 2, src: "/images/gallery2.jpg", alt: "Ảnh cưới 2" },
      { id: 3, src: "/images/gallery3.jpg", alt: "Ảnh cưới 3" },
      { id: 4, src: "/images/gallery4.jpg", alt: "Ảnh cưới 4" },
      { id: 5, src: "/images/gallery5.jpg", alt: "Ảnh cưới 5" },
      { id: 6, src: "/images/gallery6.jpg", alt: "Ảnh cưới 6" },
      { id: 7, src: "/images/gallery7.jpg", alt: "Ảnh cưới 7" },
      { id: 8, src: "/images/gallery8.jpg", alt: "Ảnh cưới 8" },
      { id: 9, src: "/images/gallery9.jpg", alt: "Ảnh cưới 9" },
      { id: 10, src: "/images/gallery10.jpg", alt: "Ảnh cưới 10" },
      { id: 11, src: "/images/gallery11.jpg", alt: "Ảnh cưới 11" },
      { id: 12, src: "/images/gallery12.jpg", alt: "Ảnh cưới 12" }
    ]
  },

  // RSVP
  rsvp: {
    title: "Xác Nhận Tham Dự",
    subtitle: "Vui lòng cho chúng tôi biết bạn có thể tham dự không",
    message: "Sự hiện diện của bạn sẽ làm cho ngày cưới của chúng tôi trở nên ý nghĩa hơn!",
    formFields: {
      name: "Họ và tên",
      email: "Email",
      phone: "Số điện thoại",
      guests: "Số người tham dự",
      attending: "Bạn có tham dự không?",
      message: "Lời nhắn (không bắt buộc)",
      submitButton: "Gửi xác nhận"
    },
    attendingOptions: [
      { value: "yes", label: "Có, tôi sẽ tham dự" },
      { value: "no", label: "Rất tiếc, tôi không thể tham dự" }
    ]
  },

  // Music playlist
  music: {
    title: "Nhạc Cưới",
    subtitle: "Những bản nhạc yêu thích của chúng tôi",
    playlist: [
      {
        id: 1,
        title: "Hạnh Phúc Cuối Cùng",
        artist: "Trương Việt Thái",
        src: "/music/hanh-phuc-cuoi-cung.mp3",
        cover: "/images/hanh-phuc-cuoi-cung.jpg"
      },
      {
        id: 2,
        title: "I Do",
        artist: "911",
        src: "/music/i-do.mp3",
        cover: "/images/i-do.jpg"
      },
      {
        id: 3,
        title: "Ngày Cưới",
        artist: "Khắc Việt",
        src: "/music/ngay-cuoi.mp3",
        cover: "/images/ngay-cuoi.jpg"
      },
      {
        id: 4,
        title: "Một Đời",
        artist: "14 Casper & Bon Nghiêm",
        src: "/music/mot-doi.mp3",
        cover: "/images/mot-doi.jpg"
      }
    ]
  },

  // Navigation menu
  navigation: [
    { id: "home", label: "Trang chủ", href: "#home" },
    { id: "couple", label: "Cặp đôi", href: "#couple" },
    { id: "story", label: "Câu chuyện", href: "#story" },
    { id: "events", label: "Sự kiện", href: "#events" },
    { id: "gallery", label: "Album", href: "#gallery" },
    { id: "giftbox", label: "Hộp mừng cưới", href: "#giftbox" },
    { id: "rsvp", label: "RSVP", href: "#rsvp" }
  ],

  // Hộp mừng cưới
  giftBox: {
    title: "Hộp mừng cưới",
    subtitle: "Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng tôi!",
    message: "Sự hiện diện của bạn trong ngày trọng đại là món quà ý nghĩa nhất với chúng tôi. Nếu bạn muốn gửi lời chúc mừng, chúng tôi xin chân thành cảm ơn!",
    groom: {
      title: "Mừng cưới đến chú rể",
      bankName: "Techcombank",
      accountName: "Nguyen Van Thang",
      accountNumber: "89989123456789",
      qrCode: "/images/qr-groom.png"
    },
    bride: {
      title: "Mừng cưới đến cô dâu",
      bankName: "Techcombank",
      accountName: "Kieu Thi Huong",
      accountNumber: "38389123456789",
      qrCode: "/images/qr-bride.png"
    }
  },

  // Footer
  footer: {
    message: "Cảm ơn bạn đã ghé thăm trang web cưới của chúng tôi!",
    copyright: "2025 Mạnh Tiến & Linh Giang. Made with 💕 by Tiennm0510",
    socialLinks: [
      {
        platform: "Facebook",
        url: "https://facebook.com",
        icon: "fab fa-facebook-f"
      },
      {
        platform: "Instagram",
        url: "https://instagram.com",
        icon: "fab fa-instagram"
      }
    ]
  }
};

export default weddingContent;