# Landing Page – Khoa Công Nghệ, Trường Đại học Intracom

Trang landing page giới thiệu Khoa Công Nghệ, Trường Đại học Intracom. Deploy tĩnh qua GitHub Pages.

**Live:** [https://inu-khoacn.github.io/LandingPage/](https://inu-khoacn.github.io/LandingPage/)

## Cấu trúc dự án

```
LandingPage/
├── index.html              # Trang chính (HTML thuần)
├── assets/
│   ├── css/
│   │   ├── main.css        # Entry point – import toàn bộ stylesheet
│   │   ├── variables.css   # Biến màu, design tokens
│   │   ├── base.css        # Reset, typography
│   │   ├── nav.css         # Thanh điều hướng
│   │   ├── hero.css        # Banner đầu trang
│   │   ├── stats.css       # Thống kê
│   │   ├── sections.css    # Style chung cho section
│   │   ├── vision.css      # Tầm nhìn & giá trị
│   │   ├── programs.css    # Ngành đào tạo & thẻ chương trình
│   │   ├── methods.css     # Phương pháp đào tạo
│   │   ├── admission.css   # Tuyển sinh
│   │   ├── careers.css     # Cơ hội nghề nghiệp
│   │   ├── why.css         # Lý do chọn khoa
│   │   ├── footer.css      # Chân trang
│   │   └── responsive.css  # Breakpoint mobile/tablet
│   ├── js/
│   │   └── main.js         # Scroll nav, smooth scroll, animation
│   └── images/
│       ├── logo.png
│       └── programs/       # Ảnh minh họa 7 chuyên ngành CNTT
└── README.md
```

## Phát triển

Không cần cài đặt dependency. Mở trực tiếp `index.html` hoặc dùng local server:

```bash
python3 -m http.server 8080
# Truy cập http://localhost:8080
```

## Deploy

Push lên nhánh `main` — GitHub Pages tự deploy từ thư mục gốc.
