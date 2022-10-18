let hamburger = document.querySelector(".hamburger");
let mobileMenu = document.querySelector(".mobile-menu");
let cancel = document.querySelector(".cancel");
let body = document.querySelector("body");
let mobileLinks = document.querySelectorAll(".nav-mobile");
hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("show");
  body.classList.add("overflowHidden");
});
cancel.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  body.classList.remove("overflowHidden");
});

mobileLinks.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    body.classList.remove("overflowHidden");
  });
});
