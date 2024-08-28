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

//them vao yeu cau khi dang ky
document.addEventListener('DOMContentLoaded', function() {
    const unameInput = document.getElementById('uname');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const passauthInput = document.getElementById('passauth');
    const registerButton = document.querySelector('.button_register2');


    function validateUname() {
        if (unameInput.value === '') {
            unameInput.style.border = '2px solid red';
            return false;
        } else {
            unameInput.style.border = '2px solid #1a73e8';
            return true;
        }
    }

    // Function to validate email
    function validateEmail() {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.style.border = '2px solid red';
            return false;
        } else {
            emailInput.style.border = '2px solid #1a73e8';
            return true;
        }
    }

    // Function to validate phone number
    function validatePhone() {
        const phonePattern = /^[0-9]*$/;
        if (phoneInput.value === '' || !phonePattern.test(phoneInput.value)) {
            phoneInput.style.border = '2px solid red';
            return false;
        } else {
            phoneInput.style.border = '2px solid #1a73e8';
            return true;
        }
    }

    // Function to validate password
    function validatePassword() {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordPattern.test(passwordInput.value)) {
            passwordInput.style.border = '2px solid red';
            return false;
        } else {
            passwordInput.style.border = '2px solid #1a73e8';
            return true;
        }
    }

    // Function to validate password authentication
    function validatePasswordAuth() {
        if (passauthInput.value === '' || passauthInput.value !== passwordInput.value) {
            passauthInput.style.border = '2px solid red';
            return false;
        } else {
            passauthInput.style.border = '2px solid #1a73e8';
            return true;
        }
    }

    // Click event for the register button
    registerButton.addEventListener('click', function(event) {
        const isUnameValid = validateUname();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isPasswordValid = validatePassword();
        const isPassAuthValid = validatePasswordAuth();

        // Prevent form submission if any validation fails
        if (!isEmailValid || !isPhoneValid || !isPasswordValid || !isPassAuthValid || !isUnameValid) {
            event.preventDefault(); // Prevent the form from submitting
        }
    });
});