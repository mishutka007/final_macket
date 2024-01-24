swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoHeight: true,
    spaceBetween: 16,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
  