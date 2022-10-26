const openNav = document.querySelector(".openbtn");
const closeNav = document.querySelector(".closebtn");
const mobileLinks = document.querySelectorAll(".mobile-nav");

openNav.addEventListener("click", () => {
  document.getElementById("menu-list").style.width = "250px";
});
closeNav.addEventListener("click", () => {
  document.getElementById("menu-list").style.width = "0";
});

mobileLinks.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("menu-list").style.width = "0";
  });
});
