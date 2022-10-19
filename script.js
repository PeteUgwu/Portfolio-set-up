const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const cancel = document.querySelector(".cancel");
const body = document.querySelector("body");
const mobileLinks = document.querySelectorAll(".nav-mobile");
let modal = document.querySelector(".modal");
let modalInner = document.querySelector(".modal-inner");
let modalBtn = document.querySelectorAll(".btn-modal");
let cancelsModal = document.querySelector(".cancels");

const data = [
  {
    id: 0,
    name: "Tonic",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: "./images/Snap.png",
    technologies: ["html", "css", "javascript"],
    linkToLiveVersion: "https://peteugwu.github.io/Portfolio-set-up/",
    linkToSource: "https://github.com/PeteUgwu/Portfolio-set-up",
  },
  {
    id: 1,
    name: "Multi-Post Stories",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: "./images/Snap2.png",
    technologies: ["html", "css", "javascript"],
    linkToLiveVersion: "https://peteugwu.github.io/Portfolio-set-up/",
    linkToSource: "https://github.com/PeteUgwu/Portfolio-set-up",
  },
  {
    id: 2,
    name: "Facebook 360",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: "./images/Snapshoot1.png",
    technologies: ["html", "css", "javascript"],
    linkToLiveVersion: "https://peteugwu.github.io/Portfolio-set-up/",
    linkToSource: "https://github.com/PeteUgwu/Portfolio-set-up",
  },
  {
    id: 3,
    name: "Uber Navigation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: "./images/Snap4.png",
    technologies: ["html", "css", "javascript"],
    linkToLiveVersion: "https://peteugwu.github.io/Portfolio-set-up/",
    linkToSource: "https://github.com/PeteUgwu/Portfolio-set-up",
  },
];

const openModal = ({
  name,
  description,
  featuredImage,
  technologies,
  linkToLiveVersion,
  linkToSource,
}) => {
  let display = "";
  modal.classList.add("showModal");
  display += `
  <div>
  <h2>${name}</h2>
  <ul class="flex item-tag">
    <li class="icon-tag"><a class="canopy" href="#">CANOPY</a></li>
    <li class="radio icon-tag"><img src="images/Counter.png" alt="counter" /></li>
    <li class="icon-tag"><a class="bend-yr bend" href="#">Back End Dev</a></li>
    <li class=" radio icon-tag"><img src="images/Counter.png" alt="counter" /></li>
    <li class="icon-tag"><a class="bend-yr"href="#">2015</a></li>
  </ul>
  <div class="image ">
    <img src=${featuredImage} alt="Project"/>
  </div>
  <div class="card">
    <p class="p">
     ${description}
    </p>
    <div class="langbutton">
      <button>${technologies[0]}</button>
      <button>${technologies[1]}</button>
      <button>${technologies[2]}</button>
    </div>
    <div class="flex div">
    <a href=${linkToLiveVersion} target= "_blank" class="btn-modal btn">See Live <img src="./images/IconModal.png" alt="twitter" /></a>
      <a href=${linkToSource} target= "_blank" class="btn-modal btn">See Source <img src="./images/VectorModal.png" alt="twitter" /></a>
    </div>
    </div>
</div>`;
  modalInner.innerHTML = display;
};

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

modalBtn.forEach((btn, i) => {
  console.log(btn, "WHAT", i);

  btn.addEventListener("click", () => {
    const singleData = data.find((item) => item.id == i);
    openModal(singleData);
  });
});

cancelsModal.addEventListener("click", () => {
  modal.classList.remove("showModal");
});
