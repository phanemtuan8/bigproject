var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$('.responsive').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5
});



$('.responsive-table').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5
});