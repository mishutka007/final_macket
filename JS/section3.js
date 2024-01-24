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
const clickbutn3 = document.getElementById("strelkaniz3");
const clickbutn4 = document.getElementById("strelkaverh3");
const menu3 = document.querySelector("#menubr3");
clickbutn3.addEventListener("click", () => {
  clickbutn3.style.display = "none";
  menu3.style.overflow = "visible";
  menu3.style.height = "fit-content";
  clickbutn4.style.display = "flex";
});
clickbutn4.addEventListener("click", () => {
  clickbutn4.style.display = "none";
  menu3.style.overflow = "hidden";
  menu3.style.height = "168px";
  clickbutn3.style.display = "flex";
});
