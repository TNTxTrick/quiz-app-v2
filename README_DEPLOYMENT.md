# Quiz Application - Hướng Dẫn Deploy

## Cấu Trúc Dự Án

```
quiz-app/
├── client/
│   ├── public/
│   │   └── data.txt          # File chứa câu hỏi
│   ├── src/
│   │   ├── components/
│   │   │   ├── QuizApp.tsx   # Component chính
│   │   │   └── ui/           # shadcn/ui components
│   │   ├── pages/
│   │   │   └── Home.tsx      # Trang chính
│   │   ├── App.tsx           # Router chính
│   │   ├── index.css         # Styling
│   │   └── main.tsx          # Entry point
│   └── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Format File data.txt

Mỗi dòng trong `data.txt` là một câu hỏi với format:
```
Câu hỏi?|Lựa chọn A|Lựa chọn B|Lựa chọn C|Lựa chọn D|3
```

Số cuối là **chỉ mục đáp án đúng** (0-3):
- 0 = Lựa chọn A
- 1 = Lựa chọn B
- 2 = Lựa chọn C
- 3 = Lựa chọn D

### Ví dụ:
```
Dựa vào những nghiên cứu của mình, Maxwell đã tiên đoán trước được hiện tượng gì?|Maxwell đã đoán nhận trước sự tồn tại của dòng điện cảm ứng trong vòng dây dẫn kín khi đặt trong từ trường ngoài.|Maxwell đã đoán nhận trước sự tồn tại của từ trường bên trong ống dây có dòng điện chạy qua.|Maxwell đã đoán nhận trước sự tồn tại của điện trường tính xung quanh mỗi hạt mang điện.|Maxwell đã đoán nhận trước sự tồn tại của sóng điện từ, tức là sự lan truyền trong không gian của một trường điện từ biến đổi theo thời gian.|3
```

## Cài Đặt Cục Bộ

```bash
# Cài đặt dependencies
pnpm install

# Chạy dev server
pnpm dev

# Build cho production
pnpm build

# Preview production build
pnpm preview
```

## Deploy lên Vercel

### Cách 1: Sử dụng Vercel CLI

```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Cách 2: Kết nối GitHub

1. Đẩy code lên GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/quiz-app.git
git push -u origin main
```

2. Vào [vercel.com](https://vercel.com)
3. Chọn "New Project"
4. Import GitHub repository
5. Vercel sẽ tự động detect và deploy

### Cách 3: Sử dụng Manus Hosting

Nhấn nút **Publish** trong Management UI của Manus (yêu cầu checkpoint trước)

## Tính Năng

✅ Tải câu hỏi từ file data.txt
✅ Progress bar theo dõi tiến độ
✅ Radio button selection với visual feedback
✅ Nút điều hướng (Câu trước/Câu tiếp)
✅ Trang kết quả với điểm số và tỷ lệ phần trăm
✅ Xem lại câu trả lời (đúng/sai)
✅ Responsive design (mobile, tablet, desktop)
✅ Modern Minimalist design với Poppins + Inter fonts

## Thiết Kế

- **Color Scheme:** Xanh dương accent (Oklch: 0.623 0.214 259.815)
- **Typography:** Poppins (tiêu đề), Inter (nội dung)
- **Layout:** Card-based, tập trung vào nội dung
- **Animation:** Smooth transitions 200ms

## Mở Rộng

### Thêm Câu Hỏi
Chỉ cần thêm dòng mới vào `client/public/data.txt` với format trên.

### Thêm Timer
Sửa file `client/src/components/QuizApp.tsx`, thêm state `timeLeft` và `useEffect` để countdown.

### Shuffle Lựa Chọn
Thêm logic randomize thứ tự lựa chọn trong hàm `loadQuestions`.

### Lưu Kết Quả
Upgrade lên `web-db-user` để có database, sau đó lưu điểm số người dùng.

## Troubleshooting

**Lỗi: "Không có câu hỏi nào được tải"**
- Kiểm tra file `client/public/data.txt` có tồn tại không
- Kiểm tra format file có đúng không (dùng `|` để phân tách)

**Lỗi: "Tính điểm sai"**
- Kiểm tra số cuối trong mỗi dòng data.txt có đúng chỉ mục không (0-3)
- Đảm bảo không có khoảng trắng thừa

## Support

Để thêm tính năng hoặc báo cáo lỗi, vui lòng liên hệ hỗ trợ.
