# Ý Tưởng Thiết Kế - Quiz Application

## <response>
### Thiết Kế 1: Modern Minimalist (Xác Suất: 0.08)

**Design Movement:** Minimalism hiện đại kết hợp với Neomorphism

**Core Principles:**
- Tối giản hóa: Chỉ hiển thị những thành phần cần thiết, loại bỏ mọi yếu tố không cần thiết
- Không gian trắng: Sử dụng rộng rãi không gian trắng để tạo cảm giác sạch sẽ, tập trung
- Chuyển động tinh tế: Các animation nhẹ nhàng, không gây phân tâm
- Tương tác rõ ràng: Phản hồi trực quan khi người dùng tương tác

**Color Philosophy:**
- Nền: Trắng tinh khôi (Oklch: 1 0 0) hoặc xám nhạt
- Chữ: Đen sâu (Oklch: 0.235 0.015 65)
- Accent: Xanh dương tươi sáng (Blue-600) cho nút bấm và trạng thái active
- Ý tưởng: Tạo độ tương phản cao, dễ đọc, không mệt mắt

**Layout Paradigm:**
- Card-based layout với padding đều
- Câu hỏi ở trên cùng, các lựa chọn xếp thành cột dọc
- Progress bar ngang ở đầu trang
- Nút điều hướng ở dưới cùng

**Signature Elements:**
- Nút radio tròn với animation khi chọn
- Card có shadow nhẹ, border-radius 0.5rem
- Progress bar với gradient xanh dương

**Interaction Philosophy:**
- Khi hover: Nền card nhạt lên, con trỏ thay đổi
- Khi chọn: Animation scale-up nhẹ, màu sắc thay đổi
- Phản hồi ngay lập tức, không có delay

**Animation:**
- Transition: 200ms ease-in-out
- Khi chọn đáp án: Scale 1.02, shadow tăng
- Khi chuyển câu: Fade out/fade in 300ms
- Progress bar: Smooth width transition 500ms

**Typography System:**
- Display: Poppins Bold 28px cho tiêu đề câu hỏi
- Body: Inter Regular 16px cho nội dung
- Label: Inter Medium 14px cho các lựa chọn
- Hierarchy: Tiêu đề > Nội dung > Label

</response>

## <response>
### Thiết Kế 2: Playful & Engaging (Xác Suất: 0.07)

**Design Movement:** Playful Design kết hợp Neumorphism

**Core Principles:**
- Vui vẻ và thân thiện: Sử dụng màu sắc tươi sáng, hình dáng mềm mại
- Gamification: Thêm yếu tố trò chơi như điểm số, animation khi trả lời đúng
- Cảm xúc: Phản hồi hình ảnh và âm thanh khi trả lời
- Tương tác lively: Các animation động, có tính chất lively

**Color Philosophy:**
- Nền: Gradient từ xanh lá nhạt (Oklch: 0.95 0.05 142) sang xanh dương nhạt
- Chữ: Xám đậm (Oklch: 0.3 0.01 65)
- Accent: Cam sáng (Oklch: 0.7 0.2 45) cho nút bấm
- Secondary: Tím nhạt (Oklch: 0.8 0.1 280) cho highlight
- Ý tưởng: Tạo cảm giác vui vẻ, năng lượng cao, không quá trang trí

**Layout Paradigm:**
- Asymmetric layout với card câu hỏi ở trung tâm
- Các lựa chọn xếp dạng grid 2x2 hoặc cột dọc
- Mascot nhỏ ở góc để cổ vũ người dùng
- Điểm số hiển thị ở góc trên phải

**Signature Elements:**
- Các nút lựa chọn có hình dáng tròn mềm mại
- Emoji hoặc icon nhỏ cạnh mỗi lựa chọn
- Confetti animation khi trả lời đúng
- Progress ring (tròn) thay vì progress bar

