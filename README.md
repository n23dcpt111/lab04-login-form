# Lab 04 - Login Form (Front-end)

Bài tập: Viết một form login bằng HTML/CSS/JS có các yêu cầu:
- Input: Username, Password
- Checkbox: Remember me
- Buttons: Login, Cancel
- Kiểm tra dữ liệu bằng JavaScript
- Đưa source code lên GitHub và chạy demo

## Cách chạy trên máy (VS Code)
1. Mở Visual Studio Code.
2. Mở thư mục `login-form`.
3. Mở `index.html` và dùng extension **Live Server** (nhấn chuột phải → _Open with Live Server_).

## Hướng dẫn đẩy lên GitHub (tóm tắt)
1. Tạo repository mới trên GitHub (ví dụ: `lab04-login-form`).
2. Trên máy local, chạy:

```bash
cd /path/to/login-form
git init
git add .
git commit -m "Lab 04 - Login Form"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

> Lưu ý: Nếu GitHub yêu cầu xác thực, dùng **Personal Access Token (PAT)** thay cho mật khẩu (hoặc cấu hình SSH key).

## Bật GitHub Pages để demo
1. Vào repo trên GitHub → Settings → Pages.
2. Chọn **Branch** = `main`, **Folder** = `/ (root)` → Save.
3. Đợi 1-2 phút, GitHub sẽ cung cấp đường link `https://<your-username>.github.io/<your-repo>/` để xem.

## Gợi ý chấm bài
- Hoàn thành các input, button, checkbox: 4 điểm
- Kiểm tra dữ liệu bằng JS (validation): 3 điểm
- Lưu remember me (localStorage): 2 điểm
- Đóng gói, README và deploy GitHub Pages: 1-2 điểm

## Mở rộng (tuỳ chọn)
- Thêm OAuth (Google/Facebook) cho login.
- Thêm form đăng ký và reset mật khẩu.
- Kết nối API backend thực sự (fetch/ajax).
- Thiết kế responsive/animation, kiểm tra A11y.
