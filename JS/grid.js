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
const clickbutn = document.getElementById("strelkaniz1");
const clickbutn2 = document.getElementById("strelkaverh1");
const menu = document.querySelector("#menubr");
clickbutn.addEventListener("click", () => {
  clickbutn.style.display = "none";
  menu.style.overflow = "visible";
  menu.style.height = "fit-content";
  clickbutn2.style.display = "flex";
});
clickbutn2.addEventListener("click", () => {
  clickbutn2.style.display = "none";
  menu.style.overflow = "hidden";
  menu.style.height = "168px";
  clickbutn.style.display = "flex";
});
