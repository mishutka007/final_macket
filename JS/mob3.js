document
  .querySelector(".contact__men__tel")
  .addEventListener("click", function () {
    document.querySelector(".aburg2").classList.toggle("open");
  });

document.querySelector("#obrsack3").addEventListener("click", function () {
  document.querySelector(".aburg2").classList.toggle("open");
});

document.querySelector(".test1890").addEventListener("click", function () {
  document.querySelector(".aburg2").classList.toggle("open");
});
document.querySelector(".button__call").addEventListener("click", function () {
  document.querySelector(".aburg2").classList.toggle("open");
});
const element2 = document.getElementById("telmask3");
const maskOptions2 = {
  mask: "+{7}(000)000-00-00",
};
const mask2 = IMask(element2, maskOptions2);










// const juim = document.querySelector(".test1890");
// document
//   .querySelector(".contact__men__tel")
//   .addEventListener("click", function () {
//     const els = document.querySelectorAll(".open");
//     if (els.length) {
//       for (const el of els) {
//         el && !el.classList.contains("test1890") && el.classList.toggle("open");
//       }
//     }
//     juim.classList.toggle("open");
//   });

// document.querySelector("#obrsack3").addEventListener("click", function () {
//   const els = document.querySelectorAll(".open");
//   if (els.length) {
//     for (const el of els) {
//       el && !el.classList.contains("test1890") && el.classList.toggle("open");
//     }
//   }
//   juim.classList.toggle("open");
// });


// const juimb = document.querySelector(".test1890");
// document
//   .querySelector("#nav__chat_tabletid")
//   .addEventListener("click", function () {
//     const els = document.querySelectorAll(".open");
//     if (els.length) {
//       for (const el of els) {
//         el && !el.classList.contains("test1890") && el.classList.toggle("open");
//       }
//     }
//     juimb.classList.toggle("open");
//   });