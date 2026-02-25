# Quick Start - Ứng Dụng Trắc Nghiệm

## Chạy Ứng Dụng Cục Bộ

```bash
# 1. Cài đặt dependencies
pnpm install

# 2. Chạy dev server
pnpm dev

# 3. Mở trình duyệt: http://localhost:3000
```

## Thêm/Sửa Câu Hỏi

Mở file `client/public/data.txt` và chỉnh sửa theo format:

```
Câu hỏi của bạn?|Đáp án A|Đáp án B|Đáp án C|Đáp án D|3
```

**Lưu ý:** Số cuối (0-3) là chỉ mục đáp án đúng:
- 0 = Đáp án A
- 1 = Đáp án B
- 2 = Đáp án C
- 3 = Đáp án D

## Deploy lên Vercel

```bash
# 1. Đẩy code lên GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/quiz-app.git
git push -u origin main

# 2. Vào vercel.com, kết nối GitHub repository
# 3. Vercel sẽ tự động build và deploy
```

## File Cấu Hình Chính

| File | Mô Tả |
|------|-------|
| `client/public/data.txt` | Câu hỏi và đáp án |
| `client/src/components/QuizApp.tsx` | Logic chính của ứng dụng |
| `client/src/index.css` | Styling (Tailwind + Custom) |
| `client/src/pages/Home.tsx` | Trang chính |
| `package.json` | Dependencies |

## Tính Năng Chính

- ✅ Tải câu hỏi từ file text
- ✅ Progress bar
- ✅ Tính điểm tự động
- ✅ Xem lại câu trả lời
- ✅ Responsive design
- ✅ Modern UI

## Cần Giúp?

Xem file `README_DEPLOYMENT.md` để biết thêm chi tiết.
