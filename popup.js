const btnPopup1 = document.querySelector('.card-1-btn');
const btnPopup2 = document.querySelector('.card-2-btn');
const btnPopup3 = document.querySelector('.card-3-btn');
const btnPopup4 = document.querySelector('.card-4-btn');
const popupContainer = document.querySelector('.popup-container');
const overLayContainer = document.querySelector('.overlay-container');
const newElement = document.createElement('div');
popupContainer.append(newElement);
newElement.setAttribute('class', 'pop-container-child');
const anypop = document.querySelectorAll('.overlay-container');
const form = document.querySelector('form');
const emailInput = document.querySelector('.email');
const errorMessage = document.querySelector('.error-message');

const popupObj = [
  {
    name: 'Tonic',
    canopy_title: 'CANOPY',
    back_end: 'Back End Dev',
    year: '2015',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_image: './images/SnapshootPortfolio.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link_live: 'https://alphantihinduka.github.io/Alpha-Mobile-portifolio/',
    link_source: 'https://github.com/AlphaNtihinduka/Alpha-Mobile-portifolio',
    live_icon: './images/icon.png',
    source_icon: './images/vector.png',
  },

  {
    name: 'Multi-Post Stories',
    canopy_title: 'CANOPY',
    back_end: 'Back End Dev',
    year: '2015',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_image: './images/SnapshootCard2.png',
    technologies: ['HTML', 'Ruby on Rail', 'CSS', 'JavaScript'],
    link_live: 'https://alphantihinduka.github.io/Alpha-Mobile-portifolio/',
    link_source: 'https://github.com/AlphaNtihinduka/Alpha-Mobile-portifolio',
    live_icon: './images/icon.png',
    source_icon: './images/vector.png',
  },

  {
    name: 'Facebook 360',
    canopy_title: 'CANOPY',
    back_end: 'Back End Dev',
    year: '2015',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_image: './images/SnapshootCard3.png',
    technologies: ['HTML', 'Ruby on Rail', 'CSS', 'JavaScript'],
    link_live: 'https://alphantihinduka.github.io/Alpha-Mobile-portifolio/',
    link_source: 'https://github.com/AlphaNtihinduka/Alpha-Mobile-portifolio',
    live_icon: './images/icon.png',
    source_icon: './images/vector.png',
  },

  {
    name: 'Uber Navigation',
    canopy_title: 'CANOPY',
    back_end: 'Back End Dev',
    year: '2015',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_image: './images/SnapshootCard4.png',
    technologies: ['HTML', 'Ruby on Rail', 'CSS', 'JavaScript'],
    link_live: 'https://alphantihinduka.github.io/Alpha-Mobile-portifolio/',
    link_source: 'https://github.com/AlphaNtihinduka/Alpha-Mobile-portifolio',
    live_icon: './images/icon.png',
    source_icon: './images/vector.png',
  },
];

let objtracker;

btnPopup1.addEventListener('click', () => {
  objtracker = 0;

  let output = '';

  popupObj[objtracker].technologies.forEach((techContent) => {
    output += `
        <span> ${techContent} </span>
    `;
  });

  newElement.innerHTML = `
        <i class="fa fa-times" id="times"></i>
        <h2 class="popup_title">${popupObj[objtracker].name}</h2>
        <div class="prjct-info">
        <h6 class="canopy client-name">${popupObj[objtracker].canopy_title}</h6>
        <div class="dot-popup"></div>
        <h6 class="client-name">${popupObj[objtracker].back_end}</h6>
        <div class="dot-popup"></div>
        <h6 class="client-name">${popupObj[objtracker].year}</h6>
      </div>
        <div class="pop-img-container">
        <img src = ${popupObj[objtracker].featured_image} class="popup-img">
        </div>

       <div class="desc-link-container">
        <p class="popup_description">${popupObj[objtracker].description}</p>
            <div class="link-btn-container">
            <div class="skills-popup"> ${output} </div>
            <hr>
            <div class="pop-btn-container">
            <a href = ${popupObj[objtracker].link_live} target="__blank" class="pop-link"> <button type="button"> See live <span> <img src="${popupObj[objtracker].live_icon}" class="icon-img"></span></button> </a> 
            <a href = ${popupObj[objtracker].link_source} target="__blank" class="pop-link"> <button type="button"> See Source <span> <img src="${popupObj[objtracker].source_icon}"></span> </button> </a> 
            </div>
            </div>
        </div>
   `;
  overLayContainer.style.display = 'block';
  popupContainer.style.display = 'block';
});
anypop.forEach((n) => n.addEventListener('click', () => {
  overLayContainer.style.display = 'none';
}));

