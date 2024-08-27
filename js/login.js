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