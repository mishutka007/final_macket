document.querySelector(".header__modal").addEventListener("click", function () {
  document.querySelector(".burger_burger1").classList.toggle("open");
});

document.querySelector("#burg1").addEventListener("click", function () {
  document.querySelector(".burger_burger1").classList.toggle("open");
});
document.querySelector(".test1888").addEventListener("click", function () {
  document.querySelector(".burger_burger1").classList.toggle("open");
});

document
  .querySelector(".contact__men__chat")
  .addEventListener("click", function () {
    document.querySelector(".aburg").classList.toggle("open");
  });

document.querySelector("#obrsack").addEventListener("click", function () {
  document.querySelector(".aburg").classList.toggle("open");
});

document.querySelector(".test1889").addEventListener("click", function () {
  document.querySelector(".aburg").classList.toggle("open");
});
document.querySelector(".button__chat").addEventListener("click", function () {
  document.querySelector(".aburg").classList.toggle("open");
});

const element = document.getElementById("telmask");
const maskOptions = {
  mask: "+{7}(000)000-00-00",
};
const mask = IMask(element, maskOptions);
