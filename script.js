const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const cancel = document.querySelector(".cancel");
const body = document.querySelector("body");
const mobileLinks = document.querySelectorAll(".nav-mobile");
const modal = document.querySelector(".modal");
const modalInner = document.querySelector(".modal-inner");
const cancelsModal = document.querySelector(".cancels");
const works = document.querySelector("#Portfolio");
const width = window.innerWidth;
const isDesktop = width > 768;

const data = [
  {
    id: 0,
    name: "GTCO Annual Fest",
    mainDescription:
      "This is a responsive conference website for an annual food exhibition and sales event aimed at projecting the diverse angles of the food industry. ",
    description:
      "This is a responsive conference website for an annual food exhibition and sales event aimed at projecting the diverse angles of the food industry. The program's brief description featured chefs, and partners are made visible on the page. ",
    desktopDescription:
      "This is a responsive conference website for an annual food exhibition and sales event aimed at projecting the diverse angles of the food industry. The program's brief description featured chefs, and partners are made visible on the page. A few tweaks were implemented with JavaScript to load section differences on mobile and desktop",
    featuredImage: "./images/GTCOFOOD.png",
    desktopFeaturedImage: "./images/GTCOFOOD.png",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Git",
      "Ruby on rails",
      "Bootstraps",
    ],
    stack: ["Conference", "Front End Dev", 2022],
    mobileStack: ["Conference", "Front End Dev", 2022],
    linkToLiveVersion: "https://peteugwu.github.io/Food-Drink-Conference/",
    linkToSource: "https://github.com/PeteUgwu/Food-Drink-Conference",
  },
  {
    id: 1,
    name: "To Do list",
    mainDescription:
      "It is a Web App that serves as a tool to organize your day. It simply allows you to add lists of things you need to do, display these lists, and give you the option of deleting them singly or marking each or all as complete.",
    description:
      "It is a Web App that serves as a tool to organize your day. It simply allows you to add lists of things you need to do, display these lists, and give you the option of deleting them singly or marking each or all as complete. It also allows you to edit the displayed list and retain its position. The data passed during the above activities are preserved so as to be viewed and re-used when needed",
    desktopDescription:
      "It is a Web App that serves as a tool to organize your day. It simply allows you to add lists of things you need to do, display these lists, and give you the option of deleting them singly or marking each or all as complete. It also allows you to edit the displayed list and retain its position. The data passed during the above activities are preserved so as to be viewed and re-used when needed",
    featuredImage: "./images/todomobile.png",
    desktopFeaturedImage: "./images/tododesktop.png",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "GitHub",
      "Git",
      "Linters",
    ],
    stack: ["CALENDAR", "Front End Dev", 2022],
    mobileStack: ["SCHEDULE", "Front End Dev", 2022],
    linkToLiveVersion: "https://github.com/PeteUgwu/To-Do-list",
    linkToSource: "https://github.com/PeteUgwu/To-Do-list",
  },
  {
    id: 2,
    name: "Budget",
    mainDescription:
      "Budget app is a software app which allows users to track income, expenses, and savings, set financial goals, and monitor their progress towards those goals.",
    description:
      "Budget app is a software app which allows users to track income, expenses, and savings, set financial goals, and monitor their progress towards those goals. Budget apps can also offer features such as bill reminders, categorization of expenses, and analysis of spending habits.",
    desktopDescription:
      "Budget app is a software app which allows users to track income, expenses, and savings, set financial goals, and monitor their progress towards those goals. Budget apps can also offer features such as bill reminders, categorization of expenses, and analysis of spending habits.",
    featuredImage: "./images/budgetpal.png",
    desktopFeaturedImage: "./images/budgetpal.png",
    technologies: [
      "CSS3",
      "PostgreSQL",
      "Ruby on Rails",
      "Git",
      "GitHub",
      "RSpec",
    ],
    stack: ["ACCOUNTS", "Full Stack Dev", 2023],
    mobileStack: ["BUDGET", "Back End Dev", 2023],
    linkToLiveVersion: "https://github.com/PeteUgwu/Budget-app",
    linkToSource: "https://github.com/PeteUgwu/Budget-app",
  },
  {
    id: 3,
    name: "Bulletin",
    mainDescription:
      "Bulletin is a Web-App that displays and allow users to navigate through pages, and filter data for an individual Article.",
    description:
      "Bulletin is a Web-App that displays and allow users to navigate through pages, and filter data for an individual Article. Users can see each Articles' more details by clicking on `Click to View` on each Article cards.",
    desktopDescription:
      "Bulletin is a Web-App that displays and allow users to navigate through pages, and filter data for an individual Article. Users can see each Articles' more details by clicking on `Click to View` on each Article cards.",
    featuredImage: "./images/bulletinMobile.png",
    desktopFeaturedImage: "./images/bulletinDesktop.png",
    technologies: [
      "React JSX",
      "SCSS",
      "React",
      "GitHub",
      "Animations",
      "Git",
    ],
    stack: ["News", "Front End Dev", 2023],
    mobileStack: ["News", "Front End Dev", 2023],
    linkToLiveVersion: "https://github.com/PeteUgwu/bulletin",
    linkToSource: "https://github.com/PeteUgwu/bulletin",
  },
];

