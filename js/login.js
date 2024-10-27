$('.button_register').click(function() {
    $('.main-register').removeClass('active');
    $('.main-login').addClass('active');
});
$('.have_account').click(function() {
    $('.main-login').removeClass('active');
    $('.main-register').addClass('active');
});

$('.button_register2').click(function() {
    const unameInput = $('#uname');
    const passwordInput = $('#password');
    const passAuthInput = $('#passauth');
    const emailInput = $('#email');
    const phoneInput = $('#phone');

    const errorUname = $('#txt_uname');
    const errorPassword = $('#txt_password');
    const errorPassauth = $('#txt_passauth');
    const errorEmail = $('#txt_email');
    const errorPhone = $('#txt_phone');

    let valid = true;

    // Kiểm tra Username
    if (unameInput.val().trim() === '') {
        errorUname.text('Username không được bỏ trống');
        errorUname.css('display', 'inline');
        valid = false;
    } else {
        errorUname.css('display', 'none');
    }

    // Kiểm tra Password
    const passwordValue = passwordInput.val();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordRegex.test(passwordValue)) {
        errorPassword.text('Có ít nhất 1 chữ hoa, 1 chữ thường, và 1 số.');
        errorPassword.css('display', 'inline');
        valid = false;
    } else {
        errorPassword.css('display', 'none');
    }

    // Kiểm tra Password Authentication
    if (passAuthInput.val() !== passwordValue) {
        errorPassauth.text('Password Authentication phải khớp với Password.');
        errorPassauth.css('display', 'inline');
        valid = false;
    } else {
        errorPassauth.css('display', 'none');
    }

    // Kiểm tra Email
    const emailValue = emailInput.val();
    if (!emailValue.includes('@')) {
        errorEmail.text('Email phải chứa ký tự @.');
        errorEmail.css('display', 'inline');
        valid = false;
    } else {
        errorEmail.css('display', 'none');
    }

    // Kiểm tra Phone
    const phoneValue = phoneInput.val();
    const phoneRegex = /^\d{9,10}$/;
    if (!phoneRegex.test(phoneValue)) {
        errorPhone.text('Số điện thoại phải có 9 hoặc 10 chữ số.');
        errorPhone.css('display', 'inline');
        valid = false;
    } else {
        errorPhone.css('display', 'none');
    }

    if (valid) {
        // Lưu thông tin đăng ký vào Local Storage
        const user = {
            username: unameInput.val(),
            password: passwordValue,
            email: emailValue,
            phone: phoneValue
        };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Đăng ký thành công! Bạn có thể đăng nhập với thông tin đã cung cấp.');

        // Chuyển sang form đăng nhập
        $('.main-login').removeClass('active');
        $('.main-register').addClass('active');
    } else {
        alert('Vui lòng sửa lỗi trong các trường bắt buộc.');
    }
});

// Xử lý đăng nhập
$('.button_login').click(function() {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const enteredUsername = $('input[name="uname"]').val();
    const enteredPassword = $('input[name="pword"]').val();

    if (storedUser && storedUser.username === enteredUsername && storedUser.password === enteredPassword) {
        alert('Đăng nhập thành công!');
        // Chuyển hướng đến trang home.html
        window.location.href = 'home.html';
    } else {
        alert('Thông tin đăng nhập không đúng.');
    }
});