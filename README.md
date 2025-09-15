# Wedding Website Template

Một template trang web cưới đẹp và responsive được xây dựng bằng React.js, clone từ trang web mẫu.

## ✨ Tính năng

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
- Node.js (phiên bản 14 trở lên)
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
```

### Chạy development server
```bash
npm start
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

### Build cho production
```bash
npm run build
```

## 📁 Cấu trúc project

```
src/
├── components/          # Các React components
│   ├── Header.js       # Header với navigation
│   ├── Hero.js         # Section hero chính
│   ├── Couple.js       # Thông tin cặp đôi
│   ├── LoveStory.js    # Timeline câu chuyện tình yêu
│   ├── WeddingEvents.js # Thông tin sự kiện cưới
│   ├── Bridesmaids.js  # Phù dâu & phù rể
│   ├── PhotoGallery.js # Album hình cưới
│   ├── RSVP.js         # Form xác nhận tham dự
│   ├── MusicPlayer.js  # Trình phát nhạc
│   └── Footer.js       # Footer
├── App.js              # Component chính
├── index.js            # Entry point
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

### Tùy chỉnh màu sắc
Chỉnh sửa file `src/index.css` và các file CSS của components:
- Màu chủ đạo: `#d4af37` (vàng)
- Màu phụ: `#f4e4bc` (vàng nhạt)

### Tùy chỉnh Music Player
Chỉnh sửa file `src/components/MusicPlayer.js`:
- Thay đổi playlist trong mảng `playlist`
- Cập nhật đường dẫn file nhạc trong `src`
- Thay đổi hình ảnh cover trong `cover`
- Điều chỉnh volume mặc định

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

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

### Netlify
1. Build project: `npm run build`
2. Deploy thư mục `build/` lên Netlify

### Vercel
1. Kết nối GitHub repository
2. Deploy tự động

### GitHub Pages
1. Cài đặt `gh-pages`: `npm install --save-dev gh-pages`
2. Thêm script vào `package.json`:
   ```json
   "homepage": "https://username.github.io/wedding-template",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📄 License

MIT License - Sử dụng tự do cho mục đích cá nhân và thương mại.

## 🤝 Contributing

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request.

---

Made with 💕 for your special day!