const openModal = ({
  name,
  description,
  desktopDescription,
  featuredImage,
  desktopFeaturedImage,
  technologies,
  stack,
  mobileStack,
  linkToLiveVersion,
  linkToSource,
}) => {
  let display = "";
  modal.classList.add("showModal");
  display += `
  <div>
  <h2 class="modal-h2">${name}</h2>
  <ul class="flex item-tag-modal item-tag">

    
    ${
      isDesktop
        ? `<li class="icon-tag"><a class="canopy" href="#">${stack[0]}</a></li>`
        : `<li class="icon-tag"><a class="canopy" href="#">${mobileStack[0]}</a></li>`
    }
    <li class="radio icon-tag"><img src="images/Counter.png" alt="counter" /></li>
    ${
      isDesktop
        ? `<li class="icon-tag"><a class="bend-yr bend" href="#">${stack[1]}</a></li>`
        : `<li class="icon-tag"><a class="canopy" href="#">${mobileStack[1]}</a></li>`
    }
    <li class=" radio icon-tag"><img src="images/Counter.png" alt="counter" /></li>
    ${
      isDesktop
        ? `<li class="icon-tag"><a class="bend-yr"href="#">${stack[2]}</a></li>`
        : `<li class="icon-tag"><a class="canopy" href="#">${mobileStack[2]}</a></li>`
    }
  </ul>
  <div class="image img-modal ">
    <img src=${isDesktop ? desktopFeaturedImage : featuredImage} alt="Project"/>
  </div>
  <div class="flex-modal">
    <p class="p p-modal">
     ${isDesktop ? desktopDescription : description}
    </p>
    
    <div class="langbutton langbutton-modal">
    <div class= "modal-btn">
      <button>${technologies[0]}</button>
      <button>${technologies[1]}</button>
      <button>${technologies[2]}</button>
      ${isDesktop ? `<button>${technologies[3]}</button>` : ""}
      ${isDesktop ? `<button>${technologies[4]}</button>` : ""}
      ${isDesktop ? `<button>${technologies[5]}</button>` : ""}
    </div>
      <hr class="modal-new">
      
      <div class="popup-buttons flex div">
      
      <a href=${linkToLiveVersion} target= "_blank" class="btn-modal btn">See Live <img src="./images/IconModal.png" alt="Live Icon " /></a>
        <a href=${linkToSource} target= "_blank" class="btn-modal btn">See Source <img src="./images/VectorModal.png" alt="Source Icon" /></a>
    </div>
    
    </div>
    </div>
</div>
</section>`;
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

const loadModal = (i) => {
  const singleData = data.find((item) => item.id === i);
  openModal(singleData);
};

cancelsModal.addEventListener("click", () => {
  modal.classList.remove("showModal");
});

const loadWorks = (data) => {
  let display = " ";
  data.forEach(
    (
      {
        name,
        mainDescription,
        featuredImage,
        desktopFeaturedImage,
        technologies,
        stack,
        mobileStack,
      },
      i
    ) => {
      display += `
      <div class="card-works works">
      <div class="image ">
        <img class="desktop-image" src= ${
          isDesktop ? desktopFeaturedImage : featuredImage
        } alt="Project"/>
      </div>

      <div class="card">
        <h2>${name}</h2>
        <ul class="flex item-tag">
          ${
            isDesktop
              ? `<li class="icon-tag"><a class="canopy" href="#">${stack[0]}</a></li>`
              : `<li class="icon-tag"><a class="canopy" href="#">${mobileStack[0]}</a></li>`
          }
          <li class="radio icon-tag"><img src="images/Counter.png" alt="counter" /></li>
          ${
            isDesktop
              ? `<li class="icon-tag"><a class="bend-yr bend" href="#">${stack[1]}</a></li>`
              : `<li class="icon-tag"><a class="canopy" href="#">${mobileStack[1]}</a></li>`
          }
          <li class=" radio icon-tag"><img src="images/Counter.png" alt="counter" /></li>
          ${
            isDesktop
              ? `<li class="icon-tag"><a class="bend-yr"href="#">${stack[2]}</a></li>`
              : `<li class="icon-tag"><a class="canopy" href="#">${mobileStack[2]}</a></li>`
          }
        </ul>

        <p class="p">
          ${mainDescription}
        </p>
        <div class="langbutton">
          <button>${technologies[2]}</button>
          <button>${technologies[1]}</button>
          <button>${technologies[0]}</button>
          ${isDesktop ? `<button>${technologies[3]}</button>` : ""}
        </div>
  
        <div class="div">
        <button type="submit" id="loadModal" value="${i}" onclick='loadModal(${i}) '  class="btn-modal btn">More Detail</button>
        </div>
        </div>
      </div> `;
    }
  );
  works.innerHTML = display;
};

window.addEventListener("DOMContentLoaded", () => {
  loadWorks(data);
  const emailData = window.localStorage.getItem("emailData");
  const messageData = window.localStorage.getItem("messageData");
  const nameData = window.localStorage.getItem("nameData");
  if (emailData) {
    const email = document.querySelector(".email-area");
    email.value = emailData;
  }
  if (messageData) {
    const message = document.querySelector(".text-area");
    message.value = messageData;
  }
  if (nameData) {
    const fullName = document.querySelector(".name-area");
    fullName.value = nameData;
  }

  const loadModalEle = document.querySelector("#loadModal");
  loadModalEle.addEventListener("click", () => {
    loadModal(loadModalEle.value);
  });
});

const form = document.querySelector("form");
const alertMsg = document.querySelector("small");

const email = document.querySelector(".email-area");
const message = document.querySelector(".text-area");
const fullName = document.querySelector(".name-area");
email.addEventListener("change", () => {
  window.localStorage.setItem("emailData", email.value);
});
message.addEventListener("change", () => {
  window.localStorage.setItem("messageData", message.value);
});
fullName.addEventListener("change", () => {
  window.localStorage.setItem("nameData", fullName.value);
});

form.addEventListener("submit", (event) => {
  const emailRegExp = /[A-Z]/;
  if (!emailRegExp.test(email.value)) {
    form.submit();
  } else {
    event.preventDefault();
    alertMsg.innerText = "Please Enter Your Email Only In Lower Case";
  }
});
