$('.button_register').click(function() {
    $('.main-register').removeClass('active');
    $('.main-login').addClass('active');
});
$('.have_account').click(function() {
    $('.main-login').removeClass('active');
    $('.main-register').addClass('active');
});

// Hàm kiểm tra Username
function validateUsername() {
    const unameInput = $('#uname');
    const errorUname = $('#txt_uname');
    if (unameInput.val().trim() === '') {
        errorUname.text('Username không được bỏ trống');
        errorUname.css('display', 'inline');
        return false;
    } else {
        errorUname.css('display', 'none');
        return true;
    }
}

// Hàm kiểm tra Password
function validatePassword() {
    const passwordInput = $('#password');
    const errorPassword = $('#txt_password');
    const passwordValue = passwordInput.val();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordRegex.test(passwordValue)) {
        errorPassword.text('Có ít nhất 1 chữ hoa, 1 chữ thường, và 1 số.');
        errorPassword.css('display', 'inline');
        return false;
    } else {
        errorPassword.css('display', 'none');
        return true;
    }
}

// Hàm kiểm tra Password Authentication
function validatePasswordAuth() {
    const passwordInput = $('#password');
    const passAuthInput = $('#passauth');
    const errorPassauth = $('#txt_passauth');
    if (passAuthInput.val() !== passwordInput.val()) {
        errorPassauth.text('Password Authentication phải khớp với Password.');
        errorPassauth.css('display', 'inline');
        return false;
    } else {
        errorPassauth.css('display', 'none');
        return true;
    }
}

// Hàm kiểm tra Email
function validateEmail() {
    const emailInput = $('#email');
    const errorEmail = $('#txt_email');
    const emailValue = emailInput.val();
    if (!emailValue.includes('@')) {
        errorEmail.text('Email phải chứa ký tự @.');
        errorEmail.css('display', 'inline');
        return false;
    } else {
        errorEmail.css('display', 'none');
        return true;
    }
}

// Hàm kiểm tra Phone
function validatePhone() {
    const phoneInput = $('#phone');
    const errorPhone = $('#txt_phone');
    const phoneValue = phoneInput.val();
    const phoneRegex = /^\d{9,10}$/;
    if (!phoneRegex.test(phoneValue)) {
        errorPhone.text('Số điện thoại phải có 9 hoặc 10 chữ số.');
        errorPhone.css('display', 'inline');
        return false;
    } else {
        errorPhone.css('display', 'none');
        return true;
    }
}

// Gắn sự kiện focusout cho các ô nhập
$('#uname').focusout(validateUsername);
$('#password').focusout(validatePassword);
$('#passauth').focusout(validatePasswordAuth);
$('#email').focusout(validateEmail);
$('#phone').focusout(validatePhone);

// Sự kiện đăng ký
$('.button_register2').click(function() {
    const validUsername = validateUsername();
    const validPassword = validatePassword();
    const validPassauth = validatePasswordAuth();
    const validEmail = validateEmail();
    const validPhone = validatePhone();

    if (validUsername && validPassword && validPassauth && validEmail && validPhone) {
        const user = {
            username: $('#uname').val(),
            password: $('#password').val(),
            email: $('#email').val(),
            phone: $('#phone').val()
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