**Interaction Philosophy:**
- Khi hover: Nút phóng to, có shadow, thay đổi màu sắc
- Khi chọn sai: Nút rung lắc, đỏ nhạt
- Khi chọn đúng: Nút xanh, confetti rơi
- Phản hồi tức thì với animation vui vẻ

**Animation:**
- Transition: 300ms cubic-bezier(0.34, 1.56, 0.64, 1)
- Bounce effect khi chọn: Scale 1.1 rồi 0.95 rồi 1
- Confetti: 1s animation khi đúng
- Shake effect: 400ms khi sai

**Typography System:**
- Display: Fredoka Bold 32px cho tiêu đề
- Body: Poppins Regular 16px cho nội dung
- Label: Poppins SemiBold 15px cho lựa chọn
- Hierarchy: Tiêu đề lớn > Nội dung > Label

</response>

## <response>
### Thiết Kế 3: Premium & Academic (Xác Suất: 0.09)

**Design Movement:** Premium Design kết hợp Academic Style

**Core Principles:**
- Chuyên nghiệp: Thiết kế trang trọng, phù hợp với môi trường học tập
- Đọc dễ dàng: Kiểu chữ serif, spacing rộng rãi
- Tính toàn vẹn: Sử dụng các yếu tố thiết kế cổ điển
- Tập trung: Loại bỏ các yếu tố gây phân tâm

**Color Philosophy:**
- Nền: Kem nhạt (Oklch: 0.98 0.001 286) hoặc xám nhạt
- Chữ: Nâu đậm (Oklch: 0.3 0.05 45)
- Accent: Xanh đậm (Oklch: 0.5 0.15 260) cho nút bấm
- Secondary: Vàng ấm (Oklch: 0.8 0.1 70) cho highlight
- Ý tưởng: Tạo cảm giác học thuật, tin cậy, chuyên nghiệp

**Layout Paradigm:**
- Centered layout với cột duy nhất
- Câu hỏi ở trên, các lựa chọn xếp thành hàng hoặc cột
- Header với logo/tên bài kiểm tra
- Footer với thông tin tiến độ

**Signature Elements:**
- Các lựa chọn có border tròn mềm, background nhạt
- Số câu hỏi hiển thị rõ ràng (15/15)
- Divider line giữa các phần
- Serif font cho tiêu đề

**Interaction Philosophy:**
- Khi hover: Border đậm hơn, background nhạt hơn
- Khi chọn: Border đậm, background accent nhạt
- Phản hồi chậm hơn, trang trọng hơn
- Không có animation quá nhanh

**Animation:**
- Transition: 250ms ease-in
- Khi chọn: Border thay đổi màu, background fade in
- Khi chuyển câu: Slide up 400ms
- Progress: Smooth update 300ms

**Typography System:**
- Display: Lora Bold 30px cho tiêu đề
- Body: Merriweather Regular 16px cho nội dung
- Label: Lora Medium 15px cho lựa chọn
- Hierarchy: Tiêu đề serif > Nội dung serif > Label

</response>

---

## Thiết Kế Được Chọn: **Modern Minimalist**

Tôi chọn thiết kế **Modern Minimalist** vì:
- Phù hợp với tính chất của ứng dụng trắc nghiệm (tập trung vào nội dung)
- Dễ sử dụng trên mọi thiết bị (mobile, tablet, desktop)
- Tối ưu hóa hiệu suất (ít animation, ít yếu tố không cần thiết)
- Phản hồi trực quan, rõ ràng khi người dùng tương tác
- Dễ mở rộng với các câu hỏi và lựa chọn khác nhau

### Quyết Định Thiết Kế:
- **Màu sắc chính:** Xanh dương (Blue-600) cho accent
- **Font:** Poppins cho tiêu đề, Inter cho body
- **Layout:** Card-based, câu hỏi ở trên, lựa chọn xếp cột dọc
- **Animation:** Transition 200ms, scale effect khi chọn
- **Tương tác:** Hover effect, click feedback ngay lập tức
