function headerweb() {
    return `    <div class="header" style="margin-bottom:0">
    </div>

    <nav class="navbar-expand-sm bg-dark navbar-dark sticky-top align-center">
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid text-light">
                <div class="navbar-left">
                    <a class="navbar-brand menu-item m-0">Home</a>
                    <a class="navbar-brand menu-item m-0">Máy Ảnh</a>
                    <a class="navbar-brand menu-item m-0">Khuyến Mãi</a>
                    <a class="navbar-brand menu-item m-0">Tin Tức</a>
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
        </nav>
    </nav>`;
}

function footerweb() {
    return ``
}

let containers = document.getElementsByClassName("headerweb");
for (let container of containers) {
    container.innerHTML = headerweb();
}