// Wedding Website Content Configuration
// Tập trung tất cả nội dung của website tại đây

const weddingContent = {
  // Thông tin cặp đôi
  couple: {
    groom: {
      name: "Mạnh Tiến",
      fullName: "Nguyễn Mạnh Tiến",
      family: {
          father: "Nguyễn Văn Thắng",
          mother: "Khuất Thị Thu"
      },
      image: "/images/groom.jpg"
    },
    bride: {
      name: "Linh Giang",
      fullName: "Nguyễn Thị Linh Giang",
        family: {
            father: "",
            mother: "Khuất Thị Liên"
        },
      image: "/images/bride.jpg"
    }
  },
  mainWedding: {
    id: 0,
    title: "LỄ THÀNH HÔN",
    time: "13:00 Ngày 12/10/2025",
    location: "Thôn Phúc Hòa 1, Xã Phúc Thọ, Tp. Hà Nội",
    type: "main-ceremony"
  },

  eventsWedding: [
    {
      id: 1,
      title: "TIỆC CƯỚI NHÀ GÁI",
      time: "16:00 11/10/2025",
      location: "Số 1, Ngõ 6, Thôn Phúc Hòa 1, Xã Phúc Thọ, Tp. Hà Nội",
      type: "reception"
    },
    {
      id: 2,
      title: "TIỆC CƯỚI NHÀ TRAI",
      time: "16:00 11/10/2025",
      location: "Số 54, Thôn Phúc Hòa 1, Xã Phúc Thọ, Tp. Hà Nội",
      type: "reception"
    }
  ],

  // Hero section
  hero: {
    title: "Nguyễn Mạnh Tiến & Nguyễn Thị Linh Giang",
    subtitle: "Chúng tôi sẽ kết hôn!",
    date: "12 Tháng 10, 2025",
    location: "",
  },


  // Background images for slideshow
  backgroundImages: [
    '/images/hero-bg/1.jpg',
    '/images/hero-bg/2.jpg',
    '/images/hero-bg/3.jpg',
    '/images/hero-bg/4.jpg'
  ],

  // Câu chuyện tình yêu
  loveStories: {
    title: "Câu Chuyện Tình Yêu",
    subtitle: "Hành trình từ khi gặp gỡ đến khi quyết định về chung một nhà",
    timeline: [
      {
        id: 1,
        date: "Tháng 2, 2024",
        title: "Lần đầu gặp gỡ",
        description: "Chúng tôi gặp nhau lần đầu tại một quán cà phê nhỏ trên phố huyện. Ánh mắt anh và nụ cười em đã tạo nên một khoảnh khắc đặc biệt.",
        image: "/images/story/1.jpg"
      },
      {
        id: 2,
        date: "Tháng 8, 2020",
        title: "Hẹn hò đầu tiên",
        description: "Buổi hẹn đầu tiên tại công viên Tao Đàn, chúng tôi đã trò chuyện suốt cả ngày mà không cảm thấy mệt mỏi.",
        image: "/images/story/2.jpg"
      },
      {
        id: 3,
        date: "Tháng 2, 2022",
        title: "Lời cầu hôn",
        description: "Trên bãi biển Vũng Tàu, dưới ánh hoàng hôn, anh đã quỳ xuống và cầu hôn em. Đó là khoảnh khắc hạnh phúc nhất trong đời em.",
        image: "/images/story/3.jpg"
      },
      {
        id: 4,
        date: "Tháng 12, 2024",
        title: "Đám cưới",
        description: "Và bây giờ, chúng tôi sẽ chính thức trở thành vợ chồng, bước vào cuộc sống mới với nhiều yêu thương.",
        image: "/images/story/4.jpg"
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
    total: 12,
    photo_link: "/images/gallery"
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
        cover: "/images/music-cover/hanh-phuc-cuoi-cung.jpg"
      },
      {
        id: 2,
        title: "I Do",
        artist: "911",
        src: "/music/i-do.mp3",
        cover: "/images/music-cover/i-do.jpg"
      },
      {
        id: 3,
        title: "Ngày Cưới",
        artist: "Khắc Việt",
        src: "/music/ngay-cuoi.mp3",
        cover: "/images/music-cover/ngay-cuoi.jpg"
      },
      {
        id: 4,
        title: "Một Đời",
        artist: "14 Casper & Bon Nghiêm",
        src: "/music/mot-doi.mp3",
        cover: "/images/music-cover/mot-doi.jpg"
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