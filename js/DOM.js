function headerweb() {
    // Lấy thông tin người dùng từ Local Storage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const username = storedUser ? storedUser.username : "Đăng nhập";

    return `
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid text-light">
                <div class="navbar-left">
                    <div><a class="navbar-brand menu-item m-0" href="./home.html">Home</a></div>
                    <div class="dropdown">
                        <a class="navbar-brand menu-item m-0 menu-item-more" href=""><i class="fa-solid fa-chevron-down"></i> Máy Ảnh </a>
                        <ul class="menu-item-sub">
                            <li class="menu-item"><a href="./camera-DSLR.html">Máy Ảnh DSLR</a></li>
                            <li class="menu-item"><a href="./camera-Mirrorless.html">Máy Ảnh Mirrorless</a></li>
                            <li class="menu-item"><a href="./camera-Compact.html">Máy Ảnh Compact</a></li>
                            <li class="menu-item"><a href="./camera-Instax.html">Máy Ảnh Instax</a></li>
                            <li class="menu-item"><a href="./camera-Medium-Format.html">Máy Ảnh Medium Format</a></li>
                            <li class="menu-item"><a href="./camera-Film.html">Máy Ảnh Film</a></li>
                        </ul>
                    </div>
                    <div><a class="navbar-brand menu-item m-0" href="./promotion.html">Khuyến Mãi</a></div>
                    <div><a class="navbar-brand menu-item m-0" href="./news.html">Tin Tức</a></div>
                    <div><a class="navbar-brand menu-item m-0" href="./sitemap.html">Site Map</a></div>
                    <div><a class="navbar-brand menu-item m-0" href="./tvth.html">Liên hệ</a></div>
                </div>

                <div class="navbar-right col-4">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <a href="./login.html" class="text-light d-flex align-items-baseline m-0">
                        <i class="fa-solid fa-user"></i>
                        <p class="m-0 px-2">${username}</p>
                    </a>
                </div>
            </div>
        </nav>`;
}

let containers = document.getElementsByClassName("headerweb");
for (let container of containers) {
    container.innerHTML = headerweb();
}

// Thêm icon giỏ hàng vào đầu body
const iconCartDiv = document.createElement("div");
iconCartDiv.className = "icon_cart";
iconCartDiv.innerHTML = `
    <a href="./cart.html">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Giỏ hàng</p>
    </a>
    <div class="snowflakes" aria-hidden="true">
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
    </div>
`;

// Thêm iconCartDiv vào đầu body
document.body.insertBefore(iconCartDiv, document.body.firstChild);

// JavaScript gắn vào trang danh sách sản phẩm
document.querySelectorAll('.camera-item').forEach((item) => {
    // Thêm sự kiện click vào toàn bộ .camera-item và các phần tử con
    item.addEventListener('click', (event) => {
        // Ngăn chặn hành vi mặc định nếu là thẻ <a>
        if (event.target.tagName.toLowerCase() === 'a') {
            event.preventDefault();
        }

        // Lấy thông tin sản phẩm
        const product = {
            name: item.querySelector('.name-camera a') ? item.querySelector('.name-camera a').innerText : 'Không có',
            price: item.querySelector('.price-camera') ? item.querySelector('.price-camera').innerText : 'Không có',
            oldPrice: item.querySelector('.old-price-camera') ? item.querySelector('.old-price-camera').innerText : 'Không có',
            discount: item.querySelector('.price-difference') ? item.querySelector('.price-difference').innerText : 'Không có',
            gift: item.querySelector('.text-gift-camera') ? item.querySelector('.text-gift-camera').innerText : 'Không có',
            imageUrl: item.querySelector('img') ? item.querySelector('img').src : 'Không có'
        };

        // Lưu thông tin sản phẩm vào Local Storage
        localStorage.setItem('selectedProduct', JSON.stringify(product));

        // Chuyển đến trang chi tiết sản phẩm
        window.location.href = 'product-detail.html';
    });

    // Thêm sự kiện click vào thẻ <a> trong .img-camera-item
    const imgLink = item.querySelector('.img-camera-item a');
    if (imgLink) {
        imgLink.addEventListener('click', (event) => {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

            // Tạo lại đối tượng sản phẩm từ thông tin trong .camera-item
            const product = {
                name: item.querySelector('.name-camera a') ? item.querySelector('.name-camera a').innerText : 'Không có',
                price: item.querySelector('.price-camera') ? item.querySelector('.price-camera').innerText : 'Không có',
                oldPrice: item.querySelector('.old-price-camera') ? item.querySelector('.old-price-camera').innerText : 'Không có',
                discount: item.querySelector('.price-difference') ? item.querySelector('.price-difference').innerText : 'Không có',
                gift: item.querySelector('.text-gift-camera') ? item.querySelector('.text-gift-camera').innerText : 'Không có',
                imageUrl: item.querySelector('img') ? item.querySelector('img').src : 'Không có'
            };

            // Lưu thông tin sản phẩm vào Local Storage
            localStorage.setItem('selectedProduct', JSON.stringify(product));

            // Chuyển đến trang chi tiết sản phẩm
            window.location.href = 'product-detail.html';
        });
    }
});