// script.js - logic for Lab 04 login form

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberCheckbox = document.getElementById('remember');
  const errorMsg = document.getElementById('errorMsg');
  const successMsg = document.getElementById('successMsg');
  const loginBtn = document.getElementById('loginBtn');
  const cancelBtn = document.getElementById('cancelBtn');
  const togglePassword = document.getElementById('togglePassword');

  // --- Init: populate username if saved ---
  const savedUsername = localStorage.getItem('lab04_rememberedUsername');
  if (savedUsername) {
    usernameInput.value = savedUsername;
    rememberCheckbox.checked = true;
  }

  // Toggle show/hide password
  togglePassword.addEventListener('click', () => {
    const t = passwordInput;
    if (t.type === 'password') {
      t.type = 'text';
      togglePassword.textContent = '🙈';
      togglePassword.setAttribute('aria-pressed', 'true');
    } else {
      t.type = 'password';
      togglePassword.textContent = '👁️';
      togglePassword.setAttribute('aria-pressed', 'false');
    }
  });

  // Form validation helper
  function validate(username, password) {
    if (!username || username.trim().length < 3) {
      return 'Username phải có ít nhất 3 ký tự.';
    }
    if (!password || password.length < 6) {
      return 'Password phải có ít nhất 6 ký tự.';
    }
    // Optional: add more checks (regex: contain letter+number)
    const strong = /(?=.*[A-Za-z])(?=.*\d)/;
    if (!strong.test(password)) {
      return 'Mật khẩu nên chứa cả chữ và số để an toàn hơn.';
    }
    return '';
  }

  // Show error
  function showError(msg) {
    errorMsg.textContent = msg;
    successMsg.textContent = '';
    loginBtn.disabled = false;
  }

  // Show success
  function showSuccess(msg) {
    successMsg.textContent = msg;
    errorMsg.textContent = '';
  }

  // Submit handler (simulate server)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMsg.textContent = '';
    successMsg.textContent = '';

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    const err = validate(username, password);
    if (err) {
      showError(err);
      return;
    }

    // Save remember preference
    if (rememberCheckbox.checked) {
      localStorage.setItem('lab04_rememberedUsername', username);
    } else {
      localStorage.removeItem('lab04_rememberedUsername');
    }

    // Simulate login request
    loginBtn.disabled = true;
    loginBtn.textContent = 'Đang đăng nhập...';

    // Fake server delay
    setTimeout(() => {
      // Example: reject a specific user to show error
      if (username.toLowerCase() === 'blocked') {
        loginBtn.disabled = false;
        loginBtn.textContent = 'Login';
        showError('Tài khoản bị khóa. Liên hệ admin.');
        return;
      }

      loginBtn.textContent = 'Login';
      showSuccess('Đăng nhập thành công! (demo)');
      // Normally redirect: window.location.href = '/dashboard.html';
    }, 900);
  });

  // Cancel button: reset form
  cancelBtn.addEventListener('click', () => {
    loginForm.reset();
    errorMsg.textContent = '';
    successMsg.textContent = '';
    usernameInput.focus();
  });

  // Keyboard: press Escape to clear messages
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
      errorMsg.textContent = '';
      successMsg.textContent = '';
    }
  });
});
