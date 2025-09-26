# Thiệp Cưới Điện Tử - Mạnh Tiến & Linh Giang

Trang web thiệp cưới điện tử được xây dựng bằng React và Vite, với giao diện đẹp và responsive, tối ưu cho trải nghiệm người dùng trên mọi thiết bị.

[Demo Link](#) *(Cập nhật sau khi triển khai)*

## ✨ Tính năng

- 📱 Responsive trên mọi thiết bị (mobile, tablet, desktop)
- 🎵 Trình phát nhạc với danh sách nhạc cưới
- 🖼️ Album ảnh cưới với hiệu ứng đẹp mắt
- 📅 Chi tiết các sự kiện cưới với bản đồ chỉ đường
- 💑 Timeline câu chuyện tình yêu
- 📝 Form RSVP tích hợp với Google Forms
- 💝 QR Code mừng cưới cho cô dâu và chú rể
- 🌸 Hiệu ứng hoa rơi trang trí
- 🔄 Preloader với tối ưu tải trang

- **Responsive Design**: Tối ưu cho mọi thiết bị (desktop, tablet, mobile)
- **Modern UI/UX**: Giao diện đẹp với animation mượt mà
- **Interactive Components**: 
  - Navigation menu với smooth scroll
  - Photo gallery với modal xem ảnh
  - RSVP form với validation
  - Timeline câu chuyện tình yêu
  - Music player với playlist và controls
- **SEO Friendly**: Cấu trúc HTML semantic
- **Performance**: Tối ưu hóa tốc độ tải trang

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 20.19.4 (khuyến nghị sử dụng nvm để quản lý phiên bản Node)
- npm hoặc yarn

### Cài đặt dependencies
```bash
# Clone repository
git clone https://github.com/tiennm0510/thiep-cuoi.git
cd thiep-cuoi

# Cài đặt node_modules
npm install

# HOẶC sử dụng yarn
yarn install
```

### Chạy development server
```bash
npm run dev
# HOẶC
yarn dev
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

### Build cho production
```bash
npm run build
# HOẶC
yarn build
```

### Preview bản build
```bash
npm run preview
# HOẶC
yarn preview
```

## 📁 Cấu trúc project

```
thiep-cuoi/
├── src/                # Mã nguồn chính
│   ├── components/     # Các React components
│   │   ├── common/    # Components dùng chung
│   │   ├── sections/  # Các section chính của trang
│   │   └── shared/    # UI components chia sẻ
│   ├── config/        # Cấu hình và nội dung
│   │   └── content.js # Nội dung chính của trang
│   ├── hooks/         # Custom React hooks
│   ├── App.jsx        # Component chính
│   └── index.jsx      # Entry point
│
├── public/            # Static assets
│   ├── images/        # Thư mục hình ảnh
│   │   ├── gallery/   # Album ảnh cưới (30 ảnh)
│   │   ├── hero-bg/   # Ảnh nền hero section
│   │   ├── music-cover/ # Ảnh cover bài hát
│   │   └── qr-code/   # QR code mừng cưới
│   └── music/         # File nhạc cưới
│
└── build/            # Thư mục build production
└── index.css           # Global styles

public/
├── images/             # Thư mục chứa hình ảnh
├── music/              # Thư mục chứa file nhạc
└── index.html          # HTML template
```

## 🎨 Tùy chỉnh

### Thay đổi thông tin cặp đôi
Chỉnh sửa file `src/components/Couple.js`:
- Tên cặp đôi
- Mô tả về cô dâu và chú rể
- Ảnh đại diện

### Cập nhật câu chuyện tình yêu
Chỉnh sửa file `src/components/LoveStory.js`:
- Thêm/bớt các mốc thời gian
- Cập nhật nội dung câu chuyện
- Thay đổi hình ảnh minh họa

### Thay đổi thông tin sự kiện
Chỉnh sửa file `src/components/WeddingEvents.js`:
- Cập nhật thời gian và địa điểm
- Thêm/bớt sự kiện
- Tích hợp calendar (cần thêm thư viện)

## 🎨 Tùy chỉnh

### Nội dung trang web
Chỉnh sửa file `src/config/content.js` để thay đổi:
- Thông tin cô dâu chú rể
- Thời gian và địa điểm các sự kiện cưới
- Timeline câu chuyện tình yêu
- Thông tin tài khoản mừng cưới
- Nội dung form RSVP
- Danh sách nhạc và các cấu hình khác

### Giao diện và màu sắc
Chỉnh sửa file `src/index.css` và các file CSS trong components:
- Màu chủ đạo: `#eb1248` (có thể thay đổi trong file CSS)
- Màu phụ: `#e06c89`
- Font chữ và các thuộc tính CSS khác

### Hình ảnh
- Album cưới: Thay thế các ảnh trong `/public/images/gallery/`
- Ảnh nền: Cập nhật trong `/public/images/hero-bg/`
- Ảnh cô dâu chú rể: Thay thế trong `/public/images/`
- QR code: Cập nhật trong `/public/images/qr-code/`

### Nhạc nền
- Thêm file nhạc vào `/public/music/`
- Thêm ảnh cover vào `/public/images/music-cover/`
- Cập nhật danh sách nhạc trong `content.js`

## 📸 Hình ảnh

Thay thế các hình ảnh trong thư mục `public/images/`:
- `groom.jpg`, `bride.jpg`: Ảnh cặp đôi
- `story1.jpg` - `story4.jpg`: Ảnh câu chuyện
- `bridesmaid1.jpg`, `bridesmaid2.jpg`: Ảnh phù dâu
- `groomsman1.jpg`, `groomsman2.jpg`: Ảnh phù rể
- `gallery1.jpg` - `gallery12.jpg`: Ảnh album cưới
- `music-cover1.jpg` - `music-cover5.jpg`: Ảnh cover cho playlist nhạc

## 🎵 Nhạc nền

Thêm file nhạc vào thư mục `public/music/`:
- `perfect.mp3` - Perfect - Ed Sheeran
- `all-of-me.mp3` - All of Me - John Legend
- `thinking-out-loud.mp3` - Thinking Out Loud - Ed Sheeran
- `a-thousand-years.mp3` - A Thousand Years - Christina Perri
- `marry-me.mp3` - Marry Me - Train

## 🔧 Tích hợp thêm

### Calendar Integration
Để tích hợp thêm vào lịch, có thể sử dụng các thư viện như:
- `react-add-to-calendar`
- `react-big-calendar`

### Form Backend
Để xử lý form RSVP, tích hợp với:
- Firebase
- Netlify Forms
- Custom API

### Analytics
Thêm Google Analytics hoặc Facebook Pixel để theo dõi traffic.

## 📱 Responsive Design

Website được thiết kế responsive cho mọi thiết bị:
- 📱 Mobile: < 768px
- 📲 Tablet: 768px - 1024px
- 💻 Desktop: > 1024px

## 🌐 Triển khai

### Render (Khuyến nghị)
1. Fork repository này
2. Kết nối với Render
3. Render sẽ tự động deploy khi có thay đổi
4. Cấu hình đã có sẵn trong `render.yaml`

### Vercel
1. Fork repository này
2. Tạo tài khoản trên Vercel
3. Import project từ GitHub
4. Vercel sẽ tự động nhận diện cấu hình và deploy

### Netlify
1. Build project: `npm run build`
2. Deploy thư mục `build/`
3. Cấu hình redirect trong `_redirects`

## 💝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng:
1. Fork project
2. Tạo branch mới (`git checkout -b feature/new-feature`)
3. Commit thay đổi (`git commit -am 'Add new feature'`)
4. Push lên branch (`git push origin feature/new-feature`)
5. Tạo Pull Request

## 📄 Giấy phép

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 🙏 Cảm ơn

- Cảm ơn các thư viện open source đã sử dụng
- Cảm ơn cộng đồng React Việt Nam
- Đặc biệt cảm ơn bạn đã quan tâm đến dự án

## 🤝 Contributing

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request.

---

Made with 💕 for your special day!