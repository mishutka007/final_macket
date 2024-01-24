document.querySelector("#deployniz1").addEventListener("click", () => {
  document.querySelector(".base__text__3").style.display = "inline";
  document.querySelector(".base__text__4").style.display = "inline";
  document.querySelector("#deployverh2").style.display = "flex";
  document.querySelector("#deployniz1").style.display = "none";
});
document.querySelector("#deployverh2").addEventListener("click", () => {
  document.querySelector(".base__text__3").style.removeProperty("display");
  document.querySelector(".base__text__4").style.removeProperty("display");
  document.querySelector("#deployverh2").style.display = "none";
  document.querySelector("#deployniz1").style.display = "flex";
});
