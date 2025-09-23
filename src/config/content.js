// các config cho trang

export const couple = {
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
};

export const mainWedding = {
    id: 0,
    title: "LỄ THÀNH HÔN",
    time: "13:00 Ngày 12/10/2025",
    location: "Số 54, Xóm Phú Mãn, Thôn Phúc Hòa 1, Xã Phúc Thọ, Tp. Hà Nội",
    type: "main-ceremony",
    mapUrl: "https://maps.app.goo.gl/ugK3zuyXEMYDZvxLA"
};

export const eventsWedding = [
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
];

export const hero = {
    title: "Nguyễn Mạnh Tiến & Nguyễn Thị Linh Giang",
    subtitle: "Chúng tôi sẽ kết hôn!",
    date: "12 Tháng 10, 2025",
    location: "",
};

export const backgroundImages = [
    '/images/hero-bg/1.jpg',
    '/images/hero-bg/2.jpg',
    '/images/hero-bg/3.jpg',
    '/images/hero-bg/4.jpg',
];

export const loveStories = {
    title: "Câu Chuyện Tình Yêu",
    subtitle: "Hành trình từ khi gặp gỡ đến khi quyết định về chung một nhà",
    timeline: [
      {
        id: 1,
        name: "first-meeting",
        date: "Tháng 2, 2024",
        title: "Lần đầu gặp gỡ",
        description: "Chúng tôi gặp nhau lần đầu tại một quán cà phê nhỏ trên phố huyện. Ánh mắt anh và nụ cười em đã tạo nên một khoảnh khắc đặc biệt."
      },
      {
        id: 2,
        name: "first-date",
        date: "Tháng 4, 2024",
        title: "Hẹn hò đầu tiên",
        description: "Chúng tôi có buổi hẹn hò đầu tiên. Cùng nhau dạo chơi, trò chuyện và tìm hiểu về nhau, chúng tôi cảm thấy rất thoải mái và vui vẻ.",
      },
      {
        id: 3,
        name: "confession",
        date: "Tháng 6, 2024",
        title: "Lời tỏ tình",
        description: "Một buổi tối đầu thu, gió mùa hiu hiu thôi. Anh đã ngỏ lời yêu em dưới ánh đèn vàng ấm áp. Em đã đồng ý và từ đó, chúng tôi chính thức trở thành một cặp đôi.",
      },
      {
        id: 4,
        name: "meeting-family",
        date: "Tháng 1, 2025",
        title: "Lần đầu ra mắt gia đình",
        description: "Một ngày sau Tết dương lịch. Anh và em quyết định sẽ qua nhà hai đữa để xin phép được tìm hiểu nhau. Dù có chút lo lắng, nhưng mọi chuyện diễn ra rất suôn sẻ và ấm áp.",
      },
      {
        id: 5,
        name: "proposal",
        date: "Tháng 5, 2025",
        title: "Lời cầu hôn",
        description: "Một buổi tối nhẹ nhàng, tại nơi ngày xưa chúng tôi nói lời yêu. Anh ghé tai thỏ thẻ, ngỏ lời cầu hôn em. Em đã xúc động và đồng ý. Chúng tôi quyết định sẽ cùng nhau xây dựng một tương lai hạnh phúc.",
      },
      {
        id: 6,
        name: "engagement",
        date: "Tháng 7, 2025",
        title: "Lễ dạm ngõ",
        description: "Sau khi được sự đồng ý của gia đình hai bên, chúng tôi đã tổ chức lễ dạm ngõ. Đây là bước quan trọng để chúng tôi chính thức trở thành vợ chồng trong tương lai gần. Chiếc nhẫn cầu hôn được đeo vào tay em như minh chứng cho lời hứa trọn đời bên nhau.",
      },
      {
        id: 7,
        name: "wedding-ceremony",
        date: "Tháng 10, 2025",
        title: "Lễ thành hôn",
        description: "Ngày trọng đại đã đến, chúng tôi sẽ cùng nhau bước vào lễ thành hôn, bắt đầu một hành trình mới với nhiều thử thách và niềm vui. Chúng tôi rất mong được sự chúc phúc từ gia đình và bạn bè.",
      }
    ]
};

export const photoGallery = {
    title: "Album Ảnh Cưới",
    subtitle: "Những khoảnh khắc đẹp nhất của chúng tôi",
    total: 30,
    photo_link: "/images/gallery"
};

export const rsvp = {
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
};

export const playlist = [
  {
    id: 1,
    title: "I Do",
    artist: "911",
    src: "/music/i-do.mp3",
    cover: "/images/music-cover/i-do.jpg"
  },
  {
    id: 2,
    title: "Hạnh Phúc Cuối Cùng",
    artist: "Trương Việt Thái",
    src: "/music/hanh-phuc-cuoi-cung.mp3",
    cover: "/images/music-cover/hanh-phuc-cuoi-cung.jpg"
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
];

export const giftBox = {
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
};

export const preloader = {
    minLoadingTime: 3000, // Tối thiểu 3 giây
    fadeOutDuration: 500, // 500ms fade out
    assetsToPreload: [
      // Hero backgrounds
      { key: 'hero-bg', type: 'image', url: '/images/hero-bg/bg.jpg' },
      { key: 'hero-bg-1', type: 'image', url: '/images/hero-bg/1.jpg' },
      { key: 'hero-bg-2', type: 'image', url: '/images/hero-bg/2.jpg' },

      // Couple photos
      { key: 'bride', type: 'image', url: '/images/bride.jpg' },
      { key: 'groom', type: 'image', url: '/images/groom.jpg' },

      // Story photos (một số ảnh quan trọng)
      { key: 'story-1', type: 'image', url: '/images/story/first-meeting.jpg' },
      { key: 'story-2', type: 'image', url: '/images/story/first-date.jpg' },

      // Gallery photos (một số ảnh đầu tiên)
      { key: 'gallery-1', type: 'image', url: '/images/gallery/4.jpg' },
      { key: 'gallery-2', type: 'image', url: '/images/gallery/6.jpg' },
      { key: 'gallery-3', type: 'image', url: '/images/gallery/8.jpg' },

      // Music
      { key: 'music-1', type: 'audio', url: '/music/i-do.mp3' },
      { key: 'music-2', type: 'audio', url: '/music/mot-doi.mp3' },

      // QR codes
      { key: 'qr-bride', type: 'image', url: '/images/qr-code/bride.jpeg' },
      { key: 'qr-groom', type: 'image', url: '/images/qr-code/groom.jpeg' },
    ]
}

export const navigation = [
    { id: "home", label: "Trang chủ", href: "#home" },
    { id: "couple", label: "Cặp đôi", href: "#couple" },
    { id: "story", label: "Câu chuyện", href: "#story" },
    { id: "events", label: "Sự kiện", href: "#events" },
    { id: "gallery", label: "Album ảnh", href: "#gallery" },
    { id: "giftbox", label: "Hộp mừng cưới", href: "#giftbox" },
    { id: "rsvp", label: "Xác nhận tham dự", href: "#rsvp" }
];

export const footer = {
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
};