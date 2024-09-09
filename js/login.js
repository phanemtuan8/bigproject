document.addEventListener("DOMContentLoaded", function() {
    // Lấy các phần tử cần thiết từ DOM
    const registerButton = document.querySelector(".button_register");
    const loginButton = document.querySelector(".have_account");
    const mainLogin = document.querySelector(".main-login");
    const mainRegister = document.querySelector(".main-register");

    // Thêm sự kiện click cho nút đăng ký
    registerButton.addEventListener("click", function() {
        mainLogin.classList.add("active"); // Thêm class 'active' vào phần tử main-login
        mainRegister.classList.remove("active"); // Bỏ class 'active' khỏi phần tử main-register
    });

    // Thêm sự kiện click cho nút đăng nhập
    loginButton.addEventListener("click", function() {
        mainLogin.classList.remove("active"); // Bỏ class 'active' khỏi phần tử main-login
        mainRegister.classList.add("active"); // Thêm class 'active' vào phần tử main-register
    });
});

document.querySelector('.button_register2').addEventListener('click', function() {
    const form = document.getElementById('myForm');
    const unameInput = document.getElementById('uname');
    const passwordInput = document.getElementById('password');
    const passAuthInput = document.getElementById('passauth');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    const errorUname = document.getElementById('txt_uname');
    const errorPassword = document.getElementById('txt_password');
    const errorPassauth = document.getElementById('txt_passauth');
    const errorEmail = document.getElementById('txt_email');
    const errorPhone = document.getElementById('txt_phone');

    let valid = true;

    // Kiểm tra Username
    if (unameInput.value.trim() === '') {
        errorUname.textContent = 'Username không được bỏ trống';
        errorUname.style.display = 'inline';
        valid = false;
    } else {
        errorUname.style.display = 'none';
    }

    // Kiểm tra Password
    const passwordValue = passwordInput.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(passwordValue)) {
        errorPassword.textContent = 'Có ít nhất 1 chữ hoa, 1 chữ thường, và 1 số.';
        errorPassword.style.display = 'inline';
        valid = false;
    } else {
        errorPassword.style.display = 'none';
    }

    // Kiểm tra Password Authentication
    if (passAuthInput.value !== passwordValue) {
        errorPassauth.textContent = 'Password Authentication phải khớp với Password.';
        errorPassauth.style.display = 'inline';
        valid = false;
    } else {
        errorPassauth.style.display = 'none';
    }

    // Kiểm tra Email
    const emailValue = emailInput.value;
    if (!emailValue.includes('@')) {
        errorEmail.textContent = 'Email phải chứa ký tự @.';
        errorEmail.style.display = 'inline';
        valid = false;
    } else {
        errorEmail.style.display = 'none';
    }

    // Kiểm tra Phone
    const phoneValue = phoneInput.value;
    const phoneRegex = /^\d{9,10}$/;
    if (!phoneRegex.test(phoneValue)) {
        errorPhone.textContent = 'Số điện thoại phải có 9 hoặc 10 chữ số.';
        errorPhone.style.display = 'inline';
        valid = false;
    } else {
        errorPhone.style.display = 'none';
    }

    if (valid) {
        form.submit(); // Gửi biểu mẫu nếu tất cả các trường hợp lệ
    } else {
        alert('Vui lòng sửa lỗi trong các trường bắt buộc.');
    }
});