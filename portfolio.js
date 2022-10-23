if (window.innerWidth > 650) {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    freeMode: true,
    grabCursor: true,
    mousewheel: true,
  });
}

if (window.innerWidth <= 650) {
  let swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 10,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
