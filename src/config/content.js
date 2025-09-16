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
            mother: "Nguyễn Thị Liên"
        },
      image: "/images/bride.jpg"
    }
  },
  mainWedding: {
    id: 0,
    title: "LỄ THÀNH HÔN",
    time: "13:00 Ngày 12/10/2025",
    location: "Số 54, Thôn Phúc Hòa 1, Xã Phúc Thọ, Tp. Hà Nội",
    type: "main-ceremony",
    mapUrl: "https://maps.app.goo.gl/ugK3zuyXEMYDZvxLA"
  },

  eventsWedding: [
    {
      id: 1,
      title: "TIỆC CƯỚI NHÀ TRAI",
      time: "16:00 11/10/2025",
      location: "Số 54, Xóm Phú Mãn, Thôn Phúc Hòa 1, Xã Phúc Thọ, Tp. Hà Nội",
      type: "reception",
      mapUrl: "https://maps.app.goo.gl/ugK3zuyXEMYDZvxLA"
    },
    {
      id: 2,
      title: "TIỆC CƯỚI NHÀ GÁI",
      time: "16:00 11/10/2025",
      location: "Số 1, Ngõ 9, Xóm Phú Mãn, Thôn Phúc Hòa 1, Xã Phúc Thọ, Tp. Hà Nội",
      type: "reception",
      mapUrl: "https://maps.app.goo.gl/86QDQU3aBhxNxJ8D6"
    },
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
        date: "Tháng 4, 2024",
        title: "Hẹn hò đầu tiên",
        description: "Chúng tôi có buổi hẹn hò đầu tiên. Cùng nhau dạo chơi, trò chuyện và tìm hiểu về nhau, chúng tôi cảm thấy rất thoải mái và vui vẻ.",
        image: "/images/story/2.jpg"
      },
      {
        id: 3,
        date: "Tháng 6, 2024",
        title: "Lời tỏ tình",
        description: "Một buổi tối đầu thu, gió mùa hiu hiu thôi. Anh đã ngỏ lời yêu em dưới ánh đèn vàng ấm áp. Em đã đồng ý và từ đó, chúng tôi chính thức trở thành một cặp đôi.",
        image: "/images/story/3.jpg"
      },
      {
        id: 4,
        date: "Tháng 10, 2024",
        title: "Cuộc nói chuyện ý nghĩa",
        description: "Thời gian yêu nhau, có những kỷ niệm vui, cũng không ít lần cãi vã. Nhưng rồi chúng tôi nhận ra rằng, điều quan trọng nhất là sự thấu hiểu và tôn trọng lẫn nhau. Chúng tôi hẹn nhau sang năm làm đám cưới khi em bước qua sinh nhật tuổi 24.",
        image: "/images/story/4.jpg"
      },
      {
        id: 5,
        date: "Tháng 1, 2025",
        title: "Lần đầu ra mắt gia đình",
        description: "Một ngày sau Tết dương lịch. Tôi quyết định sẽ qua nhà gặp mẹ em để xin phép được tìm hiểu em. Dù có chút lo lắng, nhưng mọi chuyện diễn ra rất suôn sẻ và ấm áp.",
        image: "/images/story/5.jpg"
      },
      {
        id: 6,
        date: "Tháng 2, 2025",
        title: "Tết Nguyên Đán",
        description: "Tết năm nay thật là ý nghĩa khi chúng tôi được đón Tết cùng gia đình hai bên. Những bữa cơm sum vầy, những câu chuyện rôm rả đã làm cho tình cảm của chúng tôi thêm gắn bó. Tôi đưa em gặp mặt gia đình tôi, em cùng tôi đi thăm gia đình của em.",
        image: "/images/story/6.jpg"
      },
      {
        id: 7,
        date: "Tháng 5, 2025",
        title: "Lời cầu hôn",
        description: "Một buổi tối nhẹ nhàng, tại nơi ngày xưa chúng tôi nói lời yêu. Anh ghé tai thỏ thẻ, ngỏ lời cầu hôn em. Em đã xúc động và đồng ý. Chúng tôi quyết định sẽ cùng nhau xây dựng một tương lai hạnh phúc.",
        image: "/images/story/7.jpg"
      },
      {
        id: 8,
        date: "Tháng 7, 2025",
        title: "Lễ dạm ngõ",
        description: "Sau khi được sự đồng ý của gia đình hai bên, chúng tôi đã tổ chức lễ dạm ngõ. Đây là bước quan trọng để chúng tôi chính thức trở thành vợ chồng trong tương lai gần. Chiếc nhẫn cầu hôn được đeo vào tay em như minh chứng cho lời hứa trọn đời bên nhau.",
        image: "/images/story/8.jpg"
      },
      {
        id: 9,
        date: "Tháng 10, 2025",
        title: "Lễ thành hôn",
        description: "Ngày trọng đại đã đến, chúng tôi sẽ cùng nhau bước vào lễ thành hôn, bắt đầu một hành trình mới với nhiều thử thách và niềm vui. Chúng tôi rất mong được sự chúc phúc từ gia đình và bạn bè.",
        image: "/images/story/9.jpg"
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
    total: 30,
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
    { id: "rsvp", label: "Lời chúc", href: "#rsvp" }
  ],

  // Hộp mừng cưới
  giftBox: {
    title: "Hộp mừng cưới",
    subtitle: "Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng tôi!",
    message: "Sự hiện diện của bạn trong ngày trọng đại là món quà ý nghĩa nhất với chúng tôi. Nếu bạn muốn gửi lời chúc mừng, chúng tôi xin chân thành cảm ơn!",
    floral: "/images/qr-code/floral-transparent.png",
    groom: {
      title: "Mừng cưới đến chú rể",
      bankName: "VIB",
      accountName: "Nguyễn Mạnh Tiến",
      accountNumber: "002755839",
      qrCode: "/images/qr-code/groom.jpeg"
    },
    bride: {
      title: "Mừng cưới đến cô dâu",
      bankName: "TP Bank",
      accountName: "Nguyễn Thị Linh Giang",
      accountNumber: "0000 4022 857",
      qrCode: "/images/qr-code/bride.jpeg"
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