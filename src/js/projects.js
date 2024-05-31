import Swiper from "swiper/bundle";

export let novoSwiper;

if (window.innerWidth > 650) {
    novoSwiper = new Swiper(".swiper", {
        freeMode: true,
        slidesPerView: 3,
        spaceBetween: 20,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

if (window.innerWidth <= 650) {
    novoSwiper = new Swiper(".swiper", {
        freeMode: {
            enabled: true,
            sticky: true,
        },
        slidesPerView: 1,
        spaceBetween: 10,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        direction: "vertical",
    });
}


