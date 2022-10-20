const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const cancel = document.querySelector('.cancel');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('.nav-mobile');
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal-inner');
const modalBtn = document.querySelectorAll('.btn-modal');
const cancelsModal = document.querySelector('.cancels');
const width = window.innerWidth;
const isDesktop = width > 768;

const data = [
  {
    id: 0,
    name: 'Tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/Snapshoot1.png',
    desktopFeaturedImage: './images/Snap.png',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    linkToLiveVersion: 'https://peteugwu.github.io/Portfolio-set-up/',
    linkToSource: 'https://github.com/PeteUgwu/Portfolio-set-up',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/Snapshoot2.png',
    desktopFeaturedImage: './images/Snap2.png',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    linkToLiveVersion: 'https://peteugwu.github.io/Portfolio-set-up/',
    linkToSource: 'https://github.com/PeteUgwu/Portfolio-set-up',
  },
  {
    id: 2,
    name: 'Facebook 360',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/Snapshoot3.png',
    desktopFeaturedImage: './images/Snap3.png',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    linkToLiveVersion: 'https://peteugwu.github.io/Portfolio-set-up/',
    linkToSource: 'https://github.com/PeteUgwu/Portfolio-set-up',
  },
  {
    id: 3,
    name: 'Uber Navigation',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/Snapshoot4.png',
    desktopFeaturedImage: './images/Snap4.png',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    linkToLiveVersion: 'https://peteugwu.github.io/Portfolio-set-up/',
    linkToSource: 'https://github.com/PeteUgwu/Portfolio-set-up',
  },
];

const openModal = ({
  name,
  description,
  desktopDescription,
  featuredImage,
  desktopFeaturedImage,
  technologies,
  linkToLiveVersion,
  linkToSource,
}) => {
  let display = '';
  modal.classList.add('showModal');
  display += `
  <div>
  <h2 class="modal-h2">${name}</h2>
  <ul class="flex item-tag-modal item-tag">
    <li class="icon-tag"><a class="canopy" href="#">CANOPY</a></li>
    <li class="radio icon-tag"><img src="images/Counter.png" alt="counter" /></li>
    <li class="icon-tag"><a class="bend-yr bend" href="#">Back End Dev</a></li>
    <li class=" radio icon-tag"><img src="images/Counter.png" alt="counter" /></li>
    <li class="icon-tag"><a class="bend-yr"href="#">2015</a></li>
  </ul>
  <div class="image img-modal ">
    <img src=${isDesktop ? desktopFeaturedImage : featuredImage} alt="Project"/>
  </div>
  <div class="flex-modal">
    <p class="p p-modal">
     ${isDesktop ? desktopDescription : description}
    </p>
    
    <div class="langbutton langbutton-modal">
      <button>${technologies[0]}</button>
      <button>${technologies[1]}</button>
      <button>${technologies[2]}</button>
      ${isDesktop ? `<button>${technologies[3]}</button>` : ''}
      ${isDesktop ? `<button>${technologies[4]}</button>` : ''}
      ${isDesktop ? `<button>${technologies[5]}</button>` : ''}
      
      <div class="popup-buttons flex div">
      <hr class="modal-new">
      <a href=${linkToLiveVersion} target= "_blank" class="btn-modal btn">See Live <img src="./images/IconModal.png" alt="Live Icon " /></a>
        <a href=${linkToSource} target= "_blank" class="btn-modal btn">See Source <img src="./images/VectorModal.png" alt="Source Icon" /></a>
    </div>
    
    </div>
    </div>
</div>`;
  modalInner.innerHTML = display;
};

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('show');
  body.classList.add('overflowHidden');
});
cancel.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
  body.classList.remove('overflowHidden');
});

mobileLinks.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    body.classList.remove('overflowHidden');
  });
});

modalBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const singleData = data.find((item) => item.id === i);
    openModal(singleData);
  });
});

cancelsModal.addEventListener('click', () => {
  modal.classList.remove('showModal');
});