btnPopup2.addEventListener('click', () => {
  objtracker = 1;

  let output = '';

  popupObj[objtracker].technologies.forEach((techContent) => {
    output += `
          <span> ${techContent} </span>
      `;
  });

  newElement.innerHTML = `
          <i class="fa fa-times" id="times"></i>
          <h2 class="popup_title">${popupObj[objtracker].name}</h2>
          <div class="prjct-info">
          <h6 class="canopy client-name">${popupObj[objtracker].canopy_title}</h6>
          <div class="dot-popup"></div>
          <h6 class="client-name">${popupObj[objtracker].back_end}</h6>
          <div class="dot-popup"></div>
          <h6 class="client-name">${popupObj[objtracker].year}</h6>
        </div>
          <div class="pop-img-container">
          <img src = ${popupObj[objtracker].featured_image} class="popup-img">
          </div>
  
         <div class="desc-link-container">
          <p class="popup_description">${popupObj[objtracker].description}</p>
              <div class="link-btn-container">
              <div class="skills-popup"> ${output} </div>
              <hr>
              <div class="pop-btn-container">
              <a href = ${popupObj[objtracker].link_live} target="__blank" class="pop-link"> <button type="button"> See live <span> <img src="${popupObj[objtracker].live_icon}" class="icon-img"></span></button> </a> 
              <a href = ${popupObj[objtracker].link_source} target="__blank" class="pop-link"> <button type="button"> See Source <span> <img src="${popupObj[objtracker].source_icon}"></span> </button> </a> 
              </div>
              </div>
          </div>
     `;
  overLayContainer.style.display = 'block';
  popupContainer.style.display = 'block';
});

btnPopup3.addEventListener('click', () => {
  objtracker = 2;

  let output = '';

  popupObj[objtracker].technologies.forEach((techContent) => {
    output += `
          <span> ${techContent} </span>
      `;
  });

  newElement.innerHTML = `
          <i class="fa fa-times" id="times"></i>
          <h2 class="popup_title">${popupObj[objtracker].name}</h2>
          <div class="prjct-info">
          <h6 class="canopy client-name">${popupObj[objtracker].canopy_title}</h6>
          <div class="dot-popup"></div>
          <h6 class="client-name">${popupObj[objtracker].back_end}</h6>
          <div class="dot-popup"></div>
          <h6 class="client-name">${popupObj[objtracker].year}</h6>
        </div>
          <div class="pop-img-container">
          <img src = ${popupObj[objtracker].featured_image} class="popup-img">
          </div>
  
         <div class="desc-link-container">
          <p class="popup_description">${popupObj[objtracker].description}</p>
              <div class="link-btn-container">
              <div class="skills-popup"> ${output} </div>
              <hr>
              <div class="pop-btn-container">
              <a href = ${popupObj[objtracker].link_live} target="__blank" class="pop-link"> <button type="button"> See live <span> <img src="${popupObj[objtracker].live_icon}" class="icon-img"></span></button> </a> 
              <a href = ${popupObj[objtracker].link_source} target="__blank" class="pop-link"> <button type="button"> See Source <span> <img src="${popupObj[objtracker].source_icon}"></span> </button> </a> 
              </div>
              </div>
          </div>
     `;
  overLayContainer.style.display = 'block';
  popupContainer.style.display = 'block';
});

btnPopup4.addEventListener('click', () => {
  objtracker = 3;

  let output = '';

  popupObj[objtracker].technologies.forEach((techContent) => {
    output += `
          <span> ${techContent} </span>
      `;
  });

  newElement.innerHTML = `
          <i class="fa fa-times" id="times"></i>
          <h2 class="popup_title">${popupObj[objtracker].name}</h2>
          <div class="prjct-info">
          <h6 class="canopy client-name">${popupObj[objtracker].canopy_title}</h6>
          <div class="dot-popup"></div>
          <h6 class="client-name">${popupObj[objtracker].back_end}</h6>
          <div class="dot-popup"></div>
          <h6 class="client-name">${popupObj[objtracker].year}</h6>
        </div>
          <div class="pop-img-container">
          <img src = ${popupObj[objtracker].featured_image} class="popup-img">
          </div>
  
         <div class="desc-link-container">
          <p class="popup_description">${popupObj[objtracker].description}</p>
              <div class="link-btn-container">
              <div class="skills-popup"> ${output} </div>
              <hr>
              <div class="pop-btn-container">
              <a href = ${popupObj[objtracker].link_live} target="__blank" class="pop-link"> <button type="button"> See live <span> <img src="${popupObj[objtracker].live_icon}" class="icon-img"></span></button> </a> 
              <a href = ${popupObj[objtracker].link_source} target="__blank" class="pop-link"> <button type="button"> See Source <span> <img src="${popupObj[objtracker].source_icon}"></span> </button> </a> 
              </div>
              </div>
          </div>
     `;
  overLayContainer.style.display = 'block';
  popupContainer.style.display = 'block';
});

const validEmail = /^[a-z@.0-9-_]*$/;
form.addEventListener('submit', (e) => {
  if (emailInput.value.trim().match(validEmail)) {
    errorMessage.style.display = 'none';
  } else {
    e.preventDefault();
    errorMessage.style.display = 'flex';
  }
});
