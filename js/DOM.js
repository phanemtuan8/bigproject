function headerweb() {
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
                </div>

                <div class="navbar-right col-4">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <a href="./login.html" class="text-light d-flex align-items-baseline m-0">
                        <i class="fa-solid fa-user"></i>
                        <p class="m-0 px-2">Đăng nhập</p>
                    </a>
                </div>
            </div>
        </nav>`;
}

function footerweb() {
    return ``
    $
}

let containers = document.getElementsByClassName("headerweb");
for (let container of containers) {
    container.innerHTML = headerweb();
}